-- Allow server/anon to check duplicate newsletter emails without granting SELECT on the table.

create or replace function public.newsletter_lead_exists(p_email text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.newsletter_leads
    where lower(trim(email)) = lower(trim(p_email))
    limit 1
  );
$$;

revoke all on function public.newsletter_lead_exists(text) from public;
grant execute on function public.newsletter_lead_exists(text) to anon, authenticated;
