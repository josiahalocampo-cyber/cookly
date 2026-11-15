# Cookly functionality audit — 14 November 2026

## Equipment choices — 15 November 2026

The equipment step now offers ten choices: Stovetop, Rice cooker, Oven, Air fryer, Microwave, Blender, Food processor, Grill, Steamer and Pressure cooker. The existing multi-select card layout and optional free-text equipment field remain. A shared options list drives both rendering and saved-value validation so the eight new options survive saving, cloud hydration and reload. Existing rice-cooker/oven IDs remain compatible. Descriptions explain the equipment’s general purpose; they do not promise alternative cooking instructions. Existing rice/oven recommendation scoring is unchanged.

Focused browser checks passed: all ten selected and saved, restored after reload through the Supabase test double, free-text equipment retained, deselection/back navigation, invalid-value filtering and duplicate removal, preserved legacy selections, light/dark layout at 320/390/768 widths, and the reachable Continue button. Reproduce with `COOKLY_EQUIPMENT=1 PLAYWRIGHT_PATH=/tmp/cookly-audit/node_modules/playwright node tests/audit.cjs`. No database migration is needed because equipment is stored in the existing preferences JSON.


## One email per account — 15 November 2026

Supabase Auth already enforces email identity uniqueness; no public email-lookup endpoint or database permissions were added. Signup now normalizes surrounding whitespace and email case. Explicit duplicate errors (`user_already_exists` / `email_exists`) and Supabase’s masked response (no session and an empty identities array) route to signin with “This email already has a Cookly account. You can’t create another account with the same email. Please sign in or choose ‘Forgot password?’.” The email remains filled, the typed signup password is cleared, and no profile/session is created.

After a successful pending signup, repeat attempts for the same normalized email in the current visit are blocked before another signup request, with instructions to confirm the existing account. This memory-only reminder clears for that email after successful signin. Across visits/devices, Supabase remains authoritative: an unconfirmed retry can resend confirmation for the same account rather than create another account. No Gmail alias/dot rewriting is performed.

Browser fixture checks passed for explicit and masked duplicates, case/space variants, pending retry suppression without an additional signup/email request, retention of one fixture account, an unchanged original password, original-account signin, and signup/email-confirmation regressions. `COOKLY_DUPLICATE_EMAIL=1 PLAYWRIGHT_PATH=/tmp/cookly-audit/node_modules/playwright node tests/audit.cjs` reproduces the focused checks. No production account was altered for duplicate testing. Production commit `d90b7ac` was verified live with exact source match, the one-account-per-email signup guidance, and passing existing auth/recovery smoke checks. Evidence: `tests/confirmation-production-results.json`. Provider behavior reference: [Supabase Auth signup source](https://github.com/supabase/auth/blob/master/internal/api/signup.go).


## Forgot password — 15 November 2026

Sign-in now has “Forgot password?” leading to an email-only reset request. It calls `resetPasswordForEmail` with the already configured root redirect and uses a neutral success message that does not disclose whether the email has an account. Supabase’s existing reset email/SMTP configuration supplies the reset link; no new backend configuration is needed.

A `type=recovery` callback is kept separate from signup confirmation. After Auth validates the access token, an isolated client with persistence, URL detection and refresh disabled establishes the recovery session only in memory. It never activates the Cookly account, reads kit/profile data or opens preferences. The new-password form requires matching passwords of at least eight characters, supports visibility toggles, handles update failures and allows cancelling. `updateUser({password})` changes the authenticated recovery user’s password. On success the in-memory session is signed out/discarded, a success screen is shown, and manual signin is required. Refresh discards the in-memory recovery session; users can request another email if needed. Credentials are removed from callback URLs and are not written to browser storage.

Passed browser fixture tests: reset email failure/retry and neutral response, redirect target, valid recovery isolation, password visibility and matching validation, update failure/retry, successful save without onboarding/login, rejection of the old password and successful manual signin with the new one, expired/invalid reset links, plus existing email-confirmation and signup/onboarding regressions. New-password screens were visually reviewed in light/dark modes. Production commit `79ba014` was verified live with exact source match, the Forgot password request/return screen, real Supabase rejection of an invalid recovery link, no persisted auth tokens, and no uncaught page errors. See `tests/confirmation-production-results.json`. No real account password was changed in testing. Run `COOKLY_PASSWORD_RESET=1 PLAYWRIGHT_PATH=/tmp/cookly-audit/node_modules/playwright node tests/audit.cjs`.


## Email confirmation and password visibility — 15 November 2026

Both account modes now have an accessible eye button that shows/hides the existing password without changing its value. Mode switches and successful signup clear the password and restore masking. Signup keeps the user signed out, shows confirmation instructions and presents the sign-in form. The explicit sign-in action remains necessary before new-user profile/preferences setup.

Confirmation returns are captured before SDK initialization, URL credentials are removed immediately, and a separate Supabase client with URL detection, persistence and refresh disabled validates the token with `getUser(token)`. Only an authenticated response containing `email_confirmed_at` produces “Your email is confirmed! Please go back to Cookly to sign in.” The callback never imports a session, reads a stored session, saves profile data or opens preferences. A manual button returns to signin; refresh shows normal account access after the consumed callback URL is cleared. Invalid/expired links show an error. Same-tab hash callbacks are also handled; in-flight session activation is blocked while confirmation is displayed. Normal password sessions retain existing persistence.

The production Supabase dashboard was inspected: Confirm email is ON. The confirmation email button already said “Confirm email address”; its surrounding text was updated to explain returning to Cookly and signing in before preferences. Saving succeeded and the edited template remained after reload. The saved body is versioned at `supabase/confirmation-email.html`. No SMTP credentials or security requirements were changed.

Passed browser fixture checks: password visibility in both modes, signup staying signed out, rejection of unconfirmed signin, successful confirmation without stored tokens/session/onboarding, fresh-tab and existing-tab callbacks, callback refresh, manual signin opening preferences, expired/invalid links (even with an existing unrelated stored session), and light/dark mobile layouts. `COOKLY_EMAIL_CONFIRMATION=1` and `COOKLY_AUTH_UI=1` run these through `tests/audit.cjs`. These are local Supabase test-double checks; a new real confirmation email was not sent in this revision. Real email delivery was verified in the earlier production journey. Production commit `8aeb811` was verified live: exact JavaScript source match, eye controls, real Supabase rejection of an invalid confirmation token, removal of callback URL credentials, no saved authentication token/session, manual return to signin, and no page errors. Evidence: `tests/confirmation-production-results.json`.


## Account-access interface — 15 November 2026

Sign in and Create account now have an explicit two-option mode switch, selected-state contrast, separate headings and guidance, and one matching full-width submit action. Signup explains the eight-character password minimum and email confirmation; password autofill uses new-password for signup and current-password for signin. Switching modes preserves email, clears password and old errors, and never submits the form. Successful authentication resets the next signed-out screen to signin. Existing authenticated profile and deletion controls are unchanged.

Passed: keyboard Enter sign-in/error feedback, mode switching, single-action submission, signup password validation, autofill semantics, email preservation/password clearing, light/dark layout at 320/390/768 widths, and signup through mandatory onboarding using the local Supabase test double. Screenshots were visually reviewed. Run `COOKLY_AUTH_UI=1 PLAYWRIGHT_PATH=/tmp/cookly-audit/node_modules/playwright node tests/audit.cjs` and the existing `COOKLY_SMOKE=1` audit.


## Cooking-method revision — 14 November 2026

All 65 kit recipes now have explicit, researched methods (276 guide steps), linked technique references and visible assumptions under “Cooking notes & sources.” See [COOKING_RESEARCH.md](COOKING_RESEARCH.md) for every dish. Instructions adapt the existing prepared sauces and kit ingredients; they do not reproduce the linked recipes or add their missing ingredients. Names, prices, images, ingredient quantities and dietary tags were preserved. Total times were revised as estimates for two servings; pressing and inasal marinating are identified separately.

The universal four-minutes-per-side medium steak rule was removed. For a roughly 2–2.5 cm boneless steak the guide starts with a two-minute browning check, flips, then begins butter basting after about one minute. Basting counts within second-side cooking, rather than being added to two full side timers. Selected temperature, thickness and actual heat determine completion. The conservative medium default remains 63°C with at least three minutes rest; rare/medium-rare remain identified as below the cited safety minimum. All timed stages now say what to check rather than promising doneness on expiry.

Other corrections include poultry and ground-meat temperature checks, opaque shrimp, a temperature endpoint for salmon, longer pork braising, root vegetables before quick proteins, raw salad/taco toppings, pesto and citrus cream finishing off heat, gentle prepared-sauce heating, cooked-legume assumptions, and packet-led grain/noodle preparation.

Verification passed: full Chrome audit of all 65 foods and every guide step (Supabase test double); 276-step checks at 1/2/6 servings in Celsius/Fahrenheit; retained kit data; all steak options, source links, checkpoint timer controls, and dialog layout at 320/390/768/1440 widths; rice-guide and pasta-water regressions; JavaScript syntax and diff checks. Production verification: commit `c2db69e` is live; the deployed JavaScript matches the local SHA256 `6e84bfbcc45e14f7789788b68198791cebbcaa19ec444d68e2b84247d0da7ab0`. The real production auth-gate smoke test also passed. Evidence: `tests/cooking-research-results.json` and `tests/production-smoke.json`. No physical kitchen validation was performed. Prepared-sauce labels, actual cut dimensions, and equipment still govern real cooking; this revision does not certify nutrition, allergens, prices or kit availability.


## Production follow-up — 14 November 2026

Supabase is healthy. The production dashboard was accessed through the owner's signed-in Chrome profile. The existing table and all three owner-only policies were verified, with row-level security enabled. The deployed table had overly broad grants (anonymous SELECT/INSERT/UPDATE/DELETE and authenticated DELETE); those were corrected to match `supabase/schema.sql`: anonymous access revoked, authenticated SELECT/INSERT/UPDATE only. The dashboard query confirmed exactly those three grants afterward.

A live PostgreSQL transaction tested saving an authenticated owner's profile, saved IDs and cart, updating and reading its profile, hiding the other account's record, blocking its update, and rejecting a cross-account insert. All assertions passed, and the transaction rolled back all fixtures. See `tests/database-ownership.sql`. This verifies real database ownership rules. The later real-account browser journey also passed, as detailed below.

Both the Site URL and allowed redirect already point to `https://cookly.pages.dev`. **Gmail custom SMTP is saved and enabled**, using `smtp.gmail.com:465` and the Cookly sender name. Supabase confirmed the update and hides the stored credential. Actual signup email delivery and email confirmation succeeded using the owner-authorized account. Supabase warns Gmail is intended for personal email and deliverability may be impacted. No SMTP credentials were copied into the repository. Email confirmation was kept enabled. The reviewed application is deployed (commit `443139e`); its app.js hash matches the local implementation.

The live browser smoke test also passed: real Supabase client initialization, mandatory login gate, blocked direct navigation, required-email validation, a real invalid-login response, responsive welcome screen and no uncaught page errors. Evidence: `tests/production-smoke.json`.

## Confirmed production user journey

Using the authorized owner account in Chrome (no mocked auth), signup sent a confirmation email and the confirmed session reached profile/onboarding. After the user completed onboarding, refresh loaded the personalized main app without repeating the questionnaire. A saved recipe and a three-serving cart item survived reload. A temporary username edit survived reload, then was restored. Demo checkout correctly totaled ₱434 + ₱349 = ₱783, collected no payment, cleared the cart and unlocked its guide. Logout locked the app; the user signed back in, skipped onboarding, and the original profile loaded correctly. Saved test items were removed, leaving the saved list and cart empty. Two clearly labeled demo meal records remain in the device's History. Evidence: `tests/live-user-journey.json`.

The live walkthrough exposed an ingredient-substitution bug that assigned pasta weight to the phrase “pasta water.” The substitution now preserves that phrase while scaling actual pasta quantities; `tests/guide-quantities.cjs` covers the regression. Signed-out account copy was also corrected so it does not retain the previous synced/loading status. The final source correction is deployed in commit `79804b5`, its live app.js hash matches the local file, and the corrected three-serving guide text was verified again in the production browser. The browser was left signed in on Home.

## A. Fully functional features confirmed by testing

These results describe the **local implementation tested in Chrome with a deterministic Supabase test double**, unless explicitly marked live. They do not certify production authentication or database persistence.

- Welcome screen blocks browsing, navigation and recipe access before authentication. A missing configuration keeps the app locked.
- Account registration and login form behavior, required fields, invalid credentials, duplicate registration error display, and logout.
- Required name and username on the existing profile step, followed by all five existing questionnaire steps. Email follows the authenticated account. No questions were added or rewritten.
- Interrupted onboarding resumes after reload; exiting does not grant access. Returning completed accounts skip onboarding.
- Vegetarian featured recommendations exclude dishes without the existing Vegetarian tag. Quick cooking and the existing preference scoring remain in place. This is not allergen verification.
- All 65 foods individually searched using uppercase names, opened, compared with their configured prices, added to the cart, and removed. All existing cooking steps were individually rendered and advanced.
- Cuisine filtering, empty search results, reset, multiple cart items, serving changes, totals, required checkout fields, demo confirmation, cart clearing, and guide unlocking.
- Profile edits and preferences survive logout/login in the simulated backend; a second account receives an empty profile and no first-account demo purchases.
- Database read failure blocks access and supports retry; simulated save failure is surfaced and retry restores sync.
- Saved-recipe toggling, personal five-star review submission, the three appearance modes and all eight existing palette controls were exercised.
- No uncaught JavaScript page errors in the passing browser audit. Mobile 390px, tablet 768px, and desktop 1440px Menu widths had no horizontal overflow. This is Chromium coverage, not Safari/Firefox certification.
- All **65/65 remote food image URLs** returned HTTP image content. Every downloaded preview was visually reviewed; see section D for identity concerns.
- Existing rice observer regression passes for White and Brown rice and reproduces the original mutation-loop failure when the guard is removed.

## B. Errors found and fixed

| Issue / cause | Change | Verification |
| --- | --- | --- |
| Optional sign-in allowed unrestricted main-app access | Welcome gate uses authenticated session, loaded account, completed profile and onboarding; navigation/feature events are guarded | Signed-out navigation and missing-config browser tests |
| “Maybe later” marked onboarding complete | Save-and-exit retains incomplete state; step progress persists and resumes | Exit, reload and resume tests |
| Profile fields were optional; profile email could differ from account | Require existing name/username fields, reject blank trimmed values, bind email to authenticated identity | Required-field and edit/login tests |
| Shared local keys exposed another user's preferences/cart/history/address/purchases | Namespace caches by authenticated user ID; clear in-memory state/dialogs/timers on account change; stop implicit adoption of legacy anonymous data | Two-account browser isolation test; address/purchase namespace code reviewed |
| Late account requests could apply stale results | Account-ID guards and serialized cloud saves | Read/write recovery and account-switch integration tests; prolonged race/load testing not exhaustive |
| Failed cloud writes could be lost on a later account load | Keep an account-specific pending snapshot; retry newer unsynced data on login, with explicit save retry | Simulated save error/retry tested; full multi-device conflict handling remains limited |
| Menu search hid all featured foods | Menu/search includes the entire existing catalog | Every one of the 65 names searched |
| Cart had no serving adjustment | Existing 1–6 serving bounds exposed with plus/minus controls | Browser serving and total checks |
| Duplicate checkout click handlers rendered checkout twice | Removed redundant checkout handler; existing process retained | Demo order/confirmation/guide checks |
| Demo order number was relabeled COOKLY | Preserve DEMO prefix and label completion as a saved demo order | Browser confirmation assertion |
| Invalid recipe ID could crash details | Guard missing recipes and show a message | Code review; catalog IDs all exercised |
| Random stock avatar implied another person's profile | Display the signed-in profile's initials in the existing avatar button | Browser rendering |
| Configuration failure copy incorrectly promised local access | Explain that account access requires configured authentication | Missing-configuration browser test |

Existing layout, branding, colors, palettes, recipes, ingredient values, prices and ordering sequence were preserved. The schema was not changed. No payment integration was added. Pre-existing changes to index.html and manifest.webmanifest were preserved; index.html also received updated script cache versions and the avatar placeholder fix.

## C. Issues requiring your approval or supplied information

1. **Food photography:** approve replacement assets or provide verified dish photos. Several images are incorrect or only loosely representative (section D). No images were invented or replaced during this audit.
2. **Two Steak Rice Bowl records:** `menu-steak-rice-bowl` is ₱459 and `butter-steak` is ₱499, with different ingredients/instructions. Each record is internally consistent across details/cart, but the identical display name is ambiguous. Confirm whether these are separate products and how they should be labeled; neither price/name was changed.
3. **Live backend (historical finding, resolved after project startup):** the public deployment at https://cookly.pages.dev returns a Supabase URL, but `vyktgqrfqwlfcsyirzes.supabase.co` did not resolve from this environment (independently checked with Node, Python and curl). Confirm/restore the Supabase project or supply its current public configuration. No database architecture migration was performed.
4. **Real cooking videos, logo and app icons:** these assets are absent. Guides honestly label the existing animated mock previews. Provide final branded assets and verified step videos if desired; no replacement branding was fabricated.
5. **Production deployment:** completed for commit `443139e`; the live app.js hash matches the reviewed local implementation. Live database ownership tests passed and table grants were corrected; confirmed-account browser signup, confirmation, persistence and returning login passed.

## D. Food-by-food verification

For **every row**, configured name, description, category, positive price, nonempty ingredients with positive quantities, and cooking steps were inspected. Browser checks confirmed uppercase-name search, the correct detail title and price, cart add/remove, and every cooking step. “Pass” means consistency with the existing catalog, **not independent validation of menu facts, ingredient completeness or restaurant pricing**. All images loaded over the network; visual notes distinguish a matching-looking subject from verified dish identity. There is no inventory/availability backend or stock field, so real availability is unverified for every food.

| # | Food / record | Price for two | Data/detail/search/cart/guide | Image HTTP | Visual review / remaining issue |
| --- | --- | ---: | --- | --- | --- |
| 1 | Steak Rice Bowl (`menu-steak-rice-bowl`) | ₱459 | Pass | 200 | Steak bowl visible; exact kit composition unverified. |
| 2 | Steak Rice Bowl (`butter-steak`) | ₱499 | Pass | 200 | Close-up steak; rice bowl composition is not shown. |
| 3 | Calamansi Cream Pasta (`calamansi-pasta`) | ₱289 | Pass | 200 | Mismatch: tomato-colored fusilli rather than the described calamansi cream pasta. |
| 4 | Garlic Beef Salpicao (`beef-salpicao`) | ₱429 | Pass | 200 | Beef with vegetables; exact salpicao kit unverified. |
| 5 | Crispy Tofu Sisig (`tofu-sisig`) | ₱269 | Pass | 200 | Tofu visible; exact sisig preparation unverified. |
| 6 | Miso-Glazed Salmon (`miso-salmon`) | ₱449 | Pass | 200 | Salmon visible; exact miso kit unverified. |
| 7 | Chicken Adobo (`chicken-adobo`) | ₱349 | Pass | 200 | Chicken visible; adobo identity unverified. |
| 8 | Vegetable Kare-Kare (`vegetable-kare-kare`) | ₱319 | Pass | 200 | Vegetable curry appearance; peanut kare-kare identity unverified. |
| 9 | Tomato Basil Pasta (`tomato-basil-pasta`) | ₱259 | Pass | 200 | Tomato pasta visible; exact kit unverified. |
| 10 | Lemon Herb Chicken (`lemon-chicken`) | ₱359 | Pass | 200 | Suspected mismatch: fillet appears to be fish rather than chicken. |
| 11 | Korean Beef Bowl (`korean-beef-bowl`) | ₱399 | Pass | 200 | Rice bowl visible; exact Korean beef kit unverified. |
| 12 | Thai Coconut Curry (`thai-coconut-curry`) | ₱319 | Pass | 200 | Curry visible; exact tofu/vegetarian composition unverified. |
| 13 | Smoky Chicken Tacos (`chicken-tacos`) | ₱349 | Pass | 200 | Taco visible; filling identity unverified. |
| 14 | Creamy Chickpea Masala (`chickpea-masala`) | ₱299 | Pass | 200 | Orange curry visible; chickpea identity unverified. |
| 15 | Sesame Tofu Bowl (`sesame-tofu-bowl`) | ₱289 | Pass | 200 | Tofu/vegetable bowl visible; exact kit unverified. |
| 16 | Thai Basil Chicken (`thai-basil-chicken`) | ₱329 | Pass | 200 | Rice and protein visible; basil chicken identity unverified. |
| 17 | Black Bean Tacos (`black-bean-tacos`) | ₱269 | Pass | 200 | Tacos visible; black bean filling is not established. |
| 18 | Butter Chicken (`butter-chicken`) | ₱379 | Pass | 200 | Orange curry visible; exact butter chicken kit unverified. |
| 19 | BBQ Chicken Rice Bowl (`menu-bbq-chicken-rice-bowl`) | ₱329 | Pass | 200 | Breaded-looking cutlet bowl; BBQ chicken identity questionable. |
| 20 | Creamy Mushroom Chicken (`menu-creamy-mushroom-chicken`) | ₱329 | Pass | 200 | Creamy mushroom sauce with meat; exact chicken kit unverified. |
| 21 | Cajun Shrimp Rice (`menu-cajun-shrimp-rice`) | ₱359 | Pass | 200 | Shrimp visible; rice kit composition unverified. |
| 22 | Cheddar Mac & Cheese (`menu-cheddar-mac-and-cheese`) | ₱279 | Pass | 200 | Macaroni and cheese visible; exact kit unverified. |
| 23 | Honey Mustard Chicken (`menu-honey-mustard-chicken`) | ₱329 | Pass | 200 | Chicken visible; honey mustard identity unverified. |
| 24 | Smoky Beef Rice Bowl (`menu-smoky-beef-rice-bowl`) | ₱359 | Pass | 200 | Rice/protein bowl visible; exact beef kit unverified. |
| 25 | Chicken Inasal Bowl (`menu-chicken-inasal-bowl`) | ₱329 | Pass | 200 | Sauced chicken visible; inasal preparation unverified. |
| 26 | Beef Bistek (`menu-beef-bistek`) | ₱359 | Pass | 200 | Mismatch: raw beef cuts rather than prepared Beef Bistek. |
| 27 | Chicken Afritada (`menu-chicken-afritada`) | ₱329 | Pass | 200 | Dark chicken dish visible; afritada identity questionable. |
| 28 | Pork Menudo (`menu-pork-menudo`) | ₱329 | Pass | 200 | Orange stew/curry visible; pork menudo identity unverified. |
| 29 | Ginisang Monggo (`menu-ginisang-monggo`) | ₱279 | Pass | 200 | Mismatch: bowl of dark beans rather than prepared mung-bean stew. |
| 30 | Pesto Chicken Pasta (`menu-pesto-chicken-pasta`) | ₱329 | Pass | 200 | Orange penne dish; pesto chicken identity questionable. |
| 31 | Creamy Mushroom Penne (`menu-creamy-mushroom-penne`) | ₱279 | Pass | 200 | Creamy penne visible; mushroom composition unverified. |
| 32 | Garlic Shrimp Linguine (`menu-garlic-shrimp-linguine`) | ₱359 | Pass | 200 | Shrimp pasta visible; exact kit unverified. |
| 33 | Beef Ragu Pasta (`menu-beef-ragu-pasta`) | ₱359 | Pass | 200 | Tomato penne visible; beef ragu identity unverified. |
| 34 | Spinach Cream Fusilli (`menu-spinach-cream-fusilli`) | ₱279 | Pass | 200 | Creamy pasta/greens visible; exact fusilli kit unverified. |
| 35 | Chicken Teriyaki Bowl (`menu-chicken-teriyaki-bowl`) | ₱329 | Pass | 200 | Rice bowl visible; teriyaki chicken identity unverified. |
| 36 | Beef Yakiniku Bowl (`menu-beef-yakiniku-bowl`) | ₱359 | Pass | 200 | Rice/protein bowl visible; yakiniku beef identity unverified. |
| 37 | Ginger Tofu Rice Bowl (`menu-ginger-tofu-rice-bowl`) | ₱279 | Pass | 200 | Rice/mushroom-looking dish; ginger tofu identity questionable. |
| 38 | Japanese Chicken Curry (`menu-japanese-chicken-curry`) | ₱329 | Pass | 200 | Curry and rice visible; Japanese chicken identity unverified. |
| 39 | Sesame Mushroom Udon (`menu-sesame-mushroom-udon`) | ₱279 | Pass | 200 | Noodle dish visible; udon/mushroom identity unverified. |
| 40 | Miso Butter Shrimp (`menu-miso-butter-shrimp`) | ₱359 | Pass | 200 | Shrimp visible; miso butter rice kit is not shown. |
| 41 | Greek Chicken Bowl (`menu-greek-chicken-bowl`) | ₱329 | Pass | 200 | Plated protein and rice; Greek chicken couscous identity questionable. |
| 42 | Lemon Chickpea Couscous (`menu-lemon-chickpea-couscous`) | ₱279 | Pass | 200 | Mismatch: plain chickpeas rather than prepared lemon chickpea couscous. |
| 43 | Garlic Shrimp Couscous (`menu-garlic-shrimp-couscous`) | ₱359 | Pass | 200 | Shrimp and grains visible; exact couscous kit unverified. |
| 44 | Harissa Chicken Bowl (`menu-harissa-chicken-bowl`) | ₱329 | Pass | 200 | Handheld rice bowls; harissa chicken/couscous identity questionable. |
| 45 | Herbed Mushroom Couscous (`menu-herbed-mushroom-couscous`) | ₱279 | Pass | 200 | Creamy mushroom/greens dish; couscous identity unverified. |
| 46 | Gochujang Chicken Bowl (`menu-gochujang-chicken-bowl`) | ₱329 | Pass | 200 | Tofu-looking cubes in sauce; chicken identity questionable. |
| 47 | Korean Mushroom Rice (`menu-korean-mushroom-rice`) | ₱279 | Pass | 200 | Rice-like dish visible; exact Korean mushroom kit unverified. |
| 48 | Spicy Pork Bulgogi (`menu-spicy-pork-bulgogi`) | ₱329 | Pass | 200 | Sauced protein and rice; pork bulgogi identity unverified. |
| 49 | Kimchi Tofu Rice (`menu-kimchi-tofu-rice`) | ₱279 | Pass | 200 | Kimchi visible; tofu rice composition is not shown. |
| 50 | Sesame Beef Noodles (`menu-sesame-beef-noodles`) | ₱359 | Pass | 200 | Noodles visible; exact beef kit unverified. |
| 51 | Thai Peanut Noodles (`menu-thai-peanut-noodles`) | ₱279 | Pass | 200 | Noodles visible; exact peanut kit unverified. |
| 52 | Red Curry Chicken (`menu-red-curry-chicken`) | ₱329 | Pass | 200 | Orange curry visible; exact red curry chicken kit unverified. |
| 53 | Thai Garlic Shrimp (`menu-thai-garlic-shrimp`) | ₱359 | Pass | 200 | Shrimp visible; exact Thai garlic kit unverified. |
| 54 | Green Curry Tofu (`menu-green-curry-tofu`) | ₱279 | Pass | 200 | Tofu curry visible; exact green curry kit unverified. |
| 55 | Sweet Chili Chicken (`menu-sweet-chili-chicken`) | ₱329 | Pass | 200 | Sauced chicken and rice visible; exact kit unverified. |
| 56 | Chicken Fajita Bowl (`menu-chicken-fajita-bowl`) | ₱329 | Pass | 200 | Chicken/vegetable bowl visible; exact fajita kit unverified. |
| 57 | Chipotle Beef Bowl (`menu-chipotle-beef-bowl`) | ₱359 | Pass | 200 | Rice/vegetable plate; chipotle beef identity questionable. |
| 58 | Smoky Bean Rice Bowl (`menu-smoky-bean-rice-bowl`) | ₱279 | Pass | 200 | Bean/grain bowl visible; exact kit unverified. |
| 59 | Lime Shrimp Tacos (`menu-lime-shrimp-tacos`) | ₱359 | Pass | 200 | Tacos visible; shrimp identity unverified. |
| 60 | Chicken Tinga Tacos (`menu-chicken-tinga-tacos`) | ₱329 | Pass | 200 | Tacos visible; chicken tinga identity unverified. |
| 61 | Palak Paneer (`menu-palak-paneer`) | ₱279 | Pass | 200 | Paneer/greens appearance; exact kit unverified. |
| 62 | Chickpea Tikka Masala (`menu-chickpea-tikka-masala`) | ₱279 | Pass | 200 | Chickpea curry visible; exact tikka masala kit unverified. |
| 63 | Chicken Korma (`menu-chicken-korma`) | ₱329 | Pass | 200 | Orange curry visible; chicken korma identity unverified. |
| 64 | Coconut Dal (`menu-coconut-dal`) | ₱279 | Pass | 200 | Orange curry visible; lentil/coconut identity unverified. |
| 65 | Aloo Chana (`menu-aloo-chana`) | ₱279 | Pass | 200 | Chickpeas visible; potato/chana preparation unverified. |

## E. Remaining limitations

- **Historical initial test:** live authentication/persistence was blocked, not passed. See the production follow-up above for recovered API results. Health, auth settings, anonymous reads, invalid login and test registration all failed before reaching Supabase because its configured hostname did not resolve. No live test account was created, and no real order was submitted. Evidence: `tests/live-audit.json`.
- Actual confirmation delivery and the confirmed-account login flow passed. Real duplicate-registration behavior, forced session expiry and account recovery remain unverified. Password recovery was not an existing feature and was not added.
- Live row-level security and own/cross-account SQL operations now pass the transaction tests described above. Confirmed-account browser signup/login and email delivery now pass. The SQL tests use a database role and JWT subject setting, not an actual Supabase browser token.
- Saved addresses and demo guide unlocks remain device-only, now account-scoped, as in the existing architecture. They do not follow users onto another device. Unsynced snapshot recovery is last-write comparison, not simultaneous multi-device merging. Private data is not encrypted in browser localStorage.
- Static recipe data, sample community ratings, mocked cooking previews and lack of live inventory remain product limitations. All menu facts require an authoritative owner-provided source before being certified accurate. No nutrition or allergen safety claims were invented.
- Mapping/geocoding success, dragging and confirming real pins, real slow-network behavior, all timer durations, every rice variety/doneness combination, denied browser storage and every browser/device combination are not exhaustively tested. The demo checkout was tested with a written address and unavailable external map services.
- Logo and manifest icon files referenced in HTML are missing. Logo text fallback works; installability/icon appearance is not certified. The pre-existing manifest was not modified.
- No server bundler or package build is configured; `dist/` is the source deployment directory. JavaScript syntax checks and browser execution replace a nonexistent build command.

## F. Final application status

**Partially functional; not production complete.** The local application flow and all 65 food interactions passed the documented browser integration checks, with image identity issues explicitly left unresolved. The production backend now responds and the reviewed changes are deployed. The core production account and demo-order journey is verified. Approved food imagery/data, actual video/icon assets, and the remaining compatibility checks are still needed before claiming every requested feature is production complete.

Reproduce with the commands in README.md. `tests/audit.cjs` uses a Supabase test double and local-file routing. `tests/food-audit.json` records individual food interaction results; `tests/image-audit.json` records real photo HTTP results. The browser test's downloaded-image previews live in `/tmp/cookly-audit` and are not required for behavior assertions. No passwords, auth tokens or Supabase keys are stored in the reports.

## Self-service deletion addition

The account card now offers two confirmed actions: delete all Cookly data while
keeping the login, or permanently delete the account and its linked data.
The same options are available after exiting incomplete onboarding. The
confirmation explains the difference and requires `DELETE DATA` or
`DELETE ACCOUNT`; Cancel performs no operation.

Both narrow Supabase functions were installed through the production SQL
Editor. They derive identity from `auth.uid()`, accept no target account ID,
have a fixed empty search path, and deny anonymous execution. Actual database
tests passed for owner data clearing, keeping the login, auth-identity deletion
and cascade, anonymous denial, rejection of deleted identities, and preserving
a second account. All test fixtures were rolled back. The owner's account was
not deleted. See `supabase/account-deletion.sql` and `tests/deletion-database.sql`.

Browser tests with disposable simulated identities verify typed confirmation,
cancellation, request failure without local data loss, retry, duplicate-submit
protection, account logout/removal, own-cache clearing, other-account cache
isolation, and ignoring stale onboarding drafts after a server reset. Remote
downloaded copies and provider backups are explicitly outside instant erasure.

The deletion feature is live in commit `282db30`; the production app.js hash
matches the tested local source. Both live confirmation dialogs were opened
and cancelled, and the owner remained signed in with their original profile.
No destructive operation was submitted against the owner account.
