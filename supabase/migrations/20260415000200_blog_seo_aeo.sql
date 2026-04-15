-- SEO / AEO fields for blog posts (admin-managed; surfaced on public posts + JSON-LD)

alter table public.blog_posts add column if not exists meta_title text;
alter table public.blog_posts add column if not exists meta_description text;
alter table public.blog_posts add column if not exists canonical_url text;
alter table public.blog_posts add column if not exists og_image_url text;
alter table public.blog_posts add column if not exists seo_keywords text[] not null default '{}'::text[];
alter table public.blog_posts add column if not exists tags text[] not null default '{}'::text[];
alter table public.blog_posts add column if not exists faq_schema jsonb not null default '[]'::jsonb;
