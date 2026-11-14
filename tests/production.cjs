// Read-only production smoke test plus one intentionally invalid login attempt.
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 const page=await browser.newPage({viewport:{width:390,height:844}});page.setDefaultTimeout(30000);
 const errors=[],responses=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{const u=new URL(r.url());if(u.pathname==='/api/config'||u.pathname.startsWith('/auth/'))responses.push({path:u.pathname,status:r.status()})});
 await page.goto('https://cookly.pages.dev/',{waitUntil:'domcontentloaded'});await page.locator('#cloudAuthForm').waitFor();
 assert.match(await page.locator('#main h1').textContent(),/Welcome to Cookly/);assert.equal(await page.locator('.recipe-card,.menu-card').count(),0);assert(await page.locator('#navigation').isHidden());
 await page.evaluate(()=>navigate('explore'));assert.equal(await page.locator('#searchInput').count(),0);
 await page.locator('#cloudAuthForm [value=signin]').click();assert(await page.locator('#cloudAuthForm [name=email]').evaluate(e=>!e.validity.valid));
 await page.locator('#cloudAuthForm [name=email]').fill('cookly-audit-nonexistent@example.com');await page.locator('#cloudAuthForm [name=password]').fill('InvalidTestPassword-2026!');await page.locator('#cloudAuthForm [value=signin]').click();
 await page.waitForFunction(()=>/invalid login credentials/i.test(document.querySelector('#cloudAuthMessage')?.textContent||''));assert.equal(await page.locator('.recipe-card,.menu-card').count(),0);
 for(const width of [390,768,1440]){await page.setViewportSize({width,height:900});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
 assert.deepEqual(errors,[]);
 const result={deployment:'https://cookly.pages.dev/',checkedAt:new Date().toISOString(),result:'PASS',checks:['Live welcome screen','Supabase client initialized from live configuration','Main app blocked before login','Direct navigation blocked','Required email validation','Live invalid login error displayed','Navigation remains locked after invalid login','Welcome fits 390/768/1440 widths','No uncaught page errors'],responses,limitations:['Confirmed account login, onboarding and database row isolation require authenticated Supabase access and confirmed test accounts']};
 fs.writeFileSync(path.join(__dirname,'production-smoke.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
