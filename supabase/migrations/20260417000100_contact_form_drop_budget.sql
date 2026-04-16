alter table public.contact_form_submissions drop constraint if exists contact_form_submissions_budget_check;
alter table public.contact_form_submissions drop column if exists budget;
