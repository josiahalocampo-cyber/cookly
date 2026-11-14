-- Self-service deletion. No user ID parameter and no browser admin key.
begin;
create or replace function public.cookly_clear_my_data()
returns void language plpgsql security definer set search_path = '' as $$
declare caller uuid := auth.uid();
begin
  if caller is null or not exists (select 1 from auth.users where id = caller) then
    raise exception 'Sign in again before deleting data.' using errcode = '42501';
  end if;
  insert into public.user_cookly_data (user_id, preferences, saved_recipe_ids, meal_box, meal_history, updated_at)
  values (caller, '{}'::jsonb, '[]'::jsonb, '[]'::jsonb, '{}'::jsonb, clock_timestamp())
  on conflict (user_id) do update set preferences = '{}'::jsonb,
    saved_recipe_ids = '[]'::jsonb, meal_box = '[]'::jsonb,
    meal_history = '{}'::jsonb, updated_at = clock_timestamp();
end;
$$;
create or replace function public.cookly_delete_my_account()
returns void language plpgsql security definer set search_path = '' as $$
declare caller uuid := auth.uid();
begin
  if caller is null then
    raise exception 'Sign in again before deleting your account.' using errcode = '42501';
  end if;
  delete from auth.users where id = caller;
  if not found then
    raise exception 'Account not found. Sign in again.' using errcode = '42501';
  end if;
end;
$$;
revoke all on function public.cookly_clear_my_data() from public, anon;
revoke all on function public.cookly_delete_my_account() from public, anon;
grant execute on function public.cookly_clear_my_data() to authenticated;
grant execute on function public.cookly_delete_my_account() to authenticated;
commit;
notify pgrst, 'reload schema';
