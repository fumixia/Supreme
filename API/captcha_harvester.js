
let tokenn ;
const { HttpsProxyAgent } = require("https-proxy-agent");
const fs = require("fs");
let test ;
const sitekey = "6LeWwRkUAAAAAOBsau7KpuC9AV-6J8mhw4AjC3Xz";
const url = "https://www.supremenewyork.com/";
const puppeteer = require("puppeteer-extra");
const dayjs = require("dayjs");
const setCookies = async (page) => {
  // Get cookies from file
  let cookies = JSON.parse(fs.readFileSync('./GC.json'));
  // Set page cookies
  await page.setCookie(...cookies);
  return
}
// const getCookies = async (page) => {
//   // Get all cookies
//   const cookiesArray = await page._client.send('Network.getAllCookies');
//   // Get cookies from array
//   const cookies = await cookiesArray.cookies;
//   console.log(cookies)
//   // Save cookies to file
//   fs.writeFile('./GC.json', JSON.stringify(cookies, null, 4), (err) => {
//       if (err) console.log(err);
//       return;
//   });
// }
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
Captcha_Harvester = async (Proxyy,Puser,Ppass) => {
    return new Promise(async(resolve, reject) => {
    // const proxy = new HttpsProxyAgent(`http://${Puser}:${Ppass}@${Proxyy}`);
    const options = {
      width: 480,
      height: 750,
      host: url,
      sitekey,
    };
    const browser = await puppeteer.launch({
      executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      ignoreDefaultArgs: "--enable-automation",
      headless: false,
      devtools: false,
      ignoreHTTPSErrors: true,
      args: [
        "--no-sandbox",
        "--ignore-certificate-errors",
        "--enable-features=NetworkService",
        "--allow-running-insecure-content",
        // "--disable-web-security",
        `--window-size=${options.width},${options.height}`,
        `--proxy-server=${Proxyy}`,
        // 13.67.232.195:3128:tahadaboussi:aiobotagents
        '--no-first-run',
        '--enable-features=NetworkService,NetworkServiceInProcess',
        '--disable-backgrounding-occluded-windows',
        '--disable-breakpad',
        '--disable-features=site-per-process,TranslateUI,BlinkGenPropertyTrees',
        '--disable-hang-monitor',
        '--safebrowsing-disable-auto-update',
        '--disable-dev-shm-usage',
        '--disable-ipc-flooding-protection',
        '--disable-background-networking',
        '--disable-client-side-phishing-detection',
        '--disable-default-apps',
        '--disable-sync',
        '--hide-scrollbars',
        '--disable-background-timer-throttling',
        '--disable-renderer-backgrounding',
        '--no-default-browser-check',
        '--disable-popup-blocking',
        '--mute-audio',
        '--metrics-recording-only',
        '--use-mock-keychain',
        // '--user-data-dir=C:\\Users\\USER\\AppData\\Local\\Google\\Chrome\\User Data',
        // C:\Users\USER\AppData\Local\Google\Chrome\User Data\
        // C:\\Users\\USER\\AppData\\Local\\Google\\Chrome\\User Data
        '--disable-prompt-on-repost',
        '--force-color-profile=srgb',
        '--password-store=basic',
        // '--window-size=500,796',
        // '--app=http://127.0.0.1:51229/loading',
        // '--proxy-server=http://127.0.0.1:4272',
        '--remote-debugging-port=0'
      ],
    });
    const page = await browser.newPage();
    await page.setUserAgent(`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36`);
  await page.evaluateOnNewDocument(() => {
     canvas.getContext( "webgl", {
      preserveDrawingBuffer: true
  });
    Object.defineProperty(navigator, "languages", {
      get: function() {
        return ["en-US", "en"];
      }
    });
    const elementDescriptor = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "offsetHeight"
    );
    Object.defineProperty(HTMLDivElement.prototype, "offsetHeight", {
      ...elementDescriptor,
      get: function () {
        if (this.id === "modernizr") {
          return 1;
        }
        return elementDescriptor.get.apply(this);
      },
    });
  });
  
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(window, "navigator", {
      value: new Proxy(window.navigator, {
        get: function (target, name) {
          if (name === "webdriver") return false;
          return typeof target[name] === "function"
            ? target[name].bind(target)
            : target[name];
        },
      }),
    });
  });
  await page.evaluateOnNewDocument(() => {
    delete navigator.__proto__.webdriver;
  });
  // await page.evaluateOnNewDocument(() => {
  //   Object.defineProperty(navigator, 'webdriver', ()=>{})
  // });
  await page.evaluateOnNewDocument(() => {
    navigator.mediaDevices.getUserMedia = navigator.webkitGetUserMedia = navigator.mozGetUserMedia = navigator.getUserMedia = webkitRTCPeerConnection = RTCPeerConnection = MediaStreamTrack = undefined;
  });
    await page.authenticate({
      username: Puser,
      password: Ppass ,
    });
    await page.setViewport({
      width: 480,
      height: 750,
    });
    await page.setRequestInterception(true);
    const captchaReset = () => window.grecaptcha.reset();
    await page.exposeFunction("sendCaptcha", async(token) => {
      const captchaItem = {
        token,
        timestamp: dayjs().format(),
        host: options.host,
        sitekey: options.sitekey,
      };
      // data: '{"store_credit_id":"","from_mobile":"1","cookie-sub":"%7B%2285695%22%3A1%7D","current_time":1614253999406,"same_as_billing_address":"1","scerkhaj":"CKCRSUJHXH","order[billing_name]":" George McLean","order[email]":" zn2jnsjrvl@fakemailgenerator.net","order[tel]":" 7802305239","order[billing_address]":"41 Nith Street","order[billing_address_2]":"145","order[billing_address_3]":"","order[billing_city]":"GLAN Y LLYN","order[billing_zip]":"CF4 5HN","order[billing_state]":"KY","order[billing_country]":"USA","credit_card[type]":"credit card","credit_card[cnb]":"4485 5695 2430 6454","credit_card[month]":" 06","credit_card[year]":"2023","rand":"","order[terms]":1,"is_from_android":"1","atok":"sckrsarur","credit_card[ovv]":"464"}',
    //   TOKEN_LIST.push(captchaItem.token);
      token = captchaItem.token
      tokenn = token
      if(typeof token !== "undefined"){
      //  getCookies(page)
      const session = await page.target().createCDPSession();
      const {windowId} = await session.send('Browser.getWindowForTarget');
      await session.send('Browser.setWindowBounds', {windowId, bounds: {windowState: 'minimized'}});
    }
    // console.log(token)
      console.log("----------------------------------------------------------------------------------------".red);
      console.log("Captcha Solved".green);
      console.log("----------------------------------------------------------------------------------------".red);
      (async () => {
        await page.evaluate(captchaReset);
      })();
    });
    const captchaTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Captcha Harvester</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <style>
      .flex {
        display: flex;
      }
      .justify-center {
        justify-content: center;
      }
      .items-center {
        align-items: center;
      }
      .mt-6 {
        margin-top: 1.5rem;
      }
    </style>
  </head>
  <body>
    <div class="flex justify-center items-center mt-6">
      <div id="captchaFrame" class="g-recaptcha" data-callback="sendCaptcha" data-sitekey=${options.sitekey} data-theme="dark"></div>
    </div>
  </body>
  </html>
  `;
    page.on("request", (req) => {
      if (req.url() === options.host) {
        req.respond({
          status: 200,
          contentType: "text/html",
          body: captchaTemplate,
        });
      } else {
        req.continue();
      }
    });
    // setCookies(page)
    // setCookies(page)
    await page.setDefaultNavigationTimeout(0); 

    await page.goto(options.host );
      // Create raw protocol session.
    //   console.log("From captcha"+tokenn)
        while(typeof tokenn == "undefined"){
            await sleep(100)
        }
            // console.log("Captcha Solved ")
            // console.log("this is the token "+tokenn)
            resolve(tokenn)
            // return tokenn
});
    };
    // Captcha_Harvester()
module.exports = {Captcha_Harvester ,tokenn}
