const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone X'];
// const iPhonex = devices['iPhone X'];

(function instaBot() {
   
(async () => {
    const browser = await puppeteer.launch({"headless": false, 
    executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',  
    defaultViewport: null, args: ['--start-maximized']});

    const page = await browser.newPage();

    // await page.emulate(iPhone);

    await page.goto('https://www.instagram.com/');

    //Wait for cookies to load
    await page.waitForSelector( 'body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR', {visible: true} );
    //Accept cookies
    await page.click( 'body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR');

    await page.waitForSelector('input[name="username"]')
    //enter username and password
    await page.type('input[name="username"]', 'example username');
    await page.type('input[name="password"]', 'example password');
    //click submit button
    await page.click('button[type="submit"]');

    //Don't save acc login
    await page.waitForSelector('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.oJZym > a > div > div > img');
    await page.click('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.oJZym > a > div > div > img');
    //No notifications
    await page.waitForSelector('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');
    await page.click('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');
    //Click on profile page
    await page.waitForSelector('#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu');
    await page.click('#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu');

    //Click on following 
    await page.waitForSelector('#react-root > section > main > div > header > section > ul > li:nth-child(3) > a');
    await page.click('#react-root > section > main > div > header > section > ul > li:nth-child(3) > a');

    
    for (let i = 1; i <= 30; i++) {
                    await page.waitForTimeout(1000);
                    //Wait and click to unfollow
                    await page.waitForSelector(`body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div > li:nth-child(${i}) > div > div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button`);
                    await page.click(`body > div.RnEpo.Yx5HN > div > div > div.isgrP > ul > div > li:nth-child(${i}) > div > div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button`);
                    await page.waitForTimeout(1000);
                    //accept unfollow
                    await page.waitForSelector('body > div:nth-child(19) > div > div > div > div.mt3GC > button.aOOlW.-Cab_');
                    await page.click('body > div:nth-child(19) > div > div > div > div.mt3GC > button.aOOlW.-Cab_');

                }

    
    await page.waitForTimeout(10000);

    await browser.close();

})();

setTimeout(instaBot, 3630000);

})();



