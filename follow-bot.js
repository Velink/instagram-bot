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
    //wait for username
    await page.waitForSelector('input[name="username"]')
    //enter username and password
    await page.type('input[name="username"]', 'example username');
    await page.type('input[name="password"]', 'example password');
    //click submit button
    await page.click('button[type="submit"]');

    await page.waitForSelector('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.oJZym > a > div > div > img');
    await page.click('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.oJZym > a > div > div > img');

    await page.waitForSelector('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');
    await page.click('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');

    await page.waitForSelector('#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.rBNOH.eGOV_.ybXk5._4EzTm._49XvD.XfCBB.XTCZH > a > div');
    await page.click('#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.rBNOH.eGOV_.ybXk5._4EzTm._49XvD.XfCBB.XTCZH > a > div');

    await page.waitForSelector('#react-root > section > main > div > div.Igw0E.IwRSH.eGOV_._4EzTm._22l1.aGBdT.BI4qX > h4');
    
    await page.waitForSelector('#react-root > section > main > div > div.DPiy6.Igw0E.IwRSH.eGOV_._4EzTm.HVWg4 > div > div > div:nth-child(1) > div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button');

    await page.click('#react-root > section > main > div > div.DPiy6.Igw0E.IwRSH.eGOV_._4EzTm.HVWg4 > div > div > div:nth-child(1)');

    await page.evaluate(() => { 
                (() => {
                        const buttons = document.querySelectorAll('button');
                        for (let i = 0; i <= 30; i++) {
                            let nextButton = buttons[i];
                            nextButton.click();
                        }
                })();
        })
        
    await page.waitForTimeout(10000);
    await browser.close();

})();

setTimeout(instaBot, 3630000);

})();

