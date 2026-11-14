-- Run after supabase/account-deletion.sql, as postgres in the SQL Editor.
-- Entirely temporary fixtures. Does not delete an existing user's account.
begin;
insert into auth.users(id,aud,role) values
 ('70fa5941-dab2-4e2f-b12f-9a4c8ff15001','authenticated','authenticated'),
 ('70fa5941-dab2-4e2f-b12f-9a4c8ff15002','authenticated','authenticated');
insert into public.user_cookly_data(user_id,preferences,saved_recipe_ids,meal_box,meal_history) values
 ('70fa5941-dab2-4e2f-b12f-9a4c8ff15001','{"name":"Deletion test","completed":true}','["butter-steak"]','[{"id":"butter-steak","servings":2}]','{"butter-steak":{"stars":5}}'),
 ('70fa5941-dab2-4e2f-b12f-9a4c8ff15002','{"name":"Keep other account"}','[]','[]','{}');
set local role anon;
do $$ begin
 begin perform public.cookly_clear_my_data(); raise exception 'Anonymous data deletion allowed'; exception when insufficient_privilege then null; end;
 begin perform public.cookly_delete_my_account(); raise exception 'Anonymous account deletion allowed'; exception when insufficient_privilege then null; end;
end $$;
reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub','70fa5941-dab2-4e2f-b12f-9a4c8ff15001',true);
select public.cookly_clear_my_data();
do $$ begin
 if not exists(select 1 from public.user_cookly_data where user_id=auth.uid() and preferences='{}'::jsonb and saved_recipe_ids='[]'::jsonb and meal_box='[]'::jsonb and meal_history='{}'::jsonb) then raise exception 'Data not cleared'; end if;
end $$;
reset role;
do $$ begin
 if not exists(select 1 from auth.users where id='70fa5941-dab2-4e2f-b12f-9a4c8ff15001') then raise exception 'Data-only deletion removed login'; end if;
 if not exists(select 1 from public.user_cookly_data where user_id='70fa5941-dab2-4e2f-b12f-9a4c8ff15002' and preferences->>'name'='Keep other account') then raise exception 'Other account modified'; end if;
end $$;
set local role authenticated;
select public.cookly_delete_my_account();
do $$ begin
 begin perform public.cookly_clear_my_data(); raise exception 'Deleted identity accepted'; exception when insufficient_privilege then null; end;
end $$;
reset role;
do $$ begin
 if exists(select 1 from auth.users where id='70fa5941-dab2-4e2f-b12f-9a4c8ff15001') or exists(select 1 from public.user_cookly_data where user_id='70fa5941-dab2-4e2f-b12f-9a4c8ff15001') then raise exception 'Account or cascade data remains'; end if;
 if not exists(select 1 from auth.users where id='70fa5941-dab2-4e2f-b12f-9a4c8ff15002') then raise exception 'Other identity deleted'; end if;
end $$;
rollback;
select 'PASS: data cleared with login kept; account identity and data removed; anonymous and deleted-identity calls blocked; other account unchanged; fixtures rolled back' as result;
