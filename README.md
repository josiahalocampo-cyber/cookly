# Cookly

Cookly is a static recipe app served from `dist/`. Cloudflare Pages hosts the
site, its Pages Function provides the public Supabase client configuration,
and Supabase Auth and Postgres sync each signed-in user's preferences, saved
recipes, meal box, and cooking journal.
Cookly requires Supabase sign-in before browsing. New accounts complete the
existing personal profile step, then the existing cooking questionnaire.
Incomplete onboarding remains locked and resumes from its saved step.
If authentication or the initial account load fails, the main app stays locked.

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
Checkout is a local prototype flow: it does not collect payment or create a real
delivery. A written address is enough to continue; the map pin is optional.
Cooking guides unlock after confirming a demo order and are available from the
confirmation screen or History. Recipe details do not show a paid-only
“Start Cooking” button because no payment processor is integrated.

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
4. Redeploy after adding the variables. Open the deployed site to
   create an account or sign in on the welcome screen.
5. Add the final Cloudflare Pages URL to Supabase's Site URL and Redirect URLs.

The Supabase publishable/anon key is intended for browser use; access is
restricted by the database's row-level security policies. Do not add a
service-role key, database password, or Cloudflare API token to browser code or
the Git repository.

## Local development

A static-only host cannot provide `/api/config`; account access stays locked
until this endpoint is available. GitHub Pages alone is insufficient. To run the Supabase
function locally, use Wrangler Pages dev with `dist` as the output directory
and provide `SUPABASE_URL` and `SUPABASE_ANON_KEY` as local Wrangler variables.
Keep local secrets in the ignored `.dev.vars` file.

## Verification

Run `node tests/rice-guide.cjs` for the cooking observer regression.
The browser audit needs Playwright and Chrome:

```sh
npm install --prefix /tmp/cookly-audit playwright
PLAYWRIGHT_PATH=/tmp/cookly-audit/node_modules/playwright node tests/audit.cjs
node tests/images.cjs
PLAYWRIGHT_PATH=/tmp/cookly-audit/node_modules/playwright node tests/production.cjs
```

Set `CHROME_PATH` if Chrome is installed elsewhere. The browser suite serves
local files through Playwright routing and uses a deterministic Supabase test
double; it does not test a live database. The image script accesses existing
remote photo URLs. Detailed findings are in [AUDIT_REPORT.md](AUDIT_REPORT.md).

Account caches are namespaced by authenticated user ID. Old unscoped prototype
data is retained on disk but is never automatically imported into an account.
Unsynced changes remain in an account-specific pending cache and are retried
after login; the newer pending snapshot wins over an older cloud snapshot.
This is snapshot synchronization, not conflict-free simultaneous editing.
Demo purchases and saved addresses remain device-only, scoped to the account.

`tests/production.cjs` checks the actual production welcome gate and performs one
intentionally invalid login. It does not create accounts or submit orders.
