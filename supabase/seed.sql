-- Local dev: one admin account for `/admin` (blog CMS allowlist).
-- Runs after migrations on `supabase db reset` and on first `supabase start`.
--
-- Sign-in:
--   Email:    admin@dev.local
--   Password: devpassword

do $seed$
declare
  dev_admin_id uuid := 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'::uuid;
  dev_email text := 'admin@dev.local';
  encrypted_pw text := crypt('devpassword', gen_salt('bf'));
begin
  if exists (select 1 from auth.users where id = dev_admin_id) then
    return;
  end if;

  insert into auth.users (
    id,
    instance_id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
  ) values (
    dev_admin_id,
    '00000000-0000-0000-0000-000000000000',
    'authenticated',
    'authenticated',
    dev_email,
    encrypted_pw,
    now(),
    now(),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{}',
    now(),
    now(),
    '',
    '',
    '',
    ''
  );

  insert into auth.identities (
    id,
    user_id,
    provider_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at
  ) values (
    gen_random_uuid(),
    dev_admin_id,
    dev_admin_id::text,
    jsonb_build_object('sub', dev_admin_id::text, 'email', dev_email),
    'email',
    now(),
    now(),
    now()
  );
end
$seed$;

insert into public.admin_users (user_id)
values ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'::uuid)
on conflict (user_id) do nothing;
