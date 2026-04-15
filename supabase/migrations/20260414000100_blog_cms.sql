-- Blog CMS schema + policies

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  slug text not null default '',
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  excerpt text,
  cover_image_url text,
  content_document jsonb not null default '{}'::jsonb,
  content_html text not null default ''
);

create unique index if not exists blog_posts_slug_unique on public.blog_posts (slug) where slug <> '';
create index if not exists blog_posts_published_at_idx on public.blog_posts (published_at desc);
create index if not exists blog_posts_status_idx on public.blog_posts (status);

create table if not exists public.blog_post_images (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  post_id uuid not null references public.blog_posts (id) on delete cascade,
  storage_path text not null,
  public_url text not null,
  alt text,
  sort_order integer not null default 0
);

create index if not exists blog_post_images_post_id_idx on public.blog_post_images (post_id);
create index if not exists blog_post_images_sort_order_idx on public.blog_post_images (post_id, sort_order);

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

-- updated_at trigger helper
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
before update on public.blog_posts
for each row execute procedure public.set_updated_at();

-- RLS
alter table public.blog_posts enable row level security;
alter table public.blog_post_images enable row level security;
alter table public.admin_users enable row level security;

-- Public can read published posts (RLS is the access gate for anon read client)
drop policy if exists "public read published posts" on public.blog_posts;
create policy "public read published posts"
on public.blog_posts
for select
to anon, authenticated
using (status = 'published' and published_at is not null);

drop policy if exists "public read images for published posts" on public.blog_post_images;
create policy "public read images for published posts"
on public.blog_post_images
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.blog_posts p
    where p.id = blog_post_images.post_id
      and p.status = 'published'
      and p.published_at is not null
  )
);

-- Admin allowlist table readable by authenticated users (so app can determine admin status)
drop policy if exists "authenticated can read admin allowlist" on public.admin_users;
create policy "authenticated can read admin allowlist"
on public.admin_users
for select
to authenticated
using (true);

-- Only admins can mutate blog data
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  );
$$;

drop policy if exists "admins manage blog posts" on public.blog_posts;
create policy "admins manage blog posts"
on public.blog_posts
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "admins manage blog images" on public.blog_post_images;
create policy "admins manage blog images"
on public.blog_post_images
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- Storage bucket for blog images
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

-- Allow public read of objects in blog-images bucket
drop policy if exists "public read blog images" on storage.objects;
create policy "public read blog images"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'blog-images');

-- Only admins can manage objects in blog-images bucket
drop policy if exists "admins manage blog images objects" on storage.objects;
create policy "admins manage blog images objects"
on storage.objects
for all
to authenticated
using (bucket_id = 'blog-images' and public.is_admin())
with check (bucket_id = 'blog-images' and public.is_admin());

