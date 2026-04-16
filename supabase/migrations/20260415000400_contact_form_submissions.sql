-- Contact form: anonymous submit, admin-only read

create table if not exists public.contact_form_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  project_type text not null,
  project_scope text not null,
  timeline text not null,
  budget text not null,
  message text not null,
  constraint contact_form_submissions_name_len check (length(trim(name)) between 2 and 200),
  constraint contact_form_submissions_email_len check (length(trim(email)) between 3 and 254),
  constraint contact_form_submissions_email_shape check (
    trim(email) ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  ),
  constraint contact_form_submissions_company_len check (company is null or length(trim(company)) <= 200),
  constraint contact_form_submissions_project_type_check check (
    project_type in ('website', 'software', 'white-label')
  ),
  constraint contact_form_submissions_project_scope_check check (
    project_scope in ('new', 'existing', 'update')
  ),
  constraint contact_form_submissions_timeline_check check (
    timeline in ('asap', '1-3months', '3-6months', '6months+', 'flexible')
  ),
  constraint contact_form_submissions_budget_check check (
    budget in ('under-1k', '1k-5k', '5k-10k', '10k+', 'discuss')
  ),
  constraint contact_form_submissions_message_len check (length(trim(message)) between 1 and 8000)
);

create index if not exists contact_form_submissions_created_at_idx
  on public.contact_form_submissions (created_at desc);

alter table public.contact_form_submissions enable row level security;

drop policy if exists "public insert contact submissions" on public.contact_form_submissions;
create policy "public insert contact submissions"
on public.contact_form_submissions
for insert
to anon, authenticated
with check (true);

drop policy if exists "admins read contact submissions" on public.contact_form_submissions;
create policy "admins read contact submissions"
on public.contact_form_submissions
for select
to authenticated
using (public.is_admin());
