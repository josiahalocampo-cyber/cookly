create table if not exists public.user_cookly_data (
  user_id uuid primary key references auth.users (id) on delete cascade,
  preferences jsonb not null default '{}'::jsonb,
  saved_recipe_ids jsonb not null default '[]'::jsonb,
  meal_box jsonb not null default '[]'::jsonb,
  meal_history jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_cookly_data enable row level security;

revoke all on public.user_cookly_data from anon, authenticated;
grant select, insert, update on public.user_cookly_data to authenticated;

drop policy if exists "Users can read their own Cookly data"
  on public.user_cookly_data;
create policy "Users can read their own Cookly data"
  on public.user_cookly_data
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own Cookly data"
  on public.user_cookly_data;
create policy "Users can create their own Cookly data"
  on public.user_cookly_data
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own Cookly data"
  on public.user_cookly_data;
create policy "Users can update their own Cookly data"
  on public.user_cookly_data
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
