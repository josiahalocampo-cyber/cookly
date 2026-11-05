# Cookly

Cookly is a static recipe app served from `dist/`. Cloudflare Pages hosts the
site, its Pages Function provides the public Supabase client configuration,
and Supabase Auth and Postgres sync each signed-in user's preferences, saved
recipes, meal box, and cooking journal.

## Set up Supabase

1. Create a Supabase project. Singapore is a good region for users in the
   Philippines. Keep the database password private.
2. In **Project Settings → API**, copy the project URL and the **publishable**
   (or legacy `anon`) key. Never use a `service_role` or secret key in this app.
3. In **SQL Editor**, run [`supabase/schema.sql`](./supabase/schema.sql).
4. In **Authentication → URL Configuration**, set the Site URL to the
   Cloudflare Pages URL once the project has been created. Add that same URL
   under Redirect URLs.

The table has row-level security enabled. Each account can read and change
only its own row. Delivery addresses and demo checkout purchases are not synced.

## Set up Cloudflare Pages

1. In Cloudflare, create a **Workers & Pages → Pages** project and connect the
   public `josiahalocampo-cyber/cookly` GitHub repository.
2. Use the `main` branch, no framework preset, no build command, and `dist` as
   the output directory. Leave the root directory at the repository root so
   Cloudflare also detects `functions/api/config.js`.
3. Under the Pages project **Settings → Variables and Secrets**, add these
   variables for both Production and Preview:
   - `SUPABASE_URL` — the Supabase project URL.
   - `SUPABASE_ANON_KEY` — the Supabase publishable/anon key.
4. Redeploy after adding the variables. Open the deployed site and go to
   **Profile → Cloud sync** to create an account or sign in.
5. Add the final Cloudflare Pages URL to Supabase's Site URL and Redirect URLs.

The Supabase publishable/anon key is intended for browser use; access is
restricted by the database's row-level security policies. Do not add a
service-role key, database password, or Cloudflare API token to browser code or
the Git repository.

## Local development

GitHub Pages remains available as a static fallback. To run the Supabase
function locally, use Wrangler Pages dev with `dist` as the output directory
and provide `SUPABASE_URL` and `SUPABASE_ANON_KEY` as local Wrangler variables.
Keep local secrets in the ignored `.dev.vars` file.
