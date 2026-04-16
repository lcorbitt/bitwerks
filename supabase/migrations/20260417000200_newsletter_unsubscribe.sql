-- Newsletter unsubscribe (token-based, no auth) + opaque token per lead

alter table public.newsletter_leads add column if not exists unsubscribed_at timestamptz;
alter table public.newsletter_leads add column if not exists unsubscribe_token uuid;

update public.newsletter_leads
set unsubscribe_token = gen_random_uuid()
where unsubscribe_token is null;

alter table public.newsletter_leads alter column unsubscribe_token set default gen_random_uuid();
alter table public.newsletter_leads alter column unsubscribe_token set not null;

create unique index if not exists newsletter_leads_unsubscribe_token_unique
  on public.newsletter_leads (unsubscribe_token);

create index if not exists newsletter_leads_active_idx
  on public.newsletter_leads (created_at desc)
  where unsubscribed_at is null;

-- One-click style unsubscribe: verifies token server-side in Postgres (no service role required).

create or replace function public.newsletter_lead_unsubscribe_by_token(p_token uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.newsletter_leads
  set unsubscribed_at = coalesce(unsubscribed_at, now())
  where unsubscribe_token = p_token;
end;
$$;

revoke all on function public.newsletter_lead_unsubscribe_by_token(uuid) from public;
grant execute on function public.newsletter_lead_unsubscribe_by_token(uuid) to anon, authenticated;
