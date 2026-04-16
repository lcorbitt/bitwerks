# Supabase Blog CMS setup

## 1) Environment variables

Set these in `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://<project-ref>.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="<anon-key>"
```

## 2) Run migrations

This repo includes SQL migrations under `supabase/migrations/`.

- Apply `supabase/migrations/20260414000100_blog_cms.sql` to your Supabase project (SQL editor or Supabase CLI).

It creates:
- `public.blog_posts`
- `public.blog_post_images`
- `public.admin_users`
- storage bucket `blog-images` (public read)
- RLS policies for public reads + admin-only mutations

## 3) Create an admin user

1. Create/sign-in a user in Supabase Auth.
2. Insert their `auth.users.id` into `public.admin_users`:

```sql
insert into public.admin_users (user_id)
values ('00000000-0000-0000-0000-000000000000');
```

## 4) Use the app

- Public blog:
  - `GET /insights` (published posts only; cached via `BLOG_PUBLIC_CACHE_TAG`)
  - `GET /insights/[slug]`
- Admin:
  - `GET /admin` (Navbar auto-hides on `/admin/*`)
  - Sign in with email/password, then manage drafts, publish, and upload images.

## Notes

- **Public reads do not use cookies**: public pages use the anon client (`src/lib/supabase/public-read-client.ts`) so they stay cacheable and don’t become forced-dynamic.
- **Admin uses SSR auth cookies**: `src/lib/supabase/server.ts` is used for `/admin` access checks and server actions.

