const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const source=fs.readFileSync(require.resolve('../dist/app.js'),'utf8');
const start=source.indexOf('function detailedStepText()');
const end=source.indexOf('function stepIngredientIndexes()',start);
const fn=source.slice(start,end);
for(const [instruction,expected] of [
 ['Reserve pasta water and add pasta.','Reserve pasta water and add 300 g pasta.'],
 ['Boil pasta; keep the PASTA WATER.','Boil 300 g pasta; keep the PASTA WATER.']
]){
 const result=vm.runInNewContext(fn+';detailedStepText()',{
  current:{id:'regression-pasta',ingredients:[{name:'Pasta',amount:200,unit:'g'}],steps:[instruction]},
  guideStep:0,guideStepData:()=>({text:instruction}),detailedGuideOverrides:{},
  quantityForIngredient:()=> '300 g pasta',formatGuideText:text=>text
 });
 assert.equal(result,expected);
}
console.log('PASS: pasta quantities scale without assigning pasta weight to reserved pasta water.');
