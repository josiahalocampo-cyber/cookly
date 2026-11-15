# Cookly final check — 15 November 2026

Core app flows passed the automated regression audit and the documented live smoke checks. One address-search feedback bug was found and fixed: preferences now visibly explains when no matching address is found. This is a working prototype assessment, not a certification of every production service or menu fact.

| Area | Result | What was checked |
| --- | --- | --- |
| Sign in / signup | Pass — fixtures + live smoke | Distinct modes, validation, password visibility, invalid credentials, required login gate |
| Email confirmation | Pass — fixtures; invalid link checked live | No automatic app login, manual signin before preferences, expired/invalid feedback |
| Forgot password | Pass — fixtures; invalid link checked live | Email request/retry, matching new passwords, hidden/visible inputs, isolated recovery, old password rejected and new password accepted |
| Duplicate emails | Pass — fixtures | Explicit/masked provider responses, case/space normalization, pending retries, original account/password preserved |
| Preferences | Pass — fixtures | Mandatory profile/onboarding, resume after refresh, all 10 equipment choices and custom text saved/reloaded |
| Menu / recipes | Pass — fixtures | All 65 searched/opened/priced/added/removed; all 276 guide steps rendered; quantities at 1/2/6 servings and C/F checked |
| Cooking controls | Pass — fixtures | Doneness controls, step navigation, timer start/pause/reset, removed panels remain absent |
| Saved items / history | Pass — fixtures | Save/review, account persistence/isolation, purchased demo guides, history |
| Meal box / checkout | Pass — fixtures | Portions, totals, validation, demo confirmation, cart clearing and guide unlock |
| Address selection | Pass — fixtures + live dependencies | Visible no-results message, error/retry, saved location, checkout suggestions; live public-city geocoding, Leaflet and map tiles responded |
| Deletion | Pass — fixtures | Typed confirmation/cancel, failure/retry, data-only reset, account removal, cache isolation, duplicate-submit protection; earlier live SQL rollback tests remain documented |
| Layout | Pass — local Chrome | 48 combinations: Home/Menu/Saved/Box/History/Profile, light/dark, widths 320/390/768/1440; selected screenshots visually reviewed |
| Images | Pass — network loading | 65/65 recipe image URLs and the separate theme-preview image returned image content |
| Live data protection | Pass — read-only live check | Anonymous account-data request rejected with HTTP 401 |

No real account was deleted, no real password was changed, and no new confirmation/reset email was sent in this pass. Successful new-user confirmation/password changes were tested with deterministic Supabase fixtures. Earlier real signup/email/persistence and rollback-based database tests are documented in AUDIT_REPORT.md. Browser compatibility coverage is Chrome; real-device Safari/Firefox testing remains outstanding.

## Remaining content and production gaps

- Checkout is explicitly a demo: it takes no payments and dispatches no deliveries. There is no live stock or fulfillment system.
- Cooking previews are labeled animated mock walkthroughs, not recorded cooking videos. Published methods are researched kit adaptations, not physically kitchen-tested.
- Some stock photos do not accurately depict their named dishes. Two different kits share the display name “Steak Rice Bowl,” at ₱459 and ₱499. Owner-approved photos and product labels are needed; prices and names were preserved.
- Final logo and app-icon PNGs have not been supplied. The text Cookly header works, but the listed image/icon paths currently return HTML fallback rather than usable images. Final install branding is incomplete.
- Additional equipment choices save correctly; existing recommendation scoring specifically uses rice cooker and oven. Selecting an appliance does not create an unprovided alternative cooking method.

## Evidence

See tests/food-audit.json, tests/image-audit.json, tests/final-ui-results.json, tests/final-external-results.json, tests/production-smoke.json and tests/confirmation-production-results.json. Reproduction commands and historical backend evidence are in README.md and AUDIT_REPORT.md.
