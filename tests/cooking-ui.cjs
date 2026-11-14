module.exports=async({page,assert,errors})=>{
 await page.evaluate(()=>{preferences.appearance='dark';navigate('explore');openRecipe('butter-steak')});
 for(const choice of ['rare','medium-rare','medium','medium-well','well-done']){
  await page.locator('#steakDoneness').selectOption(choice);
  assert(!/min per side/.test(await page.locator('.steak-doneness-note').textContent()));
  assert.match(await page.locator('.steak-doneness-note').textContent(),/thermometer/);
 }
 await page.locator('.cooking-research summary').click();assert.equal(await page.locator('.cooking-research a').count(),3);
 assert(await page.locator('.cooking-research').textContent().then(s=>s.includes('not kitchen-tested')));
 await page.locator('.cooking-research').evaluate(e=>e.scrollIntoView({block:'start'}));await page.screenshot({path:'/tmp/cookly-audit/researched-steak-detail.png',fullPage:false});
 await page.evaluate(()=>{preferences.temperature='fahrenheit';steakDoneness='medium';guide=true;guideStep=3;unlockPurchasedGuides([{id:current.id,servings:2}],'DEMO-RESEARCH');renderDetail()});
 const text=await page.locator('.step-instructions').textContent();assert.match(text,/145°F/);assert(!text.includes('°C'));assert.match(text,/Basting is part/);
 assert.equal(await page.locator('#timerMinutes').inputValue(),'1');
 await page.locator('[data-action=timer-toggle]').click();await page.waitForTimeout(1100);assert.notEqual(await page.locator('#timerClock').textContent(),'1:00');await page.locator('[data-focus-timer=toggle]').click();await page.locator('[data-focus-timer=reset]').click();await page.locator('[data-focus-timer=back]').click();
 for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:900});assert(await page.evaluate(()=>document.querySelector('#recipeDialog').scrollWidth<=document.querySelector('#recipeDialog').clientWidth+1),`guide overflow ${width}`)}
 await page.setViewportSize({width:390,height:844});await page.locator('.guide-step').evaluate(e=>e.scrollIntoView({block:'start'}));await page.screenshot({path:'/tmp/cookly-audit/researched-steak-guide.png'});
 assert.deepEqual(errors,[]);console.log('PASS: all steak selectors, visible sources, Fahrenheit basting guide, checkpoint timer controls, and recipe dialog at 320/390/768/1440 widths.');
};
