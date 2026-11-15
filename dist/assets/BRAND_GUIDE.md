# Cookly identity and image assets

The brand combines a white plate-shaped **C** and warm orange fork on charcoal, with a bold Cookly wordmark. It continues the app’s existing neutral appearance and orange accent.

- Charcoal: `#111111`
- White: `#FFFFFF`
- Warm fork accent: `#E87544`
- Food-photo backdrop: warm ivory/stone, intentionally consistent across dishes

## Editable vector masters

- `brand-mark.svg` — compact identity, browser favicon and small placements
- `cookly-logo.svg` — dark wordmark for light surfaces
- `cookly-logo-light.svg` — white wordmark for dark surfaces
- `social-card.svg` — share-preview source, using the existing “A little inspiration for dinner” line

The header switches wordmarks with the selected theme and retains a plain-text fallback if images cannot load. Existing navigation icons remain in the same outline style.

## Browser and phone exports

- `cookly-logo.png` / `cookly-logo-light.png` — transparent 584 × 152 wordmarks
- `favicon-32.png` — 32 × 32 browser fallback
- `icon-192.png` and `icon-512.png` — standard app icons
- `icon-maskable-512.png` — full-background, inset-safe Android maskable icon
- `apple-touch-icon.png` — 180 × 180 iOS home-screen icon
- `social-card.png` — 1200 × 630 link-preview image

Manifest and HTML references use these supplied files. No final branding file is left missing.

## Food collection

`food/` contains 65 individual, dish-matched AI-generated illustrative photographs and 65 responsive thumbnails. Each depicts the named food and its key listed ingredients, with consistent warm ceramics and soft daylight. These are illustrations of the menu, not photographs of delivered kits or exact portion guarantees.

Full images are WebP at 1024 px wide; thumbnails are 360 px wide. Local hosting removes the previous dependence on stock-photo URLs. The original generation used the built-in `image_gen` tool. Format conversion/downscaling preserves the generated composition. All 65 were visually reviewed.

Exact prompts, provider, review scope, dimensions and checksums are recorded in [food/SOURCES.json](food/SOURCES.json). No prompts or images require secrets or external API access at runtime.
