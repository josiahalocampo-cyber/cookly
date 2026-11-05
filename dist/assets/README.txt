Place the final Cookly logo here as cookly-logo.png.
The header preserves its proportions within 115px by 38px.
Until the image loads, the header displays the text Cookly.

Typography preview:
Inter is loaded for the interface and as the heading fallback.
Headings try the installed Grab Community family first. No Grab Community font file is bundled.
To display the actual typeface on other devices, provide its font files for a local @font-face setup.

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
