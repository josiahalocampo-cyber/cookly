module.exports=async({page,assert,errors})=>{
 const checks=[];
 for(const theme of ['light','dark'])for(const width of [320,390,768,1440]){
  await page.setViewportSize({width,height:900});await page.evaluate(theme=>selectTheme(theme),theme);
  for(const destination of ['home','explore','saved','box','history','profile']){
   await page.evaluate(destination=>navigate(destination),destination);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${theme}/${width}/${destination}`);assert(await page.locator('#main').textContent());checks.push({theme,width,page:destination,result:'PASS'});
   if(width===390&&['home','explore','profile'].includes(destination)){
    await page.waitForFunction(()=>[...document.querySelectorAll('#main img')].filter(img=>{const r=img.getBoundingClientRect();return r.top<innerHeight&&r.bottom>0}).every(img=>img.complete),{},{timeout:8000});
    await page.screenshot({path:`/tmp/cookly-audit/final-${destination}-${theme}.png`});
   }
  }
 }
 await page.evaluate(()=>navigate('explore'));assert(await page.locator('#main img').evaluateAll(images=>images.length>0&&images.filter(img=>{const r=img.getBoundingClientRect();return r.top<innerHeight&&r.bottom>0}).every(img=>img.complete&&img.naturalWidth>0)),'Visible menu images load from checked previews');assert.deepEqual(errors,[]);
 require('node:fs').writeFileSync('tests/final-ui-results.json',JSON.stringify({checkedAt:new Date().toISOString(),checks,limitations:['Local Chrome with Supabase test double','Food images are local AI-generated illustrations, not delivered-product photographs']},null,2)+'\n');
 console.log('PASS: 48 screen/theme/width combinations, populated views, menu image rendering, and no uncaught browser errors.');
};
