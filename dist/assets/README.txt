Final Cookly branding is supplied in this directory.
See BRAND_GUIDE.md for SVG masters, light/dark wordmarks, phone/browser icons,
social preview exports, colors, and food-image provenance.

Food photos:
assets/food/ contains 65 dish-matched illustrative photos and their thumbnails.
They are AI-generated menu illustrations, not actual delivered-product photos.
See food/SOURCES.json for all generation prompts and review details.

Typography:
The interface loads Inter; headings retain the existing installed Grab Community
preference with Inter as fallback. The vector wordmarks are self-contained logo artwork.

Step-by-step cooking videos:
Create assets/videos/ and add your MP4 cooking clips.
In app.js add stepVideos to the matching recipe, in the same order as steps:
stepVideos: ["assets/videos/butter-steak-step-1.mp4", "assets/videos/butter-steak-step-2.mp4", "assets/videos/butter-steak-step-3.mp4"]
Unconfigured clips use a playable animated mock preview of the dish photo and step instructions.
These previews are storyboards, not actual cooking footage. Each step waits for Play; users control Next.

Detailed guide editing:
Each recipe can define guideSteps with one object per existing step:
{ title: "Sear the beef", text: "Pat {{0}} dry, then sear in batches.", video: "assets/videos/dish/step-2.mp4", ingredientIndexes: [0] }
{{0}} inserts ingredient 0 with the exact quantity for the selected servings and units.
Keep guideSteps in the same order and length as steps. Give every step its own video path.
Live quantities in the UI scale automatically; prerecorded footage does not. Record clips explaining the two-serving base quantities and refer viewers to the live ingredient panel for their chosen portions.
