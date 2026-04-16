-- Newsletter leads: anonymous subscribe, admin-only read

create table if not exists public.newsletter_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  source text
);

create unique index if not exists newsletter_leads_email_lower_unique
  on public.newsletter_leads (lower(trim(email)));

create index if not exists newsletter_leads_created_at_idx
  on public.newsletter_leads (created_at desc);

alter table public.newsletter_leads enable row level security;

-- Anyone may submit an email that passes basic shape checks (app normalizes to lower(trim)).
drop policy if exists "public insert newsletter leads" on public.newsletter_leads;
create policy "public insert newsletter leads"
on public.newsletter_leads
for insert
to anon, authenticated
with check (
  length(trim(email)) between 3 and 254
  and trim(email) ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  and (source is null or length(source) <= 64)
);

drop policy if exists "admins read newsletter leads" on public.newsletter_leads;
create policy "admins read newsletter leads"
on public.newsletter_leads
for select
to authenticated
using (public.is_admin());
