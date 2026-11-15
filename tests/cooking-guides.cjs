const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),cp=require('node:child_process');
const source=fs.readFileSync('dist/app.js','utf8');
const recipes=vm.runInNewContext(source.split('const icons=')[0]+';recipes');
const baseline=vm.runInNewContext(cp.execFileSync('git',['show','HEAD:dist/app.js'],{encoding:'utf8'}).split('const icons=')[0]+';recipes');
assert.equal(recipes.length,65);
const methods=source.slice(source.indexOf('function guideStepData()'),source.indexOf('function stepIngredientIndexes()'));
const steakFns=source.slice(source.indexOf('const steakDonenessOptions='),source.indexOf('function steakDonenessPicker()'));
let count=0;
for(const recipe of recipes){
 const old=baseline.find(r=>r.id===recipe.id);
 for(const key of ['id','name','price','ingredients','category','tags'])assert.deepEqual(JSON.parse(JSON.stringify(recipe[key])),JSON.parse(JSON.stringify(old[key])),`${recipe.id}: preserve ${key}`);
 assert.equal(recipe.steps.length,recipe.guideSteps.length);
 assert(recipe.cookingSources.length&&recipe.cookingSources.every(s=>new URL(s.url).protocol==='https:'));
 const text=recipe.steps.join(' ');
 if(recipe.ingredients.some(i=>/chicken/i.test(i.name)))assert.match(text,/74°C/);
 if(recipe.ingredients.some(i=>/ground beef/i.test(i.name)))assert.match(text,/71°C/);
 if(recipe.ingredients.some(i=>/shrimp/i.test(i.name)))assert.match(text,/opaque/);
 if(recipe.ingredients.some(i=>/chickpeas|black beans/i.test(i.name)))assert.match(text,/fully cooked|canned/i);
 for(let j=0;j<recipe.steps.length;j++){
  const step=recipe.guideSteps[j];assert(step.title&&step.text===recipe.steps[j]);
  if(step.timerSeconds)assert(step.timerSeconds>0&&step.timerNote.includes('check'));
  for(const temperature of ['celsius','fahrenheit'])for(const servings of [1,2,6]){
   const c={current:recipe,guideStep:j,preferences:{temperature},servings,detailedGuideOverrides:{},quantityForIngredient:i=>`${i.amount*servings/2} ${i.name}`,formatGuideText:t=>t};
   const output=vm.runInNewContext(steakFns+methods+';({text:detailedStepText(),step:guideStepData()})',c);
   assert(!/undefined|NaN|\{\{/.test(output.text),recipe.id);
   if(temperature==='fahrenheit')assert(!output.text.includes('°C'),recipe.id);
   if(step.steakPhase)assert.match(output.text,/Selected medium target/);
   assert.equal(output.step.timerSeconds,step.timerSeconds,'portion changes cannot multiply timers');
  }
  count++;
 }
}
assert(!source.includes('searMinutes'));
for(const id of ['butter-steak','menu-steak-rice-bowl']){
 const r=recipes.find(r=>r.id===id);assert.match(r.steps.join(' '),/Basting is part of this second-side/);assert.match(r.steps.join(' '),/rest at least 3 minutes/);
}
console.log(`PASS: ${recipes.length} recipes, ${count} steps, 1/2/6 servings and C/F; sources, protein endpoints, cooked legumes, unchanged kits and non-scaling timers.`);
