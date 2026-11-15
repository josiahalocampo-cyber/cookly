// EDIT YOUR MENU HERE. Change name for the dish title, image for its photo,
// price for the two-serving kit price in pesos, and ingredients for box contents.
// Ingredient quantities below are for two servings and scale with the selector.
// To add a dish, copy an object, give it a unique id, and fill in all fields.
// category and tags automatically determine which circular filters include it.
// Set featured: true for Home; the top six by rating are shown. Non-featured dishes appear in Menu.
// cuisine controls the Home circles. Ratings below are sample prototype data, not customer reviews.
// Additional dishes below are editable prototype menu examples.
// Add stepVideos: ["assets/videos/dish-step-1.mp4", "assets/videos/dish-step-2.mp4", "assets/videos/dish-step-3.mp4"]
// to any recipe to replace its animated mock walkthrough with your actual cooking clips.
const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=75`;
const recipes = [
 {
  "id": "menu-steak-rice-bowl",
  "name": "Steak Rice Bowl",
  "featured": false,
  "cuisine": "American",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals",
   "Steak"
  ],
  "image": "https://images.unsplash.com/photo-1682566509605-b5bb1ef7eac2?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Easy",
  "price": 459,
  "description": "Seared ribeye or striploin over fluffy white rice, with savory soy-oyster sauce, herb butter, crisp corn, a fried egg, and furikake.",
  "ingredients": [
   {
    "name": "Ribeye or striploin steak",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Steak seasoning blend (salt, four-spice pepper, garlic powder, prime rib seasoning)",
    "amount": 1,
    "unit": "packet"
   },
   {
    "name": "Herb butter",
    "amount": 20,
    "unit": "g"
   },
   {
    "name": "Garlic cloves for steak",
    "amount": 2,
    "unit": "cloves"
   },
   {
    "name": "White rice",
    "amount": 1,
    "unit": "cup"
   },
   {
    "name": "Soy sauce",
    "amount": 3,
    "unit": "tbsp"
   },
   {
    "name": "Oyster sauce",
    "amount": 1.5,
    "unit": "tbsp"
   },
   {
    "name": "Sugar",
    "amount": 2,
    "unit": "tbsp"
   },
   {
    "name": "Black pepper",
    "amount": 1,
    "unit": "packet"
   },
   {
    "name": "Sesame oil",
    "amount": 1,
    "unit": "tsp"
   },
   {
    "name": "Shredded corn",
    "amount": 1,
    "unit": "packet"
   },
   {
    "name": "Egg (optional)",
    "amount": 2,
    "unit": "pieces"
   },
   {
    "name": "Furikake",
    "amount": 1,
    "unit": "packet"
   },
   {
    "name": "Chopped garlic",
    "amount": 2,
    "unit": "cloves"
   },
   {
    "name": "Chopped onion",
    "amount": 0.5,
    "unit": "piece"
   },
   {
    "name": "Chopped green onion",
    "amount": 2,
    "unit": "stalks"
   }
  ],
  "steps": [
   "Start the white rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Keep the steak butter and steak garlic separate from the rice ingredients.",
   "Pat the steak dry and season with the supplied steak seasoning. These pan instructions assume a boneless steak about 2–2.5 cm thick. Heat a heavy pan with a little oil over medium-high heat until shimmering; avoid burning oil. Thicker steaks need a gentler finish and more time.",
   "Lay the steak away from you. Leave it to develop a brown crust; begin checking after about 2 minutes for a 2–2.5 cm steak, earlier for thinner cuts. Flip once the crust releases. This is a browning checkpoint, not a promise of medium doneness.",
   "After flipping, cook for about 1 minute, then lower the heat and add the butter and steak garlic. Tilt and spoon foaming butter over the steak, checking temperature frequently. Basting is part of this second-side cooking time, not an extra full sear. Do not let the butter blacken. Continue only as needed for the selected temperature.",
   "For the food-safety recommendation, reach at least 63°C before removing from heat and rest at least 3 minutes. Rest about 5 minutes for this bowl before slicing; temperature can rise during resting. Do not use carryover cooking to skip the minimum temperature.",
   "Whisk soy sauce, oyster sauce, sugar, pepper and sesame oil. Cook the chopped onion in a little oil until soft, add chopped garlic briefly, then warm corn and the mixed sauce. Spoon over cooked rice. If using eggs, cook until whites and yolks are firm. Finish with furikake and green onion.",
   "Slice rested steak across the grain and arrange over the hot rice. Spoon over the resting juices. Use a clean board and utensils for the cooked food."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the white rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Keep the steak butter and steak garlic separate from the rice ingredients.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12,
     13,
     14,
     15
    ]
   },
   {
    "title": "Dry, season and heat the pan",
    "text": "Pat the steak dry and season with the supplied steak seasoning. These pan instructions assume a boneless steak about 2–2.5 cm thick. Heat a heavy pan with a little oil over medium-high heat until shimmering; avoid burning oil. Thicker steaks need a gentler finish and more time.",
    "ingredientIndexes": [
     0,
     1
    ]
   },
   {
    "title": "Sear the first side",
    "text": "Lay the steak away from you. Leave it to develop a brown crust; begin checking after about 2 minutes for a 2–2.5 cm steak, earlier for thinner cuts. Flip once the crust releases. This is a browning checkpoint, not a promise of medium doneness.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Flip, baste and measure",
    "text": "After flipping, cook for about 1 minute, then lower the heat and add the butter and steak garlic. Tilt and spoon foaming butter over the steak, checking temperature frequently. Basting is part of this second-side cooking time, not an extra full sear. Do not let the butter blacken. Continue only as needed for the selected temperature.",
    "steakPhase": "baste",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     2,
     3
    ]
   },
   {
    "title": "Rest the steak",
    "text": "For the food-safety recommendation, reach at least 63°C before removing from heat and rest at least 3 minutes. Rest about 5 minutes for this bowl before slicing; temperature can rise during resting. Do not use carryover cooking to skip the minimum temperature.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Finish the rice bowl",
    "text": "Whisk soy sauce, oyster sauce, sugar, pepper and sesame oil. Cook the chopped onion in a little oil until soft, add chopped garlic briefly, then warm corn and the mixed sauce. Spoon over cooked rice. If using eggs, cook until whites and yolks are firm. Finish with furikake and green onion.",
    "ingredientIndexes": [
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12,
     13,
     14,
     15
    ]
   },
   {
    "title": "Slice and serve",
    "text": "Slice rested steak across the grain and arrange over the hot rice. Spoon over the resting juices. Use a clean board and utensils for the cooked food.",
    "ingredientIndexes": [
     0
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Steak temperatures describe approximate culinary preferences, not guaranteed timing. A thin steak may need much less time. Resting and basting are included in the method.",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — pan-seared steak and basting",
    "url": "https://www.recipetineats.com/how-to-cook-steak/"
   },
   {
    "title": "ThermoWorks — medium steak temperature",
    "url": "https://blog.thermoworks.com/what-temperature-is-medium/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "butter-steak",
  "stepVideos": [],
  "featured": true,
  "cuisine": "American",
  "rating": 4.9,
  "name": "Steak Rice Bowl",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals",
   "Steak"
  ],
  "image": "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 499,
  "description": "Pan-seared steak over savory onion-garlic rice with sauce and corn, finished with butter and garlic.",
  "ingredients": [
   {
    "name": "Beef steak",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Steak seasoning packets",
    "amount": 1,
    "unit": "set"
   },
   {
    "name": "White rice",
    "amount": 1,
    "unit": "cup"
   },
   {
    "name": "Cooking oil",
    "amount": 1,
    "unit": "tbsp"
   },
   {
    "name": "Chopped onion",
    "amount": 0.5,
    "unit": "piece"
   },
   {
    "name": "Chopped garlic for rice",
    "amount": 2,
    "unit": "cloves"
   },
   {
    "name": "Rice bowl sauce",
    "amount": 1,
    "unit": "packet"
   },
   {
    "name": "Corn",
    "amount": 1,
    "unit": "packet"
   },
   {
    "name": "Butter",
    "amount": 20,
    "unit": "g"
   },
   {
    "name": "Garlic for steak",
    "amount": 2,
    "unit": "cloves"
   }
  ],
  "steps": [
   "Start the white rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Keep the steak butter and steak garlic separate from the rice ingredients.",
   "Pat the steak dry and season with the supplied steak seasoning. These pan instructions assume a boneless steak about 2–2.5 cm thick. Heat a heavy pan with a little oil over medium-high heat until shimmering; avoid burning oil. Thicker steaks need a gentler finish and more time.",
   "Lay the steak away from you. Leave it to develop a brown crust; begin checking after about 2 minutes for a 2–2.5 cm steak, earlier for thinner cuts. Flip once the crust releases. This is a browning checkpoint, not a promise of medium doneness.",
   "After flipping, cook for about 1 minute, then lower the heat and add the butter and steak garlic. Tilt and spoon foaming butter over the steak, checking temperature frequently. Basting is part of this second-side cooking time, not an extra full sear. Do not let the butter blacken. Continue only as needed for the selected temperature.",
   "For the food-safety recommendation, reach at least 63°C before removing from heat and rest at least 3 minutes. Rest about 5 minutes for this bowl before slicing; temperature can rise during resting. Do not use carryover cooking to skip the minimum temperature.",
   "Cook the chopped onion in the cooking oil until soft, add the rice garlic briefly, then warm corn and the rice bowl sauce. Fold in the already cooked rice; never add dry rice at this stage.",
   "Slice rested steak across the grain and arrange over the hot rice. Spoon over the resting juices. Use a clean board and utensils for the cooked food."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the white rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Keep the steak butter and steak garlic separate from the rice ingredients.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9
    ]
   },
   {
    "title": "Dry, season and heat the pan",
    "text": "Pat the steak dry and season with the supplied steak seasoning. These pan instructions assume a boneless steak about 2–2.5 cm thick. Heat a heavy pan with a little oil over medium-high heat until shimmering; avoid burning oil. Thicker steaks need a gentler finish and more time.",
    "ingredientIndexes": [
     0,
     1
    ]
   },
   {
    "title": "Sear the first side",
    "text": "Lay the steak away from you. Leave it to develop a brown crust; begin checking after about 2 minutes for a 2–2.5 cm steak, earlier for thinner cuts. Flip once the crust releases. This is a browning checkpoint, not a promise of medium doneness.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Flip, baste and measure",
    "text": "After flipping, cook for about 1 minute, then lower the heat and add the butter and steak garlic. Tilt and spoon foaming butter over the steak, checking temperature frequently. Basting is part of this second-side cooking time, not an extra full sear. Do not let the butter blacken. Continue only as needed for the selected temperature.",
    "steakPhase": "baste",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     8,
     9
    ]
   },
   {
    "title": "Rest the steak",
    "text": "For the food-safety recommendation, reach at least 63°C before removing from heat and rest at least 3 minutes. Rest about 5 minutes for this bowl before slicing; temperature can rise during resting. Do not use carryover cooking to skip the minimum temperature.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Finish the rice bowl",
    "text": "Cook the chopped onion in the cooking oil until soft, add the rice garlic briefly, then warm corn and the rice bowl sauce. Fold in the already cooked rice; never add dry rice at this stage.",
    "ingredientIndexes": [
     2,
     3,
     4,
     5,
     6,
     7
    ]
   },
   {
    "title": "Slice and serve",
    "text": "Slice rested steak across the grain and arrange over the hot rice. Spoon over the resting juices. Use a clean board and utensils for the cooked food.",
    "ingredientIndexes": [
     0
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Steak temperatures describe approximate culinary preferences, not guaranteed timing. A thin steak may need much less time. Resting and basting are included in the method.",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — pan-seared steak and basting",
    "url": "https://www.recipetineats.com/how-to-cook-steak/"
   },
   {
    "title": "ThermoWorks — medium steak temperature",
    "url": "https://blog.thermoworks.com/what-temperature-is-medium/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "calamansi-pasta",
  "featured": true,
  "cuisine": "Italian-inspired",
  "rating": 4.8,
  "name": "Calamansi Cream Pasta",
  "category": "Pasta",
  "tags": [
   "Quick Meals",
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=75",
  "time": 20,
  "difficulty": "Beginner",
  "price": 289,
  "description": "Silky cream, a bright squeeze of calamansi, and golden garlic crumbs. Your new weeknight ritual.",
  "ingredients": [
   {
    "name": "Pasta",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Fresh cream",
    "amount": 150,
    "unit": "ml"
   },
   {
    "name": "Calamansi juice",
    "amount": 20,
    "unit": "ml"
   },
   {
    "name": "Garlic crumbs",
    "amount": 30,
    "unit": "g"
   },
   {
    "name": "Parsley",
    "amount": 10,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the pasta separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. ",
   "Warm the cream gently in a wide pan over low heat; do not boil hard. Loosen with a little reserved pasta water.",
   "Take the pan off the heat. Toss in drained pasta, then add calamansi juice gradually while tossing. Acid and high heat can split dairy. Add a little more pasta water if needed for a coating sauce.",
   "Fold through parsley and scatter the garlic crumbs over each serving at the end so they stay crisp. Serve immediately."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the pasta separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. ",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Warm the cream",
    "text": "Warm the cream gently in a wide pan over low heat; do not boil hard. Loosen with a little reserved pasta water.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Add citrus off the heat",
    "text": "Take the pan off the heat. Toss in drained pasta, then add calamansi juice gradually while tossing. Acid and high heat can split dairy. Add a little more pasta water if needed for a coating sauce.",
    "ingredientIndexes": [
     0,
     2
    ]
   },
   {
    "title": "Finish with crumbs",
    "text": "Fold through parsley and scatter the garlic crumbs over each serving at the end so they stay crisp. Serve immediately.",
    "ingredientIndexes": [
     3,
     4
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Good Food — lemon pasta technique",
    "url": "https://www.bbcgoodfood.com/recipes/lemon-green-bean-pasta"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "beef-salpicao",
  "featured": true,
  "cuisine": "Filipino",
  "rating": 4.9,
  "name": "Garlic Beef Salpicao",
  "category": "Filipino",
  "tags": [
   "Steak",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1760504526069-ff0f8bf6e4ca?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Easy",
  "price": 429,
  "description": "Juicy beef bites with toasted garlic and a rich soy-butter sauce, spooned over warm jasmine rice.",
  "ingredients": [
   {
    "name": "Beef cubes",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Garlic",
    "amount": 30,
    "unit": "g"
   },
   {
    "name": "Soy-butter sauce",
    "amount": 50,
    "unit": "ml"
   },
   {
    "name": "Mushrooms",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Dry the beef; cut into even bite-size pieces. Slice mushrooms.",
   "Gently cook sliced garlic in a little oil until pale gold, then remove it before it burns. Raise heat and brown the mushrooms; set aside.",
   "Sear beef in a single uncrowded layer, turning to brown each side. Start checking after 2 minutes; the cut and cube size control the actual cooking time.",
   "Lower heat and toss beef with soy-butter sauce and mushrooms until hot. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
   "Serve over cooked rice with the reserved garlic. Do not continue simmering the tender beef just to thicken the sauce."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Dry the beef; cut into even bite-size pieces. Slice mushrooms.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Toast garlic, then brown mushrooms",
    "text": "Gently cook sliced garlic in a little oil until pale gold, then remove it before it burns. Raise heat and brown the mushrooms; set aside.",
    "timerSeconds": 240,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     1,
     3
    ]
   },
   {
    "title": "Sear in batches",
    "text": "Sear beef in a single uncrowded layer, turning to brown each side. Start checking after 2 minutes; the cut and cube size control the actual cooking time.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Sauce and check",
    "text": "Lower heat and toss beef with soy-butter sauce and mushrooms until hot. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
    "ingredientIndexes": [
     2,
     3
    ]
   },
   {
    "title": "Plate",
    "text": "Serve over cooked rice with the reserved garlic. Do not continue simmering the tender beef just to thicken the sauce.",
    "ingredientIndexes": [
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Panlasang Pinoy — beef salpicao",
    "url": "https://panlasangpinoy.com/easy-beef-salpicao-recipe/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "tofu-sisig",
  "featured": true,
  "cuisine": "Filipino",
  "rating": 4.7,
  "name": "Crispy Tofu Sisig",
  "category": "Filipino",
  "tags": [
   "Quick Meals",
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1762305194201-077e7e23ccf2?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 269,
  "description": "Crisp tofu and sweet red onion with a creamy calamansi dressing, served with warm jasmine rice. All the sizzle, entirely plant based.",
  "ingredients": [
   {
    "name": "Firm tofu",
    "amount": 400,
    "unit": "g"
   },
   {
    "name": "Red onion",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Chili",
    "amount": 10,
    "unit": "g"
   },
   {
    "name": "Vegan calamansi mayo",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Spring onion",
    "amount": 20,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain and press tofu for 15–20 minutes if time allows, then blot thoroughly and cut into even cubes. This passive pressing time is additional.",
   "Pan-fry tofu in a single layer with oil over medium-high heat, turning as the surfaces become golden. Check after 8 minutes; allow roughly 8–12 minutes depending on moisture.",
   "Lower heat and add finely chopped onion and chili; stir until the onion softens slightly.",
   "Switch off the heat and fold through vegan calamansi mayo and spring onion. Serve immediately with hot rice; prolonged cooking softens the crisp tofu."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain and press tofu for 15–20 minutes if time allows, then blot thoroughly and cut into even cubes. This passive pressing time is additional.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4,
     5
    ]
   },
   {
    "title": "Crisp tofu",
    "text": "Pan-fry tofu in a single layer with oil over medium-high heat, turning as the surfaces become golden. Check after 8 minutes; allow roughly 8–12 minutes depending on moisture.",
    "timerSeconds": 480,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Warm aromatics",
    "text": "Lower heat and add finely chopped onion and chili; stir until the onion softens slightly.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Dress at the end",
    "text": "Switch off the heat and fold through vegan calamansi mayo and spring onion. Serve immediately with hot rice; prolonged cooking softens the crisp tofu.",
    "ingredientIndexes": [
     3,
     4
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Panlasang Pinoy — crispy tofu sisig",
    "url": "https://panlasangpinoy.com/crispy-tofu-sisig-vegan-recipe/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "miso-salmon",
  "featured": true,
  "cuisine": "Japanese-inspired",
  "rating": 4.9,
  "name": "Miso-Glazed Salmon",
  "category": "Healthy",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1523218689796-d4c2ef4f3d72?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Easy",
  "price": 449,
  "description": "Caramelized miso salmon, sesame greens, and fluffy rice. A feel-good dinner with a little extra glow.",
  "ingredients": [
   {
    "name": "Salmon fillet",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Miso glaze",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bok choy",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Sesame seeds",
    "amount": 10,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Preheat oven to 220°C. Pat salmon dry; spread miso glaze in a thin layer.",
   "Roast salmon on a lined tray, skin side down if skin-on. Start checking around 10 minutes for a roughly 2 cm fillet. The thickest centre must reach 63°C. Continue as necessary; tent loosely if the sugary glaze darkens too quickly.",
   "Slice bok choy; cook the stems in a little oil and water until nearly tender, then add the leaves and wilt. Do this while the fish cooks.",
   "Serve salmon and bok choy with cooked rice and sesame seeds. Time alone or a browned glaze does not establish fish doneness."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Preheat oven to 220°C. Pat salmon dry; spread miso glaze in a thin layer.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Roast and check the centre",
    "text": "Roast salmon on a lined tray, skin side down if skin-on. Start checking around 10 minutes for a roughly 2 cm fillet. The thickest centre must reach 63°C. Continue as necessary; tent loosely if the sugary glaze darkens too quickly.",
    "timerSeconds": 600,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Cook bok choy separately",
    "text": "Slice bok choy; cook the stems in a little oil and water until nearly tender, then add the leaves and wilt. Do this while the fish cooks.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve salmon and bok choy with cooked rice and sesame seeds. Time alone or a browned glaze does not establish fish doneness.",
    "ingredientIndexes": [
     2,
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Just One Cookbook — miso salmon",
    "url": "https://www.justonecookbook.com/miso-salmon/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "chicken-adobo",
  "featured": true,
  "cuisine": "Filipino",
  "rating": 4.8,
  "name": "Chicken Adobo",
  "category": "Filipino",
  "tags": [],
  "image": "https://images.unsplash.com/photo-1596699917234-1c93c61a1083?auto=format&fit=crop&w=800&q=75",
  "time": 45,
  "difficulty": "Easy",
  "price": 349,
  "description": "The comforting classic: tender chicken, fragrant bay, and a glossy vinegar-soy sauce made for rice.",
  "ingredients": [
   {
    "name": "Chicken thigh",
    "amount": 400,
    "unit": "g"
   },
   {
    "name": "Cane vinegar",
    "amount": 60,
    "unit": "ml"
   },
   {
    "name": "Soy sauce",
    "amount": 50,
    "unit": "ml"
   },
   {
    "name": "Bay leaves",
    "amount": 2,
    "unit": "leaves"
   },
   {
    "name": "Peppercorns",
    "amount": 3,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Keep raw chicken separate from ready-to-eat foods. Leave thighs whole; bone-in thighs take longer than boneless.",
   "Brown chicken in a little oil over medium-high heat, turning to colour both sides; this does not cook it through.",
   "Add soy sauce, vinegar, bay leaves and peppercorns plus enough water to prevent drying. Bring to a simmer, then cover loosely and cook gently. Begin checking boneless thighs after 20 minutes; bone-in may need 30–40 minutes or longer. Add water if needed.",
   "Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Once cooked, uncover and reduce sauce briefly to taste without drying the chicken. Serve over rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Keep raw chicken separate from ready-to-eat foods. Leave thighs whole; bone-in thighs take longer than boneless.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4,
     5
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Brown chicken in a little oil over medium-high heat, turning to colour both sides; this does not cook it through.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Braise gently",
    "text": "Add soy sauce, vinegar, bay leaves and peppercorns plus enough water to prevent drying. Bring to a simmer, then cover loosely and cook gently. Begin checking boneless thighs after 20 minutes; bone-in may need 30–40 minutes or longer. Add water if needed.",
    "timerSeconds": 1200,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2,
     3,
     4
    ]
   },
   {
    "title": "Check and reduce",
    "text": "Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Once cooked, uncover and reduce sauce briefly to taste without drying the chicken. Serve over rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Bone-in thighs may extend the estimate beyond 45 minutes; check temperature rather than using a fixed endpoint.",
  "cookingSources": [
   {
    "title": "Panlasang Pinoy — chicken adobo",
    "url": "https://panlasangpinoy.com/filipino-chicken-adobo-recipe/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "vegetable-kare-kare",
  "featured": false,
  "cuisine": "Filipino",
  "name": "Vegetable Kare-Kare",
  "category": "Filipino",
  "tags": [
   "Vegetarian",
   "Healthy"
  ],
  "image": "https://images.unsplash.com/photo-1559561723-c3f4195835db?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Easy",
  "price": 319,
  "description": "A colorful vegetable bowl with creamy peanut sauce and warm rice.",
  "ingredients": [
   {
    "name": "Eggplant",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Bok choy",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Green beans",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Peanut sauce",
    "amount": 120,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut eggplant into even pieces; trim green beans and separate bok choy stems and leaves.",
   "Cook eggplant in a little oil until beginning to soften. Add green beans, bok choy stems and a splash of water; cover and cook until crisp-tender, checking after 5 minutes.",
   "Stir in the prepared peanut sauce, thinning with water if needed. Simmer gently until eggplant and beans are tender.",
   "Fold in bok choy leaves just until wilted. Serve over cooked rice. The kit uses ready-made peanut sauce; no long meat braise is required."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut eggplant into even pieces; trim green beans and separate bok choy stems and leaves.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Tenderise vegetables",
    "text": "Cook eggplant in a little oil until beginning to soften. Add green beans, bok choy stems and a splash of water; cover and cook until crisp-tender, checking after 5 minutes.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     1,
     2
    ]
   },
   {
    "title": "Warm peanut sauce",
    "text": "Stir in the prepared peanut sauce, thinning with water if needed. Simmer gently until eggplant and beans are tender.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     3
    ]
   },
   {
    "title": "Finish greens",
    "text": "Fold in bok choy leaves just until wilted. Serve over cooked rice. The kit uses ready-made peanut sauce; no long meat braise is required.",
    "ingredientIndexes": [
     1,
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Panlasang Pinoy — kare-kare vegetable sequence",
    "url": "https://panlasangpinoy.com/kare-kare-recipe/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "tomato-basil-pasta",
  "featured": false,
  "cuisine": "Italian-inspired",
  "name": "Tomato Basil Pasta",
  "category": "Pasta",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=800&q=75",
  "time": 20,
  "difficulty": "Beginner",
  "price": 259,
  "description": "A simple tomato and basil pasta with garlic and a generous finish of parmesan.",
  "ingredients": [
   {
    "name": "Pasta",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Tomato sauce",
    "amount": 250,
    "unit": "g"
   },
   {
    "name": "Fresh basil",
    "amount": 15,
    "unit": "g"
   },
   {
    "name": "Garlic",
    "amount": 20,
    "unit": "g"
   },
   {
    "name": "Vegetarian parmesan",
    "amount": 30,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the pasta separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Chop garlic and tear basil.",
   "Soften garlic briefly in a little oil over medium-low heat without browning. Add tomato sauce and simmer gently until hot; stir to prevent catching.",
   "Toss drained pasta with the hot sauce and a splash of reserved cooking water. Turn off the heat, then add fresh basil and vegetarian parmesan. Serve while the sauce coats the pasta."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the pasta separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Chop garlic and tear basil.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Warm tomato sauce",
    "text": "Soften garlic briefly in a little oil over medium-low heat without browning. Add tomato sauce and simmer gently until hot; stir to prevent catching.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     1,
     3
    ]
   },
   {
    "title": "Toss and finish",
    "text": "Toss drained pasta with the hot sauce and a splash of reserved cooking water. Turn off the heat, then add fresh basil and vegetarian parmesan. Serve while the sauce coats the pasta.",
    "ingredientIndexes": [
     0,
     2,
     4
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Love and Lemons — tomato sauce and fresh basil finishing",
    "url": "https://www.loveandlemons.com/fresh-tomato-sauce/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "lemon-chicken",
  "featured": false,
  "cuisine": "Mediterranean-inspired",
  "name": "Lemon Herb Chicken",
  "category": "Healthy",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Easy",
  "price": 359,
  "description": "Golden chicken with a bright lemon dressing and crisp seasonal greens.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 350,
    "unit": "g"
   },
   {
    "name": "Lemon herb dressing",
    "amount": 60,
    "unit": "ml"
   },
   {
    "name": "Mixed greens",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Cherry tomatoes",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Couscous",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Wash and cut the salad vegetables using a clean board. Reserve some dressing in a clean bowl before any touches raw meat.",
   "Slice breast horizontally into even cutlets about 1.5 cm thick. Coat with part of the dressing. Keep any portion that touches raw chicken separate; discard it after use.",
   "Heat a little oil over medium heat. Cook cutlets until browned, turning to cook both sides. Begin checking after about 3 minutes on the first side and 2 minutes after turning; continue as needed. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
   "Rest chicken briefly on a clean plate and slice. Serve with couscous and the uncooked mixed greens and cherry tomatoes. Use only the reserved clean dressing on the salad."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Wash and cut the salad vegetables using a clean board. Reserve some dressing in a clean bowl before any touches raw meat.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Prepare even chicken pieces",
    "text": "Slice breast horizontally into even cutlets about 1.5 cm thick. Coat with part of the dressing. Keep any portion that touches raw chicken separate; discard it after use.",
    "ingredientIndexes": []
   },
   {
    "title": "Pan-cook chicken",
    "text": "Heat a little oil over medium heat. Cook cutlets until browned, turning to cook both sides. Begin checking after about 3 minutes on the first side and 2 minutes after turning; continue as needed. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Rest and assemble",
    "text": "Rest chicken briefly on a clean plate and slice. Serve with couscous and the uncooked mixed greens and cherry tomatoes. Use only the reserved clean dressing on the salad.",
    "ingredientIndexes": [
     2,
     3,
     4
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — lemon-marinated chicken technique",
    "url": "https://www.recipetineats.com/greek-chicken-gyros-with-tzatziki/"
   },
   {
    "title": "Love and Lemons — couscous types and cooking",
    "url": "https://www.loveandlemons.com/how-to-cook-couscous/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "korean-beef-bowl",
  "name": "Korean Beef Bowl",
  "cuisine": "Korean-inspired",
  "category": "Rice bowls",
  "featured": true,
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1718777791262-c66d11baaa3b?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 399,
  "description": "Sweet, savory, and a little spicy. A comforting bowl made for your weeknight table.",
  "ingredients": [
   {
    "name": "Beef strips",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Soy sesame sauce",
    "amount": 60,
    "unit": "ml"
   },
   {
    "name": "Carrot",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Sesame seeds",
    "amount": 10,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice beef across the grain into thin strips about 3 mm thick. Thick or tough stewing beef is not interchangeable with these quick-cooking strips.",
   "Stir-fry carrot cut into thin matchsticks in a little oil until just tender; lift out so the beef can brown without crowding.",
   "Heat the pan over medium-high heat. Sear beef in small batches, turning and separating the strips. Begin checking after 1 minute; add more time as needed rather than cooking every cut for the same duration.",
   "Return vegetables and add soy sesame sauce. Toss briefly until coated. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
   "Serve with the prepared rice and sesame seeds."
  ],
  "rating": 4.8,
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice beef across the grain into thin strips about 3 mm thick. Thick or tough stewing beef is not interchangeable with these quick-cooking strips.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Cook the vegetables first",
    "text": "Stir-fry carrot cut into thin matchsticks in a little oil until just tender; lift out so the beef can brown without crowding.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Sear thin beef",
    "text": "Heat the pan over medium-high heat. Sear beef in small batches, turning and separating the strips. Begin checking after 1 minute; add more time as needed rather than cooking every cut for the same duration.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Glaze and check",
    "text": "Return vegetables and add soy sesame sauce. Toss briefly until coated. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
    "ingredientIndexes": [
     1
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared rice and sesame seeds.",
    "ingredientIndexes": [
     4
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Maangchi — thin-sliced beef and mushroom bulgogi",
    "url": "https://www.maangchi.com/recipe/bulgogi"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "thai-coconut-curry",
  "name": "Thai Coconut Curry",
  "cuisine": "Thai-inspired",
  "category": "Curry",
  "featured": true,
  "tags": [
   "Quick Meals",
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 319,
  "description": "Fragrant herbs, bright citrus, and generous flavor in every bite.",
  "ingredients": [
   {
    "name": "Firm tofu",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Coconut milk",
    "amount": 200,
    "unit": "ml"
   },
   {
    "name": "Vegetarian Thai curry paste",
    "amount": 35,
    "unit": "g"
   },
   {
    "name": "Mixed vegetables",
    "amount": 250,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain tofu and cut into cubes. Cut dense mixed vegetables smaller than soft vegetables.",
   "Heat a little oil over medium-low heat and stir the supplied vegetarian curry paste until fragrant without scorching.",
   "Add coconut milk and a splash of water if needed. Bring to a gentle simmer, add dense vegetables first, and cook until nearly tender. Begin checking after 5 minutes; root vegetables may need longer.",
   "Add tofu and the quick-cooking vegetables. Simmer gently until the tofu is hot through and all vegetables are tender; avoid a hard boil. Serve with cooked rice."
  ],
  "rating": 4.8,
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain tofu and cut into cubes. Cut dense mixed vegetables smaller than soft vegetables.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Fry the paste",
    "text": "Heat a little oil over medium-low heat and stir the supplied vegetarian curry paste until fragrant without scorching.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Simmer dense vegetables first",
    "text": "Add coconut milk and a splash of water if needed. Bring to a gentle simmer, add dense vegetables first, and cook until nearly tender. Begin checking after 5 minutes; root vegetables may need longer.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     1
    ]
   },
   {
    "title": "Add tofu and soft vegetables",
    "text": "Add tofu and the quick-cooking vegetables. Simmer gently until the tofu is hot through and all vegetables are tender; avoid a hard boil. Serve with cooked rice.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — Thai red curry",
    "url": "https://www.recipetineats.com/thai-red-curry-with-chicken/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "chicken-tacos",
  "name": "Smoky Chicken Tacos",
  "cuisine": "Mexican-inspired",
  "category": "Tacos",
  "featured": true,
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 349,
  "description": "Big flavor and colorful toppings, ready to share around the table.",
  "ingredients": [
   {
    "name": "Chicken strips",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Corn tortillas",
    "amount": 6,
    "unit": "pieces"
   },
   {
    "name": "Smoky spice mix",
    "amount": 15,
    "unit": "g"
   },
   {
    "name": "Tomato salsa",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Shredded cabbage",
    "amount": 100,
    "unit": "g"
   }
  ],
  "steps": [
   "Set out the measured ingredients. Warm the tortillas in a dry pan according to their packet just before serving; keep covered. Keep salsa and cabbage chilled until serving. Dry chicken strips and coat with the smoky spice mix.",
   "Pan-fry chicken in a little oil over medium-high heat, in batches if crowded. Turn regularly; begin checking after about 5 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
   "Place cooked chicken in warm tortillas. Add tomato salsa and uncooked shredded cabbage immediately before serving; do not simmer the cabbage with raw chicken."
  ],
  "rating": 4.8,
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Set out the measured ingredients. Warm the tortillas in a dry pan according to their packet just before serving; keep covered. Keep salsa and cabbage chilled until serving. Dry chicken strips and coat with the smoky spice mix.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Cook strips",
    "text": "Pan-fry chicken in a little oil over medium-high heat, in batches if crowded. Turn regularly; begin checking after about 5 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Fill tortillas",
    "text": "Place cooked chicken in warm tortillas. Add tomato salsa and uncooked shredded cabbage immediately before serving; do not simmer the cabbage with raw chicken.",
    "ingredientIndexes": [
     3,
     4
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — chicken tacos",
    "url": "https://www.recipetineats.com/chicken-tacos-with-sauce/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "chickpea-masala",
  "name": "Creamy Chickpea Masala",
  "cuisine": "Indian-inspired",
  "category": "Curry",
  "featured": true,
  "tags": [
   "Quick Meals",
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1707448829764-9474458021ed?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 299,
  "description": "Warm spices and a comforting sauce, with everything portioned for you.",
  "ingredients": [
   {
    "name": "Cooked chickpeas",
    "amount": 350,
    "unit": "g"
   },
   {
    "name": "Tomato masala sauce",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Coconut cream",
    "amount": 100,
    "unit": "ml"
   },
   {
    "name": "Spinach",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Basmati rice",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
   "Warm cooked chickpeas with tomato masala sauce and coconut cream over low heat. Add a little water if too thick.",
   "Fold in spinach only at the end and let it wilt. Serve with the prepared rice."
  ],
  "rating": 4.8,
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Warm the cooked legumes",
    "text": "Warm cooked chickpeas with tomato masala sauce and coconut cream over low heat. Add a little water if too thick.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     1,
     2
    ]
   },
   {
    "title": "Finish and serve",
    "text": "Fold in spinach only at the end and let it wilt. Serve with the prepared rice.",
    "ingredientIndexes": [
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Short methods require fully cooked legumes. The ingredient list does not specify a dry weight for these kits; do not substitute dry beans without cooking separately.",
  "cookingSources": [
   {
    "title": "Good Food — cooked chickpea masala",
    "url": "https://www.bbcgoodfood.com/recipes/chana-masala"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "sesame-tofu-bowl",
  "name": "Sesame Tofu Bowl",
  "cuisine": "Korean-inspired",
  "category": "Rice bowls",
  "featured": false,
  "tags": [
   "Quick Meals",
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 289,
  "description": "Sweet, savory, and a little spicy. A comforting bowl made for your weeknight table.",
  "ingredients": [
   {
    "name": "Firm tofu",
    "amount": 350,
    "unit": "g"
   },
   {
    "name": "Sesame soy dressing",
    "amount": 50,
    "unit": "ml"
   },
   {
    "name": "Cucumber",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Carrot",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain and press tofu for 15–20 minutes if needed, blot dry and cut into even 2 cm cubes. Pressing time is additional. Cut cucumber and carrot for a fresh topping; keep cucumber uncooked.",
   "Pan-fry tofu with a little oil over medium-high heat, turning to brown several sides. Check after 8 minutes; wet tofu can take longer to crisp.",
   "Turn off heat. Serve tofu over cooked rice with fresh cucumber and carrot, then drizzle the sesame soy dressing."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain and press tofu for 15–20 minutes if needed, blot dry and cut into even 2 cm cubes. Pressing time is additional. Cut cucumber and carrot for a fresh topping; keep cucumber uncooked.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Pan-fry tofu",
    "text": "Pan-fry tofu with a little oil over medium-high heat, turning to brown several sides. Check after 8 minutes; wet tofu can take longer to crisp.",
    "timerSeconds": 480,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Dress and assemble",
    "text": "Turn off heat. Serve tofu over cooked rice with fresh cucumber and carrot, then drizzle the sesame soy dressing.",
    "ingredientIndexes": [
     1,
     2,
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Just One Cookbook — tofu pressing and pan-frying",
    "url": "https://www.justonecookbook.com/teriyaki-tofu/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "thai-basil-chicken",
  "name": "Thai Basil Chicken",
  "cuisine": "Thai-inspired",
  "category": "Rice bowls",
  "featured": false,
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1696906594893-e9995c4d7082?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Fragrant herbs, bright citrus, and generous flavor in every bite.",
  "ingredients": [
   {
    "name": "Ground chicken",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Basil leaves",
    "amount": 20,
    "unit": "g"
   },
   {
    "name": "Garlic chili sauce",
    "amount": 50,
    "unit": "ml"
   },
   {
    "name": "Green beans",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Trim and slice green beans into short pieces. Reserve basil for the end.",
   "Stir-fry beans with a little oil, then add a splash of water and cover until crisp-tender. Set aside.",
   "Add a little oil to the hot pan and stir-fry ground chicken, breaking up clumps. Add garlic chili sauce and return beans once the chicken is nearly cooked. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
   "Turn off heat and toss through basil just until wilted. Serve immediately over cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Trim and slice green beans into short pieces. Reserve basil for the end.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Cook green beans first",
    "text": "Stir-fry beans with a little oil, then add a splash of water and cover until crisp-tender. Set aside.",
    "timerSeconds": 240,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Cook ground chicken",
    "text": "Add a little oil to the hot pan and stir-fry ground chicken, breaking up clumps. Add garlic chili sauce and return beans once the chicken is nearly cooked. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     2
    ]
   },
   {
    "title": "Finish with basil",
    "text": "Turn off heat and toss through basil just until wilted. Serve immediately over cooked rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — Thai basil chicken",
    "url": "https://www.recipetineats.com/thai-basil-chicken-stir-fry/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "black-bean-tacos",
  "name": "Black Bean Tacos",
  "cuisine": "Mexican-inspired",
  "category": "Tacos",
  "featured": false,
  "tags": [
   "Quick Meals",
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=75",
  "time": 20,
  "difficulty": "Beginner",
  "price": 269,
  "description": "Big flavor and colorful toppings, ready to share around the table.",
  "ingredients": [
   {
    "name": "Cooked black beans",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Corn tortillas",
    "amount": 6,
    "unit": "pieces"
   },
   {
    "name": "Tomato salsa",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Sweetcorn",
    "amount": 100,
    "unit": "g"
   },
   {
    "name": "Shredded cabbage",
    "amount": 100,
    "unit": "g"
   }
  ],
  "steps": [
   "Set out the measured ingredients. Warm the tortillas in a dry pan according to their packet just before serving; keep covered. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
   "Simmer cooked black beans and sweetcorn with part of the salsa and a splash of water until steaming hot throughout; stir and check after 5 minutes.",
   "Spoon into warm tortillas. Finish with the remaining ready-to-eat salsa and fresh uncooked cabbage."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Set out the measured ingredients. Warm the tortillas in a dry pan according to their packet just before serving; keep covered. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Heat beans and corn",
    "text": "Simmer cooked black beans and sweetcorn with part of the salsa and a splash of water until steaming hot throughout; stir and check after 5 minutes.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     3
    ]
   },
   {
    "title": "Fill and finish",
    "text": "Spoon into warm tortillas. Finish with the remaining ready-to-eat salsa and fresh uncooked cabbage.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Love and Lemons — cooked black bean tacos",
    "url": "https://www.loveandlemons.com/black-bean-tacos/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "butter-chicken",
  "name": "Butter Chicken",
  "cuisine": "Indian-inspired",
  "category": "Curry",
  "featured": false,
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 379,
  "description": "Warm spices and a comforting sauce, with everything portioned for you.",
  "ingredients": [
   {
    "name": "Chicken thigh",
    "amount": 350,
    "unit": "g"
   },
   {
    "name": "Butter masala sauce",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Fresh cream",
    "amount": 80,
    "unit": "ml"
   },
   {
    "name": "Basmati rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Fresh coriander",
    "amount": 10,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut boneless thigh into even 2 cm pieces; whole or bone-in thighs require longer and are not covered by this estimate.",
   "Brown chicken pieces in a little oil over medium-high heat, turning to colour the surfaces.",
   "Add butter masala sauce and enough water to keep it from catching. Simmer gently, stirring occasionally. Begin checking after 8 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
   "Lower heat and stir in fresh cream just until hot. Do not boil aggressively. Finish with coriander and serve over rice. The kit supplies prepared sauce, not the raw marinade used in from-scratch recipes."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut boneless thigh into even 2 cm pieces; whole or bone-in thighs require longer and are not covered by this estimate.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Brown chicken pieces in a little oil over medium-high heat, turning to colour the surfaces.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Simmer in prepared sauce",
    "text": "Add butter masala sauce and enough water to keep it from catching. Simmer gently, stirring occasionally. Begin checking after 8 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
    "timerSeconds": 480,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     1
    ]
   },
   {
    "title": "Finish with cream",
    "text": "Lower heat and stir in fresh cream just until hot. Do not boil aggressively. Finish with coriander and serve over rice. The kit supplies prepared sauce, not the raw marinade used in from-scratch recipes.",
    "ingredientIndexes": [
     2
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — butter chicken technique",
    "url": "https://www.recipetineats.com/butter-chicken/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-bbq-chicken-rice-bowl",
  "name": "BBQ Chicken Rice Bowl",
  "featured": false,
  "cuisine": "American",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1679279726946-a158b8bcaa23?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with bbq sauce, sweetcorn, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "BBQ sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Sweetcorn",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare sweetcorn separately from raw meat; slice dense vegetables thinly.",
   "Cook sweetcorn in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
   "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
   "Lower heat, add bbq sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
   "Serve over the prepared base. Use a clean plate and utensils for cooked chicken."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare sweetcorn separately from raw meat; slice dense vegetables thinly.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables",
    "text": "Cook sweetcorn in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Finish with sauce and check",
    "text": "Lower heat, add bbq sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve over the prepared base. Use a clean plate and utensils for cooked chicken.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — honey mustard chicken",
    "url": "https://www.recipetineats.com/honey-mustard-chicken/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-creamy-mushroom-chicken",
  "name": "Creamy Mushroom Chicken",
  "featured": false,
  "cuisine": "American",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1788462612914-44793f2980f2?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with mushroom cream sauce, green beans, and mashed potato mix. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Mashed potato mix",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Mushroom cream sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Green beans",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Prepare the mashed potato mix with water according to its packet; this kit does not include extra milk or butter. Cut chicken into even 2 cm pieces. Prepare green beans separately from raw meat; slice dense vegetables thinly.",
   "Cook green beans in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
   "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
   "Lower heat, add mushroom cream sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
   "Serve over the prepared base. Use a clean plate and utensils for cooked chicken."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Prepare the mashed potato mix with water according to its packet; this kit does not include extra milk or butter. Cut chicken into even 2 cm pieces. Prepare green beans separately from raw meat; slice dense vegetables thinly.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables",
    "text": "Cook green beans in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Finish with sauce and check",
    "text": "Lower heat, add mushroom cream sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve over the prepared base. Use a clean plate and utensils for cooked chicken.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — honey mustard chicken",
    "url": "https://www.recipetineats.com/honey-mustard-chicken/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-cajun-shrimp-rice",
  "name": "Cajun Shrimp Rice",
  "featured": false,
  "cuisine": "American",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1723325697529-6e2679650b39?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Peeled shrimp with cajun tomato sauce, bell pepper, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Peeled shrimp",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Cajun tomato sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bell pepper",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare bell pepper before starting the shrimp.",
   "Cook bell pepper separately until softened in a little oil over medium heat. Set aside; shrimp cook much faster than dense vegetables.",
   "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
   "Lower the heat and add cajun tomato sauce with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
   "Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare bell pepper before starting the shrimp.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook vegetables first",
    "text": "Cook bell pepper separately until softened in a little oil over medium heat. Set aside; shrimp cook much faster than dense vegetables.",
    "timerSeconds": 240,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Cook shrimp briefly",
    "text": "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Coat gently",
    "text": "Lower the heat and add cajun tomato sauce with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "NOAA — shrimp in garlic butter",
    "url": "https://repository.library.noaa.gov/view/noaa/35356/noaa_35356_DS1.pdf"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-cheddar-mac-and-cheese",
  "name": "Cheddar Mac & Cheese",
  "featured": false,
  "cuisine": "American",
  "category": "Pasta",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1667499989723-c4ab9549d63c?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Broccoli with cheddar cheese sauce, sweetcorn, and macaroni. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Broccoli",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Macaroni",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Cheddar cheese sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Sweetcorn",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the macaroni separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Cut broccoli into small florets. Cook macaroni according to its packet; add broccoli to the pasta water for the last few minutes, checking for tenderness.",
   "Warm cheddar cheese sauce and sweetcorn over low heat, stirring until hot. Add a splash of water if needed; do not boil hard.",
   "Drain cooked macaroni and broccoli and fold into the sauce. Serve when corn and sauce are hot throughout. This kit supplies ready-made sauce; no roux or extra dairy is required."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the macaroni separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Cut broccoli into small florets. Cook macaroni according to its packet; add broccoli to the pasta water for the last few minutes, checking for tenderness.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Warm cheese sauce gently",
    "text": "Warm cheddar cheese sauce and sweetcorn over low heat, stirring until hot. Add a splash of water if needed; do not boil hard.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2,
     3
    ]
   },
   {
    "title": "Combine",
    "text": "Drain cooked macaroni and broccoli and fold into the sauce. Serve when corn and sauce are hot throughout. This kit supplies ready-made sauce; no roux or extra dairy is required.",
    "ingredientIndexes": [
     0,
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — macaroni and cheese technique",
    "url": "https://www.recipetineats.com/stovetop-macaroni-cheese/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-honey-mustard-chicken",
  "name": "Honey Mustard Chicken",
  "featured": false,
  "cuisine": "American",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with honey mustard sauce, carrot, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Honey mustard sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Carrot",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare carrot separately from raw meat; slice dense vegetables thinly.",
   "Cook carrot in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
   "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
   "Lower heat, add honey mustard sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
   "Serve over the prepared base. Use a clean plate and utensils for cooked chicken."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare carrot separately from raw meat; slice dense vegetables thinly.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables",
    "text": "Cook carrot in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Finish with sauce and check",
    "text": "Lower heat, add honey mustard sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve over the prepared base. Use a clean plate and utensils for cooked chicken.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — honey mustard chicken",
    "url": "https://www.recipetineats.com/honey-mustard-chicken/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-smoky-beef-rice-bowl",
  "name": "Smoky Beef Rice Bowl",
  "featured": false,
  "cuisine": "American",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1679279726937-122c49626802?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Ground beef with smoky tomato sauce, bell pepper, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Ground beef",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Smoky tomato sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bell pepper",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Dice bell pepper finely for even cooking.",
   "Cook bell pepper in a little oil over medium heat until beginning to soften; finely diced carrot needs longer than corn.",
   "Add ground beef and break up clumps. Cook, stirring, until browned. Begin checking after 5 minutes. Check several places reach 71°C; steak doneness settings do not apply to ground meat.",
   "Stir in smoky tomato sauce and a splash of water if needed. Simmer gently until hot and the vegetables are tender, stirring to avoid scorching. This is a quick kit sauce, not a long-braised ragù.",
   "Serve with the cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Dice bell pepper finely for even cooking.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Soften vegetables",
    "text": "Cook bell pepper in a little oil over medium heat until beginning to soften; finely diced carrot needs longer than corn.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown ground beef",
    "text": "Add ground beef and break up clumps. Cook, stirring, until browned. Begin checking after 5 minutes. Check several places reach 71°C; steak doneness settings do not apply to ground meat.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Simmer prepared sauce",
    "text": "Stir in smoky tomato sauce and a splash of water if needed. Simmer gently until hot and the vegetables are tender, stirring to avoid scorching. This is a quick kit sauce, not a long-braised ragù.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the cooked rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — ground beef stir-fry technique",
    "url": "https://www.recipetineats.com/asian-beef-bowls/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-chicken-inasal-bowl",
  "name": "Chicken Inasal Bowl",
  "featured": false,
  "cuisine": "Filipino",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken thigh with inasal marinade, cucumber, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken thigh",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Inasal marinade",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Cucumber",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use boneless thigh opened to even thickness. Reserve clean marinade for basting before adding raw chicken to the remainder. Wash and slice cucumber on a separate clean board.",
   "Coat chicken with the remaining inasal marinade and refrigerate for 3 hours or according to the kit label; overnight is possible if the label permits. This waiting time is additional to the cooking estimate. Discard marinade that touched raw chicken.",
   "Cook over medium heat, turning to brown both sides without burning the marinade. Begin checking after about 4 minutes per side; continue as needed. Baste only with the reserved clean portion. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
   "Rest chicken about 5 minutes on a clean plate, then serve with rice and fresh uncooked cucumber. Bone-in thighs take longer than this boneless method."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use boneless thigh opened to even thickness. Reserve clean marinade for basting before adding raw chicken to the remainder. Wash and slice cucumber on a separate clean board.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Marinate under refrigeration",
    "text": "Coat chicken with the remaining inasal marinade and refrigerate for 3 hours or according to the kit label; overnight is possible if the label permits. This waiting time is additional to the cooking estimate. Discard marinade that touched raw chicken.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Pan-cook or grill",
    "text": "Cook over medium heat, turning to brown both sides without burning the marinade. Begin checking after about 4 minutes per side; continue as needed. Baste only with the reserved clean portion. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
    "timerSeconds": 240,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Rest and serve",
    "text": "Rest chicken about 5 minutes on a clean plate, then serve with rice and fresh uncooked cucumber. Bone-in thighs take longer than this boneless method.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Allow an additional 3 hours refrigerated marinating; the displayed estimate is active preparation and cooking only.",
  "cookingSources": [
   {
    "title": "Panlasang Pinoy — chicken inasal",
    "url": "https://panlasangpinoy.com/grilled-chicken-inasal-recipe/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-beef-bistek",
  "name": "Beef Bistek",
  "featured": false,
  "cuisine": "Filipino",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1723893905879-0e309c2a8e06?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Beef strips with calamansi soy sauce, onion, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Beef strips",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Calamansi soy sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Onion",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice beef across the grain into thin strips about 3 mm thick. Thick or tough stewing beef is not interchangeable with these quick-cooking strips.",
   "Stir-fry thinly sliced onion in a little oil until just tender; lift out so the beef can brown without crowding.",
   "Heat the pan over medium-high heat. Sear beef in small batches, turning and separating the strips. Begin checking after 1 minute; add more time as needed rather than cooking every cut for the same duration.",
   "Return vegetables and add calamansi soy sauce. Toss briefly until coated. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
   "Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice beef across the grain into thin strips about 3 mm thick. Thick or tough stewing beef is not interchangeable with these quick-cooking strips.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables first",
    "text": "Stir-fry thinly sliced onion in a little oil until just tender; lift out so the beef can brown without crowding.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Sear thin beef",
    "text": "Heat the pan over medium-high heat. Sear beef in small batches, turning and separating the strips. Begin checking after 1 minute; add more time as needed rather than cooking every cut for the same duration.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Glaze and check",
    "text": "Return vegetables and add calamansi soy sauce. Toss briefly until coated. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Panlasang Pinoy — bistek",
    "url": "https://panlasangpinoy.com/bistek-tagalog-beefsteak-recipe/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-chicken-afritada",
  "name": "Chicken Afritada",
  "featured": false,
  "cuisine": "Filipino",
  "category": "Curry",
  "tags": [],
  "image": "https://images.unsplash.com/photo-1694579740719-0e601c5d2437?auto=format&fit=crop&w=800&q=75",
  "time": 40,
  "difficulty": "Easy",
  "price": 329,
  "description": "Chicken thigh with tomato afritada sauce, potato and carrot, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken thigh",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Tomato afritada sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Potato and carrot",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use boneless chicken thigh in 2 cm pieces. Peel and cut potato and carrot into even 1 cm cubes.",
   "Brown chicken in a little oil over medium-high heat; turn to colour the surfaces.",
   "Add prepared sauce, potato and carrot, plus enough water to keep the pieces just covered. Simmer gently, stirring occasionally. Begin checking after 15 minutes; keep cooking until a knife slides easily into the potato.",
   "Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Reduce uncovered briefly if the sauce is too thin; stir frequently so the prepared sauce does not catch. Serve with cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use boneless chicken thigh in 2 cm pieces. Peel and cut potato and carrot into even 1 cm cubes.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Brown the chicken",
    "text": "Brown chicken in a little oil over medium-high heat; turn to colour the surfaces.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Simmer with root vegetables",
    "text": "Add prepared sauce, potato and carrot, plus enough water to keep the pieces just covered. Simmer gently, stirring occasionally. Begin checking after 15 minutes; keep cooking until a knife slides easily into the potato.",
    "timerSeconds": 900,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Check and finish",
    "text": "Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Reduce uncovered briefly if the sauce is too thin; stir frequently so the prepared sauce does not catch. Serve with cooked rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Timing assumes boneless thigh and small root-vegetable cubes. Bone-in chicken and larger potato pieces need longer.",
  "cookingSources": [
   {
    "title": "Panlasang Pinoy — chicken afritada",
    "url": "https://panlasangpinoy.com/chicken-afritada-recipe/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-pork-menudo",
  "name": "Pork Menudo",
  "featured": false,
  "cuisine": "Filipino",
  "category": "Curry",
  "tags": [],
  "image": "https://images.unsplash.com/photo-1579640873954-766bf0235bf3?auto=format&fit=crop&w=800&q=75",
  "time": 65,
  "difficulty": "Easy",
  "price": 329,
  "description": "Pork cubes with menudo tomato sauce, potato and bell pepper, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Pork cubes",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Menudo tomato sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Potato and bell pepper",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut pork into even 2 cm cubes and potato into 1 cm cubes. Keep bell pepper separate for a later addition.",
   "Brown pork in batches in a little oil over medium-high heat.",
   "Add menudo tomato sauce and enough water to keep the pork partly covered. Cover and simmer gently; check after 30 minutes, then continue until nearly tender. Add water as needed; shoulder can take longer.",
   "Add potato and simmer until knife-tender, checking after 10 minutes. Add bell pepper for the final few minutes so it softens without falling apart.",
   "Whole-cut pork must reach at least 63°C and rest at least 3 minutes before eating; a braise generally needs longer for tenderness. Serve only when both pork and potato are tender, with cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut pork into even 2 cm cubes and potato into 1 cm cubes. Keep bell pepper separate for a later addition.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Brown pork",
    "text": "Brown pork in batches in a little oil over medium-high heat.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Braise until almost tender",
    "text": "Add menudo tomato sauce and enough water to keep the pork partly covered. Cover and simmer gently; check after 30 minutes, then continue until nearly tender. Add water as needed; shoulder can take longer.",
    "timerSeconds": 1800,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Add vegetables",
    "text": "Add potato and simmer until knife-tender, checking after 10 minutes. Add bell pepper for the final few minutes so it softens without falling apart.",
    "timerSeconds": 600,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Check and serve",
    "text": "Whole-cut pork must reach at least 63°C and rest at least 3 minutes before eating; a braise generally needs longer for tenderness. Serve only when both pork and potato are tender, with cooked rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. This simplified kit has no liver. Pork cut and cube size can extend braising; the old quick stir-fry method was unsuitable.",
  "cookingSources": [
   {
    "title": "Kawaling Pinoy — pork menudo",
    "url": "https://www.kawalingpinoy.com/pork-menudo/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-ginisang-monggo",
  "name": "Ginisang Monggo",
  "featured": false,
  "cuisine": "Filipino",
  "category": "Curry",
  "tags": [
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1647545401750-6dd5539879ac?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Easy",
  "price": 279,
  "description": "Cooked mung beans with garlic ginger broth, spinach, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Cooked mung beans",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Garlic ginger broth",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Spinach",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. This kit uses fully cooked mung beans. Dry mung beans require a separate, longer cooking stage until tender.",
   "Simmer cooked mung beans in the garlic ginger broth, stirring and adding water if too thick, until hot throughout. Check after 5 minutes; mash a few beans if a thicker texture is wanted.",
   "Stir in spinach just until wilted, then serve with the cooked rice. Do not simmer the greens for the entire bean cooking time."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. This kit uses fully cooked mung beans. Dry mung beans require a separate, longer cooking stage until tender.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Warm beans in broth",
    "text": "Simmer cooked mung beans in the garlic ginger broth, stirring and adding water if too thick, until hot throughout. Check after 5 minutes; mash a few beans if a thicker texture is wanted.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     2
    ]
   },
   {
    "title": "Wilt spinach",
    "text": "Stir in spinach just until wilted, then serve with the cooked rice. Do not simmer the greens for the entire bean cooking time.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Panlasang Pinoy — mung beans and spinach",
    "url": "https://panlasangpinoy.com/ginisang-munggo-sauteed-mung-beans/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-pesto-chicken-pasta",
  "name": "Pesto Chicken Pasta",
  "featured": false,
  "cuisine": "Italian-inspired",
  "category": "Pasta",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1612152328178-4a6c83d96429?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with basil pesto, cherry tomatoes, and pasta. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Pasta",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Basil pesto",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Cherry tomatoes",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the pasta separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Halve tomatoes and cut chicken into even 2 cm pieces.",
   "Pan-fry chicken in a little oil over medium-high heat, turning regularly. Add tomatoes once the surfaces have browned. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
   "Switch off heat before adding basil pesto and drained pasta. Toss with a little reserved pasta water until coated. Do not boil or fry the pesto; residual warmth is enough.",
   "Serve promptly. Keep the fresh pesto colour and loosen the pasta with a little more cooking water if needed."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the pasta separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Halve tomatoes and cut chicken into even 2 cm pieces.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook chicken and tomatoes",
    "text": "Pan-fry chicken in a little oil over medium-high heat, turning regularly. Add tomatoes once the surfaces have browned. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Toss pesto off the heat",
    "text": "Switch off heat before adding basil pesto and drained pasta. Toss with a little reserved pasta water until coated. Do not boil or fry the pesto; residual warmth is enough.",
    "ingredientIndexes": [
     1,
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve promptly. Keep the fresh pesto colour and loosen the pasta with a little more cooking water if needed.",
    "ingredientIndexes": [
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — pesto pasta, off the heat",
    "url": "https://www.recipetineats.com/pesto-pasta/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-creamy-mushroom-penne",
  "name": "Creamy Mushroom Penne",
  "featured": false,
  "cuisine": "Italian-inspired",
  "category": "Pasta",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1673081849580-2d36a09c8a6f?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Mushrooms with parmesan cream sauce, spinach, and penne. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Mushrooms",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Penne",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Parmesan cream sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Spinach",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the penne separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Slice mushrooms evenly and rinse spinach.",
   "Pan-fry mushrooms in a little oil over medium-high heat until they release moisture and begin to brown. Avoid crowding.",
   "Lower heat and add parmesan cream sauce; stir gently until hot, then wilt spinach. Avoid a hard boil.",
   "Toss drained penne with the sauce and a little reserved pasta water until coated. Serve immediately."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the penne separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Slice mushrooms evenly and rinse spinach.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Brown mushrooms",
    "text": "Pan-fry mushrooms in a little oil over medium-high heat until they release moisture and begin to brown. Avoid crowding.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Warm sauce and greens",
    "text": "Lower heat and add parmesan cream sauce; stir gently until hot, then wilt spinach. Avoid a hard boil.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2,
     3
    ]
   },
   {
    "title": "Toss pasta",
    "text": "Toss drained penne with the sauce and a little reserved pasta water until coated. Serve immediately.",
    "ingredientIndexes": [
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — mushroom cream pasta technique",
    "url": "https://www.recipetineats.com/creamy-mushroom-pasta/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-garlic-shrimp-linguine",
  "name": "Garlic Shrimp Linguine",
  "featured": false,
  "cuisine": "Italian-inspired",
  "category": "Pasta",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1677681483419-e18aa1376db7?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Peeled shrimp with garlic lemon butter, cherry tomatoes, and linguine. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Peeled shrimp",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Linguine",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Garlic lemon butter",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Cherry tomatoes",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the linguine separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare cherry tomatoes before starting the shrimp.",
   "Cook cherry tomatoes separately until softened in a little oil over medium heat. Set aside; shrimp cook much faster than dense vegetables.",
   "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
   "Lower the heat and add garlic lemon butter with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
   "Serve with the prepared linguine, adding a little reserved pasta water."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the linguine separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare cherry tomatoes before starting the shrimp.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook vegetables first",
    "text": "Cook cherry tomatoes separately until softened in a little oil over medium heat. Set aside; shrimp cook much faster than dense vegetables.",
    "timerSeconds": 240,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Cook shrimp briefly",
    "text": "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Coat gently",
    "text": "Lower the heat and add garlic lemon butter with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared linguine, adding a little reserved pasta water.",
    "ingredientIndexes": [
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "NOAA — shrimp in garlic butter",
    "url": "https://repository.library.noaa.gov/view/noaa/35356/noaa_35356_DS1.pdf"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-beef-ragu-pasta",
  "name": "Beef Ragu Pasta",
  "featured": false,
  "cuisine": "Italian-inspired",
  "category": "Pasta",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Ground beef with tomato ragu sauce, carrot, and pasta. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Ground beef",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Pasta",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Tomato ragu sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Carrot",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the pasta separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Dice carrot finely for even cooking.",
   "Cook carrot in a little oil over medium heat until beginning to soften; finely diced carrot needs longer than corn.",
   "Add ground beef and break up clumps. Cook, stirring, until browned. Begin checking after 5 minutes. Check several places reach 71°C; steak doneness settings do not apply to ground meat.",
   "Stir in tomato ragu sauce and a splash of water if needed. Simmer gently until hot and the vegetables are tender, stirring to avoid scorching. This is a quick kit sauce, not a long-braised ragù.",
   "Serve with the cooked pasta, loosening with a little reserved pasta water."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the pasta separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Dice carrot finely for even cooking.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Soften vegetables",
    "text": "Cook carrot in a little oil over medium heat until beginning to soften; finely diced carrot needs longer than corn.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown ground beef",
    "text": "Add ground beef and break up clumps. Cook, stirring, until browned. Begin checking after 5 minutes. Check several places reach 71°C; steak doneness settings do not apply to ground meat.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Simmer prepared sauce",
    "text": "Stir in tomato ragu sauce and a splash of water if needed. Simmer gently until hot and the vegetables are tender, stirring to avoid scorching. This is a quick kit sauce, not a long-braised ragù.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the cooked pasta, loosening with a little reserved pasta water.",
    "ingredientIndexes": [
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — ground beef stir-fry technique",
    "url": "https://www.recipetineats.com/asian-beef-bowls/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-spinach-cream-fusilli",
  "name": "Spinach Cream Fusilli",
  "featured": false,
  "cuisine": "Italian-inspired",
  "category": "Pasta",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1779915148092-776a6b5e37df?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Chickpeas with parmesan cream sauce, spinach, and fusilli. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chickpeas",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Fusilli",
    "amount": 200,
    "unit": "g"
   },
   {
    "name": "Parmesan cream sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Spinach",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the fusilli separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
   "Add the fully cooked chickpeas and parmesan cream sauce. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
   "Fold in spinach only at the end and let it wilt. Toss with cooked fusilli and a little reserved pasta water; avoid boiling the cream sauce hard."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the fusilli separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Warm the cooked legumes",
    "text": "Add the fully cooked chickpeas and parmesan cream sauce. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     2
    ]
   },
   {
    "title": "Finish and serve",
    "text": "Fold in spinach only at the end and let it wilt. Toss with cooked fusilli and a little reserved pasta water; avoid boiling the cream sauce hard.",
    "ingredientIndexes": [
     1,
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Short methods require fully cooked legumes. The ingredient list does not specify a dry weight for these kits; do not substitute dry beans without cooking separately.",
  "cookingSources": [
   {
    "title": "Good Food — cooked chickpea masala",
    "url": "https://www.bbcgoodfood.com/recipes/chana-masala"
   },
   {
    "title": "RecipeTin Eats — mushroom cream pasta technique",
    "url": "https://www.recipetineats.com/creamy-mushroom-pasta/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-chicken-teriyaki-bowl",
  "name": "Chicken Teriyaki Bowl",
  "featured": false,
  "cuisine": "Japanese-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1682566509568-ded8649b26bb?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken thigh with teriyaki sauce, broccoli, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken thigh",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Teriyaki sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Broccoli",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare broccoli separately from raw meat; slice dense vegetables thinly.",
   "Cook broccoli in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
   "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
   "Lower heat, add teriyaki sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
   "Serve over the prepared base. Use a clean plate and utensils for cooked chicken."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare broccoli separately from raw meat; slice dense vegetables thinly.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables",
    "text": "Cook broccoli in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Finish with sauce and check",
    "text": "Lower heat, add teriyaki sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve over the prepared base. Use a clean plate and utensils for cooked chicken.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Just One Cookbook — chicken teriyaki",
    "url": "https://www.justonecookbook.com/chicken-teriyaki/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-beef-yakiniku-bowl",
  "name": "Beef Yakiniku Bowl",
  "featured": false,
  "cuisine": "Japanese-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1608855815815-4edc035e39ad?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Beef strips with yakiniku sauce, onion, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Beef strips",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Yakiniku sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Onion",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice beef across the grain into thin strips about 3 mm thick. Thick or tough stewing beef is not interchangeable with these quick-cooking strips.",
   "Stir-fry thinly sliced onion in a little oil until just tender; lift out so the beef can brown without crowding.",
   "Heat the pan over medium-high heat. Sear beef in small batches, turning and separating the strips. Begin checking after 1 minute; add more time as needed rather than cooking every cut for the same duration.",
   "Return vegetables and add yakiniku sauce. Toss briefly until coated. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
   "Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice beef across the grain into thin strips about 3 mm thick. Thick or tough stewing beef is not interchangeable with these quick-cooking strips.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables first",
    "text": "Stir-fry thinly sliced onion in a little oil until just tender; lift out so the beef can brown without crowding.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Sear thin beef",
    "text": "Heat the pan over medium-high heat. Sear beef in small batches, turning and separating the strips. Begin checking after 1 minute; add more time as needed rather than cooking every cut for the same duration.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Glaze and check",
    "text": "Return vegetables and add yakiniku sauce. Toss briefly until coated. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Maangchi — thin-sliced beef and mushroom bulgogi",
    "url": "https://www.maangchi.com/recipe/bulgogi"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-ginger-tofu-rice-bowl",
  "name": "Ginger Tofu Rice Bowl",
  "featured": false,
  "cuisine": "Japanese-inspired",
  "category": "Rice bowls",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1609770424775-39ec362f2d94?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Firm tofu with ginger soy sauce, bok choy, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Firm tofu",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Ginger soy sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bok choy",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain and press tofu for 15–20 minutes if needed, blot dry and cut into even 2 cm cubes. Pressing time is additional. Separate bok choy stems and leaves.",
   "Pan-fry tofu with a little oil over medium-high heat, turning to brown several sides. Check after 8 minutes; wet tofu can take longer to crisp.",
   "Set tofu aside. Cook bok choy stems with a little water until tender, then wilt the leaves.",
   "Lower heat, return tofu and gently warm ginger soy sauce; add a splash of water if thick. Serve over cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain and press tofu for 15–20 minutes if needed, blot dry and cut into even 2 cm cubes. Pressing time is additional. Separate bok choy stems and leaves.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Pan-fry tofu",
    "text": "Pan-fry tofu with a little oil over medium-high heat, turning to brown several sides. Check after 8 minutes; wet tofu can take longer to crisp.",
    "timerSeconds": 480,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Cook the vegetables",
    "text": "Set tofu aside. Cook bok choy stems with a little water until tender, then wilt the leaves.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Dress and assemble",
    "text": "Lower heat, return tofu and gently warm ginger soy sauce; add a splash of water if thick. Serve over cooked rice.",
    "ingredientIndexes": [
     2
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Just One Cookbook — tofu pressing and pan-frying",
    "url": "https://www.justonecookbook.com/teriyaki-tofu/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-japanese-chicken-curry",
  "name": "Japanese Chicken Curry",
  "featured": false,
  "cuisine": "Japanese-inspired",
  "category": "Curry",
  "tags": [],
  "image": "https://images.unsplash.com/photo-1679279727895-bd5c9fb9c1a0?auto=format&fit=crop&w=800&q=75",
  "time": 40,
  "difficulty": "Easy",
  "price": 329,
  "description": "Chicken thigh with japanese curry sauce, potato and carrot, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken thigh",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Japanese curry sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Potato and carrot",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use boneless chicken thigh in 2 cm pieces. Peel and cut potato and carrot into even 1 cm cubes.",
   "Brown chicken in a little oil over medium-high heat; turn to colour the surfaces.",
   "Add prepared sauce, potato and carrot, plus enough water to keep the pieces just covered. Simmer gently, stirring occasionally. Begin checking after 15 minutes; keep cooking until a knife slides easily into the potato.",
   "Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Reduce uncovered briefly if the sauce is too thin; stir frequently so the prepared sauce does not catch. Serve with cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use boneless chicken thigh in 2 cm pieces. Peel and cut potato and carrot into even 1 cm cubes.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Brown the chicken",
    "text": "Brown chicken in a little oil over medium-high heat; turn to colour the surfaces.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Simmer with root vegetables",
    "text": "Add prepared sauce, potato and carrot, plus enough water to keep the pieces just covered. Simmer gently, stirring occasionally. Begin checking after 15 minutes; keep cooking until a knife slides easily into the potato.",
    "timerSeconds": 900,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Check and finish",
    "text": "Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Reduce uncovered briefly if the sauce is too thin; stir frequently so the prepared sauce does not catch. Serve with cooked rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Timing assumes boneless thigh and small root-vegetable cubes. Bone-in chicken and larger potato pieces need longer.",
  "cookingSources": [
   {
    "title": "Just One Cookbook — Japanese chicken curry",
    "url": "https://www.justonecookbook.com/simple-chicken-curry/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-sesame-mushroom-udon",
  "name": "Sesame Mushroom Udon",
  "featured": false,
  "cuisine": "Japanese-inspired",
  "category": "Noodles",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1689760661347-6b4d026fffae?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Mushrooms with sesame soy sauce, bok choy, and udon noodles. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Mushrooms",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Udon noodles",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Sesame soy sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bok choy",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the udon noodles separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Frozen or ready-cooked udon may need only brief loosening in boiling water; dried udon needs its full packet cooking time. Slice mushrooms and separate bok choy stems and leaves.",
   "Pan-fry mushrooms in oil over medium-high heat until moisture evaporates and edges brown.",
   "Add stems and a little water; cover briefly until tender, then add leaves to wilt.",
   "Add drained udon and sesame soy sauce. Toss until hot throughout, loosening with a little water if needed. Avoid simmering already cooked noodles until mushy."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the udon noodles separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Frozen or ready-cooked udon may need only brief loosening in boiling water; dried udon needs its full packet cooking time. Slice mushrooms and separate bok choy stems and leaves.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Brown mushrooms",
    "text": "Pan-fry mushrooms in oil over medium-high heat until moisture evaporates and edges brown.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Cook bok choy stems",
    "text": "Add stems and a little water; cover briefly until tender, then add leaves to wilt.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Toss noodles",
    "text": "Add drained udon and sesame soy sauce. Toss until hot throughout, loosening with a little water if needed. Avoid simmering already cooked noodles until mushy.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Just One Cookbook — yaki udon",
    "url": "https://www.justonecookbook.com/yaki-udon/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-miso-butter-shrimp",
  "name": "Miso Butter Shrimp",
  "featured": false,
  "cuisine": "Japanese-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Peeled shrimp with miso butter sauce, broccoli, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Peeled shrimp",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Miso butter sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Broccoli",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare broccoli before starting the shrimp.",
   "Cook broccoli separately until crisp-tender by steaming, then drain. Set aside; shrimp cook much faster than dense vegetables.",
   "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
   "Lower the heat and add miso butter sauce with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
   "Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare broccoli before starting the shrimp.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook vegetables first",
    "text": "Cook broccoli separately until crisp-tender by steaming, then drain. Set aside; shrimp cook much faster than dense vegetables.",
    "timerSeconds": 240,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Cook shrimp briefly",
    "text": "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Coat gently",
    "text": "Lower the heat and add miso butter sauce with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "NOAA — shrimp in garlic butter",
    "url": "https://repository.library.noaa.gov/view/noaa/35356/noaa_35356_DS1.pdf"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-greek-chicken-bowl",
  "name": "Greek Chicken Bowl",
  "featured": false,
  "cuisine": "Mediterranean-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1784902540709-082442918309?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with lemon oregano dressing, tomato and cucumber, and couscous. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Couscous",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Lemon oregano dressing",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Tomato and cucumber",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Wash and cut the salad vegetables using a clean board. Reserve some dressing in a clean bowl before any touches raw meat.",
   "Slice breast horizontally into even cutlets about 1.5 cm thick. Coat with part of the dressing. Keep any portion that touches raw chicken separate; discard it after use.",
   "Heat a little oil over medium heat. Cook cutlets until browned, turning to cook both sides. Begin checking after about 3 minutes on the first side and 2 minutes after turning; continue as needed. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
   "Rest chicken briefly on a clean plate and slice. Serve with couscous and the uncooked tomato and cucumber. Use only the reserved clean dressing on the salad."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Wash and cut the salad vegetables using a clean board. Reserve some dressing in a clean bowl before any touches raw meat.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Prepare even chicken pieces",
    "text": "Slice breast horizontally into even cutlets about 1.5 cm thick. Coat with part of the dressing. Keep any portion that touches raw chicken separate; discard it after use.",
    "ingredientIndexes": []
   },
   {
    "title": "Pan-cook chicken",
    "text": "Heat a little oil over medium heat. Cook cutlets until browned, turning to cook both sides. Begin checking after about 3 minutes on the first side and 2 minutes after turning; continue as needed. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Rest and assemble",
    "text": "Rest chicken briefly on a clean plate and slice. Serve with couscous and the uncooked tomato and cucumber. Use only the reserved clean dressing on the salad.",
    "ingredientIndexes": [
     1,
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — lemon-marinated chicken technique",
    "url": "https://www.recipetineats.com/greek-chicken-gyros-with-tzatziki/"
   },
   {
    "title": "Love and Lemons — couscous types and cooking",
    "url": "https://www.loveandlemons.com/how-to-cook-couscous/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-lemon-chickpea-couscous",
  "name": "Lemon Chickpea Couscous",
  "featured": false,
  "cuisine": "Mediterranean-inspired",
  "category": "Rice bowls",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1704742205160-9ace96fbbc44?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Chickpeas with lemon herb dressing, zucchini, and couscous. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chickpeas",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Couscous",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Lemon herb dressing",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Zucchini",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
   "Sauté zucchini in a little oil over medium heat until softened; add a splash of water if needed.",
   "Add the fully cooked chickpeas and lemon herb dressing. Toss gently off the heat with the warm zucchini. Add a little water if too thick.",
   "Serve with the prepared couscous."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook vegetables first",
    "text": "Sauté zucchini in a little oil over medium heat until softened; add a splash of water if needed.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Warm the cooked legumes",
    "text": "Add the fully cooked chickpeas and lemon herb dressing. Toss gently off the heat with the warm zucchini. Add a little water if too thick.",
    "ingredientIndexes": [
     0,
     2,
     3
    ]
   },
   {
    "title": "Finish and serve",
    "text": "Serve with the prepared couscous.",
    "ingredientIndexes": [
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Short methods require fully cooked legumes. The ingredient list does not specify a dry weight for these kits; do not substitute dry beans without cooking separately.",
  "cookingSources": [
   {
    "title": "Good Food — cooked chickpea masala",
    "url": "https://www.bbcgoodfood.com/recipes/chana-masala"
   },
   {
    "title": "Love and Lemons — couscous types and cooking",
    "url": "https://www.loveandlemons.com/how-to-cook-couscous/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-garlic-shrimp-couscous",
  "name": "Garlic Shrimp Couscous",
  "featured": false,
  "cuisine": "Mediterranean-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1726455418076-a60ccd6085c2?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Peeled shrimp with garlic lemon butter, cherry tomatoes, and couscous. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Peeled shrimp",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Couscous",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Garlic lemon butter",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Cherry tomatoes",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare cherry tomatoes before starting the shrimp.",
   "Cook cherry tomatoes separately until softened in a little oil over medium heat. Set aside; shrimp cook much faster than dense vegetables.",
   "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
   "Lower the heat and add garlic lemon butter with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
   "Serve with the prepared couscous."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare cherry tomatoes before starting the shrimp.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook vegetables first",
    "text": "Cook cherry tomatoes separately until softened in a little oil over medium heat. Set aside; shrimp cook much faster than dense vegetables.",
    "timerSeconds": 240,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Cook shrimp briefly",
    "text": "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Coat gently",
    "text": "Lower the heat and add garlic lemon butter with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared couscous.",
    "ingredientIndexes": [
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "NOAA — shrimp in garlic butter",
    "url": "https://repository.library.noaa.gov/view/noaa/35356/noaa_35356_DS1.pdf"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   },
   {
    "title": "Love and Lemons — couscous types and cooking",
    "url": "https://www.loveandlemons.com/how-to-cook-couscous/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-harissa-chicken-bowl",
  "name": "Harissa Chicken Bowl",
  "featured": false,
  "cuisine": "Mediterranean-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1688431508895-4c2cab13b181?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with harissa tomato sauce, bell pepper, and couscous. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Couscous",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Harissa tomato sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bell pepper",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Cut chicken into even 2 cm pieces. Prepare bell pepper separately from raw meat; slice dense vegetables thinly.",
   "Cook bell pepper in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
   "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
   "Lower heat, add harissa tomato sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
   "Serve over the prepared base. Use a clean plate and utensils for cooked chicken."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Cut chicken into even 2 cm pieces. Prepare bell pepper separately from raw meat; slice dense vegetables thinly.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables",
    "text": "Cook bell pepper in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Finish with sauce and check",
    "text": "Lower heat, add harissa tomato sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve over the prepared base. Use a clean plate and utensils for cooked chicken.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — fajita cooking sequence",
    "url": "https://www.recipetineats.com/chicken-fajitas/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   },
   {
    "title": "Love and Lemons — couscous types and cooking",
    "url": "https://www.loveandlemons.com/how-to-cook-couscous/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-herbed-mushroom-couscous",
  "name": "Herbed Mushroom Couscous",
  "featured": false,
  "cuisine": "Mediterranean-inspired",
  "category": "Rice bowls",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1572424075298-e17403e6f3bf?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Mushrooms with lemon herb dressing, spinach, and couscous. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Mushrooms",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Couscous",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Lemon herb dressing",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Spinach",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Slice mushrooms and wash spinach.",
   "Cook mushrooms in a little oil over medium-high heat without crowding, stirring occasionally, until their water evaporates and they begin to brown.",
   "Add spinach and stir just until wilted. Turn off heat and fold through lemon herb dressing.",
   "Serve with the prepared couscous."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Prepare couscous separately according to its packet: instant couscous is covered off the heat after adding boiling water, whereas pearl couscous must simmer. Fluff before serving. Slice mushrooms and wash spinach.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Brown mushrooms",
    "text": "Cook mushrooms in a little oil over medium-high heat without crowding, stirring occasionally, until their water evaporates and they begin to brown.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Wilt spinach",
    "text": "Add spinach and stir just until wilted. Turn off heat and fold through lemon herb dressing.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2,
     3
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared couscous.",
    "ingredientIndexes": [
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — mushroom cream pasta technique",
    "url": "https://www.recipetineats.com/creamy-mushroom-pasta/"
   },
   {
    "title": "Love and Lemons — couscous types and cooking",
    "url": "https://www.loveandlemons.com/how-to-cook-couscous/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-gochujang-chicken-bowl",
  "name": "Gochujang Chicken Bowl",
  "featured": false,
  "cuisine": "Korean-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with gochujang sauce, carrot, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Gochujang sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Carrot",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare carrot separately from raw meat; slice dense vegetables thinly.",
   "Cook carrot in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
   "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
   "Lower heat, add gochujang sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
   "Serve over the prepared base. Use a clean plate and utensils for cooked chicken."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare carrot separately from raw meat; slice dense vegetables thinly.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables",
    "text": "Cook carrot in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Finish with sauce and check",
    "text": "Lower heat, add gochujang sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve over the prepared base. Use a clean plate and utensils for cooked chicken.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Good Food — Korean chili glaze technique",
    "url": "https://www.bbcgoodfood.com/recipes/korean-chilli-sesame-honey-chicken"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-korean-mushroom-rice",
  "name": "Korean Mushroom Rice",
  "featured": false,
  "cuisine": "Korean-inspired",
  "category": "Rice bowls",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1680420574628-225def8eea0a?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Mushrooms with sesame soy sauce, spinach, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Mushrooms",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Sesame soy sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Spinach",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice mushrooms and wash spinach.",
   "Cook mushrooms in a little oil over medium-high heat without crowding, stirring occasionally, until their water evaporates and they begin to brown.",
   "Add spinach and stir just until wilted. Lower heat and toss with sesame soy sauce just until hot.",
   "Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice mushrooms and wash spinach.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Brown mushrooms",
    "text": "Cook mushrooms in a little oil over medium-high heat without crowding, stirring occasionally, until their water evaporates and they begin to brown.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Wilt spinach",
    "text": "Add spinach and stir just until wilted. Lower heat and toss with sesame soy sauce just until hot.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2,
     3
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — mushroom cream pasta technique",
    "url": "https://www.recipetineats.com/creamy-mushroom-pasta/"
   },
   {
    "title": "Maangchi — thin-sliced beef and mushroom bulgogi",
    "url": "https://www.maangchi.com/recipe/bulgogi"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-spicy-pork-bulgogi",
  "name": "Spicy Pork Bulgogi",
  "featured": false,
  "cuisine": "Korean-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Pork strips with spicy bulgogi sauce, onion, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Pork strips",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Spicy bulgogi sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Onion",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice pork across the grain into thin, even strips about 3 mm thick; slice onion thinly.",
   "Stir-fry onion in a little oil over medium heat until softened, then set aside.",
   "Stir-fry pork in small batches over medium-high heat, turning regularly. Start checking after 3 minutes; do not rely on colour alone.",
   "Lower heat, add spicy bulgogi sauce and return onion. Cook until hot and coated without scorching the sugary sauce. Whole-cut pork must reach 63°C and rest at least 3 minutes before eating. Serve with cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Slice pork across the grain into thin, even strips about 3 mm thick; slice onion thinly.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Soften onion",
    "text": "Stir-fry onion in a little oil over medium heat until softened, then set aside.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Cook thin pork",
    "text": "Stir-fry pork in small batches over medium-high heat, turning regularly. Start checking after 3 minutes; do not rely on colour alone.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Glaze and check",
    "text": "Lower heat, add spicy bulgogi sauce and return onion. Cook until hot and coated without scorching the sugary sauce. Whole-cut pork must reach 63°C and rest at least 3 minutes before eating. Serve with cooked rice.",
    "ingredientIndexes": [
     2,
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Maangchi — spicy pork bulgogi",
    "url": "https://www.maangchi.com/recipe/dwaeji-bulgogi"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-kimchi-tofu-rice",
  "name": "Kimchi Tofu Rice",
  "featured": false,
  "cuisine": "Korean-inspired",
  "category": "Rice bowls",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1698489857683-0d30f7f046f7?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Firm tofu with vegetarian kimchi sauce, carrot, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Firm tofu",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Vegetarian kimchi sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Carrot",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain and press tofu for 15–20 minutes if needed, blot dry and cut into even 2 cm cubes. Pressing time is additional. Slice carrot into fine matchsticks.",
   "Pan-fry tofu with a little oil over medium-high heat, turning to brown several sides. Check after 8 minutes; wet tofu can take longer to crisp.",
   "Set tofu aside. Stir-fry carrot matchsticks with a little water until crisp-tender.",
   "Lower heat, return tofu and gently warm vegetarian kimchi sauce; add a splash of water if thick. Serve over cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain and press tofu for 15–20 minutes if needed, blot dry and cut into even 2 cm cubes. Pressing time is additional. Slice carrot into fine matchsticks.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Pan-fry tofu",
    "text": "Pan-fry tofu with a little oil over medium-high heat, turning to brown several sides. Check after 8 minutes; wet tofu can take longer to crisp.",
    "timerSeconds": 480,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Cook the vegetables",
    "text": "Set tofu aside. Stir-fry carrot matchsticks with a little water until crisp-tender.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Dress and assemble",
    "text": "Lower heat, return tofu and gently warm vegetarian kimchi sauce; add a splash of water if thick. Serve over cooked rice.",
    "ingredientIndexes": [
     2
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Just One Cookbook — tofu pressing and pan-frying",
    "url": "https://www.justonecookbook.com/teriyaki-tofu/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-sesame-beef-noodles",
  "name": "Sesame Beef Noodles",
  "featured": false,
  "cuisine": "Korean-inspired",
  "category": "Noodles",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1565976469618-061774653bee?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Beef strips with sesame soy sauce, bok choy, and wheat noodles. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Beef strips",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Wheat noodles",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Sesame soy sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bok choy",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the wheat noodles separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Slice beef across the grain into thin strips about 3 mm thick. Thick or tough stewing beef is not interchangeable with these quick-cooking strips.",
   "Stir-fry bok choy stems, reserving the leaves in a little oil until just tender; lift out so the beef can brown without crowding.",
   "Heat the pan over medium-high heat. Sear beef in small batches, turning and separating the strips. Begin checking after 1 minute; add more time as needed rather than cooking every cut for the same duration.",
   "Return vegetables and add sesame soy sauce. Toss briefly until coated and add the bok choy leaves to wilt. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
   "Serve with the prepared noodles."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the wheat noodles separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Slice beef across the grain into thin strips about 3 mm thick. Thick or tough stewing beef is not interchangeable with these quick-cooking strips.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables first",
    "text": "Stir-fry bok choy stems, reserving the leaves in a little oil until just tender; lift out so the beef can brown without crowding.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Sear thin beef",
    "text": "Heat the pan over medium-high heat. Sear beef in small batches, turning and separating the strips. Begin checking after 1 minute; add more time as needed rather than cooking every cut for the same duration.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Glaze and check",
    "text": "Return vegetables and add sesame soy sauce. Toss briefly until coated and add the bok choy leaves to wilt. For whole-cut beef, check the thickest pieces reach 63°C and rest at least 3 minutes before eating. Small strips may finish sooner than the timer.",
    "ingredientIndexes": [
     2,
     3
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared noodles.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Maangchi — thin-sliced beef and mushroom bulgogi",
    "url": "https://www.maangchi.com/recipe/bulgogi"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-thai-peanut-noodles",
  "name": "Thai Peanut Noodles",
  "featured": false,
  "cuisine": "Thai-inspired",
  "category": "Noodles",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1707546944460-dda9069b9c1e?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Firm tofu with peanut lime sauce, carrot, and rice noodles. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Firm tofu",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Rice noodles",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Peanut lime sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Carrot",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Cook the rice noodles separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Drain and press tofu for 15–20 minutes if needed, blot dry and cut into even 2 cm cubes. Pressing time is additional. Slice carrot into fine matchsticks.",
   "Pan-fry tofu with a little oil over medium-high heat, turning to brown several sides. Check after 8 minutes; wet tofu can take longer to crisp.",
   "Set tofu aside. Stir-fry carrot matchsticks with a little water until crisp-tender.",
   "Lower heat, return tofu and gently warm peanut lime sauce; add a splash of water if thick. Toss with drained rice noodles just until coated."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Cook the rice noodles separately according to its packet; noodle types vary. For pasta, reserve a mug of cooking water before draining. Do not use a fixed timer for every shape. Drain and press tofu for 15–20 minutes if needed, blot dry and cut into even 2 cm cubes. Pressing time is additional. Slice carrot into fine matchsticks.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Pan-fry tofu",
    "text": "Pan-fry tofu with a little oil over medium-high heat, turning to brown several sides. Check after 8 minutes; wet tofu can take longer to crisp.",
    "timerSeconds": 480,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Cook the vegetables",
    "text": "Set tofu aside. Stir-fry carrot matchsticks with a little water until crisp-tender.",
    "timerSeconds": 180,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Dress and assemble",
    "text": "Lower heat, return tofu and gently warm peanut lime sauce; add a splash of water if thick. Toss with drained rice noodles just until coated.",
    "ingredientIndexes": [
     1,
     2
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Just One Cookbook — tofu pressing and pan-frying",
    "url": "https://www.justonecookbook.com/teriyaki-tofu/"
   },
   {
    "title": "RecipeTin Eats — peanut rice-noodle technique",
    "url": "https://www.recipetineats.com/stir-fried-peanut-sauce-noodles/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-red-curry-chicken",
  "name": "Red Curry Chicken",
  "featured": false,
  "cuisine": "Thai-inspired",
  "category": "Curry",
  "tags": [],
  "image": "https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Easy",
  "price": 329,
  "description": "Chicken breast with red coconut curry sauce, bell pepper, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Red coconut curry sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Bell pepper",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut breast into even 2 cm pieces and prepare bell pepper.",
   "Warm red coconut curry sauce gently in a saucepan with a little water if too thick. Keep at a gentle simmer rather than a hard boil.",
   "Add chicken and bell pepper. Simmer gently, stirring occasionally; start temperature checks after 8 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Continue until vegetables are tender, adding a splash of water if the sauce catches.",
   "Serve with cooked rice. This method uses a prepared curry sauce; do not add the extra ingredients from a from-scratch sauce recipe."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut breast into even 2 cm pieces and prepare bell pepper.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Begin the sauce",
    "text": "Warm red coconut curry sauce gently in a saucepan with a little water if too thick. Keep at a gentle simmer rather than a hard boil.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Simmer chicken",
    "text": "Add chicken and bell pepper. Simmer gently, stirring occasionally; start temperature checks after 8 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Continue until vegetables are tender, adding a splash of water if the sauce catches.",
    "timerSeconds": 480,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with cooked rice. This method uses a prepared curry sauce; do not add the extra ingredients from a from-scratch sauce recipe.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — Thai red curry",
    "url": "https://www.recipetineats.com/thai-red-curry-with-chicken/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-thai-garlic-shrimp",
  "name": "Thai Garlic Shrimp",
  "featured": false,
  "cuisine": "Thai-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1599655345131-6eb73b81d8d6?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Peeled shrimp with garlic pepper sauce, green beans, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Peeled shrimp",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Garlic pepper sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Green beans",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare green beans before starting the shrimp.",
   "Cook green beans separately until crisp-tender by steaming, then drain. Set aside; shrimp cook much faster than dense vegetables.",
   "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
   "Lower the heat and add garlic pepper sauce with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
   "Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Prepare green beans before starting the shrimp.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook vegetables first",
    "text": "Cook green beans separately until crisp-tender by steaming, then drain. Set aside; shrimp cook much faster than dense vegetables.",
    "timerSeconds": 240,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Cook shrimp briefly",
    "text": "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Coat gently",
    "text": "Lower the heat and add garlic pepper sauce with the cooked vegetables; toss just until hot. Remove promptly once shrimp are opaque. Avoid simmering already cooked shrimp while reducing sauce.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the prepared rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "NOAA — shrimp in garlic butter",
    "url": "https://repository.library.noaa.gov/view/noaa/35356/noaa_35356_DS1.pdf"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-green-curry-tofu",
  "name": "Green Curry Tofu",
  "featured": false,
  "cuisine": "Thai-inspired",
  "category": "Curry",
  "tags": [
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1769031240699-e15f4818224a?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Easy",
  "price": 279,
  "description": "Firm tofu with vegetarian green curry sauce, zucchini, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Firm tofu",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Vegetarian green curry sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Zucchini",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain tofu and cut into 2 cm cubes; cut zucchini into even half-moons.",
   "Warm green curry sauce with a little water if needed, add zucchini and simmer gently until nearly tender; begin checking after 5 minutes.",
   "Fold in tofu and simmer gently until hot throughout and zucchini is tender without collapsing. Avoid a hard boil or over-reducing the sauce. Serve with cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Drain tofu and cut into 2 cm cubes; cut zucchini into even half-moons.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Simmer zucchini",
    "text": "Warm green curry sauce with a little water if needed, add zucchini and simmer gently until nearly tender; begin checking after 5 minutes.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Warm tofu",
    "text": "Fold in tofu and simmer gently until hot throughout and zucchini is tender without collapsing. Avoid a hard boil or over-reducing the sauce. Serve with cooked rice.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — Thai green curry",
    "url": "https://www.recipetineats.com/thai-green-curry/"
   },
   {
    "title": "Just One Cookbook — Japanese chicken curry",
    "url": "https://www.justonecookbook.com/simple-chicken-curry/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-sweet-chili-chicken",
  "name": "Sweet Chili Chicken",
  "featured": false,
  "cuisine": "Thai-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1636401870585-a8852371e84a?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with sweet chili sauce, bell pepper, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Sweet chili sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bell pepper",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare bell pepper separately from raw meat; slice dense vegetables thinly.",
   "Cook bell pepper in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
   "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
   "Lower heat, add sweet chili sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
   "Serve over the prepared base. Use a clean plate and utensils for cooked chicken."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare bell pepper separately from raw meat; slice dense vegetables thinly.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables",
    "text": "Cook bell pepper in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Finish with sauce and check",
    "text": "Lower heat, add sweet chili sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve over the prepared base. Use a clean plate and utensils for cooked chicken.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — fajita cooking sequence",
    "url": "https://www.recipetineats.com/chicken-fajitas/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-chicken-fajita-bowl",
  "name": "Chicken Fajita Bowl",
  "featured": false,
  "cuisine": "Mexican-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1668665771757-4d42737d295a?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with fajita tomato sauce, bell pepper and onion, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Fajita tomato sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bell pepper and onion",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare bell pepper and onion separately from raw meat; slice dense vegetables thinly.",
   "Cook bell pepper and onion in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
   "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
   "Lower heat, add fajita tomato sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
   "Serve over the prepared base. Use a clean plate and utensils for cooked chicken."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut chicken into even 2 cm pieces. Prepare bell pepper and onion separately from raw meat; slice dense vegetables thinly.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook the vegetables",
    "text": "Cook bell pepper and onion in a separate pan: steam dense carrot, broccoli or green beans until crisp-tender; sauté pepper/onion until softened; heat sweetcorn until hot. Set aside.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown chicken",
    "text": "Pan-fry chicken in a little oil over medium-high heat in an uncrowded layer, turning to colour the surfaces. Start checking after about 5 minutes; reduce heat if browning too fast.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Finish with sauce and check",
    "text": "Lower heat, add fajita tomato sauce and the cooked vegetables. Add a splash of water if thick; stir until hot and coated. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Sugary sauces can burn, so do not sear them on high heat.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve over the prepared base. Use a clean plate and utensils for cooked chicken.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — fajita cooking sequence",
    "url": "https://www.recipetineats.com/chicken-fajitas/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-chipotle-beef-bowl",
  "name": "Chipotle Beef Bowl",
  "featured": false,
  "cuisine": "Mexican-inspired",
  "category": "Rice bowls",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1707322571124-9d3a47cce941?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Ground beef with chipotle sauce, sweetcorn, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Ground beef",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Chipotle sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Sweetcorn",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Dice sweetcorn finely for even cooking.",
   "Cook sweetcorn in a little oil over medium heat until beginning to soften; finely diced carrot needs longer than corn.",
   "Add ground beef and break up clumps. Cook, stirring, until browned. Begin checking after 5 minutes. Check several places reach 71°C; steak doneness settings do not apply to ground meat.",
   "Stir in chipotle sauce and a splash of water if needed. Simmer gently until hot and the vegetables are tender, stirring to avoid scorching. This is a quick kit sauce, not a long-braised ragù.",
   "Serve with the cooked rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Dice sweetcorn finely for even cooking.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Soften vegetables",
    "text": "Cook sweetcorn in a little oil over medium heat until beginning to soften; finely diced carrot needs longer than corn.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Brown ground beef",
    "text": "Add ground beef and break up clumps. Cook, stirring, until browned. Begin checking after 5 minutes. Check several places reach 71°C; steak doneness settings do not apply to ground meat.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0
    ]
   },
   {
    "title": "Simmer prepared sauce",
    "text": "Stir in chipotle sauce and a splash of water if needed. Simmer gently until hot and the vegetables are tender, stirring to avoid scorching. This is a quick kit sauce, not a long-braised ragù.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with the cooked rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — ground beef stir-fry technique",
    "url": "https://www.recipetineats.com/asian-beef-bowls/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-smoky-bean-rice-bowl",
  "name": "Smoky Bean Rice Bowl",
  "featured": false,
  "cuisine": "Mexican-inspired",
  "category": "Rice bowls",
  "tags": [
   "Vegetarian",
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 279,
  "description": "Black beans with smoky tomato salsa, bell pepper, and jasmine rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Black beans",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Jasmine rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Smoky tomato salsa",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Bell pepper",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
   "Sauté bell pepper in a little oil over medium heat until softened; add a splash of water if needed.",
   "Add the fully cooked black beans and smoky tomato salsa. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
   "Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the jasmine rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook vegetables first",
    "text": "Sauté bell pepper in a little oil over medium heat until softened; add a splash of water if needed.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Warm the cooked legumes",
    "text": "Add the fully cooked black beans and smoky tomato salsa. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     2
    ]
   },
   {
    "title": "Finish and serve",
    "text": "Serve with the prepared rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Short methods require fully cooked legumes. The ingredient list does not specify a dry weight for these kits; do not substitute dry beans without cooking separately.",
  "cookingSources": [
   {
    "title": "Good Food — cooked chickpea masala",
    "url": "https://www.bbcgoodfood.com/recipes/chana-masala"
   },
   {
    "title": "Love and Lemons — cooked black bean tacos",
    "url": "https://www.loveandlemons.com/black-bean-tacos/"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-lime-shrimp-tacos",
  "name": "Lime Shrimp Tacos",
  "featured": false,
  "cuisine": "Mexican-inspired",
  "category": "Tacos",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Beginner",
  "price": 359,
  "description": "Peeled shrimp with lime crema, shredded cabbage, and corn tortillas. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Peeled shrimp",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Corn tortillas",
    "amount": 6,
    "unit": "pieces"
   },
   {
    "name": "Lime crema",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Shredded cabbage",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Set out the measured ingredients. Warm the tortillas in a dry pan according to their packet just before serving; keep covered. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Keep cabbage and lime crema ready for the final topping.",
   "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
   "Fill warm tortillas with the cooked shrimp and fresh uncooked cabbage. Spoon lime crema over the top off the heat. Do not boil the crema or cook cabbage with raw shrimp."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Set out the measured ingredients. Warm the tortillas in a dry pan according to their packet just before serving; keep covered. Thaw shrimp fully in the refrigerator if frozen, then pat dry. Keep cabbage and lime crema ready for the final topping.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook shrimp briefly",
    "text": "Heat a little oil over medium-high heat and add shrimp in a single layer. Turn once the underside changes colour, starting checks after about 1 minute. Stop when the shrimp are pearly white and opaque right through; check a thick one, not just the pink exterior. Larger shrimp need longer.",
    "timerSeconds": 60,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": []
   },
   {
    "title": "Assemble off the heat",
    "text": "Fill warm tortillas with the cooked shrimp and fresh uncooked cabbage. Spoon lime crema over the top off the heat. Do not boil the crema or cook cabbage with raw shrimp.",
    "ingredientIndexes": [
     2
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "NOAA — shrimp in garlic butter",
    "url": "https://repository.library.noaa.gov/view/noaa/35356/noaa_35356_DS1.pdf"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-chicken-tinga-tacos",
  "name": "Chicken Tinga Tacos",
  "featured": false,
  "cuisine": "Mexican-inspired",
  "category": "Tacos",
  "tags": [
   "Quick Meals"
  ],
  "image": "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Beginner",
  "price": 329,
  "description": "Chicken breast with tinga tomato sauce, shredded cabbage, and corn tortillas. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Corn tortillas",
    "amount": 6,
    "unit": "pieces"
   },
   {
    "name": "Tinga tomato sauce",
    "amount": 60,
    "unit": "g"
   },
   {
    "name": "Shredded cabbage",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Set out the measured ingredients. Warm the tortillas in a dry pan according to their packet just before serving; keep covered. Keep cabbage raw for topping; cut chicken breast into even cutlets about 1.5 cm thick.",
   "Bring tinga tomato sauce and enough water to partly cover the chicken to a gentle simmer. Add chicken and turn occasionally. Begin checking after 10 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
   "Lift cooked chicken to a clean board. Shred with forks and return to the sauce, reducing gently only if too thin. Keep chicken moist.",
   "Serve in warm tortillas with uncooked shredded cabbage. This kit uses prepared tinga sauce rather than a from-scratch tomato and chili base."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Set out the measured ingredients. Warm the tortillas in a dry pan according to their packet just before serving; keep covered. Keep cabbage raw for topping; cut chicken breast into even cutlets about 1.5 cm thick.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Poach in tinga sauce",
    "text": "Bring tinga tomato sauce and enough water to partly cover the chicken to a gentle simmer. Add chicken and turn occasionally. Begin checking after 10 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test.",
    "timerSeconds": 600,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Shred and coat",
    "text": "Lift cooked chicken to a clean board. Shred with forks and return to the sauce, reducing gently only if too thin. Keep chicken moist.",
    "ingredientIndexes": []
   },
   {
    "title": "Fill tortillas",
    "text": "Serve in warm tortillas with uncooked shredded cabbage. This kit uses prepared tinga sauce rather than a from-scratch tomato and chili base.",
    "ingredientIndexes": [
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "RecipeTin Eats — chicken tacos",
    "url": "https://www.recipetineats.com/chicken-tacos-with-sauce/"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-palak-paneer",
  "name": "Palak Paneer",
  "featured": false,
  "cuisine": "Indian-inspired",
  "category": "Curry",
  "tags": [
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1767114915936-745dd372f1d8?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Easy",
  "price": 279,
  "description": "Paneer with spinach masala sauce, tomato, and basmati rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Paneer",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Basmati rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Spinach masala sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Tomato",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut paneer into even 2 cm cubes and chop tomato.",
   "Cook tomato in a little oil over medium heat until softened.",
   "Add prepared spinach masala sauce and a splash of water if thick. Fold in paneer and simmer gently until hot through. Avoid a long boil, which toughens paneer.",
   "Serve with cooked basmati rice. The spinach is already in the prepared sauce; no separate spinach purée or extra dairy is needed."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut paneer into even 2 cm cubes and chop tomato.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Soften tomato",
    "text": "Cook tomato in a little oil over medium heat until softened.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Warm sauce and paneer",
    "text": "Add prepared spinach masala sauce and a splash of water if thick. Fold in paneer and simmer gently until hot through. Avoid a long boil, which toughens paneer.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     2
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with cooked basmati rice. The spinach is already in the prepared sauce; no separate spinach purée or extra dairy is needed.",
    "ingredientIndexes": [
     1
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Technique adaptation for prepared spinach masala sauce and paneer, not a reproduction of a from-scratch palak recipe.",
  "cookingSources": [
   {
    "title": "Tesco — palak paneer",
    "url": "https://www.tesco.com/recipes/en-GB/recipe/palak-paneer/cooking"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-chickpea-tikka-masala",
  "name": "Chickpea Tikka Masala",
  "featured": false,
  "cuisine": "Indian-inspired",
  "category": "Curry",
  "tags": [
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1728414862780-cdb57c0aadb1?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Easy",
  "price": 279,
  "description": "Chickpeas with tikka masala sauce, spinach, and basmati rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chickpeas",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Basmati rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Tikka masala sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Spinach",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
   "Add the fully cooked chickpeas and tikka masala sauce. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
   "Fold in spinach only at the end and let it wilt. Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Warm the cooked legumes",
    "text": "Add the fully cooked chickpeas and tikka masala sauce. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     2
    ]
   },
   {
    "title": "Finish and serve",
    "text": "Fold in spinach only at the end and let it wilt. Serve with the prepared rice.",
    "ingredientIndexes": [
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Short methods require fully cooked legumes. The ingredient list does not specify a dry weight for these kits; do not substitute dry beans without cooking separately.",
  "cookingSources": [
   {
    "title": "Good Food — cooked chickpea masala",
    "url": "https://www.bbcgoodfood.com/recipes/chana-masala"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-chicken-korma",
  "name": "Chicken Korma",
  "featured": false,
  "cuisine": "Indian-inspired",
  "category": "Curry",
  "tags": [],
  "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=75",
  "time": 30,
  "difficulty": "Easy",
  "price": 329,
  "description": "Chicken breast with korma sauce, green beans, and basmati rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chicken breast",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Basmati rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Korma sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Green beans",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut breast into even 2 cm pieces and prepare green beans.",
   "Warm korma sauce gently in a saucepan with a little water if too thick. Keep at a gentle simmer rather than a hard boil.",
   "Add chicken and green beans. Simmer gently, stirring occasionally; start temperature checks after 8 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Continue until vegetables are tender, adding a splash of water if the sauce catches.",
   "Serve with cooked rice. This method uses a prepared curry sauce; do not add the extra ingredients from a from-scratch sauce recipe."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Cut breast into even 2 cm pieces and prepare green beans.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Begin the sauce",
    "text": "Warm korma sauce gently in a saucepan with a little water if too thick. Keep at a gentle simmer rather than a hard boil.",
    "timerSeconds": 120,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     2
    ]
   },
   {
    "title": "Simmer chicken",
    "text": "Add chicken and green beans. Simmer gently, stirring occasionally; start temperature checks after 8 minutes. Check several thickest pieces with a food thermometer: all chicken, including ground chicken, must reach 74°C. Keep cooking if below this; colour alone is not a safety test. Continue until vegetables are tender, adding a splash of water if the sauce catches.",
    "timerSeconds": 480,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Serve",
    "text": "Serve with cooked rice. This method uses a prepared curry sauce; do not add the extra ingredients from a from-scratch sauce recipe.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. ",
  "cookingSources": [
   {
    "title": "Good Food — bite-size chicken curry technique",
    "url": "https://www.bbcgoodfood.com/recipes/easy-chicken-korma"
   },
   {
    "title": "FoodSafety.gov — safe minimum temperatures",
    "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-coconut-dal",
  "name": "Coconut Dal",
  "featured": false,
  "cuisine": "Indian-inspired",
  "category": "Curry",
  "tags": [
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=75",
  "time": 25,
  "difficulty": "Easy",
  "price": 279,
  "description": "Cooked lentils with coconut curry sauce, spinach, and basmati rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Cooked lentils",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Basmati rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Coconut curry sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Spinach",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use fully cooked lentils, as supplied; dry lentils need separate cooking first.",
   "Add the fully cooked lentils and coconut curry sauce. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
   "Fold in spinach only at the end and let it wilt. Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use fully cooked lentils, as supplied; dry lentils need separate cooking first.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Warm the cooked legumes",
    "text": "Add the fully cooked lentils and coconut curry sauce. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     2
    ]
   },
   {
    "title": "Finish and serve",
    "text": "Fold in spinach only at the end and let it wilt. Serve with the prepared rice.",
    "ingredientIndexes": [
     3
    ]
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Short methods require fully cooked legumes. The ingredient list does not specify a dry weight for these kits; do not substitute dry beans without cooking separately.",
  "cookingSources": [
   {
    "title": "Good Food — cooked chickpeas, spinach and coconut",
    "url": "https://www.bbcgoodfood.com/recipes/spinach-chickpea-dahl"
   }
  ],
  "cookingReviewed": "2026-11-14"
 },
 {
  "id": "menu-aloo-chana",
  "name": "Aloo Chana",
  "featured": false,
  "cuisine": "Indian-inspired",
  "category": "Curry",
  "tags": [
   "Vegetarian"
  ],
  "image": "https://images.unsplash.com/photo-1591940597372-bd266c6eb29e?auto=format&fit=crop&w=800&q=75",
  "time": 35,
  "difficulty": "Easy",
  "price": 279,
  "description": "Chickpeas with tomato masala sauce, potato, and basmati rice. A comforting Cookly meal kit, portioned for two.",
  "ingredients": [
   {
    "name": "Chickpeas",
    "amount": 300,
    "unit": "g"
   },
   {
    "name": "Basmati rice",
    "amount": 150,
    "unit": "g"
   },
   {
    "name": "Tomato masala sauce",
    "amount": 160,
    "unit": "g"
   },
   {
    "name": "Potato",
    "amount": 200,
    "unit": "g"
   }
  ],
  "steps": [
   "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
   "Peel potato and cut into 1 cm cubes. Simmer in water until knife-tender, checking after 10 minutes, then drain.",
   "Add the fully cooked chickpeas and tomato masala sauce. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
   "Serve with the prepared rice."
  ],
  "guideSteps": [
   {
    "title": "Prepare the base and ingredients",
    "text": "Start the basmati rice in a separate pot or rice cooker using the selected rice variety’s packet water ratio, cooking and resting instructions. Rice is dry unless labelled ready-cooked; do not simply stir raw rice into the finished bowl. Use canned or fully cooked, drained chickpeas/beans here. Dry legumes cannot be cooked by this short method; cook them separately according to their packet first.",
    "ingredientIndexes": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "title": "Cook vegetables first",
    "text": "Peel potato and cut into 1 cm cubes. Simmer in water until knife-tender, checking after 10 minutes, then drain.",
    "timerSeconds": 600,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     3
    ]
   },
   {
    "title": "Warm the cooked legumes",
    "text": "Add the fully cooked chickpeas and tomato masala sauce. Simmer gently, stirring until hot throughout. Add a little water if too thick.",
    "timerSeconds": 300,
    "timerNote": "First check only. Continue or stop according to the texture and doneness checks in this step; the timer does not establish doneness.",
    "ingredientIndexes": [
     0,
     2
    ]
   },
   {
    "title": "Finish and serve",
    "text": "Serve with the prepared rice.",
    "ingredientIndexes": []
   }
  ],
  "cookingNotes": "Cookly kit adaptation using the listed ingredients and prepared sauces. Estimated time is for two servings with tasks overlapping; larger batches, equipment and cut sizes change it. Packet directions take priority for supplied sauces and dry bases. Timers prompt a check, not a guaranteed finish. Short methods require fully cooked legumes. The ingredient list does not specify a dry weight for these kits; do not substitute dry beans without cooking separately.",
  "cookingSources": [
   {
    "title": "Good Food — cooked chickpea masala",
    "url": "https://www.bbcgoodfood.com/recipes/chana-masala"
   }
  ],
  "cookingReviewed": "2026-11-14"
 }
];
const recipePhotos={
 'menu-steak-rice-bowl':'photo-1682566509605-b5bb1ef7eac2',
 'butter-steak':'photo-1588168333986-5078d3ae3976',
 'calamansi-pasta':'photo-1608897013039-887f21d8c804',
 'beef-salpicao':'photo-1760504526069-ff0f8bf6e4ca',
 'tofu-sisig':'photo-1762305194201-077e7e23ccf2',
 'miso-salmon':'photo-1523218689796-d4c2ef4f3d72',
 'chicken-adobo':'photo-1596699917234-1c93c61a1083',
 'vegetable-kare-kare':'photo-1559561723-c3f4195835db',
 'tomato-basil-pasta':'photo-1516100882582-96c3a05fe590',
 'lemon-chicken':'photo-1532550907401-a500c9a57435',
 'korean-beef-bowl':'photo-1718777791262-c66d11baaa3b',
 'thai-coconut-curry':'photo-1618449840665-9ed506d73a34',
 'chicken-tacos':'photo-1545093149-618ce3bcf49d',
 'chickpea-masala':'photo-1707448829764-9474458021ed',
 'sesame-tofu-bowl':'photo-1546069901-d5bfd2cbfb1f',
 'thai-basil-chicken':'photo-1696906594893-e9995c4d7082',
 'black-bean-tacos':'photo-1565299585323-38d6b0865b47',
 'butter-chicken':'photo-1772730064970-a7b2735c93b9',
 'menu-bbq-chicken-rice-bowl':'photo-1679279726946-a158b8bcaa23',
 'menu-creamy-mushroom-chicken':'photo-1788462612914-44793f2980f2',
 'menu-cajun-shrimp-rice':'photo-1723325697529-6e2679650b39',
 'menu-cheddar-mac-and-cheese':'photo-1667499989723-c4ab9549d63c',
 'menu-honey-mustard-chicken':'photo-1670398564097-0762e1b30b3a',
 'menu-smoky-beef-rice-bowl':'photo-1679279726937-122c49626802',
 'menu-chicken-inasal-bowl':'photo-1603496987351-f84a3ba5ec85',
 'menu-beef-bistek':'photo-1723893905879-0e309c2a8e06',
 'menu-chicken-afritada':'photo-1694579740719-0e601c5d2437',
 'menu-pork-menudo':'photo-1579640873954-766bf0235bf3',
 'menu-ginisang-monggo':'photo-1647545401750-6dd5539879ac',
 'menu-pesto-chicken-pasta':'photo-1612152328178-4a6c83d96429',
 'menu-creamy-mushroom-penne':'photo-1673081849580-2d36a09c8a6f',
 'menu-garlic-shrimp-linguine':'photo-1677681483419-e18aa1376db7',
 'menu-beef-ragu-pasta':'photo-1621996346565-e3dbc646d9a9',
 'menu-spinach-cream-fusilli':'photo-1779915148092-776a6b5e37df',
 'menu-chicken-teriyaki-bowl':'photo-1682566509568-ded8649b26bb',
 'menu-beef-yakiniku-bowl':'photo-1608855815815-4edc035e39ad',
 'menu-ginger-tofu-rice-bowl':'photo-1609770424775-39ec362f2d94',
 'menu-japanese-chicken-curry':'photo-1679279727895-bd5c9fb9c1a0',
 'menu-sesame-mushroom-udon':'photo-1689760661347-6b4d026fffae',
 'menu-miso-butter-shrimp':'photo-1559742811-822873691df8',
 'menu-greek-chicken-bowl':'photo-1784902540709-082442918309',
 'menu-lemon-chickpea-couscous':'photo-1704742205160-9ace96fbbc44',
 'menu-garlic-shrimp-couscous':'photo-1726455418076-a60ccd6085c2',
 'menu-harissa-chicken-bowl':'photo-1688431508895-4c2cab13b181',
 'menu-herbed-mushroom-couscous':'photo-1572424075298-e17403e6f3bf',
 'menu-gochujang-chicken-bowl':'photo-1604908176997-125f25cc6f3d',
 'menu-korean-mushroom-rice':'photo-1680420574628-225def8eea0a',
 'menu-spicy-pork-bulgogi':'photo-1564836235910-c3055ca0f912',
 'menu-kimchi-tofu-rice':'photo-1698489857683-0d30f7f046f7',
 'menu-sesame-beef-noodles':'photo-1565976469618-061774653bee',
 'menu-thai-peanut-noodles':'photo-1707546944460-dda9069b9c1e',
 'menu-red-curry-chicken':'photo-1708782344490-9026aaa5eec7',
 'menu-thai-garlic-shrimp':'photo-1599655345131-6eb73b81d8d6',
 'menu-green-curry-tofu':'photo-1769031240699-e15f4818224a',
 'menu-sweet-chili-chicken':'photo-1636401870585-a8852371e84a',
 'menu-chicken-fajita-bowl':'photo-1668665771757-4d42737d295a',
 'menu-chipotle-beef-bowl':'photo-1707322571124-9d3a47cce941',
 'menu-smoky-bean-rice-bowl':'photo-1623428187969-5da2dcea5ebf',
 'menu-lime-shrimp-tacos':'photo-1551504734-5ee1c4a1479b',
 'menu-chicken-tinga-tacos':'photo-1613514785940-daed07799d9b',
 'menu-palak-paneer':'photo-1767114915936-745dd372f1d8',
 'menu-chickpea-tikka-masala':'photo-1728414862780-cdb57c0aadb1',
 'menu-chicken-korma':'photo-1603894584373-5ac82b2ae398',
 'menu-coconut-dal':'photo-1631452180519-c014fe946bc7',
 'menu-aloo-chana':'photo-1591940597372-bd266c6eb29e'
};
if(recipes.some(recipe=>!recipePhotos[recipe.id]))throw new Error('Every recipe needs a matching food photo.');
recipes.forEach(recipe=>{recipe.image=photo(recipePhotos[recipe.id])});
const icons={home:'<path d="m3 10 9-7 9 7v10H14v-6h-4v6H3z"/>',explore:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6z"/>',saved:'<path d="M6 3h12v18l-6-4-6 4z"/>',box:'<path d="M5 7h14l2 14H3L5 7zM8 8V6a4 4 0 0 1 8 0v2"/>',profile:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',back:'<path d="M19 12H5m6-6-6 6 6 6"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>'};
icons.camera='<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>';
const icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${icons[n]||icons.arrow}</svg>`;
const $=s=>document.querySelector(s),peso=n=>`₱${n.toLocaleString('en-PH')}`;
function imageAt(url,width,quality=70){const image=new URL(url);image.searchParams.set('w',String(width));image.searchParams.set('q',String(quality));return image.href}
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let cloudUserId='';
function accountKey(key){return key+'::'+(cloudUserId||'signed-out')}
function load(key,fallback){try{const value=JSON.parse(localStorage.getItem(accountKey(key)));return Array.isArray(fallback)?(Array.isArray(value)?value:fallback):(value??fallback)}catch{return fallback}}
// Account preferences sync to Supabase; incomplete onboarding is saved after each step.
const preferenceDefaults={name:'',username:'',email:'',diet:'all',skill:'any',time:'any',cuisines:[],equipment:null,otherEquipment:'',savedAddress:null,temperature:'celsius',measurements:'metric',servings:2,completed:false,onboardingStep:0};
const cuisineOptions=[...new Set(recipes.map(r=>r.cuisine))];
function cleanSavedAddress(value){if(!value||typeof value!=='object')return null;const lat=Number(value.location?.lat),lon=Number(value.location?.lon),location=Number.isFinite(lat)&&Number.isFinite(lon)&&lat>=12&&lat<=21.5&&lon>=119&&lon<=123?{lat,lon}:null;const address=typeof value.address==='string'?value.address.slice(0,300):'';if(!address)return null;return {address,location,unit:typeof value.unit==='string'?value.unit.slice(0,100):'',instructions:typeof value.instructions==='string'?value.instructions.slice(0,300):'',label:['Home','Work','Other'].includes(value.label)?value.label:'Home'}}
function cleanPreferences(value){const v=value&&typeof value==='object'?value:{};const pick=(key,options)=>options.includes(v[key])?v[key]:preferenceDefaults[key];return {...preferenceDefaults,onboardingStep:Number.isInteger(v.onboardingStep)?Math.max(0,Math.min(5,v.onboardingStep)):0,name:typeof v.name==='string'?v.name.slice(0,80):'',username:typeof v.username==='string'?v.username.slice(0,30):'',email:typeof v.email==='string'?v.email.slice(0,120):'',diet:pick('diet',['all','vegetarian']),skill:pick('skill',['any','beginner','confident']),time:pick('time',['any','quick']),cuisines:Array.isArray(v.cuisines)?v.cuisines.filter(c=>cuisineOptions.includes(c)):[],equipment:Array.isArray(v.equipment)?[...new Set(v.equipment.filter(item=>['rice-cooker','oven'].includes(item)))]:null,otherEquipment:typeof v.otherEquipment==='string'?v.otherEquipment.slice(0,100):'',savedAddress:cleanSavedAddress(v.savedAddress),temperature:pick('temperature',['celsius','fahrenheit']),measurements:pick('measurements',['metric','imperial']),servings:Number.isInteger(v.servings)&&v.servings>=1&&v.servings<=6?v.servings:2,completed:v.completed===true}}
let preferences=cleanPreferences(load('cookly-preferences',null));
let preferenceDraft=null,preferenceStep=0,firstTimeSetup=false,preferenceAddressSearchTimer=null,preferenceAddressController=null,preferenceAddressSuggestions=[];
function equipmentScore(r){if(!preferences.equipment)return 0;const usesRice=r.ingredients.some(i=>/rice/i.test(i.name)),usesOven=/\b(?:bake|oven)\w*\b/i.test(r.steps.join(' '));return (usesRice?(preferences.equipment.includes('rice-cooker')?4:-6):0)+(usesOven?(preferences.equipment.includes('oven')?4:-6):0)}
function preferenceScore(r){return (preferences.cuisines.includes(r.cuisine)?10:0)+(preferences.time==='quick'&&r.time<=25?3:0)+(preferences.skill==='beginner'&&r.difficulty==='Beginner'?2:0)+equipmentScore(r)}
function formatQuantity(amount,unit){if(preferences.measurements==='imperial'&&['g','ml'].includes(unit))return `${Number((amount/(unit==='g'?28.3495:29.5735)).toFixed(2))} ${unit==='g'?'oz':'US fl oz'}`;return `${Number(amount.toFixed(1))} ${unit}`}
function formatGuideText(text){return text.replace(/(\d+(?:\.\d+)?)°C/g,(_,n)=>preferences.temperature==='fahrenheit'?`${Math.round(Number(n)*9/5+32)}°F`:`${n}°C`).replace(/(\d+(?:\.\d+)?) ml/g,(_,n)=>formatQuantity(Number(n)*servings/2,'ml')).replace(/per two servings/g,`for ${servings} servings`)}
function writePreferences(value){preferences=cleanPreferences(value);try{localStorage.setItem(accountKey('cookly-preferences'),JSON.stringify(preferences))}catch{toast('Preferences apply for this visit. Device storage is unavailable.')}queueCloudSave()}
function openPreferences(firstTime=false){if(!cloudSession)return;firstTime=firstTime||!preferences.completed;firstTimeSetup=firstTime;preferenceDraft={...preferences,cuisines:[...preferences.cuisines],savedAddress:preferences.savedAddress?{...preferences.savedAddress,location:preferences.savedAddress.location?{...preferences.savedAddress.location}:null}:null};preferenceStep=firstTime?Math.max(0,Math.min(5,Number(preferences.onboardingStep)||0)):0;renderPreferences();$('#preferencesDialog').showModal();focusPreferenceHeading()}
function focusPreferenceHeading(){$('#preferencesDialog').scrollTop=0;$('#preferencesTitle').focus({preventScroll:true})}
function preferenceInput(key,label,type='text',placeholder=''){return `<label class="preference-field">${label}<input name="${key}" type="${type}" maxlength="${key==='name'?80:key==='email'?120:30}" autocomplete="${key==='name'?'name':key==='email'?'email':'username'}" placeholder="${placeholder}" value="${escapeHTML(preferenceDraft[key])}" ${['name','username'].includes(key)?'required ':''}${key==='email'?'readonly ':''}${key==='username'?'pattern="[a-zA-Z0-9_.-]{0,30}" title="Use letters, numbers, dots, underscores, or hyphens."':''}></label>`}
function preferenceChoices(key,choices){return `<div class="preference-choices">${choices.map(([value,title,description])=>`<label class="preference-choice"><input type="radio" name="${key}" value="${value}" ${preferenceDraft[key]===value?'checked':''}><span><strong>${title}</strong>${description?`<small>${description}</small>`:''}</span></label>`).join('')}</div>`}
function schedulePreferenceAddressSearch(value){clearTimeout(preferenceAddressSearchTimer);if(preferenceAddressController){preferenceAddressController.abort();preferenceAddressController=null}preferenceAddressSuggestions=[];const results=$('#preferenceAddressSuggestions');if(!results)return;results.replaceChildren();if(value.trim().length<3){results.hidden=true;return}results.hidden=false;results.innerHTML='<span class="preference-address-loading">Searching Luzon addresses…</span>';preferenceAddressSearchTimer=setTimeout(()=>searchPreferenceAddress(value.trim()),500)}
async function searchPreferenceAddress(address){if(preferenceAddressController)preferenceAddressController.abort();const controller=new AbortController();preferenceAddressController=controller;const wait=Math.max(0,1100-(Date.now()-lastGeocodeRequest));if(wait)await new Promise(resolve=>setTimeout(resolve,wait));if(controller.signal.aborted||$('#preferenceAddress')?.value.trim()!==address)return;lastGeocodeRequest=Date.now();try{const {west,east,north,south}=luzonServiceBounds,viewbox=`${west},${north},${east},${south}`,response=await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&countrycodes=ph&viewbox=${viewbox}&bounded=1&limit=5&q=${encodeURIComponent(address)}`,{signal:controller.signal,headers:{Accept:'application/json'}});if(!response.ok)throw new Error(`Address search failed (${response.status}). Try again.`);const matches=await response.json();preferenceAddressSuggestions=matches.filter(result=>(result.address?.country_code||'').toLowerCase()==='ph'&&inLuzonServiceArea(Number(result.lat),Number(result.lon)));const results=$('#preferenceAddressSuggestions');if(!results||controller.signal.aborted||$('#preferenceAddress')?.value.trim()!==address)return;results.innerHTML=preferenceAddressSuggestions.map((result,index)=>`<button type="button" class="location-suggestion" role="option" data-preference-address-index="${index}">${escapeHTML(result.display_name)}</button>`).join('');results.hidden=preferenceAddressSuggestions.length===0;if(!preferenceAddressSuggestions.length)results.innerHTML='<span class="preference-address-loading">No matching Luzon addresses. Try a more specific search.</span>'}catch(error){if(error.name!=='AbortError'){const results=$('#preferenceAddressSuggestions');if(results){results.hidden=false;results.innerHTML=`<span class="preference-address-loading">${escapeHTML(error.message)}</span>`}}}}
function selectPreferenceAddress(index){const result=preferenceAddressSuggestions[index];if(!result)return;const lat=Number(result.lat),lon=Number(result.lon);if(!Number.isFinite(lat)||!Number.isFinite(lon)||!inLuzonServiceArea(lat,lon))return;const previous=preferenceDraft.savedAddress||{};preferenceDraft.savedAddress={...previous,address:result.display_name,location:{lat,lon},label:previous.label||'Home'};$('#preferenceAddress').value=result.display_name;$('#preferenceAddressSuggestions').hidden=true}
function renderPreferences(){const titles=['Tell us about yourself','Your kind of cooking','What cuisines do you love?','What equipment do you have?','Make it feel familiar','Save a delivery address'];const subtitles=['Let’s make Cookly a little more you. Complete your name and username to continue.','A few small choices to help us find your next favorite.','Pick as many as you like, or leave them all open.','Tell us what you cook with so we can suggest recipes that fit.','Your recipes, in the units you use every day.','Add an address once, then choose it at checkout. You can also use a different address anytime.'];let content='';
 if(preferenceStep===0)content=preferenceInput('name','Your name','text','Full name')+preferenceInput('username','Choose a username','text','Username')+preferenceInput('email','Email address','email','you@example.com')+'<p class="preference-note">Your profile and preferences are saved to your signed-in account.</p>';
 if(preferenceStep===1)content=`<fieldset><legend>How do you like to eat?</legend>${preferenceChoices('diet',[['all','A little of everything','All Cookly dishes'],['vegetarian','Vegetarian','Feature meat-free dishes on Home']])}</fieldset><fieldset><legend>Your cooking confidence</legend>${preferenceChoices('skill',[['any','Still exploring','A mix of easy and beginner recipes'],['beginner','Just getting started','Beginner recipes first'],['confident','Comfortable in the kitchen','All levels welcome']])}</fieldset><fieldset><legend>Time in the kitchen</legend>${preferenceChoices('time',[['any','No rush','Any cooking time'],['quick','Keep it quick','Prioritize meals in 25 minutes or less']])}</fieldset>`;
 if(preferenceStep===2)content=`<div class="cuisine-options">${cuisineOptions.map(c=>`<label class="cuisine-option"><input type="checkbox" name="cuisines" value="${c}" ${preferenceDraft.cuisines.includes(c)?'checked':''}><span>${c}</span></label>`).join('')}</div><p class="preference-note">Your favorites come first on Home, with the highest-rated picks within each match. You can still explore other cuisines.</p>`;
 if(preferenceStep===3)content=`<div class="equipment-options">${[['rice-cooker','Rice cooker','Prioritize rice-based recipes'],['oven','Oven','Prioritize baked recipes']].map(([value,title,description])=>`<label class="equipment-option"><input type="checkbox" name="equipment" value="${value}" ${preferenceDraft.equipment?.includes(value)?'checked':''}><span><strong>${title}</strong><small>${description}</small></span></label>`).join('')}</div><p class="preference-note">Leave these unchecked if you don’t have them—we’ll suggest alternatives that better fit your kitchen.</p><label class="preference-field">Other equipment (optional)<input name="otherEquipment" type="text" maxlength="100" autocomplete="off" placeholder="e.g. air fryer, blender" value="${escapeHTML(preferenceDraft.otherEquipment)}"></label>`;
 if(preferenceStep===4)content=`<fieldset><legend>Temperature</legend>${preferenceChoices('temperature',[['celsius','Celsius','°C'],['fahrenheit','Fahrenheit','°F']])}</fieldset><fieldset><legend>Measurements</legend>${preferenceChoices('measurements',[['metric','Metric','Grams and milliliters'],['imperial','Imperial','Ounces and US fluid ounces']])}</fieldset><label class="preference-field">Usually cooking for<select name="servings">${[1,2,3,4,5,6].map(n=>`<option value="${n}" ${preferenceDraft.servings===n?'selected':''}>${n} ${n===1?'person':'people'}</option>`).join('')}</select></label><p class="preference-note">Ingredient quantities and cooking temperatures will use your choices. Converted quantities are approximate.</p>`;
 if(preferenceStep===5){const saved=preferenceDraft.savedAddress||{address:'',unit:'',instructions:'',label:'Home',location:null};content=`<label class="preference-field">Delivery address<input id="preferenceAddress" name="savedAddress" type="text" maxlength="300" autocomplete="street-address" placeholder="Street, barangay, or city" value="${escapeHTML(saved.address)}"></label><div id="preferenceAddressSuggestions" class="address-suggestions preference-address-suggestions" role="listbox" aria-label="Philippines address suggestions" hidden></div><p class="preference-note">Choose a suggested address so Cookly can place its map pin. You can fine-tune the pin at checkout.</p><label class="preference-field">Floor / Unit / Room # <span class="optional-note">Optional</span><input name="savedUnit" type="text" maxlength="100" autocomplete="address-line2" placeholder="e.g. Unit 4B, 2nd floor" value="${escapeHTML(saved.unit)}"></label><label class="preference-field">Delivery instructions <span class="optional-note">Optional</span><input name="savedInstructions" type="text" maxlength="300" autocomplete="off" placeholder="Landmark or note for the rider" value="${escapeHTML(saved.instructions)}"></label><fieldset><legend>Add a label</legend><div class="address-label-options">${['Home','Work','Other'].map(label=>`<label class="address-label-option"><input type="radio" name="savedLabel" value="${label}" ${saved.label===label?'checked':''}><span>${label}</span></label>`).join('')}</div></fieldset><button type="button" class="text-button clear-saved-address" data-preference="clear-address">Remove saved address</button>`}
 $('#preferencesContent').innerHTML=`<form id="preferencesForm" class="preferences-page"><div class="preferences-top"><button type="button" class="icon-button" data-preference="back" aria-label="${preferenceStep?'Previous step':'Close preferences'}">${icon('back')}</button><span>Step ${preferenceStep+1} of 6</span><button type="button" class="text-button" data-preference="cancel">${firstTimeSetup?'Save and exit':'Cancel'}</button></div><div class="preferences-progress" aria-label="Step ${preferenceStep+1} of 6">${titles.map((_,i)=>`<span class="${i<=preferenceStep?'done':''}"></span>`).join('')}</div><h1 id="preferencesTitle" tabindex="-1">${titles[preferenceStep]}</h1><p class="preferences-subtitle">${subtitles[preferenceStep]}</p><div class="preferences-fields">${content}</div><div class="preferences-bottom"><button type="submit" class="primary">${preferenceStep===5?'Make Cookly mine':'Continue'} ${icon('arrow')}</button></div></form>`}
function closePreferences(){if(firstTimeSetup&&!preferences.completed){savePreferenceStep();writePreferences({...preferenceDraft,completed:false,onboardingStep:preferenceStep})}$('#preferencesDialog').close();preferenceDraft=null;render()}
function savePreferenceStep(){const form=$('#preferencesForm');if(preferenceStep===0)for(const key of ['name','username'])form.elements[key].setCustomValidity(form.elements[key].value.trim()?'':'Please complete this field.');if(!form.reportValidity())return false;const data=new FormData(form);if(preferenceStep===0)for(const key of ['name','username','email'])preferenceDraft[key]=key==='email'?cloudSession.user.email:String(data.get(key)||'').trim();if(preferenceStep===1)for(const key of ['diet','skill','time'])preferenceDraft[key]=data.get(key)||preferenceDefaults[key];if(preferenceStep===2)preferenceDraft.cuisines=data.getAll('cuisines');if(preferenceStep===3){preferenceDraft.equipment=data.getAll('equipment');preferenceDraft.otherEquipment=String(data.get('otherEquipment')||'').trim().slice(0,100)}if(preferenceStep===4){preferenceDraft.temperature=data.get('temperature');preferenceDraft.measurements=data.get('measurements');preferenceDraft.servings=Number(data.get('servings'))}if(preferenceStep===5){const address=String(data.get('savedAddress')||'').trim();preferenceDraft.savedAddress=address?cleanSavedAddress({address,location:preferenceDraft.savedAddress?.location,unit:String(data.get('savedUnit')||'').trim(),instructions:String(data.get('savedInstructions')||'').trim(),label:data.get('savedLabel')||'Home'}):null}return true}
document.addEventListener('submit',e=>{if(e.target.id!=='preferencesForm')return;e.preventDefault();if(!savePreferenceStep())return;if(preferenceStep<5){preferenceStep++;if(firstTimeSetup)writePreferences({...preferenceDraft,completed:false,onboardingStep:preferenceStep});renderPreferences();focusPreferenceHeading()}else{writePreferences({...preferenceDraft,completed:true});$('#preferencesDialog').close();preferenceDraft=null;navigate('home');toast('Your kitchen, your way. Preferences saved.')}});
document.addEventListener('click',e=>{const suggestion=e.target.closest('[data-preference-address-index]');if(suggestion){selectPreferenceAddress(Number(suggestion.dataset.preferenceAddressIndex));return}const button=e.target.closest('[data-preference]');if(!button)return;const action=button.dataset.preference;if(action==='open')openPreferences();else if(action==='cancel')closePreferences();else if(action==='clear-address'){const address=$('#preferenceAddress');address.value='';preferenceDraft.savedAddress=null;preferenceAddressSuggestions=[];$('#preferenceAddressSuggestions').hidden=true}else if(action==='back'){if(preferenceStep>0){if(!savePreferenceStep())return;preferenceStep--;renderPreferences();focusPreferenceHeading()}else closePreferences()}});
document.addEventListener('input',e=>{if(e.target.id!=='preferenceAddress')return;const address=e.target.value.trim();if(preferenceDraft.savedAddress?.address!==address){preferenceDraft.savedAddress={...(preferenceDraft.savedAddress||{}),address,location:null}}schedulePreferenceAddressSearch(e.target.value)});
// One personal review per dish, stored locally; sample community ratings remain separate.
function cleanMealHistory(value){const history={};if(!value||typeof value!=='object'||Array.isArray(value))return history;for(const r of recipes){const entry=value[r.id];if(!entry||typeof entry!=='object')continue;history[r.id]={cookedAt:typeof entry.cookedAt==='string'?entry.cookedAt:'',stars:Number.isInteger(entry.stars)&&entry.stars>=1&&entry.stars<=5?entry.stars:null,note:typeof entry.note==='string'?entry.note.slice(0,500):'',ratedAt:typeof entry.ratedAt==='string'?entry.ratedAt:''}}return history}
let mealHistory=cleanMealHistory(load('cookly-meals',{})),mealView='';
function saveMealHistory(){try{localStorage.setItem(accountKey('cookly-meals'),JSON.stringify(mealHistory))}catch{return false}queueCloudSave();return true}
function markCooked(){if(!mealHistory[current.id])mealHistory[current.id]={cookedAt:new Date().toISOString(),stars:null,note:'',ratedAt:''};return saveMealHistory()}
function personalReview(r){const review=mealHistory[r.id];return `<section class="personal-review"><h2>${review?.stars?'Your meal rating':review?'How was your meal?':'Made this dish?'}</h2>${review?.stars?`<p><span class="review-stars" aria-label="${review.stars} out of 5 stars">${'★'.repeat(review.stars)}${'☆'.repeat(5-review.stars)}</span> <strong>${review.stars}/5</strong></p>${review.note?`<p class="review-note">${escapeHTML(review.note)}</p>`:''}`:'<p>After cooking and tasting, tell us how it went.</p>'}<button class="secondary" data-meal="rate">${review?.stars?'Edit your rating':review?'I’ve tasted it — rate this dish':'I’ve cooked & tasted this — rate it'}</button></section>`}
function renderMealView(){const r=current,review=mealHistory[r.id];$('#detailContent').innerHTML=`<div class="meal-review-page"><button class="profile-back" data-meal="back">${icon('back')} Back to recipe</button><img class="meal-review-photo" src="${r.image}" alt="${r.name}"><span class="eyebrow">Made by you</span><h1 id="detailTitle">${mealView==='finished'?'Dinner is served.':'How did it taste?'}</h1><p class="meal-review-name">${r.name}</p>${mealView==='finished'?`<p class="muted">Take your time and enjoy your meal. When you’ve tasted it, come back and share your thoughts.</p><button class="primary" data-meal="rate">I’ve tasted it — rate my meal</button><button class="secondary" data-meal="later">I’ll rate it later</button>`:`<form id="mealRatingForm"><fieldset class="meal-stars"><legend>Your rating</legend><div class="star-options">${[1,2,3,4,5].map(n=>`<label class="${n<=(review?.stars||0)?'filled':''}"><input type="radio" name="stars" value="${n}" aria-label="${n} ${n===1?'star':'stars'}" ${review?.stars===n?'checked':''} required><span aria-hidden="true">★</span></label>`).join('')}</div><p class="star-description" id="starDescription" aria-live="polite">${review?.stars?ratingDescription(review.stars):'Choose 1 to 5 stars'}</p></fieldset><label class="review-comment-label" for="mealNote">Anything you’d like to share? <span>Optional</span></label><textarea id="mealNote" name="note" maxlength="500" rows="4" placeholder="The flavors, the cooking experience, what you’d try next time…">${escapeHTML(review?.note||'')}</textarea><p class="review-storage-note">Your personal rating is saved on this device.</p><button class="primary" type="submit">${review?.stars?'Update rating':'Save my rating'}</button><button class="secondary" type="button" data-meal="back">Not now</button></form>`}</div>`;$('#recipeDialog').scrollTop=0}
function ratingDescription(n){return ['','Not for me','Could be better','Pretty good','Loved it','Would cook again!'][n]||''}
function cookedMeals(){const entries=recipes.filter(r=>mealHistory[r.id]);if(!entries.length)return '';return `<section class="cooked-meals"><h2>Your cooking journal</h2><p class="muted">Meals you’ve made, and thoughts worth keeping.</p>${entries.map(r=>{const review=mealHistory[r.id];return `<button class="cooked-meal" data-rate="${r.id}"><img src="${r.image}" alt=""><span><strong>${r.name}</strong><small>${review.stars?'★ '+review.stars+'/5 · Your rating':'Ready for your rating'}</small></span>${icon('arrow')}</button>`}).join('')}</section>`}
document.addEventListener('click',e=>{const action=e.target.closest('[data-meal]')?.dataset.meal;if(!action||!current)return;if(action==='rate'){markCooked();mealView='rating';renderDetail()}if(action==='back'){mealView='';guide=false;renderDetail()}if(action==='later'){mealView='';guide=false;renderDetail();toast('Rate it anytime from this recipe or History → Cooking journal.')}});
document.addEventListener('change',e=>{if(e.target.name==='stars'){const n=Number(e.target.value);$('#starDescription').textContent=ratingDescription(n);document.querySelectorAll('.star-options label').forEach((label,i)=>label.classList.toggle('filled',i<n))}});
document.addEventListener('submit',e=>{if(e.target.id!=='mealRatingForm')return;e.preventDefault();if(!e.target.reportValidity())return;const data=new FormData(e.target),stars=Number(data.get('stars'));if(!Number.isInteger(stars)||stars<1||stars>5)return;const old=mealHistory[current.id];mealHistory[current.id]={cookedAt:old?.cookedAt||new Date().toISOString(),stars,note:String(data.get('note')||'').trim().slice(0,500),ratedAt:new Date().toISOString()};const stored=saveMealHistory();mealView='';guide=false;renderDetail();if(page==='profile')renderProfile();if(page==='history')renderHistory();toast(stored?'Your rating is saved. Thanks for cooking with Cookly!':'Rating saved for this visit; device storage is unavailable.')});
let saved=new Set(load('cookly-saved',[]).filter(id=>recipes.some(r=>r.id===id)));
let box=load('cookly-box',[]).filter(x=>x&&recipes.some(r=>r.id===x.id)&&Number.isInteger(x.servings)&&x.servings>=1&&x.servings<=6);
let page='home',category='For You',query='',current=null,servings=2,guideStep=0,guide=false,toastTimeout,visibleMenuCount=12;
const categories=['For You',...new Set(['Steak','Pasta','Filipino','Quick Meals','Healthy','Vegetarian',...recipes.flatMap(r=>[r.category,...r.tags])])];
const matches=(r,c)=>c==='For You'||r.cuisine===c||r.category===c||r.tags.includes(c);
function persist(){try{localStorage.setItem(accountKey('cookly-saved'),JSON.stringify([...saved]));localStorage.setItem(accountKey('cookly-box'),JSON.stringify(box))}catch{toast('Storage unavailable. Changes will last for this visit.')}queueCloudSave()}
let supabaseAuthStorageKey='',supabaseClient=null,cloudSession=null,cloudSyncTimer=null,cloudState='checking',cloudMessage='',applyingCloudData=false;
function cloudSnapshot(userId){const {savedAddress,...cloudPreferences}=preferences;return {user_id:userId,preferences:cloudPreferences,saved_recipe_ids:[...saved],meal_box:box,meal_history:mealHistory,updated_at:new Date().toISOString()}}
function applyCloudSnapshot(data){applyingCloudData=true;preferences=cleanPreferences({...data.preferences,email:cloudSession?.user.email||'',savedAddress:load('cookly-preferences',{}).savedAddress});saved=new Set((Array.isArray(data.saved_recipe_ids)?data.saved_recipe_ids:[]).filter(id=>recipes.some(recipe=>recipe.id===id)));box=(Array.isArray(data.meal_box)?data.meal_box:[]).filter(item=>item&&recipes.some(recipe=>recipe.id===item.id)&&Number.isInteger(item.servings)&&item.servings>=1&&item.servings<=6);mealHistory=cleanMealHistory(data.meal_history);try{localStorage.setItem(accountKey('cookly-preferences'),JSON.stringify(preferences));localStorage.setItem(accountKey('cookly-saved'),JSON.stringify([...saved]));localStorage.setItem(accountKey('cookly-box'),JSON.stringify(box));localStorage.setItem(accountKey('cookly-meals'),JSON.stringify(mealHistory))}catch{toast('Cloud data loaded, but this device could not cache it.')}applyingCloudData=false}
function saveCloudSnapshot(){const pendingUser=cloudUserId;const task=cloudSaveChain.catch(()=>{}).then(()=>{if(pendingUser===cloudUserId)return performCloudSave()});cloudSaveChain=task;return task}
async function performCloudSave(){if(!supabaseClient||!cloudSession||applyingCloudData)return;const savingUserId=cloudUserId;const snapshot=cloudSnapshot(savingUserId);cloudState='saving';cloudMessage='Saving your changes…';if(page==='profile')renderProfile();const {error}=await supabaseClient.from('user_cookly_data').upsert(snapshot,{onConflict:'user_id'});if(savingUserId!==cloudUserId)return;if(error){cloudState='error';cloudMessage=`Cloud sync failed: ${error.message}`;toast('Your changes remain on this device, but cloud sync failed.')}else{try{const pending=load('cookly-pending-cloud',null);if(!pending||pending.updated_at<=snapshot.updated_at)localStorage.removeItem(accountKey('cookly-pending-cloud'))}catch{}cloudState='ready';cloudMessage='Your Cookly data is synced.'}if(page==='profile')renderProfile()}
function queueCloudSave(){if(!cloudSession||applyingCloudData||!accountLoaded||accountDeletionBusy)return;try{localStorage.setItem(accountKey('cookly-pending-cloud'),JSON.stringify(cloudSnapshot(cloudUserId)))}catch{}clearTimeout(cloudSyncTimer);cloudState='saving';cloudMessage='Saving your changes…';cloudSyncTimer=setTimeout(()=>{saveCloudSnapshot().catch(error=>{cloudState='error';cloudMessage=`Cloud sync failed: ${error.message}`;if(page==='profile')renderProfile()})},700)}
let activationPromise=null,accountLoaded=false,cloudSaveChain=Promise.resolve(),accountDeletionBusy=false;
function resetAccountState(){accountLoaded=false;page='home';category='For You';query='';clearTimeout(cloudSyncTimer);stopTimer();stopStepPlayback();preferences=cleanPreferences({});saved=new Set();box=[];mealHistory={};purchases=[];current=null;preferenceDraft=null;for(const dialog of document.querySelectorAll('dialog[open]'))dialog.close();}
async function activateCloudSession(session){
 if(session&&cloudUserId===session.user.id){cloudSession=session;return activationPromise}
 resetAccountState();cloudSession=session;cloudUserId=session?.user.id||'';
 if(!session){cloudState=supabaseClient?'signed-out':'unavailable';if(supabaseClient)cloudMessage='Sign in or create an account to continue.';render();return}
 const userId=cloudUserId;cloudState='loading';render();
 activationPromise=(async()=>{try{
 const {data,error}=await supabaseClient.from('user_cookly_data').select('preferences,saved_recipe_ids,meal_box,meal_history,updated_at').eq('user_id',userId).maybeSingle();
 if(userId!==cloudUserId)return;if(error)throw error;
 const cached=cleanPreferences(load('cookly-preferences',{}));const pending=load('cookly-pending-cloud',null);const restorePending=pending?.user_id===userId&&(!data?.updated_at||pending.updated_at>data.updated_at);const incoming=(restorePending?pending:data)||{preferences:{email:session.user.email},saved_recipe_ids:[],meal_box:[],meal_history:{}};if(!data&&!incoming.preferences?.completed&&!cached.completed&&cached.onboardingStep>=(incoming.preferences?.onboardingStep||0)&&cached.name)incoming.preferences={...cached,email:session.user.email};applyCloudSnapshot(incoming);
 purchases=load('cookly-purchases',[]).filter(x=>x&&recipes.some(r=>r.id===x.id)&&Number.isInteger(x.servings)&&x.servings>=1&&x.servings<=6);
 accountLoaded=true;cloudState='ready';cloudMessage='Your Cookly data is synced.';if(restorePending)queueCloudSave();render();
 if(!preferences.completed||!preferences.name.trim()||!preferences.username.trim()){preferences.completed=false;preferences.onboardingStep=preferences.name.trim()&&preferences.username.trim()?preferences.onboardingStep:0;openPreferences(true)}
 }catch(error){if(userId!==cloudUserId)return;cloudState='error';cloudMessage='Could not load your account: '+error.message;render()}})();
 return activationPromise;
}
function accessReady(){return !!cloudSession&&accountLoaded&&preferences.completed&&!!preferences.name.trim()&&!!preferences.username.trim()}
function renderWelcome(){
 $('.header-actions').hidden=true;$('#navigation').hidden=true;$('#main').className='';
 $('#main').innerHTML=`<div class="page-title"><span class="eyebrow">Your kitchen, your way</span><h1>Welcome to Cookly</h1><p>Sign up or log in to find your next favorite meal.</p></div>${cloudSession?`<section class="profile-card"><p role="status">${escapeHTML(cloudMessage||'Loading your account…')}</p>${cloudState==='error'?'<button class="secondary" data-account-retry>Retry loading account</button>':''}${cloudState==='ready'||cloudState==='saving'?'<button class="primary" data-account-setup>Complete your profile and preferences</button>':''}<button class="secondary" data-cloud-signout>Sign out</button>${accountDeletionActions()}</section>`:cloudSyncMarkup()}`;
}
document.addEventListener('click',async e=>{if(e.target.closest('[data-cloud-retry-save]')){try{await saveCloudSnapshot()}catch(error){cloudState='error';cloudMessage='Could not save: '+error.message;render()}}if(e.target.closest('[data-account-setup]'))openPreferences(true);if(e.target.closest('[data-account-retry]')){const session=cloudSession;cloudUserId='';await activateCloudSession(session)}});
function loadSupabaseLibrary(){if(window.supabase?.createClient)return Promise.resolve();return new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';script.async=true;script.onload=()=>window.supabase?.createClient?resolve():reject(new Error('Supabase library did not initialize.'));script.onerror=()=>reject(new Error('Supabase library could not load. Account access is unavailable. Please reload to retry.'));document.head.append(script)})}
async function initializeCloud(){try{const [,response]=await Promise.all([loadSupabaseLibrary(),fetch(new URL('api/config',location.href),{headers:{Accept:'application/json'}})]);if(!response.ok){cloudState=response.status===404||response.status===503?'unavailable':'error';cloudMessage=response.status===404||response.status===503?'Cloud sync is not configured on this host yet.':`Cloud configuration request failed (${response.status}).`;return}const config=await response.json();if(!config.supabaseUrl||!config.supabaseAnonKey||!window.supabase?.createClient){cloudState='unavailable';cloudMessage='Cloud sync is not configured on this host yet.';return}supabaseAuthStorageKey='sb-'+new URL(config.supabaseUrl).hostname.split('.')[0]+'-auth-token';supabaseClient=window.supabase.createClient(config.supabaseUrl,config.supabaseAnonKey);supabaseClient.auth.onAuthStateChange((_event,session)=>{setTimeout(()=>{activateCloudSession(session).catch(error=>{cloudState='error';cloudMessage=`Cloud sync failed: ${error.message}`;toast('Cookly could not sync your account.');render()})},0)});const {data,error}=await supabaseClient.auth.getSession();if(error)throw error;await activateCloudSession(data.session)}catch(error){cloudState='error';cloudMessage=`Cloud sync could not start: ${error.message}`}}
function accountDeletionActions(){return '<div class="account-delete-actions"><button class="text-button" type="button" data-account-delete="data">Delete my Cookly data</button><button class="text-button" type="button" data-account-delete="account">Delete my account</button></div>'}
let cloudAuthMode='signin';
function cloudAuthFormMarkup(){const signup=cloudAuthMode==='signup';return `<form id="cloudAuthForm"><div class="auth-mode-switch" role="group" aria-label="Account access">${[['signin','Sign in'],['signup','Create account']].map(([mode,label])=>`<button type="button" data-auth-mode="${mode}" aria-pressed="${cloudAuthMode===mode}">${label}</button>`).join('')}</div><div class="auth-intro"><span class="eyebrow">${signup?'New to Cookly':'Already have an account?'}</span><h2 id="authModeTitle">${signup?'Create your account':'Welcome back'}</h2><p>${signup?'Save your favorites and make Cookly your own.':'Sign in to return to your saved meals and preferences.'}</p></div><label>Email address<input name="email" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com" required maxlength="254"></label><label>${signup?'Create a password':'Password'}<input name="password" type="password" autocomplete="${signup?'new-password':'current-password'}" required minlength="${signup?'8':'1'}" maxlength="128" ${signup?'aria-describedby="authPasswordHint"':''}></label>${signup?'<p class="auth-field-hint" id="authPasswordHint">Use at least 8 characters. You’ll confirm your email before signing in.</p>':''}<p class="cloud-auth-message" id="cloudAuthMessage" role="status" aria-live="polite"></p><div class="cloud-auth-actions"><button class="primary" type="submit" name="authAction" value="${cloudAuthMode}">${signup?'Create account':'Sign in'}</button></div><p class="auth-switch-prompt">${signup?'Already have an account?':'New to Cookly?'} <button type="button" data-auth-mode="${signup?'signin':'signup'}">${signup?'Sign in':'Create an account'}</button></p></form>`}
function cloudSyncMarkup(){const stateText=cloudMessage||'Checking your account…';if(cloudSession)return `<section class="cloud-sync-card"><h2>Your Cookly account</h2><p class="muted">${escapeHTML(stateText)}</p><p class="cloud-account">Signed in as ${escapeHTML(cloudSession.user.email||'Cookly user')}</p>${cloudState==='error'?'<button class="secondary" data-cloud-retry-save>Retry saving changes</button>':''}<button class="secondary" type="button" data-cloud-signout>Sign out</button>${accountDeletionActions()}</section>`;return `<section class="cloud-sync-card" aria-labelledby="${supabaseClient?'authModeTitle':'accountAccessTitle'}">${supabaseClient?cloudAuthFormMarkup():`<h2 id="accountAccessTitle">Your Cookly account</h2><p class="muted">${escapeHTML(stateText)}</p><p class="muted">Account access is unavailable until Cookly’s Supabase connection is configured. Please try again after configuration.</p>`}</section>`}
document.addEventListener('click',event=>{const button=event.target.closest('[data-auth-mode]');if(!button||button.disabled)return;const form=button.closest('#cloudAuthForm'),mode=button.dataset.authMode;if(!form||!['signin','signup'].includes(mode)||cloudAuthMode===mode)return;const email=form.elements.email.value;cloudAuthMode=mode;form.outerHTML=cloudAuthFormMarkup();const next=$('#cloudAuthForm');next.elements.email.value=email;next.querySelector(`.auth-mode-switch [data-auth-mode="${mode}"]`).focus()});
document.addEventListener('submit',async event=>{if(event.target.id!=='cloudAuthForm')return;event.preventDefault();const form=event.target,action=event.submitter?.value||cloudAuthMode,message=$('#cloudAuthMessage'),buttons=form.querySelectorAll('button');if(!supabaseClient||!['signin','signup'].includes(action))return;const email=String(new FormData(form).get('email')||'').trim(),password=String(new FormData(form).get('password')||'');buttons.forEach(button=>button.disabled=true);message.textContent=action==='signup'?'Creating your account…':'Signing in…';try{const result=action==='signup'?await supabaseClient.auth.signUp({email,password}):await supabaseClient.auth.signInWithPassword({email,password});if(result.error)throw result.error;if(result.data.session){cloudAuthMode='signin';await activateCloudSession(result.data.session);render()}else{message.textContent='Check your email to confirm your account, then come back and sign in.'}}catch(error){message.textContent=error.message||'Could not sign in. Please try again.'}finally{buttons.forEach(button=>button.disabled=false)}});
document.addEventListener('click',async event=>{if(!event.target.closest('[data-cloud-signout]'))return;if(!supabaseClient)return;const button=event.target.closest('[data-cloud-signout]');button.disabled=true;try{if(accountLoaded){clearTimeout(cloudSyncTimer);try{await saveCloudSnapshot()}catch{toast('Cloud save failed. Unsynced changes remain in this account’s device cache.')}}const {error}=await supabaseClient.auth.signOut();if(error)throw error;await activateCloudSession(null);toast('You are signed out.')}catch(error){cloudState='error';cloudMessage=`Sign out failed: ${error.message}`;toast('Cookly could not sign you out.');if(page==='profile')renderProfile()}finally{if(button.isConnected)button.disabled=false}});
// Deletion is performed by narrowly scoped authenticated database functions.
const deletionDialog=document.createElement('dialog');
deletionDialog.id='accountDeletionDialog';deletionDialog.setAttribute('aria-labelledby','accountDeletionTitle');document.body.append(deletionDialog);
function clearAccountCache(userId){
 const prefixKeys=['cookly-preferences','cookly-saved','cookly-box','cookly-meals','cookly-purchases','cookly-pending-cloud'];
 for(const key of prefixKeys){try{localStorage.removeItem(key+'::'+userId)}catch{}}
}
function openAccountDeletion(kind){
 if(!cloudSession||accountDeletionBusy||deletionDialog.open)return;
 const account=kind==='account',phrase=account?'DELETE ACCOUNT':'DELETE DATA';
 deletionDialog.innerHTML=`<form id="accountDeletionForm" class="account-deletion-page" data-kind="${account?'account':'data'}"><h1 id="accountDeletionTitle">${account?'Delete your account?':'Delete your Cookly data?'}</h1><p>${account?'Permanently delete your login account and its saved Cookly profile, preferences, recipes, meal box, and cooking journal. You will be signed out.':'Permanently clear your Cookly profile, onboarding answers, saved recipes, meal box, and cooking journal. Keep your login account and set up your profile again.'}</p><p>Saved addresses and demo meal history on this browser will also be cleared. Downloaded copies and caches on other devices may remain. Provider backups follow their retention policies.</p><p><strong>This cannot be undone.</strong></p><label>Type <strong>${phrase}</strong> to confirm<input name="confirmation" autocomplete="off" required aria-label="Deletion confirmation" placeholder="${phrase}"></label><p id="accountDeletionError" role="alert"></p><div class="account-deletion-buttons"><button class="secondary" type="button" data-account-delete-cancel>Cancel</button><button class="primary account-danger" type="submit">${account?'Permanently delete account':'Permanently delete data'}</button></div></form>`;
 deletionDialog.showModal();deletionDialog.querySelector('input').focus();
}
document.addEventListener('click',e=>{
 const action=e.target.closest('[data-account-delete]');if(action)openAccountDeletion(action.dataset.accountDelete);
 if(e.target.closest('[data-account-delete-cancel]')&&!accountDeletionBusy)deletionDialog.close();
});
deletionDialog.addEventListener('cancel',e=>{if(accountDeletionBusy)e.preventDefault()});
document.addEventListener('submit',async e=>{
 if(e.target.id!=='accountDeletionForm')return;e.preventDefault();if(accountDeletionBusy||!cloudSession)return;
 const form=e.target,kind=form.dataset.kind,expected=kind==='account'?'DELETE ACCOUNT':'DELETE DATA',field=form.elements.confirmation;
 field.setCustomValidity(field.value===expected?'':'Type '+expected+' exactly to confirm.');if(!form.reportValidity())return;
 const userId=cloudUserId;accountDeletionBusy=true;clearTimeout(cloudSyncTimer);form.querySelectorAll('button,input').forEach(x=>x.disabled=true);$('#accountDeletionError').textContent='Deleting…';
 try{
  // Drain existing saves so they cannot recreate data after this operation.
  await cloudSaveChain.catch(()=>{});if(userId!==cloudUserId)throw new Error('Your session changed. Sign in again.');
  const {error}=await supabaseClient.rpc(kind==='account'?'cookly_delete_my_account':'cookly_clear_my_data');if(error)throw error;
  clearAccountCache(userId);
  if(kind==='account'&&supabaseAuthStorageKey){try{localStorage.removeItem(supabaseAuthStorageKey);localStorage.removeItem(supabaseAuthStorageKey+'-code-verifier');localStorage.removeItem(supabaseAuthStorageKey+'-user')}catch{}}
  try{localStorage.setItem('cookly-account-deletion',JSON.stringify({userId,kind,at:Date.now()}));localStorage.removeItem('cookly-account-deletion')}catch{}
  deletionDialog.close();
  if(kind==='account'){
   // The server has removed the auth identity. Clear the local session as well.
   try{await supabaseClient.auth.signOut({scope:'local'})}catch{}
   await activateCloudSession(null);toast('Your Cookly account has been deleted.');
  }else{
   const session=cloudSession;cloudUserId='';await activateCloudSession(session);toast('Your Cookly data has been deleted. Your login account is kept.');
  }
 }catch(error){const message=$('#accountDeletionError');if(message)message.textContent='Deletion failed. '+(error.message||'Please try again.');form.querySelectorAll('button,input').forEach(x=>x.disabled=false)}
 finally{accountDeletionBusy=false}
});
document.addEventListener('input',e=>{if(e.target.name==='confirmation'&&e.target.closest('#accountDeletionForm'))e.target.setCustomValidity('')});
window.addEventListener('storage',async e=>{
 if(e.key!=='cookly-account-deletion'||!e.newValue)return;
 let event;try{event=JSON.parse(e.newValue)}catch{return}if(!cloudSession||event.userId!==cloudUserId)return;
 clearTimeout(cloudSyncTimer);clearAccountCache(cloudUserId);accountDeletionBusy=true;
 try{if(event.kind==='account'){try{await supabaseClient.auth.signOut({scope:'local'})}catch{}await activateCloudSession(null)}else{const session=cloudSession;cloudUserId='';await activateCloudSession(session)}}finally{accountDeletionBusy=false}
});
function toast(message){clearTimeout(toastTimeout);$('#toast').textContent=message;$('#toast').classList.add('show');toastTimeout=setTimeout(()=>$('#toast').classList.remove('show'),2600)}
// Five destinations: Featured, Menu, Cart, History, and Profile.
// Hide the bottom bar during deliberate downward scrolling; reveal on upward movement.
let navigationLastY=Math.max(0,window.scrollY||0),navigationTravel=0,navigationDirection=0;
function revealNavigation(){const nav=$('#navigation');nav.classList.remove('is-scroll-hidden');navigationLastY=Math.max(0,window.scrollY||0);navigationTravel=0;navigationDirection=0}
function handleNavigationScroll(){
 const y=Math.max(0,Math.min(window.scrollY||0,Math.max(0,document.documentElement.scrollHeight-window.innerHeight)));
 if($('#recipeDialog').open||$('#preferencesDialog').open||$('#checkoutDialog').open){navigationLastY=y;navigationTravel=0;return}
 const delta=y-navigationLastY;navigationLastY=y;
 if(y<=48){revealNavigation();return}
 if(!delta)return;
 const direction=delta>0?1:-1;
 if(direction!==navigationDirection){navigationDirection=direction;navigationTravel=0}
 navigationTravel+=Math.abs(delta);
 if(navigationTravel>=(direction>0?36:14)){
  const nav=$('#navigation');
  if(direction>0&&!nav.contains(document.activeElement))nav.classList.add('is-scroll-hidden');
  else nav.classList.remove('is-scroll-hidden');
  navigationTravel=0;
 }
}
window.addEventListener('scroll',handleNavigationScroll,{passive:true});
$('#navigation').addEventListener('focusin',revealNavigation);
icons.history='<path d="M3 11a9 9 0 1 1 2 7M3 4v7h7"/><path d="M12 7v5l3 2"/>';
function renderNav(){$('#navigation').innerHTML=[['home','Featured'],['explore','Find your next favorite'],['box','Shopping cart'],['history','Purchased meals and cooking journal'],['profile','Profile']].map(([id,label])=>`<button class="nav-item ${page===id?'active':''}" data-nav="${id}" aria-label="${label}" title="${label}" ${page===id?'aria-current="page"':''}>${icon(id)}${id==='box'&&box.length?'<span class="nav-count" aria-hidden="true"></span>':''}</button>`).join('')}
// Keep every available cuisine in the story strip; apply its filter before the six-card cap.
function featuredPool(){return recipes.filter(r=>r.featured&&(preferences.diet!=='vegetarian'||r.tags.includes('Vegetarian'))).sort((a,b)=>preferenceScore(b)-preferenceScore(a)||(b.rating||0)-(a.rating||0))}
function featuredRecipes(){return featuredPool().filter(r=>page!=='home'||matches(r,category)).slice(0,6)}
// Flags are visual cuisine cues; full cuisine names stay in button labels and tooltips.
const cuisineFlags={American:"🇺🇸",Filipino:"🇵🇭","Italian-inspired":"🇮🇹","Japanese-inspired":"🇯🇵","Mediterranean-inspired":"🌍","Korean-inspired":"🇰🇷","Thai-inspired":"🇹🇭","Mexican-inspired":"🇲🇽","Indian-inspired":"🇮🇳"};
function categoryRow(){const home=page==='home';const pool=home?featuredPool():recipes;const options=home?[...new Set(pool.map(r=>r.cuisine))]:page==='explore'?['For You',...new Set(pool.map(r=>r.cuisine))]:categories.filter(c=>pool.some(r=>matches(r,c)));if(page==='explore')return `<div class="menu-cuisines" aria-label="Menu cuisines">${options.map(c=>`<button data-category="${c}" class="${category===c?'active':''}" aria-pressed="${category===c}">${c==='For You'?'All dishes':`<span aria-hidden="true">${cuisineFlags[c]||'🌍'}</span> ${c.replace('-inspired','')}`}</button>`).join('')}</div>`;return `<div class="categories" aria-label="${home?'Featured cuisines':'Recipe categories'}">${options.map(c=>{const r=pool.find(r=>matches(r,c));const label=c==='For You'?'All dishes':c;return `<button class="category ${category===c?'active':''}" data-category="${c}" aria-label="${home?'Highest-rated '+c+' dishes':label}" title="${label}" aria-pressed="${category===c}"><span class="category-ring"><img src="${imageAt(r.image,160,65)}" alt="" loading="lazy" decoding="async"></span>${home?`<span class="category-flag" aria-hidden="true">${cuisineFlags[c]||'🌍'}</span>`:`<span class="category-label">${label}</span>`}</button>`}).join('')}</div>`}
function saveButton(r){return `<button class="save-button ${saved.has(r.id)?'saved':''}" data-save="${r.id}" aria-label="${saved.has(r.id)?'Unsave':'Save'} ${r.name}" aria-pressed="${saved.has(r.id)}">${icon('heart')}</button>`}
// Keep the feed image-led: a handwritten flavor note, strong title, and quiet kit facts.
function card(r,i){const notes={'butter-steak':'Savory & seared','calamansi-pasta':'Bright & creamy','beef-salpicao':'Garlicky goodness','tofu-sisig':'Crispy & zesty','miso-salmon':'Sweet meets savory','chicken-adobo':'Comfort, always'};return `<article class="recipe-card"><button class="card-open" data-open="${r.id}" aria-label="View recipe: ${r.name}"><img src="${r.image}" alt="${r.name}" decoding="async" ${i?'loading="lazy"':'fetchpriority="high"'}><div class="card-info"><span class="card-badge">${notes[r.id]||r.category}</span><h3>${r.name}</h3><div class="card-meta">${r.rating?`<span class="recipe-rating" aria-label="Sample rating ${r.rating.toFixed(1)} out of 5">★ ${r.rating.toFixed(1)}</span><span class="meta-dot">·</span>`:''}<span>${r.time} min</span><span class="meta-dot">·</span><span>${r.difficulty}</span><span class="meta-dot">·</span><span>from ${peso(r.price)}</span>${icon('arrow')}</div></div></button>${saveButton(r)}</article>`}
function menuCard(r,i){return `<article class="menu-card"><button class="menu-open" data-open="${r.id}" aria-label="View recipe: ${r.name}"><div class="menu-photo"><img src="${r.image}" alt="${r.name}" ${i?'loading="lazy"':'fetchpriority="high"'} decoding="async"><span class="menu-time">${icon('clock')}${r.time} min</span></div><div class="menu-card-copy"><span class="menu-category"><span aria-hidden="true">${cuisineFlags[r.cuisine]||'🌍'}</span> ${r.cuisine.replace('-inspired','')}</span><h2>${r.name}</h2><p>${r.tags.includes('Vegetarian')?'Plant-forward':'Freshly portioned'} · ${r.difficulty}</p><div class="menu-card-bottom"><strong>${peso(r.price)}<small>kit for two</small></strong><span class="menu-recipe-arrow">${icon('arrow')}</span></div></div></button>${saveButton(r)}</article>`}
function feedRecipes(){const source=page==='home'?featuredRecipes():recipes;return source.filter(r=>matches(r,category)&&(page!=='saved'||saved.has(r.id))&&(r.name+' '+r.ingredients.map(i=>i.name).join(' ')).toLowerCase().includes(query.trim().toLowerCase()))}
function renderFeed(){const list=feedRecipes(),visible=page==='explore'?list.slice(0,visibleMenuCount):list,remaining=list.length-visible.length;$('#feed').className=page==='explore'?'menu-grid':'';$('#feed').innerHTML=list.length?(page==='explore'?visible.map(menuCard).join('')+(remaining?`<button class="primary menu-load-more" data-action="show-more">Show ${Math.min(12,remaining)} more dishes</button>`:''):list.map(card).join('')):`<div class="empty">${icon(page==='saved'?'saved':'search')}<h2>${page==='saved'?'A little inspiration, saved.':'Nothing simmering here yet.'}</h2><p class="muted">${page==='saved'?'Tap a heart on any recipe to keep it here.':'Try another cuisine or search.'}</p><button class="primary" data-action="reset">Browse the menu</button></div>`;const count=$('#menuCount');if(count)count.textContent=`${list.length} ${list.length===1?'dish':'dishes'}`}
function render(){if(!accessReady())return renderWelcome();$('.header-actions').hidden=false;$('.avatar').textContent=preferences.name.trim().split(/\s+/).map(part=>part[0]).slice(0,2).join('').toUpperCase();$('#navigation').hidden=false;renderNav();const main=$('#main');main.className=page==='home'?'home-view':page==='explore'?'menu-view':'';if(['home','explore','saved'].includes(page)){main.innerHTML=(page==='home'?`<div class="featured-heading"><h1>${preferences.name?escapeHTML(preferences.name.charAt(0).toLocaleUpperCase()+preferences.name.split(/\s+/)[0].slice(1))+', here are your featured tastes.':'Here are your featured tastes.'}</h1></div>`:`<div class="page-title"><h1>${page==='saved'?'Your saved recipes':'Find your next favorite.'}</h1>${page==='saved'?'<p>Good things are worth coming back to.</p>':''}</div>`)+(page==='explore'?`<label class="search-field">${icon('search')}<input id="searchInput" type="search" placeholder="Search dishes or ingredients" aria-label="Search dishes or ingredients" value="${escapeHTML(query)}"></label>`:'')+categoryRow()+`<div class="feed-heading"><h2>${page==='saved'?'Saved for later':category==='For You'?(page==='home'?'Featured for you':'All dishes'):category}</h2>${page==='explore'?'<span class="menu-count" id="menuCount"></span>':''}</div><div id="feed"></div>`;renderFeed()}else if(page==='box')renderBox();else if(page==='history')renderHistory();else renderProfile()}
function navigate(next){if(!accessReady())return render();revealNavigation();if($('#recipeDialog').open)$('#recipeDialog').close();page=next;category='For You';query='';visibleMenuCount=12;render();window.scrollTo({top:0,behavior:'smooth'})}
function renderBox(){$('#main').innerHTML=`<div class="page-title"><span class="eyebrow">From scroll to stove</span><h1>Your Meal Box</h1><p>Review your dishes and total before checkout.</p></div>`+(box.length?`<div class="box-list">${box.map((x,i)=>{const r=recipes.find(r=>r.id===x.id);return `<article class="box-item"><button class="icon-button" style="width:64px;height:78px" data-open="${r.id}" aria-label="View ${r.name}"><img src="${r.image}" alt="${r.name}"></button><div><h2>${r.name}</h2><p>Serves ${x.servings} · ${r.time} min</p><div class="stepper"><button data-box-step="${i}" data-delta="-1" aria-label="Decrease servings for ${r.name}" ${x.servings===1?'disabled':''}>−</button><strong>${x.servings}</strong><button data-box-step="${i}" data-delta="1" aria-label="Increase servings for ${r.name}" ${x.servings===6?'disabled':''}>+</button></div>${x.doneness?`<p>${escapeHTML(steakDonenessOptions.find(option=>option.id===x.doneness)?.label||'Medium')} steak</p>`:''}<strong>${peso(Math.round(r.price*x.servings/2))}</strong></div><button class="icon-button" data-remove="${i}" aria-label="Remove ${r.name}">${icon('close')}</button></article>`}).join('')}</div><div class="box-total"><div class="total-row"><span>Subtotal · ${box.length} ${box.length===1?'meal kit':'meal kits'}</span><strong>${peso(boxSubtotal(box))}</strong></div><div class="total-row"><span>Delivery</span><strong>Included</strong></div><div class="total-row box-grand-total"><strong>Total</strong><strong>${peso(boxSubtotal(box))}</strong></div>${freshnessReminder()}<button class="primary" data-checkout="open">Continue to checkout · ${peso(boxSubtotal(box))} ${icon('arrow')}</button><button class="secondary" data-nav="explore">Add another dish</button><p class="checkout-demo-note">Prototype only: no payment is collected and no food is delivered.</p></div>`:`<div class="empty">${icon('box')}<h2>A delicious possibility.</h2><p class="muted">Your box is waiting for its first recipe.</p><button class="primary" data-nav="explore">Find something to cook ${icon('arrow')}</button></div>`)}
// Checkout is a local demo: delivery details stay in memory and no payment is collected.
// Demo orders stay on this device; a confirmed order record is required to unlock its guide.
let purchases=load('cookly-purchases',[]).filter(x=>x&&recipes.some(r=>r.id===x.id)&&Number.isInteger(x.servings)&&x.servings>=1&&x.servings<=6);
const steakDonenessOptions=[
 {id:'rare',label:'Rare',tempC:52},
 {id:'medium-rare',label:'Medium rare',tempC:57},
 {id:'medium',label:'Medium',tempC:63},
 {id:'medium-well',label:'Medium well',tempC:68},
 {id:'well-done',label:'Well done',tempC:71,above:true}
];
let steakDoneness='medium';
function isSteakBowl(recipe){return recipe?.name==='Steak Rice Bowl'&&recipe.tags.includes('Steak')}
function selectedSteakDoneness(){return steakDonenessOptions.find(option=>option.id===steakDoneness)||steakDonenessOptions[2]}
function steakTargetTemperature(option=selectedSteakDoneness()){const value=preferences.temperature==='fahrenheit'?`${Math.round(option.tempC*9/5+32)}°F`:`${option.tempC}°C`;return `about ${value}${option.above?'+':''}`}
function steakDonenessPicker(){const choice=selectedSteakDoneness();return `<fieldset class="steak-doneness"><label for="steakDoneness">Steak doneness</label><select id="steakDoneness" name="steakDoneness">${steakDonenessOptions.map(option=>`<option value="${option.id}" ${option.id===choice.id?'selected':''}>${option.label}</option>`).join('')}</select><p class="steak-doneness-note" aria-live="polite">Target: ${steakTargetTemperature(choice)}. Check with a thermometer; thickness and heat control cooking time. The guide includes basting within second-side cooking, then resting.</p><p class="steak-safety-note">For food safety, the USDA recommends whole beef steaks reach at least 63°C / 145°F and rest for 3 minutes. Rare and medium-rare are below that recommended minimum; use a food thermometer.</p></fieldset>`}
document.addEventListener('change',e=>{if(e.target.id!=='steakDoneness')return;const choice=steakDonenessOptions.find(option=>option.id===e.target.value);if(!choice)return;steakDoneness=choice.id;timerStepKey='';const note=$('.steak-doneness-note');if(note)note.textContent=`Target: ${steakTargetTemperature(choice)}. Check with a thermometer; thickness and heat control cooking time. The guide includes basting within second-side cooking, then resting.`});
document.addEventListener('click',e=>{const button=e.target.closest('[data-action="cook"]');if(button&&!purchasedMeal(current.id)){e.preventDefault();e.stopImmediatePropagation();toast('Order this meal kit to unlock the cooking guide.')}},true);
function purchasedMeal(id){return purchases.find(x=>x.id===id&&typeof x.orderId==='string'&&x.orderId.startsWith('DEMO-')&&typeof x.purchasedAt==='string')}
function unlockPurchasedGuides(items,orderId){if(typeof orderId!=='string'||!orderId.startsWith('DEMO-'))throw new Error('A confirmed order is required to unlock cooking guides.');for(const item of items){purchases=purchases.filter(x=>x.id!==item.id);purchases.unshift({...item,orderId,purchasedAt:new Date().toISOString()})}try{localStorage.setItem(accountKey('cookly-purchases'),JSON.stringify(purchases))}catch{toast('Guides unlocked for this visit. Device storage is unavailable.')}}
function purchasedMeals(){const ordered=purchases.filter(item=>purchasedMeal(item.id));return `<section class="cooked-meals"><h2>Purchased Meals</h2><p class="muted">${ordered.length?'Your guides are ready. Cook, enjoy, then tell us how it tasted.':'Your purchased meal kits will appear here after checkout.'}</p>${ordered.map(x=>{const r=recipes.find(r=>r.id===x.id),review=mealHistory[r.id];return `<article class="history-meal"><button class="cooked-meal" data-guide="${r.id}"><img src="${r.image}" alt=""><span><strong>${r.name}</strong><small>Serves ${x.servings} · Open cooking guide</small></span>${icon('arrow')}</button><button class="history-rate" data-rate="${r.id}">${review?.stars?'★ '+review.stars+'/5 · Edit your rating':'Cooked & tasted it? Rate this meal'}</button></article>`}).join('')}${!ordered.length?'<button class="secondary" data-nav="explore">Find your next meal</button>':''}</section>`}
function renderHistory(){$('#main').innerHTML=`<div class="page-title"><h1>Your kitchen history</h1><p>From your first box to your next favorite.</p></div>${purchasedMeals()}${cookedMeals()||'<section class="cooked-meals"><h2>Cooking journal</h2><p class="muted">Finish a cooking guide to keep your meals and ratings here.</p></section>'}`}
document.addEventListener('click',e=>{const button=e.target.closest('[data-rate]');if(!button)return;openRecipe(button.dataset.rate);markCooked();mealView='rating';renderDetail()});
function openPurchasedGuide(id){const purchase=purchasedMeal(id),recipe=recipes.find(item=>item.id===id);if(!purchase||!recipe){toast('This cooking guide is unavailable. Check your Purchased Meals list.');return}if(guide&&current?.id===id&&$('#recipeDialog').open)return;if($('#checkoutDialog').open)$('#checkoutDialog').close();current=recipe;servings=purchase.servings;steakDoneness=steakDonenessOptions.some(option=>option.id===purchase.doneness)?purchase.doneness:'medium';guide=true;guideStep=0;mealView='';timerStepKey='';renderDetail();if(!$('#recipeDialog').open)$('#recipeDialog').showModal();$('#recipeDialog').scrollTop=0;$('#detailTitle').focus({preventScroll:true});requestAnimationFrame(()=>{const step=$('#detailContent .guide-step');if(step&&$('#recipeDialog').open)step.scrollIntoView({block:'start'})})}
document.addEventListener('click',e=>{const button=e.target.closest('[data-guide]');if(button)openPurchasedGuide(button.dataset.guide)});
let checkoutStage='delivery',checkoutDraft={},checkoutItems=[],demoOrder=null,checkoutLocationConfirmed=false,checkoutPinAddress='',checkoutAddressMode='new',checkoutMap=null,checkoutMarker=null,checkoutSuggestions=[],geocodeController=null,reverseGeocodeController=null,addressSearchTimer=null,lastGeocodeRequest=0,leafletLoadPromise=null;
const luzonServiceBounds={south:12,north:21.5,west:119,east:123};
function inLuzonServiceArea(lat,lon){return lat>=luzonServiceBounds.south&&lat<=luzonServiceBounds.north&&lon>=luzonServiceBounds.west&&lon<=luzonServiceBounds.east}
function boxSubtotal(items){return items.reduce((sum,x)=>sum+Math.round(recipes.find(r=>r.id===x.id).price*x.servings/2),0)}
function deliveryClock(now=new Date()){const parts=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Manila',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(p=>[p.type,p.value]));return {date:`${parts.year}-${parts.month}-${parts.day}`,minutes:Number(parts.hour)*60+Number(parts.minute)}}
function earliestDeliveryDate(now=new Date()){const clock=deliveryClock(now);if(clock.minutes<15*60)return clock.date;const [y,m,d]=clock.date.split('-').map(Number);return new Date(Date.UTC(y,m-1,d+1)).toISOString().slice(0,10)}
function deliverySlots(date,now=new Date()){const clock=deliveryClock(now);return ['09:00–12:00','12:00–15:00','15:00–18:00'].filter(slot=>date!==clock.date||Number(slot.slice(0,2))*60>clock.minutes)}
function freshnessReminder(){return '<aside class="freshness-reminder"><strong>Freshness comes first.</strong><p>Orders placed from 3 PM are delivered the next day, so your ingredients arrive fresh. You can also choose a later delivery date. Cutoff follows Philippine time.</p></aside>'}
function checkoutSummary(){return `<section class="checkout-summary"><h2>Order summary</h2>${checkoutItems.map(x=>{const r=recipes.find(r=>r.id===x.id);return `<div class="checkout-kit"><img src="${r.image}" alt=""><span><strong>${r.name}</strong><small>Serves ${x.servings}${isSteakBowl(r)?` · ${escapeHTML(steakDonenessOptions.find(option=>option.id===x.doneness)?.label||'Medium')} steak`:''}</small></span><b>${peso(Math.round(r.price*x.servings/2))}</b></div>`}).join('')}<div class="checkout-total-line"><span>Meal kits</span><strong>${peso(boxSubtotal(checkoutItems))}</strong></div><div class="checkout-total-line muted"><span>Delivery</span><span>Included</span></div><div class="checkout-total-line checkout-grand"><strong>Total to confirm</strong><strong>${peso(boxSubtotal(checkoutItems))}</strong></div></section>`}
function checkoutField(key,label,type,autocomplete,extra=''){return `<label class="checkout-field">${label}<span class="required-mark" aria-hidden="true">*</span><input name="${key}" type="${type}" autocomplete="${autocomplete}" value="${escapeHTML(checkoutDraft[key]||'')}" required ${extra}></label>`}
function checkoutStatus(message,error=false){const status=$('#checkoutLocationStatus');if(status){status.textContent=message;status.classList.toggle('is-error',error)}}
function loadLeaflet(){if(window.L)return Promise.resolve(window.L);if(leafletLoadPromise)return leafletLoadPromise;leafletLoadPromise=new Promise((resolve,reject)=>{if(!document.querySelector('#leafletStyles')){const link=document.createElement('link');link.id='leafletStyles';link.rel='stylesheet';link.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';document.head.append(link)}const script=document.createElement('script');script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';script.onload=()=>{if(window.L)resolve(window.L);else{leafletLoadPromise=null;reject(new Error('The map library did not initialize.'))}};script.onerror=()=>{leafletLoadPromise=null;reject(new Error('The map could not be loaded. Check your connection and try again.'))};document.head.append(script)});return leafletLoadPromise}
function destroyCheckoutMap(){if(checkoutMap){checkoutMap.remove();checkoutMap=null;checkoutMarker=null}if(geocodeController){geocodeController.abort();geocodeController=null}if(reverseGeocodeController){reverseGeocodeController.abort();reverseGeocodeController=null}clearTimeout(addressSearchTimer);addressSearchTimer=null;checkoutSuggestions=[]}
function checkoutPinIcon(L){return L.divIcon({className:'checkout-map-pin',html:'<span></span>',iconSize:[24,32],iconAnchor:[12,30]})}
async function updateAddressFromPin(point){if(reverseGeocodeController)reverseGeocodeController.abort();const controller=new AbortController();reverseGeocodeController=controller;checkoutLocationConfirmed=false;checkoutPinAddress='';const button=$('[data-checkout="confirm-pin"]');if(button)button.disabled=true;checkoutStatus('Updating the address to match the pin…');try{const wait=Math.max(0,1100-(Date.now()-lastGeocodeRequest));if(wait)await new Promise(resolve=>setTimeout(resolve,wait));if(controller.signal.aborted||!checkoutMarker)return;const current=checkoutMarker.getLatLng();if(Math.abs(current.lat-point.lat)>0.000001||Math.abs(current.lng-point.lng)>0.000001)return;lastGeocodeRequest=Date.now();const response=await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&lat=${point.lat}&lon=${point.lng}`,{signal:controller.signal,headers:{Accept:'application/json'}});if(!response.ok)throw new Error(`Address lookup failed (${response.status}). Try again.`);const result=await response.json();if((result.address?.country_code||'').toLowerCase()!=='ph'||!inLuzonServiceArea(point.lat,point.lng))throw new Error('Cookly delivery is available in Luzon, Philippines only.');if(!result.display_name)throw new Error('No street address was found for this pin. Try moving it slightly.');if(controller.signal.aborted)return;const address=$('#checkoutAddress');if(!address)return;address.value=result.display_name;checkoutDraft.address=result.display_name;checkoutPinAddress=result.display_name;checkoutStatus('Address updated to match the pin. Confirm the pin to continue.')}catch(error){if(error.name!=='AbortError')checkoutStatus(error.message,true)}finally{if(reverseGeocodeController===controller){reverseGeocodeController=null;if(button)button.disabled=false}}}
async function initializeCheckoutMap(){const container=$('#deliveryMap');if(!container)return;try{const L=await loadLeaflet();if(!$('#deliveryMap')||!$('#checkoutDialog').open)return;const position=checkoutDraft.location||{lat:14.5995,lon:120.9842},bounds=L.latLngBounds([luzonServiceBounds.south,luzonServiceBounds.west],[luzonServiceBounds.north,luzonServiceBounds.east]);checkoutMap=L.map('deliveryMap',{maxBounds:bounds,maxBoundsViscosity:1}).setView([position.lat,position.lon],checkoutDraft.location?16:12);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(checkoutMap);checkoutMarker=L.marker([position.lat,position.lon],{draggable:true,icon:checkoutPinIcon(L)}).addTo(checkoutMap);checkoutMarker.on('dragend',()=>{const p=checkoutMarker.getLatLng();if(!inLuzonServiceArea(p.lat,p.lng)){const previous=checkoutDraft.location||{lat:14.5995,lon:120.9842};checkoutMarker.setLatLng([previous.lat,previous.lon]);checkoutStatus('Cookly delivery is available in Luzon, Philippines only.',true);return}checkoutDraft.location={lat:p.lat,lon:p.lng};updateAddressFromPin(p)});checkoutMap.on('click',event=>{if(!inLuzonServiceArea(event.latlng.lat,event.latlng.lng)){checkoutStatus('Cookly delivery is available in Luzon, Philippines only.',true);return}checkoutMarker.setLatLng(event.latlng);checkoutDraft.location={lat:event.latlng.lat,lon:event.latlng.lng};updateAddressFromPin(event.latlng)});requestAnimationFrame(()=>checkoutMap?.invalidateSize())}catch(error){checkoutStatus(error.message,true)}}
async function searchDeliveryAddress(query=$('#checkoutAddress')?.value.trim()){const address=query?.trim(),results=$('#addressSuggestions');if(!address||address.length<3){checkoutStatus('Type at least 3 characters to search Luzon addresses.');results.hidden=true;return}if(geocodeController)geocodeController.abort();const controller=new AbortController();geocodeController=controller;const wait=Math.max(0,1100-(Date.now()-lastGeocodeRequest));if(wait)await new Promise(resolve=>setTimeout(resolve,wait));if(controller.signal.aborted||$('#checkoutAddress')?.value.trim()!==address)return;lastGeocodeRequest=Date.now();checkoutStatus('Searching Luzon addresses…');try{const {west,east,north,south}=luzonServiceBounds,viewbox=`${west},${north},${east},${south}`,response=await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&countrycodes=ph&viewbox=${viewbox}&bounded=1&limit=5&q=${encodeURIComponent(address)}`,{signal:controller.signal,headers:{Accept:'application/json'}});if(!response.ok)throw new Error(`Address search failed (${response.status}). Try again.`);const matches=await response.json();checkoutSuggestions=matches.filter(result=>(result.address?.country_code||'').toLowerCase()==='ph'&&inLuzonServiceArea(Number(result.lat),Number(result.lon)));results.innerHTML=checkoutSuggestions.map((result,index)=>`<button type="button" class="location-suggestion" role="option" data-location-index="${index}">${escapeHTML(result.display_name)}</button>`).join('');results.hidden=checkoutSuggestions.length===0;checkoutStatus(checkoutSuggestions.length?'Choose the matching Luzon address from the list.':'No matching Luzon addresses found. Try a more specific search.',!checkoutSuggestions.length)}catch(error){if(error.name!=='AbortError')checkoutStatus(error.message,true)}}
function selectDeliveryAddress(index){const result=checkoutSuggestions[index];if(!result)return;const lat=Number(result.lat),lon=Number(result.lon);if(!Number.isFinite(lat)||!Number.isFinite(lon))return;if(reverseGeocodeController){reverseGeocodeController.abort();reverseGeocodeController=null}const confirmButton=$('[data-checkout="confirm-pin"]');if(confirmButton)confirmButton.disabled=false;checkoutAddressMode='new';checkoutDraft.address=result.display_name;checkoutDraft.addressLabel='';checkoutDraft.location={lat,lon};checkoutLocationConfirmed=false;$('#checkoutAddress').value=result.display_name;const savedNote=$('.checkout-saved-address-note');if(savedNote)savedNote.hidden=true;checkoutPinAddress=result.display_name;$('#checkoutAddress').removeAttribute('aria-invalid');$('#checkoutValidation').hidden=true;$('#addressSuggestions').hidden=true;document.querySelectorAll('.checkout-address-choice').forEach(button=>button.classList.toggle('selected',button.dataset.checkout==='new-address'));if(checkoutMap){checkoutMarker.setLatLng([lat,lon]);checkoutMap.setView([lat,lon],17)}checkoutStatus('Address selected. The pin is optional; adjust it if you want to refine the drop-off point.')}
async function confirmDeliveryPin(){if(!checkoutMap||!checkoutMarker){checkoutStatus('The map is not ready yet. Please wait or try again.',true);return}const point=checkoutMarker.getLatLng(),address=$('#checkoutAddress').value.trim();if(!address){checkoutStatus('Enter an address or select a suggested address before confirming the pin.',true);return}if(checkoutPinAddress!==address){checkoutLocationConfirmed=false;checkoutStatus('Choose a matching address or place the pin on the map after entering your address.',true);return}if(!inLuzonServiceArea(point.lat,point.lng)){checkoutLocationConfirmed=false;checkoutStatus('Cookly delivery is available in Luzon, Philippines only.',true);return}checkoutLocationConfirmed=false;checkoutStatus('Checking this Luzon delivery location…');try{if(Date.now()-lastGeocodeRequest<1100)await new Promise(resolve=>setTimeout(resolve,1100-(Date.now()-lastGeocodeRequest)));lastGeocodeRequest=Date.now();const response=await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&lat=${point.lat}&lon=${point.lng}`,{headers:{Accept:'application/json'}});if(!response.ok)throw new Error(`Address lookup failed (${response.status}).`);const result=await response.json();if((result.address?.country_code||'').toLowerCase()!=='ph'||!inLuzonServiceArea(point.lat,point.lng))throw new Error('That pin is outside Cookly’s Luzon, Philippines delivery area.');checkoutDraft.location={lat:point.lat,lon:point.lng};checkoutLocationConfirmed=true;$('#checkoutAddress').removeAttribute('aria-invalid');$('#checkoutValidation').hidden=true;checkoutStatus('Pin confirmed and linked to this delivery address.')}catch(error){checkoutStatus(error.message,true)}}
function openCheckout(){if(!box.length)return;checkoutStage='delivery';const saved=preferences.savedAddress;checkoutAddressMode=saved?'saved':'new';checkoutLocationConfirmed=false;checkoutPinAddress=saved?.location?saved.address:'';checkoutDraft={name:preferences.name,phone:'',address:saved?.address||'',unit:saved?.unit||'',instructions:saved?.instructions||'',addressLabel:saved?.label||'',location:saved?.location?{...saved.location}:null,date:earliestDeliveryDate(),slot:'12:00–15:00'};checkoutItems=box.map(x=>({...x}));checkoutDraft.slot=deliverySlots(checkoutDraft.date)[0];demoOrder=null;renderCheckout();$('#checkoutDialog').showModal();$('#checkoutTitle').focus()}
function renderCheckout(){
 destroyCheckoutMap();
 if(checkoutStage==='delivery'&&!deliverySlots(checkoutDraft.date).includes(checkoutDraft.slot))checkoutDraft.slot=deliverySlots(checkoutDraft.date)[0];
 const delivery=checkoutStage==='delivery',review=checkoutStage==='review',saved=preferences.savedAddress;
 const addressChoices=saved?`<fieldset class="checkout-address-choice-group"><legend>Where should we deliver?</legend><div class="checkout-address-choices"><button type="button" class="checkout-address-choice ${checkoutAddressMode==='saved'?'selected':''}" data-checkout="use-saved-address"><strong>${escapeHTML(saved.label)}</strong><span>${escapeHTML(saved.address)}</span></button><button type="button" class="checkout-address-choice ${checkoutAddressMode==='new'?'selected':''}" data-checkout="new-address"><strong>Use another address</strong><span>Search for a different delivery location</span></button></div></fieldset>`:'';
 const detail=checkoutDraft.unit||checkoutDraft.instructions?`<br>${escapeHTML(checkoutDraft.unit)}${checkoutDraft.unit&&checkoutDraft.instructions?'<br>':''}${escapeHTML(checkoutDraft.instructions)}`:'';
 $('#checkoutContent').innerHTML=`<div class="checkout-page"><div class="checkout-top"><button class="icon-button" data-checkout="${review?'edit':'close'}" aria-label="${review?'Edit delivery details':'Close checkout'}">${icon('back')}</button><span>COOKLY · CHECKOUT</span></div><h1 id="checkoutTitle" tabindex="-1">${delivery?'Let’s get dinner to you.':review?'One last look.':'Your demo order is saved.'}</h1><p class="muted">${delivery?'Add delivery details, then review your meal box.':review?'Check your dishes and delivery details before confirming.':'This is a prototype confirmation. No real order was placed and no payment was collected.'}</p>${delivery?`${freshnessReminder()}<form id="checkoutForm" novalidate><div class="checkout-validation" id="checkoutValidation" role="alert" hidden></div>${checkoutField('name','Full name','text','name','maxlength="80"')}${checkoutField('phone','Mobile number','tel','tel','maxlength="20" title="Enter 8–20 characters using digits, spaces, +, parentheses, or hyphens."')}${addressChoices}<label class="checkout-field">Delivery address <span class="required-mark" aria-hidden="true">*</span><input id="checkoutAddress" name="address" type="text" autocomplete="street-address" maxlength="300" required value="${escapeHTML(checkoutDraft.address||'')}" placeholder="Enter street, barangay, or city"></label>${checkoutDraft.addressLabel?`<p class="checkout-saved-address-note">Using your saved ${escapeHTML(checkoutDraft.addressLabel)} address. You can adjust it below.</p>`:''}<label class="checkout-field">Floor / Unit / Room # <span class="optional-note">Optional</span><input name="unit" type="text" maxlength="100" autocomplete="address-line2" value="${escapeHTML(checkoutDraft.unit||'')}" placeholder="e.g. Unit 4B, 2nd floor"></label><label class="checkout-field">Delivery instructions <span class="optional-note">Optional</span><input name="instructions" type="text" maxlength="300" autocomplete="off" value="${escapeHTML(checkoutDraft.instructions||'')}" placeholder="Landmark or note for the rider"></label><button class="secondary address-search-button" type="button" data-checkout="search-address">${icon('search')} Find address</button><div id="addressSuggestions" class="address-suggestions" role="listbox" aria-label="Luzon address suggestions" hidden></div><div class="location-map-heading"><strong>Optional delivery pin</strong><span>Refine your drop-off point if you like. Your written delivery address is enough to continue.</span></div><div id="deliveryMap" class="delivery-map" role="region" aria-label="Luzon delivery location map"></div><button class="secondary confirm-pin-button" type="button" data-checkout="confirm-pin">Confirm pin (optional)</button><p id="checkoutLocationStatus" class="location-status" role="status">${checkoutLocationConfirmed?'Delivery location selected and confirmed.':'Pin optional — your written delivery address is enough to continue.'}</p><p class="map-attribution-note">Cookly delivery is available in Luzon, Philippines only. Map and address search by OpenStreetMap.</p>${checkoutField('date','Delivery date','date','off',`min="${earliestDeliveryDate()}"`)}<label class="checkout-field">Delivery window <span class="required-mark" aria-hidden="true">*</span><select name="slot" required>${deliverySlots(checkoutDraft.date).map(slot=>`<option value="${slot}" ${checkoutDraft.slot===slot?'selected':''}>${slot}</option>`).join('')}</select></label><p class="checkout-demo-note">Delivery windows use Philippine time. Details are kept only for this visit.</p><button class="primary" type="submit">Review order ${icon('arrow')}</button></form>`:review?`<section class="checkout-address"><h2>Deliver to</h2><strong>${escapeHTML(checkoutDraft.name)}</strong><p>${escapeHTML(checkoutDraft.phone)}<br>${escapeHTML(checkoutDraft.address)}${detail}</p><p>${escapeHTML(checkoutDraft.date)} · ${escapeHTML(checkoutDraft.slot)}<br>Philippine time</p><button class="text-button" data-checkout="edit">Edit delivery details</button></section>${checkoutSummary()}<section class="checkout-address"><h2>Payment</h2><p>No payment required.</p></section><button class="primary" data-checkout="confirm">Confirm order ${icon('arrow')}</button><p class="checkout-demo-note">This simulates checkout only. Nothing will be charged or delivered.</p>`:`<div class="checkout-success-mark" aria-hidden="true">✓</div><p class="demo-order-id">${demoOrder.id}</p>${checkoutSummary()}<section class="checkout-unlocked"><h2>Your guides are unlocked</h2><p class="muted">Open a step-by-step guide now, or find it anytime in History → Purchased Meals.</p>${checkoutItems.map(x=>`<button class="secondary" data-checkout-guide="${x.id}">Open ${recipes.find(r=>r.id===x.id).name} step-by-step guide ${icon('arrow')}</button>`).join('')}</section><p class="muted">Your Meal Box has been cleared.</p><button class="primary" data-checkout="done">Back to Home ${icon('arrow')}</button>`}</div>`;
 if(checkoutStage==='complete')$('#checkoutContent').querySelectorAll('[data-checkout-guide]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();const item=checkoutItems.find(entry=>entry.id===button.dataset.checkoutGuide);if(!item||!demoOrder){toast('This cooking guide is unavailable. Check your Purchased Meals list.');return}if(!purchasedMeal(item.id))unlockPurchasedGuides([item],demoOrder.id);openPurchasedGuide(item.id)}));
 if(delivery){const intro=$('#checkoutContent .checkout-page > p.muted');if(intro)intro.insertAdjacentHTML('afterend',checkoutSummary())}
 $('#checkoutDialog').scrollTop=0;
 if(delivery){const address=$('#checkoutAddress');address.closest('label').after($('#addressSuggestions'));address.setAttribute('aria-describedby','checkoutLocationStatus');initializeCheckoutMap()}
}
document.addEventListener('submit',e=>{if(e.target.id!=='checkoutForm')return;e.preventDefault();const form=e.target,data=new FormData(form),phone=form.elements.phone,digits=phone.value.replace(/\D/g,'');phone.setCustomValidity(!/^[+0-9 ()-]{8,20}$/.test(phone.value.trim())||digits.length<8||digits.length>15?'Enter a valid mobile number with 8 to 15 digits.':'');const location=checkoutDraft.location;checkoutDraft=Object.fromEntries(['name','phone','address','unit','instructions','date','slot'].map(k=>[k,String(data.get(k)||'').trim()]));checkoutDraft.addressLabel=checkoutAddressMode==='saved'?preferences.savedAddress?.label||'':'';checkoutDraft.location=location;const issues=[];for(const field of form.querySelectorAll('input[required],select[required]')){field.removeAttribute('aria-invalid');if(!field.value.trim()||!field.checkValidity()){field.setAttribute('aria-invalid','true');issues.push(field)}}if(checkoutDraft.date<earliestDeliveryDate()||!deliverySlots(checkoutDraft.date).includes(checkoutDraft.slot)){const date=form.elements.date;date.setAttribute('aria-invalid','true');if(!issues.includes(date))issues.push(date)}if(issues.length){const message=$('#checkoutValidation');message.textContent='Some required details are missing or invalid. Complete the highlighted fields to continue.';message.hidden=false;issues[0].focus();toast('Some required details are missing. Check the highlighted fields.');return}$('#checkoutValidation').hidden=true;checkoutStage='review';renderCheckout();$('#checkoutTitle').focus()});
document.addEventListener('click',e=>{const suggestion=e.target.closest('[data-location-index]');if(suggestion){selectDeliveryAddress(Number(suggestion.dataset.locationIndex));return}const action=e.target.closest('[data-checkout]')?.dataset.checkout;if(!action)return;if(action==='open')openCheckout();if(action==='close')$('#checkoutDialog').close();if(action==='use-saved-address'&&preferences.savedAddress){clearTimeout(addressSearchTimer);if(geocodeController){geocodeController.abort();geocodeController=null}if(reverseGeocodeController){reverseGeocodeController.abort();reverseGeocodeController=null}const saved=preferences.savedAddress;checkoutAddressMode='saved';checkoutDraft.address=saved.address;checkoutDraft.unit=saved.unit;checkoutDraft.instructions=saved.instructions;checkoutDraft.addressLabel=saved.label;checkoutDraft.location=saved.location?{...saved.location}:null;checkoutPinAddress=saved.location?saved.address:'';checkoutLocationConfirmed=false;$('#checkoutAddress').value=saved.address;$('#checkoutForm [name="unit"]').value=saved.unit;$('#checkoutForm [name="instructions"]').value=saved.instructions;$('#addressSuggestions').hidden=true;document.querySelectorAll('.checkout-address-choice').forEach(button=>button.classList.toggle('selected',button.dataset.checkout==='use-saved-address'));if(saved.location&&checkoutMarker){checkoutMarker.setLatLng([saved.location.lat,saved.location.lon]);checkoutMap.setView([saved.location.lat,saved.location.lon],17)}checkoutStatus('Saved address selected. Check and confirm its pin before continuing.')}if(action==='new-address'){clearTimeout(addressSearchTimer);if(geocodeController){geocodeController.abort();geocodeController=null}if(reverseGeocodeController){reverseGeocodeController.abort();reverseGeocodeController=null}checkoutAddressMode='new';checkoutDraft.address='';checkoutDraft.unit='';checkoutDraft.instructions='';checkoutDraft.addressLabel='';checkoutDraft.location=null;checkoutPinAddress='';checkoutLocationConfirmed=false;$('#checkoutAddress').value='';$('#checkoutForm [name="unit"]').value='';$('#checkoutForm [name="instructions"]').value='';$('#addressSuggestions').hidden=true;document.querySelectorAll('.checkout-address-choice').forEach(button=>button.classList.toggle('selected',button.dataset.checkout==='new-address'));if(checkoutMarker){checkoutMarker.setLatLng([14.5995,120.9842]);checkoutMap.setView([14.5995,120.9842],12)}checkoutStatus('Enter or search for an address, then set and confirm its pin.')}if(action==='search-address'){clearTimeout(addressSearchTimer);searchDeliveryAddress()}if(action==='confirm-pin')confirmDeliveryPin();if(action==='edit'){checkoutStage='delivery';renderCheckout();$('#checkoutTitle').focus()}if(action==='confirm'&&checkoutStage==='review'&&checkoutItems.length){if(checkoutDraft.date<earliestDeliveryDate()||!deliverySlots(checkoutDraft.date).includes(checkoutDraft.slot)){checkoutDraft.date=earliestDeliveryDate();checkoutStage='delivery';renderCheckout();return}demoOrder={id:'DEMO-'+Date.now().toString(36).toUpperCase(),total:boxSubtotal(checkoutItems)};unlockPurchasedGuides(checkoutItems,demoOrder.id);box=[];persist();checkoutDraft={};checkoutStage='complete';render();renderCheckout();$('#checkoutTitle').focus()}if(action==='done'){$('#checkoutDialog').close();checkoutDraft={};navigate('home')}});
function scheduleDeliveryAddressSearch(value){clearTimeout(addressSearchTimer);if(geocodeController){geocodeController.abort();geocodeController=null}const results=$('#addressSuggestions');checkoutSuggestions=[];results.replaceChildren();if(value.trim().length<3){results.hidden=true;checkoutStatus('Type at least 3 characters to search Luzon addresses.');return}results.hidden=false;checkoutStatus('Searching Luzon addresses…');addressSearchTimer=setTimeout(()=>searchDeliveryAddress(value.trim()),500)}
document.addEventListener('input',e=>{if(e.target.id==='checkoutAddress'){if(reverseGeocodeController){reverseGeocodeController.abort();reverseGeocodeController=null}const confirmButton=$('[data-checkout="confirm-pin"]');if(confirmButton)confirmButton.disabled=false;checkoutAddressMode='new';checkoutDraft.addressLabel='';checkoutLocationConfirmed=false;checkoutPinAddress='';checkoutDraft.location=null;const savedNote=$('.checkout-saved-address-note');if(savedNote)savedNote.hidden=true;e.target.removeAttribute('aria-invalid');$('#checkoutValidation').hidden=true;document.querySelectorAll('.checkout-address-choice').forEach(button=>button.classList.toggle('selected',button.dataset.checkout==='new-address'));scheduleDeliveryAddressSearch(e.target.value)}});
document.addEventListener('input',e=>{if(e.target.name==='phone')e.target.setCustomValidity('')});
document.addEventListener('change',e=>{if(e.target.closest('#checkoutForm')){e.target.removeAttribute('aria-invalid');$('#checkoutValidation').hidden=true}});
document.addEventListener('click',e=>{const button=e.target.closest('[data-checkout="done"]');if(!button)return;e.preventDefault();e.stopPropagation();$('#checkoutDialog').close();checkoutDraft={};navigate('home')},true);
const systemTheme=window.matchMedia('(prefers-color-scheme: dark)');
let themeChoice='dark';
// Theme is stored as plain text for the early, pre-paint script in index.html.
try{themeChoice=localStorage.getItem('cookly-theme')||'dark'}catch{}
if(!['light','dark','system'].includes(themeChoice))themeChoice='dark';
function applyTheme(){const dark=themeChoice==='dark'||(themeChoice==='system'&&systemTheme.matches);document.documentElement.dataset.theme=dark?'dark':'light';$('meta[name="theme-color"]').content=dark?'#000000':'#FFFFFF'}
function selectTheme(choice){if(!['light','dark','system'].includes(choice))return;themeChoice=choice;applyTheme();try{localStorage.setItem('cookly-theme',choice)}catch{toast('Appearance will last for this visit; storage is unavailable.')}}
systemTheme.addEventListener('change',()=>{if(themeChoice==='system')applyTheme()});
function renderProfile(){$('#main').innerHTML=`<div class="page-title"><button class="profile-back" data-nav="home">${icon('back')} Back to home</button><h1>Profile</h1><p>Your kitchen, your way.</p></div><section class="profile-card"><h2>${preferences.name?'Hi, '+escapeHTML(preferences.name)+'.':'Make yourself at home.'}</h2><p class="muted">Keep your favorites and choose how Cookly looks on this device.</p><fieldset class="appearance"><legend>Appearance</legend><div class="theme-options">${['light','dark','system'].map(t=>`<label class="theme-option"><input type="radio" name="appearance" value="${t}" ${themeChoice===t?'checked':''}><span>${t[0].toUpperCase()+t.slice(1)}</span></label>`).join('')}</div><p class="muted">System follows your device’s light or dark appearance.</p></fieldset><div class="profile-links"><button data-preference="open"><span>Preferences<small class="profile-link-note">Personal details, cooking, equipment, units & delivery address</small></span>${icon('arrow')}</button><button data-nav="history">Purchased meals & cooking journal ${icon('arrow')}</button><button data-nav="saved">Saved recipes <strong>${saved.size} →</strong></button><button data-nav="box">Your Meal Box <strong>${box.length} →</strong></button><button data-nav="explore">Browse the menu ${icon('arrow')}</button></div></section>${cloudSyncMarkup()}`}
// One adjustable timer stays active while browsing steps and other screens.
let timerSeconds=300,timerDuration=300,timerEnd=0,timerInterval=null,timerStepKey='';
function timerMarkup(){const step=guideStepData();if(!step.timerSeconds&&!timerInterval)return '';if(!timerInterval&&timerStepKey!==`${current.id}:${guideStep}`){timerStepKey=`${current.id}:${guideStep}`;timerDuration=step.timerSeconds||300;timerSeconds=timerDuration}return `<section class="timer-panel" aria-label="Cooking timer"><div class="timer-fields"><label for="timerMinutes">${step.timerSeconds?'Step timer (minutes)':'Timer minutes'}</label><input id="timerMinutes" type="number" min="0.5" max="180" step="0.5" value="${timerDuration/60}" ${timerInterval?'disabled':''}></div><output class="timer-clock" id="timerClock" aria-label="Time remaining">${timerText()}</output><div class="timer-actions"><button data-action="timer-toggle">${timerInterval?'Pause':'Start'}</button><button data-action="timer-reset">Reset</button></div><span id="timerStatus" class="muted" role="status">${escapeHTML(step.timerNote||'')}</span></section>`}
function timerText(){return `${String(Math.floor(timerSeconds/60)).padStart(2,'0')}:${String(timerSeconds%60).padStart(2,'0')}`}
function updateTimer(){document.querySelectorAll('#timerClock,#focusTimerClock').forEach(clock=>{clock.textContent=timerText()});const toggle=$('[data-focus-timer="toggle"]');if(toggle)toggle.textContent=timerInterval?'Pause':'Start';const status=$('#focusTimerStatus');if(status)status.textContent=timerSeconds===0?'Timer complete!':timerInterval?'Cooking timer is running.':'Timer paused.'}
function openFocusTimer(){
 let dialog=$('#focusTimerDialog');
 if(!dialog){dialog=document.createElement('dialog');dialog.id='focusTimerDialog';dialog.setAttribute('aria-labelledby','focusTimerTitle');document.body.append(dialog)}
 dialog.innerHTML=`<div class="focus-timer-content"><button class="secondary" data-focus-timer="back">← Back to guide</button><p class="eyebrow">${escapeHTML(current.name)} · Step ${guideStep+1}</p><h1 id="focusTimerTitle">${escapeHTML(guideStepData().title)}</h1><output id="focusTimerClock" aria-label="Time remaining">${timerText()}</output><p id="focusTimerStatus" role="status"></p><p class="focus-timer-note">${escapeHTML(guideStepData().timerNote||'Cook at your own pace.')}</p><div class="focus-timer-actions"><button class="primary" data-focus-timer="toggle">Pause</button><button class="secondary" data-focus-timer="reset">Reset</button></div></div>`;
 if(!dialog.open)dialog.showModal();updateTimer();
 dialog.onclose=()=>{if(current&&guide)updateDetail('timer-toggle')};
}
document.addEventListener('click',event=>{const action=event.target.closest('[data-focus-timer]')?.dataset.focusTimer;if(!action)return;if(action==='back')$('#focusTimerDialog').close();if(action==='toggle')toggleTimer();if(action==='reset'){stopTimer();timerSeconds=timerDuration;updateTimer()}});
function stopTimer(){clearInterval(timerInterval);timerInterval=null}
function toggleTimer(){if(timerInterval){timerSeconds=Math.max(0,Math.ceil((timerEnd-Date.now())/1000));stopTimer()}else{if(!timerSeconds)timerSeconds=timerDuration;timerEnd=Date.now()+timerSeconds*1000;timerInterval=setInterval(()=>{timerSeconds=Math.max(0,Math.ceil((timerEnd-Date.now())/1000));updateTimer();if(!timerSeconds){stopTimer();const status=$('#timerStatus');if(status)status.textContent='Timer complete!';const button=$('[data-action="timer-toggle"]');if(button)button.textContent='Start';if($('#timerMinutes'))$('#timerMinutes').disabled=false;updateTimer();toast('Cooking timer complete!')}},250)}if(current&&guide)updateDetail('timer-toggle');updateTimer();if(timerInterval&&!$('#focusTimerDialog')?.open)openFocusTimer()}
// No autoplay or automatic step advance: watch, pause, replay, then cook at your pace.
let stepPlayback={key:'',elapsed:0,playing:false,started:0},stepPlaybackTimer=null;
const mockStepDuration=18;
// Detailed steps can use {{0}}, {{1}}, etc. to pull live quantities from ingredients.
// Each recipe may define guideSteps: [{ title, text, video, ingredientIndexes }].
// video is a different MP4 for that step; ingredientIndexes references the recipe's ingredients array.
// Each recipe now carries its researched, explicit guide steps.
const detailedGuideOverrides={};
function quantityForIngredient(i){return formatQuantity(i.amount*servings/2,i.unit)+' '+i.name.toLowerCase()}
function guideStepData(){const explicit=current.guideSteps?.[guideStep]||detailedGuideOverrides[current.id]?.[guideStep],step={...explicit,title:explicit?.title||`Step ${guideStep+1}`,text:explicit?.text??current.steps[guideStep]};if(isSteakBowl(current)&&step.steakPhase==='baste'){const choice=selectedSteakDoneness();step.text+=` Selected ${choice.label.toLowerCase()} target: ${steakTargetTemperature(choice)}. Rare and medium-rare are below the food-safety minimum of 63°C with at least 3 minutes rest.`}return step}
function cookingResearch(recipe){if(!recipe.cookingSources?.length)return '';return `<details class="guide-box-reference cooking-research"><summary>Cooking notes &amp; sources</summary><p>${escapeHTML(recipe.cookingNotes)}</p><ul>${recipe.cookingSources.map(source=>`<li><a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.title)}</a></li>`).join('')}</ul><p>Reviewed ${escapeHTML(recipe.cookingReviewed)} · Methods adapted for this kit; not kitchen-tested.</p></details>`}
function detailedStepText(){const step=guideStepData();let text=step.text.replace(/\{\{(\d+)\}\}/g,(_,index)=>current.ingredients[Number(index)]?quantityForIngredient(current.ingredients[Number(index)]):'');if(current.guideSteps?.[guideStep]||detailedGuideOverrides[current.id])return text.replace(/(\d+(?:\.\d+)?)°C/g,(_,n)=>preferences.temperature==='fahrenheit'?`${Math.round(Number(n)*9/5+32)}°F`:`${n}°C`);
 // Match ingredient references in the original instructions without changing their cooking method.
 const replacements=[];current.ingredients.forEach((ingredient,index)=>{const name=ingredient.name.toLowerCase();const aliases=[name];for(const word of ['rice','pasta','chicken','beef','tofu','salmon','shrimp','mushrooms','garlic','cream','spinach','chickpeas','tortillas','couscous','potatoes','basil','parsley','onion','carrots','beans'])if(name.includes(word))aliases.push(word);for(const alias of aliases)replacements.push({alias,index})});replacements.sort((a,b)=>b.alias.length-a.alias.length);const tokens=[];text=text.replace(/\bpasta water\b/gi,value=>{const token='§'+tokens.length+'§';tokens.push(value);return token});for(const {alias,index} of replacements){const escaped=alias.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');text=text.replace(new RegExp('\\b'+escaped+'\\b','gi'),()=>{const token='§'+tokens.length+'§';tokens.push(quantityForIngredient(current.ingredients[index]));return token})}text=formatGuideText(text);return text.replace(/§(\d+)§/g,(_,n)=>tokens[Number(n)])}
function stepIngredientIndexes(){const explicit=guideStepData().ingredientIndexes;if(Array.isArray(explicit))return explicit.filter(i=>Number.isInteger(i)&&current.ingredients[i]);if(guideStep===0)return current.ingredients.map((_,i)=>i);const text=current.steps[guideStep].toLowerCase();return current.ingredients.flatMap((ingredient,i)=>{const words=ingredient.name.toLowerCase().split(/\s+/).filter(w=>w.length>3);return words.some(w=>text.includes(w))?[i]:[]})}
function guideIngredients(){const indexes=stepIngredientIndexes();return `${indexes.length?`<section class="step-ingredients"><h3>${guideStep===0?'Set out these measured ingredients':'Ingredients referenced in this step'}</h3><ul>${indexes.map(i=>{const item=current.ingredients[i];return `<li><span>${item.name}</span><strong>${formatQuantity(item.amount*servings/2,item.unit)}</strong></li>`}).join('')}</ul><p>Amounts are for ${servings} ${servings===1?'serving':'servings'}. Ingredients prepared earlier are reused, not added twice.</p></section>`:''}<details class="guide-box-reference"><summary>Check all box quantities · ${servings} servings</summary><ul>${current.ingredients.map(i=>`<li><span>${i.name}</span><strong>${formatQuantity(i.amount*servings/2,i.unit)}</strong></li>`).join('')}</ul><p>Pantry basics: water, oil, salt, and pepper. Cooking times and temperatures do not scale with servings.</p></details>`}
function stepVideoSource(){const src=current?.guideSteps?.[guideStep]?.video||current?.stepVideos?.[guideStep];return typeof src==='string'?src:''}
function stopStepPlayback(){if(stepPlayback.playing)stepPlayback.elapsed=Math.min(mockStepDuration,stepPlayback.elapsed+(Date.now()-stepPlayback.started)/1000);stepPlayback.playing=false;clearInterval(stepPlaybackTimer);stepPlaybackTimer=null;const video=$('#stepVideo');if(video)video.pause()}
function guidePlayer(){const key=current.id+':'+guideStep;if(stepPlayback.key!==key){stopStepPlayback();stepPlayback={key,elapsed:0,playing:false,started:0}}const src=stepVideoSource();return `<div class="guide-player">${src?`<video id="stepVideo" controls playsinline preload="metadata" poster="${current.image}" aria-label="${current.name}, step ${guideStep+1} cooking video"><source src="${escapeHTML(src)}" type="video/mp4"></video><p class="video-failure" id="videoFailure" hidden>We couldn’t load this clip. You can still follow the written step below.</p><p class="recorded-portions-note">Follow the live quantities below for your ${servings} servings; recorded footage may show a different portion size.</p>`:`<div class="mock-step-film ${stepPlayback.playing?'is-playing':''}" id="mockStepFilm"><img src="${current.image}" alt="${current.name}"><div class="mock-film-shade"></div><span class="mock-film-tag">ANIMATED MOCK PREVIEW · STEP ${guideStep+1}</span><div class="mock-film-caption"><span>Watch first. Cook when you’re ready.</span><p id="mockFilmCaption"></p></div></div><div class="mock-film-controls"><button type="button" data-film="toggle" id="filmToggle" aria-label="Play step preview">Play preview</button><input id="filmSeek" type="range" min="0" max="18" step="0.1" value="${stepPlayback.elapsed}" aria-label="Step preview position"><span id="filmTime">0:00 / 0:18</span><button type="button" data-film="replay" aria-label="Replay step preview">↺</button></div>`}</div>`}
function updateStepPreview(){const film=$('#mockStepFilm');if(!film||!current)return;const elapsed=Math.min(mockStepDuration,stepPlayback.elapsed+(stepPlayback.playing?(Date.now()-stepPlayback.started)/1000:0));const cues=detailedStepText().match(/[^.!?]+[.!?]*/g)||[detailedStepText()];$('#mockFilmCaption').textContent=cues[Math.min(cues.length-1,Math.floor(elapsed/mockStepDuration*cues.length))].trim();$('#filmSeek').value=elapsed;$('#filmTime').textContent=`0:${String(Math.floor(elapsed)).padStart(2,'0')} / 0:18`;$('#filmToggle').textContent=stepPlayback.playing?'Pause':'Play preview';$('#filmToggle').setAttribute('aria-label',stepPlayback.playing?'Pause step preview':'Play step preview');film.classList.toggle('is-playing',stepPlayback.playing);if(elapsed>=mockStepDuration&&stepPlayback.playing){stopStepPlayback();$('#filmToggle').textContent='Replay preview';$('#filmToggle').setAttribute('aria-label','Replay step preview')}}
function syncStepPlayer(){if(!guide)return;if(!stepVideoSource()){updateStepPreview();return}const video=$('#stepVideo');if(video)video.addEventListener('error',()=>{$('#videoFailure').hidden=false});video?.querySelector('source')?.addEventListener('error',()=>{$('#videoFailure').hidden=false})}
document.addEventListener('click',e=>{const action=e.target.closest('[data-film]')?.dataset.film;if(!action||!guide||!purchasedMeal(current.id))return;if(action==='replay'){stopStepPlayback();stepPlayback.elapsed=0}if(stepPlayback.playing)stopStepPlayback();else{if(stepPlayback.elapsed>=mockStepDuration)stepPlayback.elapsed=0;stepPlayback.playing=true;stepPlayback.started=Date.now();stepPlaybackTimer=setInterval(()=>{if(!$('#recipeDialog').open||!guide){stopStepPlayback();return}updateStepPreview()},100)}updateStepPreview()});
document.addEventListener('input',e=>{if(e.target.id==='filmSeek'){const playing=stepPlayback.playing;stopStepPlayback();stepPlayback.elapsed=Math.max(0,Math.min(mockStepDuration,Number(e.target.value)||0));if(playing&&stepPlayback.elapsed<mockStepDuration){stepPlayback.playing=true;stepPlayback.started=Date.now();stepPlaybackTimer=setInterval(updateStepPreview,100)}updateStepPreview()}});
function renderDetail(){if(!guide)stopStepPlayback();if(mealView){renderMealView();return}const r=current;$('#detailContent').innerHTML=`<div class="detail-hero ${guide?'has-guide-player':''}">${guide?guidePlayer():`<img src="${r.image}" alt="${r.name}">`}<div class="detail-top"><button class="icon-button" data-action="${guide?'back-detail':'close'}" aria-label="${guide?'Back to recipe':'Back to feed'}">${icon('back')}</button>${saveButton(r)}</div></div><div class="detail-body"><span class="eyebrow">${r.category} · Cookly original</span><h1 id="detailTitle">${r.name}</h1>${guide?renderGuide():`<p>${r.description}</p><div class="detail-meta"><span>${icon('clock')}${r.time} min</span><span>${r.difficulty}</span><span>Fresh meal kit</span></div><div class="servings"><span>Servings</span><div class="stepper"><button data-action="minus" aria-label="Decrease servings" ${servings===1?'disabled':''}>−</button><strong aria-live="polite">${servings}</strong><button data-action="plus" aria-label="Increase servings" ${servings===6?'disabled':''}>+</button></div></div>${isSteakBowl(r)?steakDonenessPicker():''}<p class="guide-locked-note">No payment is collected. After confirming your order, open your guide from the confirmation screen or History.</p><div class="kit-price"><span>Meal kit · ${servings} serving${servings>1?'s':''}</span><strong>${peso(Math.round(r.price*servings/2))}</strong></div><button class="secondary" data-action="add">${icon('box')} Add to Meal Box</button><h2>Inside your Cookly box</h2><ul class="ingredients">${r.ingredients.map(i=>`<li>${formatQuantity(i.amount*servings/2,i.unit)} ${i.name}</li>`).join('')}</ul><p class="muted">Quantities are for ${servings} servings. Pantry basics: water, cooking oil, salt, and pepper.</p>${personalReview(r)}${cookingResearch(r)}`}</div>`;syncStepPlayer()}
function renderGuide(){return `<p class="guide-pace-note">Watch this step, pause or replay, then try it yourself. Tap Next when you’re ready.</p><p class="muted">Step ${guideStep+1} of ${current.steps.length} · Serves ${servings}</p><div class="guide-progress"><span style="width:${(guideStep+1)/current.steps.length*100}%"></span></div><section class="guide-step"><span class="eyebrow">${['Get ready','Bring it together','Make it yours'][guideStep]||'Cooking step'}</span><h2>${escapeHTML(guideStepData().title)}</h2><div class="step-instructions">${detailedStepText().split(/(?<=[.!?])\s+/).map(line=>`<p>${escapeHTML(line)}</p>`).join('')}</div></section>${guideIngredients()}${timerMarkup()}${cookingResearch(current)}<div class="guide-controls"><button class="secondary" style="margin:0" data-action="previous" ${guideStep===0?'disabled':''}>Back</button><button class="primary" data-action="next">${guideStep===current.steps.length-1?'Finish cooking':'Next step'} ${icon('arrow')}</button></div>`}
function openRecipe(id){if(!accessReady())return render();current=recipes.find(r=>r.id===id);if(!current){toast('This recipe is no longer available.');return}servings=preferences.servings;steakDoneness='medium';guide=false;mealView='';renderDetail();$('#recipeDialog').showModal();$('#recipeDialog').scrollTop=0}
function updateDetail(action){const previousVideo=$('#stepVideo'),videoTime=previousVideo?.currentTime||0,videoPlaying=previousVideo&&!previousVideo.paused,previousKey=stepPlayback.key;const dialog=$('#recipeDialog'),top=dialog.scrollTop;renderDetail();dialog.scrollTop=top;dialog.querySelector(`[data-action="${action}"]`)?.focus({preventScroll:true});const video=$('#stepVideo');if(video&&previousKey===stepPlayback.key){video.addEventListener('loadedmetadata',()=>{video.currentTime=videoTime;if(videoPlaying)video.play().catch(()=>{})},{once:true})}if(action==='next'||action==='previous')dialog.scrollTop=0}
document.addEventListener('click',e=>{const nav=e.target.closest('[data-nav]');if(nav)return navigate(nav.dataset.nav);const cat=e.target.closest('[data-category]');if(cat){const categoryScroller=page==='explore'?$('.menu-cuisines'):$('.categories');const left=categoryScroller.scrollLeft;category=cat.dataset.category;visibleMenuCount=12;document.querySelectorAll('[data-category]').forEach(b=>{b.classList.toggle('active',b.dataset.category===category);b.setAttribute('aria-pressed',b.dataset.category===category)});categoryScroller.scrollLeft=left;$('.feed-heading h2').textContent=page==='saved'?'Saved for later':category==='For You'?(page==='home'?'Featured for you':'All dishes'):category;return renderFeed()}const open=e.target.closest('[data-open]');if(open)return openRecipe(open.dataset.open);const save=e.target.closest('[data-save]');if(save){const id=save.dataset.save;saved.has(id)?saved.delete(id):saved.add(id);const isSaved=saved.has(id);persist();save.classList.toggle('saved',isSaved);save.setAttribute('aria-pressed',String(isSaved));save.setAttribute('aria-label',`${isSaved?'Unsave':'Save'} ${recipes.find(r=>r.id===id).name}`);if(page==='saved')renderFeed();if(page==='profile')renderProfile();toast(isSaved?'Saved for your next craving':'Removed from saved recipes');return}const remove=e.target.closest('[data-remove]');if(remove){box.splice(+remove.dataset.remove,1);persist();render();return}const action=e.target.closest('[data-action]')?.dataset.action;if(!action)return;if(action==='show-more'){visibleMenuCount+=12;return renderFeed()}if(action==='timer-toggle')toggleTimer();if(action==='timer-reset'){stopTimer();timerSeconds=timerDuration;updateDetail('timer-reset')}if(action==='search'){navigate('explore');$('#searchInput').focus()}if(action==='all-cuisines'){category='For You';render()}if(action==='reset')navigate(page==='home'?'home':'explore');if(action==='close')$('#recipeDialog').close();if(action==='minus'||action==='plus'){servings=Math.max(1,Math.min(6,servings+(action==='plus'?1:-1)));updateDetail(action)}if(action==='add'){box.push({id:current.id,servings});persist();renderNav();$('#recipeDialog').close();navigate('box');toast(`${current.name} added to your Meal Box`)}if(action==='cook'){guide=true;guideStep=0;renderDetail();$('#recipeDialog').scrollTop=0}if(action==='back-detail'){guide=false;renderDetail()}if(action==='previous'){guideStep=Math.max(0,guideStep-1);updateDetail('previous')}if(action==='next'){if(guideStep<current.steps.length-1){guideStep++;updateDetail('next')}else{guide=false;stopTimer();markCooked();mealView='finished';renderDetail()}}});
document.addEventListener('input',e=>{if(e.target.id==='searchInput'){query=e.target.value;visibleMenuCount=12;renderFeed()}});
document.addEventListener('change',e=>{
 if(e.target.name==='appearance')selectTheme(e.target.value);
 if(e.target.id==='timerMinutes'){const minutes=Number(e.target.value);if(Number.isFinite(minutes)&&minutes>=0.5&&minutes<=180&&Number.isInteger(minutes*2)){timerDuration=Math.round(minutes*60);timerSeconds=timerDuration;updateTimer()}else{e.target.value=timerDuration/60;toast('Choose a timer between 0.5 and 180 minutes in 0.5-minute increments.')}}

});
// The image stays hidden until successfully decoded, preventing a broken-image icon.
const brandLogo=$('.brand-logo'),brandFallback=$('.brand-fallback');
function showLogo(){brandLogo.hidden=false;brandFallback.hidden=true}
function hideLogo(){brandLogo.hidden=true;brandFallback.hidden=false}
brandLogo.addEventListener('load',showLogo);brandLogo.addEventListener('error',hideLogo);
if(brandLogo.complete&&brandLogo.naturalWidth>0)showLogo();else hideLogo();
$('#preferencesDialog').addEventListener('cancel',e=>{e.preventDefault();closePreferences()});
applyTheme();$('#headerSearch').innerHTML=icon('search');
render();void initializeCloud().finally(render);

document.addEventListener('change',e=>{if(e.target.name==='date'&&e.target.closest('#checkoutForm')){const select=$('#checkoutForm select[name="slot"]');select.innerHTML=deliverySlots(e.target.value).map(slot=>`<option value="${slot}">${slot}</option>`).join('')}});

$('#recipeDialog').addEventListener('close',stopStepPlayback);
$('#checkoutDialog').addEventListener('close',destroyCheckoutMap);

window.CooklyApp={
  recipes,
  get current(){return current},
  get servings(){return servings},
  get box(){return box},
  get purchases(){return purchases},
  get checkoutItems(){return checkoutItems},
  get guide(){return guide},
  get mealView(){return mealView},
  formatQuantity,
  persist,
  toast,
  addMealToBox(item){box.push({...item,...(isSteakBowl(current)?{doneness:steakDoneness}:{})});persist();renderNav();$('#recipeDialog').close();navigate('box');toast(`${current.name} added to your Meal Box`)}
};

document.addEventListener('click',e=>{const b=e.target.closest('[data-box-step]');if(!b||!accessReady())return;const item=box[Number(b.dataset.boxStep)];if(!item)return;item.servings=Math.max(1,Math.min(6,item.servings+Number(b.dataset.delta)));persist();render()});

for(const type of ['click','submit','change','input'])document.addEventListener(type,e=>{if(e.target.closest('#accountDeletionDialog'))return;if(accountDeletionBusy){e.stopImmediatePropagation();return}if(accessReady())return;if(e.target.closest('#preferencesDialog')&&cloudSession)return;if(e.target.closest('#main')&&(e.target.closest('#cloudAuthForm')||e.target.closest('[data-cloud-signout],[data-account-retry],[data-account-setup],[data-cloud-retry-save],[data-account-delete]')))return;e.stopImmediatePropagation()},true);
