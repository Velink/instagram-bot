const puppeteer = require('puppeteer');

const fs = require('fs');
const iPhone = puppeteer.devices['iPhone X'];
// const iPhonex = devices['iPhone X'];

(function instaBot() {
   
(async () => {
    const browser = await puppeteer.launch({"headless": false, 
    executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',  
    defaultViewport: null, args: ['--start-maximized']});

    const page = await browser.newPage();

    await page.emulate(iPhone);

    await page.goto('https://www.instagram.com/');

    //Wait for cookies to load
    await page.waitForSelector( 'body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR', {visible: true} );
    //Accept cookies
    await page.click( 'body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR');
    //wait for login button to load
    await page.waitForSelector('#react-root > section > main > article > div > div > div > div:nth-child(2) > button');
    //click on login button
    await page.click( '#react-root > section > main > article > div > div > div > div:nth-child(2) > button');
    //wait for username
    await page.waitForSelector('input[name="username"]')
    //enter username and password
    await page.type('input[name="username"]', 'comfyminds');
    await page.type('input[name="password"]', 'Tycoon97!');
    //click submit button
    await page.click('button[type="submit"]');

    //wait for don't save login info
    await page.waitForSelector('#react-root > section > main > div > div > div > button');
    //click on don't save login info
    await page.click('#react-root > section > main > div > div > div > button');

    //wait for add to home
    // await page.waitForSelector('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');
    // //click on don't add
    // await page.click('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm'); 

    //dont turn on notifications 
    await page.waitForSelector('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');
    //click on dont turn on notifs
    await page.click('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm');

    //Creates an Array of the names of the files in the folder 
    
    var files = fs.readdirSync('./images/')
    let chosenFile = files[Math.floor(Math.random() * files.length)]

    //Chooses file 

    const [fileChooser] = await Promise.all([
        page.waitForFileChooser(),
        page.click('#react-root > section > nav.NXc7H.f11OC > div > div > div.KGiwt > div > div > div.q02Nz._0TPg > svg > path:nth-child(1)'), // some button that triggers file selection
      ]);

    //Closes the file dialog window 
    await fileChooser.accept([`./images/${chosenFile}`]);

    await page.waitForTimeout(5000);

    //Remove File From Directory so it isn't selected again 
    const path = `./images/${chosenFile}`;

    try {
      //remove file
      fs.unlinkSync(path)
    } catch(err){
      console.error(err)
    }

    //Next on image upload
    await page.waitForSelector('#react-root > section > div.Scmby > header > div > div.mXkkY.KDuQp > button');
    await page.click('#react-root > section > div.Scmby > header > div > div.mXkkY.KDuQp > button');

    //Add Tags on image 
    await page.waitForSelector('#react-root > section > div.A9bvI > section.IpSxo > div.NfvXc > textarea');
    await page.type('#react-root > section > div.A9bvI > section.IpSxo > div.NfvXc > textarea', '#mentalhealth #mentalhealthawareness #selfcare #selflove #love #anxiety #motivation #depression #health #mentalhealthmatters #life #mindfulness #loveyourself #wellness #inspiration #fitness #healing #happiness #positivity #positivevibes #quotes #mindset #therapy #covid #instagood #happy #meditation #mentalillness #yourself #bhfyp');

    await page.waitForTimeout(5000);

    //Click on Share button 
    await page.waitForSelector('#react-root > section > div.Scmby > header > div > div.mXkkY.KDuQp > button');
    await page.click('#react-root > section > div.Scmby > header > div > div.mXkkY.KDuQp > button');

    await page.waitForTimeout(10000);

    await browser.close();

})();

// setTimeout(instaBot, 3630000);

})();
