-- Recipients for insight publish emails: active subscribers only (not unsubscribed).

create or replace function public.newsletter_leads_for_insight_broadcast()
returns table (email text, unsubscribe_token uuid)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'not authorized' using errcode = '42501';
  end if;

  return query
  select nl.email, nl.unsubscribe_token
  from public.newsletter_leads nl
  where nl.unsubscribed_at is null
    and length(trim(nl.email)) >= 3;
end;
$$;

revoke all on function public.newsletter_leads_for_insight_broadcast() from public;
grant execute on function public.newsletter_leads_for_insight_broadcast() to authenticated;
