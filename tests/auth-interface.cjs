module.exports=async({page,assert,errors})=>{
 const mode=action=>page.locator(`.auth-mode-switch [data-auth-mode=${action}]`);
 assert.equal(await mode('signin').getAttribute('aria-pressed'),'true');
 assert.equal(await page.locator('#cloudAuthForm button[type=submit]').count(),1);
 assert.equal(await page.locator('#authModeTitle').textContent(),'Welcome back');
 await page.locator('[name=email]').fill('returning@example.test');await page.locator('[name=password]').fill('testpass123');
 await page.locator('[name=password]').press('Enter');await page.getByText('Invalid credentials',{exact:false}).waitFor();
 await mode('signup').click();assert.equal(await page.locator('#authModeTitle').textContent(),'Create your account');
 assert.equal(await page.locator('[name=email]').inputValue(),'returning@example.test');assert.equal(await page.locator('[name=password]').inputValue(),'');
 assert.equal(await page.locator('[name=password]').getAttribute('autocomplete'),'new-password');assert.equal(await page.locator('[name=password]').getAttribute('minlength'),'8');
 assert.match(await page.locator('#authPasswordHint').textContent(),/confirm your email/);assert.equal(await page.locator('#cloudAuthMessage').textContent(),'');
 await page.locator('[name=password]').fill('short');await page.locator('button[type=submit]').click();assert.equal(await page.locator('[name=password]').evaluate(e=>e.validity.tooShort),true);
 for(const theme of ['light','dark'])for(const width of [320,390,768]){
  await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);await page.setViewportSize({width,height:900});
  for(const action of ['signin','signup']){await mode(action).click();assert.equal(await mode(action).getAttribute('aria-pressed'),'true');assert.equal(await page.locator('button[type=submit]').getAttribute('value'),action);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));if(width===390)await page.screenshot({path:`/tmp/cookly-audit/auth-${action}-${theme}.png`,fullPage:true})}
 }
 await page.locator('.auth-switch-prompt [data-auth-mode=signin]').click();assert.equal(await page.locator('[name=password]').getAttribute('autocomplete'),'current-password');
 assert.deepEqual(errors,[]);console.log('PASS: distinct auth modes, one matching submit action, Enter sign-in, mode-specific validation/autofill, preserved email, cleared password/error, and 320/390/768 light/dark layouts.');
};
