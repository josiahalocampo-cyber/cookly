module.exports=async({page,context,assert,errors})=>{
 const password=page.locator('#cloudAuthPassword');
 for(const mode of ['signin','signup']){
  await page.locator(`.auth-mode-switch [data-auth-mode=${mode}]`).click();await password.fill('Fixture-password-123!');
  await page.getByRole('button',{name:'Show password',exact:true}).click();assert.equal(await password.getAttribute('type'),'text');assert.equal(await password.inputValue(),'Fixture-password-123!');
  await page.getByRole('button',{name:'Hide password',exact:true}).click();assert.equal(await password.getAttribute('type'),'password');assert.equal(await password.inputValue(),'Fixture-password-123!');
 }
 await page.locator('[name=email]').fill('confirmation@example.test');await page.locator('#cloudAuthForm button[type=submit]').click();
 await page.getByText('Check your email and press',{exact:false}).waitFor();
 assert.equal(await page.locator('#cloudAuthForm button[type=submit]').getAttribute('value'),'signin');assert.equal(await password.inputValue(),'');
 assert.equal(await page.evaluate(()=>cloudSession),null);assert.equal(await page.locator('#preferencesDialog[open]').count(),0);
 await password.fill('Fixture-password-123!');await password.press('Enter');await page.getByText('Email not confirmed',{exact:false}).waitFor();
 assert.equal(await page.evaluate(()=>cloudSession),null);
 // Simulate clicking a valid link after Supabase has confirmed the email.
 await page.evaluate(()=>testCloud.confirmEmail('confirmation@example.test'));
 const sessionReadsBefore=await page.evaluate(()=>testCloud.getSessionCalls);await page.goto('http://cookly.test/#access_token=confirmed-fixture&refresh_token=unused-fixture&type=signup');
 await page.getByRole('heading',{name:'Your email is confirmed!',exact:true}).waitFor();
 assert.match(await page.locator('.email-confirmation-card').textContent(),/Please go back to Cookly to sign in/);
 assert.equal(await page.evaluate(()=>location.hash),'');assert.equal(await page.evaluate(()=>cloudSession),null);
 assert.equal(await page.evaluate(()=>testCloud.getSessionCalls),sessionReadsBefore);
 const options=await page.evaluate(()=>testCloud.clientOptions.at(-1));assert.deepEqual(options.auth,{detectSessionInUrl:false,persistSession:false,autoRefreshToken:false});
 assert.equal(await page.evaluate(()=>Object.values(localStorage).some(value=>value.includes('confirmed-fixture')||value.includes('unused-fixture'))),false);
 assert.equal(await page.locator('#preferencesDialog[open],.recipe-card').count(),0);
 for(const theme of ['light','dark']){await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);await page.setViewportSize({width:390,height:844});await page.screenshot({path:`/tmp/cookly-audit/confirmed-${theme}.png`,fullPage:true})}
 const fresh=await context.newPage();await fresh.goto('http://cookly.test/#access_token=confirmed-fixture&refresh_token=unused-fixture&type=signup');await fresh.getByRole('heading',{name:'Your email is confirmed!',exact:true}).waitFor();assert.equal(await fresh.evaluate(()=>testCloud.getSessionCalls),0);assert.equal(await fresh.evaluate(()=>cloudSession),null);await fresh.reload();await fresh.locator('#cloudAuthForm').waitFor();assert.equal(await fresh.locator('#preferencesDialog[open]').count(),0);await fresh.close();
 await page.getByRole('button',{name:'Back to Cookly to sign in'}).click();await page.locator('#cloudAuthForm').waitFor();assert.equal(await page.locator('#preferencesDialog[open]').count(),0);
 await page.locator('[name=email]').fill('confirmation@example.test');await password.fill('Fixture-password-123!');await password.press('Enter');await page.locator('#preferencesForm').waitFor();assert.equal(await page.locator('[name=name]').inputValue(),'');
 // Invalid/expired callbacks must not show success, activate stored sessions, or retain credentials.
 const invalid=await context.newPage();for(const fragment of ['access_token=bad-fixture&refresh_token=unused-fixture&type=signup','error=access_denied&error_code=otp_expired&error_description=Expired']){
  await invalid.goto('http://cookly.test/#'+fragment);await invalid.getByRole('heading',{name:'We couldn’t confirm this link'}).waitFor();assert.equal(await invalid.evaluate(()=>cloudSession),null);assert.equal(await invalid.evaluate(()=>location.hash),'');assert.equal(await invalid.locator('#preferencesDialog[open],.recipe-card').count(),0);
 }
 await invalid.getByRole('button',{name:'Back to Cookly to sign in'}).click();await invalid.locator('#cloudAuthForm').waitFor();assert.equal(await invalid.evaluate(()=>cloudSession),null);assert.equal(await invalid.locator('#preferencesDialog[open]').count(),0);await invalid.close();assert.deepEqual(errors,[]);
 console.log('PASS: password visibility, signup awaits confirmation, unconfirmed login rejected, valid confirmation without session/storage/onboarding, manual login opens preferences, and expired/invalid callback handling.');
};
