-- Executed in the production Supabase SQL Editor on 2026-11-14.
-- No credentials or persistent test accounts: all fixtures are rolled back.
-- Run as the project database administrator.
begin;
insert into auth.users (id, aud, role) values
 ('70fa5941-dab2-4e2f-b12f-9a4c8ff15001','authenticated','authenticated'),
 ('70fa5941-dab2-4e2f-b12f-9a4c8ff15002','authenticated','authenticated');
insert into public.user_cookly_data (user_id,preferences) values
 ('70fa5941-dab2-4e2f-b12f-9a4c8ff15002','{"name":"Other test account"}');
set local role authenticated;
select set_config('request.jwt.claim.sub','70fa5941-dab2-4e2f-b12f-9a4c8ff15001',true);
do $$ declare affected integer; begin
 insert into public.user_cookly_data (user_id,preferences,saved_recipe_ids,meal_box) values
 ('70fa5941-dab2-4e2f-b12f-9a4c8ff15001','{"name":"Cookly test","username":"cookly_test","completed":true}','["butter-steak"]','[{"id":"butter-steak","servings":2}]');
 if (select count(*) from public.user_cookly_data) <> 1 then raise exception 'RLS read isolation failed'; end if;
 update public.user_cookly_data set preferences=preferences || '{"name":"Updated test"}' where user_id=auth.uid();
 get diagnostics affected = row_count;
 if affected <> 1 then raise exception 'Own profile update failed'; end if;
 if (select preferences->>'name' from public.user_cookly_data where user_id=auth.uid()) <> 'Updated test' then raise exception 'Profile persistence failed'; end if;
 update public.user_cookly_data set preferences='{}' where user_id='70fa5941-dab2-4e2f-b12f-9a4c8ff15002';
 get diagnostics affected = row_count;
 if affected <> 0 then raise exception 'Cross-account update allowed'; end if;
 begin
  insert into public.user_cookly_data (user_id) values ('70fa5941-dab2-4e2f-b12f-9a4c8ff15002');
  raise exception 'Cross-account insert allowed';
 exception when insufficient_privilege then null;
 end;
end $$;
reset role;
rollback;
select 'PASS: own profile/cart/saved data insert and profile update; other-account reads, updates and inserts blocked; all test rows rolled back' as result;
