const fs = require("fs");
const { Webhook, MessageBuilder  } = require('discord-webhook-node');
const Captcha_harvester = require("./Captcha_harvester")
const Ticket_gen = require("./Ticket_gen")
let time222;
let chek = new Date()
const readline = require('readline');
let rq_time = new Date()
const hook = new Webhook("https://discord.com/api/webhooks/821005723293974548/L6QWyGhGXBUfos2bqlEfA9bg5WJNle4Ga4w4m6Iz5w7AkhxqdanRfQmGtU8eLkzPxEuE");
const IMAGE_URL = 'https://us.123rf.com/450wm/rungkhun/rungkhun1709/rungkhun170900370/86295503-stock-vector-letter-x-logo-design-template-technology-abstract-dot-connection-cross-vector-logo-icon-circle-logot.jpg?ver=6';
let res_token ; 
Size = async(proxyy,style,sizee) =>{
  https.get(`https://www.supremenewyork.com/shop/${Final_product_Id}.json`,
  { agent: proxyy },
  (res) => {
    // console.log(res)
    var body = "";
    res.on("data", function (chunk) {
      body += chunk;
    });
    res.on("end", function () {
      var resp = JSON.parse(body);
      const desiredItem = desired_color.find((item) =>
        item.name.includes(style)
      );
      // console.log("Http Time", desiredItem2.id);
      Style_id = desiredItem.id;
      chk = desiredItem.chk;
      size = desiredItem.sizes;
      for (i = 0 ; i < size.length ; i++ ){
        console.log(size[i])
       if (size[i].name == sizee  && size[i].stock_level == "1" ){
          size_id = size[i].id
       }
      }
      if(typeof size_id == "undefined"){
        // console.log(sizee)
         Size(proxyy,style,sizee)
        console.log("size out of stock ")
        // return  0 ;
      }
      console.log("----------------------------------------------------------------------------------------".red);
      console.log("Style  : ".green + `${Style_id}`.yellow);
      console.log("Product : ".green + `${p}`.yellow);
      console.log("Size ID : ".green + `${size_id}`.yellow)
      console.log("----------------------------------------------------------------------------------------".red);
  
    })
  
  }
    )

}
let tim222 ; 
let Style_name ;
let Product_Url ;
let Product_name
let time = new Date ()
const crypto = require('crypto');
const https = require("https");
const { HttpsProxyAgent } = require("https-proxy-agent");
let v  ;
let ntbcc;
// console.log(ntbcc)
let hash ;
let ticket ;
let scc_chk;
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
const axios = require("axios");
const tunnel = require("tunnel");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const AdsPlugin = require("puppeteer-extra-plugin-adblocker");
const prompt = require("prompt-sync")();
puppeteer.use(StealthPlugin(), AdsPlugin());
const colors = require("colors");
const { Worker,isMainThread, workerData,threadId,} = require("worker_threads");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
rq_time = new Date()
const dayjs = require("dayjs");
const { createBrotliCompress } = require("zlib");
const sitekey = "6LeWwRkUAAAAAOBsau7KpuC9AV-6J8mhw4AjC3Xz";
const url = "https://www.supremenewyork.com/";
Keyword = "Firecracker Down Jacket";
Color = "Black";
// const httpsAgent = tunnel.httpsOverHttp({
//   proxy: {
//     host: "127.0.0.1",
//     port: "8888"
//   }
// });
let Final_product_Id
let Proxy_list = [];
let TOKEN_LIST = [];
var size_id ;
let Style_id;
let chk;
let set_cookie;
// var timestamp = Date.now();
const setCookies = async (page) => {
  // Get cookies from file
  let cookies = JSON.parse(fs.readFileSync('./Gmail.json'));
  // Set page cookies
  await page.setCookie(...cookies);
  return
}
function range(start, stop, step) {
  if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
  }

  if (typeof step == 'undefined') {
      step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
  }

  return result;
};
let proxy_switcher = [
  "52.165.181.229:3128:tahadaboussi:aiobotagents",
  "52.165.181.231:3128:tahadaboussi:aiobotagents",
  "52.165.181.229:3128:tahadaboussi:aiobotagents",
  "52.165.181.231:3128:tahadaboussi:aiobotagents",
  "52.165.181.229:3128:tahadaboussi:aiobotagents",
  "52.165.181.231:3128:tahadaboussi:aiobotagents",
]
let q = 0 ; 
// var data = fs.readFileSync('proxy.txt', 'utf8');
// // console.log(data)
// let test = data.split("\n") 
// console.log(test.length)
// for (var i of range(test.length)){
//   console.log(test)
//   console.log("POPING "+test.pop())
//   // console.log("Original Test"+test)
// }
// console.log(test)
let cc_url = "https://www.supremenewyork.com/checkout.json";
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
cc = async (user,pass,proxy,sizee,Buser,Bpass,Bproxy) => {
// console.log("test"+TOKEN_LIST[0])
  const proxyy = new HttpsProxyAgent(`http://${user}:${pass}@${proxy}`);
  console.log("Proxy that is being used " +  proxyy  )
  C_header = {
    Connection: "keep-alive",
    "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1",
    Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
     Accept: "application/json",
    "Sec-Fetch-User": "1",
    "Sec-Fetch-Dest": "document",
    referer: `https://www.supremenewyork.com/mobile/`,
    "Accept-Encoding": " gzip, deflate, br",
    "Accept-Language": " en-GB,en-US;q=0.9,en;q=0.8",
     Cookie: `${set_cookie}`,
  };
  console.log("sa");
  let token = TOKEN_LIST[0];
  // console.log("tokenn it's token " + token)
  //  cc_data = {
  //   "store_credit_id":"",
  //   "from_mobile": "1",
  //   "cookie-sub": `%7B%22${size_id}%22%3A1%7D`,
  //   "current_time": timestamp,
  //   "scerkhaj": "CKCRSUJHXH",
  //   "order[billing_name]":"George McLean",
  //   "order[email]":"zn2jnsjrvl@fakemailgenerator.net",
  //   "order[tel]":"7802305239",
  //   "order[billing_address]": "41 Nith Street",
  //   "order[billing_address_2]": "145",
  //   "order[billing_address_3]":"" ,
  //   "order[billing_city]": "GLAN Y LLYN",
  //   "order[billing_zip]": "CF4 5HN",
  //   "order[billing_state]": "KY",
  //   "order[billing_country]": "USA",
  //   "credit_card[type]": "credit card",
  //   "credit_card[cnb]": "4485 5695 2430 6454",
  //   "credit_card[month]":"06",
  //   "credit_card[year]": "2023",
  //   "rand": "" ,
  //   "order[terms]": 1,
  //   "is_from_android": "1",
  //   "g-recaptcha-response": token,
  //   "atok": "sckrsarur",
  //   "credit_card[ovv]": "464",
  //     }
  const cc_params = new URLSearchParams();
  cc_params.append("store_credit_id", "");
  cc_params.append("from_mobile", "1");
  // cc_params.append("cookie-sub", `%7B%22${size_id}%22%3A1%7D`);
  cc_params.append("current_time", new Date());
  // cc_params.append("same_as_billing_address", "1");
  // cc_params.append("scerkhaj", "CKCRSUJHXH");
  cc_params.append("order[billing_name]", "Tarek Ziad Al Rachid");
  cc_params.append("cerear", "RMCEAR");
  cc_params.append("order[email]", "52031058@students.liu.edu.lb");
  cc_params.append("order[tel]", "8582540144");
  cc_params.append("order[billing_address]", "17269 w bernardo");
  cc_params.append("order[billing_address_2]", "apt 207");
  cc_params.append("order[billing_city]", "San diego");
  cc_params.append("order[billing_state]","CA");
  cc_params.append("order[billing_country]", "USA");
  cc_params.append("same_as_billing_address", "1");
  cc_params.append("credit_card[type]", "credit card");
  cc_params.append("riearmxa", "4113788356878633");
  cc_params.append("credit_card[month]", "11");
  cc_params.append("credit_card[year]", "2025");        
  cc_params.append("credit_card[meknk]", "444");
  cc_params.append("credit_card[vval]", "");
  cc_params.append("order[billing_zip]", "92127");
  cc_params.append("order[terms]", 1);
  cc_params.append("g-recaptcha-response", token);
  // cc_params.append("credit_card[cnb]", "4018665800075436");  
  // cc_params.append("riearmxa", "4013265800075436");
  // cc_params.append("is_from_android", 1);
  // cc_params.append("atok", "sckrsarur");
  var cc_res = await axios.post(cc_url, cc_params, {
    headers: {
    Connection: "keep-alive",
    "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1",
    Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    // "Content-Length": "1226",
    "Content-Length": "1183",
    "Sec-Fetch-Site": "same-origin",
    "X-Requested-With": "XMLHttpRequest",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Content-Type": "application/x-www-form-urlencoded ",
    Origin: "https://www.supremenewyork.com",
    Accept: "application/json",
    "Sec-Fetch-User": "1",
    "Sec-Fetch-Dest": "document",
    referer: `https://www.supremenewyork.com/mobile/`,
    "Accept-Encoding": " gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    Cookie: `${set_cookie}`,
      is_from_android: "1"
    },
    // httpsAgent: proxyy,
    // httpsAgent: proxy2,
    proxy : {
      host : "127.0.0.1" ,
      port : "8888"
    },
  });
  console.log("----------------------------------------------------------------------------------------".red);
  console.log("Checkout Finshed".green.bold);
  console.log("----------------------------------------------------------------------------------------".red);
  console.log(cc_res.data);
  // console.log(cc_res.cookie);
    console.log("----------------------------------------------------------------------------------------".red);
  if(cc_res.data.status.includes("failed")){
    console.log("----------------------------------------------------------------------------------------".red);
    console.log("Credit Card Declined".red.bold);
    console.log("----------------------------------------------------------------------------------------".red);
    hook.setUsername('Decline');
    hook.setAvatar(IMAGE_URL);
    const embed = new MessageBuilder()
    .setTitle('Credit Card Declined')
    // .setAuthor('Author here', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
    // .setURL('https://www.google.com')
    .addField('Store', 'SupremeUS', true)
    .addField('Mode', 'API',true)
    .addField('Size', `${sizee}`,true)
    .addField('Style', `${Style_name}`,true)
    .addField('Time', `${time222 / 1000}`,true)
    .setColor('#FF0000')
    .setThumbnail(`https:${Product_Url}`)
    .setDescription(`${Product_name}`)
    // .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
    .setFooter('TEST', 'https://us.123rf.com/450wm/rungkhun/rungkhun1709/rungkhun170900370/86295503-stock-vector-letter-x-logo-design-template-technology-abstract-dot-connection-cross-vector-logo-icon-circle-logot.jpg?ver=6')
    .setTimestamp();
    hook.send(embed);
    await sleep(1000)
    console.log("ReTrying")
      // Note: we use the crlfDelay option to recognize all instances of CR LF
      // ('\r\n') in input.txt as a single line break.
   let  Bproxy,Buser,Bpass ; 
        let proxies = proxy_switcher[q].split(":")
         console.log(q)
         Bproxy =  proxies[0] + ":" + proxies[1];
         Buser = proxies[2]
         Bpass = proxies[3]
         console.log(proxies)
         // Each line in input.txt will be successively available here as `line`.
         console.log(`Backup Proxies :  ${proxy_switcher[q]}`);
         await sleep(5000)
         cc(Buser,Bpass,Bproxy,sizee)
    q++
  }
  let z = 0 
  while(cc_res.data.status =="queued"){
    console.log("you're queued")
    await sleep(5000)
    let slug =  cc_res.data.slug
    x =  https.get("https://www.supremenewyork.com/checkout/"+slug+"/status.json",(res) =>{
    var body = "";
      res.on("data", function (chunk) {
        body += chunk;
      });
      res.on("end", function () {
        // console.log(body)
     x = body.substr(1,17)
     console.log(x)
     var y = []
     y.push(x)
      console.log(typeof x)
          console.log( "Slug Response : "+ body )
          if(y[0].includes("queued")){
            if(z >= 100){
              console.log("Check Email")
            }
            console.log("Still Queued")
            console.log(slug)
          }
          if(y[0].includes("failed")){
            console.log("Task failed")
            let  Bproxy,Buser,Bpass ; 
            let proxies = proxy_switcher[q].split(":")
            console.log(q)
             Bproxy =  proxies[0] + ":" + proxies[1];
             Buser = proxies[2]
             Bpass = proxies[3]
            console.log(proxies)
            // Each line in input.txt will be successively available here as `line`.
            console.log(`Backup Proxies :  ${proxy_switcher[q]}`);
            (async() =>{
            await sleep(2000)
          })
            cc(Buser,Bpass,Bproxy,sizee)
            q++
          }
          else if (y[0].includes("paid")){
            hook.setUsername('Success');
            hook.setAvatar(IMAGE_URL);
            const embed = new MessageBuilder()
            .setTitle('Successful Checkout')
            // .setAuthor('Author here', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
            // .setURL('https://www.google.com')
            .addField('Store', 'SupremeUS', true)
            // .addField('Owner', '@BLACKEN', true)
            .addField('Mode', 'API',true)
            .addField('Size', `${sizee}`,true)
            console.log(size)
            .addField('Time', `${time222 / 1000}`,true)
            .addField('Style', `${Style_name}`,true)
            .setColor('#008000')
            .setThumbnail(`https:${Product_Url}`)
            .setDescription(`${Product_name}`)
            // .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
            .setFooter('TEST', 'https://us.123rf.com/450wm/rungkhun/rungkhun1709/rungkhun170900370/86295503-stock-vector-letter-x-logo-design-template-technology-abstract-dot-connection-cross-vector-logo-icon-circle-logot.jpg?ver=6')
            .setTimestamp();
            hook.send(embed);
            console.log("----------------------------------------------------------------------------------------".red);
            console.log("Checkout successfully".green.bold);
            console.log("----------------------------------------------------------------------------------------".red);
          }
      })
 })
 z++ ; 
}
};
async function atc(user,pass,proxy) {
var atc_url = `https://www.supremenewyork.com/shop/${Final_product_Id}/add.json`;

  // console.log("getting ntbcc")
  //   while(typeof ntbcc == "undefined"){
  //       await sleep(1000)
  //       console.log(ntbcc)
  //   }
  const proxyy = new HttpsProxyAgent(`http://${user}:${pass}@${proxy}`);
  // console.log(`ntbcc=${ntbcc}`)
  var ATC_headers = {
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1",
    Accept: "application/json",
    "Accept-Language": "en-US,en;q=0.5",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://www.supremenewyork.com",
    DNT: "1",
    Connection: "keep-alive",
    Referer: "https://www.supremenewyork.com/mobile/",
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
    TE: "Trailers",
    cookies : `ntbcc=${ntbcc}`
  };
  const params = new URLSearchParams();
  params.append("s", size_id);
  params.append("st", Style_id);
  params.append("h", 1);
  params.append("chk", chk);
  time1 = new Date()
  var res = await axios.post(atc_url, params, {
    // httpsAgent: proxyy,
    proxy : {
      host : "127.0.0.1" ,
      port : "8888"
    },
    ATC_headers,
  });
  if (typeof res.data.cart[0] == "undefined" ){
    return ;
  }
  set_cookie = res.headers["set-cookie"];
  // console.log(res.headers)
  // console.log(set_cookie)
  // console.log("ATC finshed")
  if (res.data.cart[0].in_stock == true) {
    console.log("----------------------------------------------------------------------------------------".red);
    console.log("successful ATC ".green);
    console.log("Solving Captcha")
    Captcha_harvester.Captcha_Harvester(proxy,user,pass).then(res=>{
        res_token = res
        TOKEN_LIST.push(res)
        // console.log("This is the list "+TOKEN_LIST)
       //  console.log("this is the token22  "+res)
      })
    console.log(`ATC Time : ${new Date() - time1}`.yellow)
    console.log("----------------------------------------------------------------------------------------".red);
  } else {
    console.log("Failed to ATC ".red);
  }
  console.log("----------------------------------------------------------------------------------------".red);
}
let j = 0 ;
/* -------------------------------------------------------------------------- */
/*                                 getting PID                                */
/* -------------------------------------------------------------------------- */
let i = 0 ;
Product_fetch = async (user,pass,proxy,key_word,style,sizee,category) => {
/* -------------------------------------------------------------------------- */
/*                          generating ticket cookies                         */
/* -------------------------------------------------------------------------- */
  // Ticket_gen.Ticket(user,pass,proxy).then(res=>{
  //   ntbcc = res
  //   // console.log("this is the ntbcc" + res)
  // })
  // console.log("ntbcc Test " + ntbcc)
  const proxyy = new HttpsProxyAgent(`http://${user}:${pass}@${proxy}`);
  // const proxy = new HttpsProxyAgent("http://127.0.0.1:8888");
  now = new Date();
  const https = require("https");

/* -------------------------------------------------------------------------- */
/*                                 getting PID                                */
/* -------------------------------------------------------------------------- */
  https.get("https://www.supremenewyork.com/mobile_stock.json",
    { agent: proxyy },
    (res) => {
      // console.log(res)
      var body = "";
      res.on("data", function (chunk) {
        body += chunk;
        // console.log(body)
      });
      res.on("end", function () {
        var resp = JSON.parse(body);
        data_wanted = resp.products_and_categories[category]
        // console.log(data_wanted)
        let desiredItem2
        try{
          // Product_fetch = async (User, Pass, Proxyy, key_word,sizee,Style,category)
         desiredItem2 = data_wanted.find((item) =>
          item.name.includes(key_word)
        );
      }catch(e){
        console.log(e)
        console.log("Could not find Trying Again")
      }
      try{
        Product_name = desiredItem2.name
      }catch(e){
  
      }
      if (i > 10000) {
        desiredItem2 = {
          id: "Cant find the item , Please Check your keywords.".red,
        };
      }
      try {
        console.log("Product id : " +desiredItem2.id);
      } catch (e) {
        i++;
        console.log(`Number Of tries: `.green + ` ${i}`.yellow);
        Captcha_harvestere = new Date();
        console.log(`retrying time :`.green + `${Captcha_harvestere - now}`.red);
        Product_fetch(user,pass,proxy)
      }
        // console.log("Http Time", desiredItem2.id);
        try {
          Final_product_Id = desiredItem2.id;
        } catch (e) {
        
        }
        console.log("----------------------------------------------------------------------------------------".red);
        
        //? -------------------------------------------------------------------------- */
        //?                      Can be used for random color/size                     */
        //? -------------------------------------------------------------------------- */
        console.log("Product  ID:".green, Final_product_Id);
        let later = new Date();
        console.log("Taken time 1 :".green, later - now);
        console.log(
          "----------------------------------------------------------------------------------------"
            .red
        );
      });
    }
  );
  while (typeof Final_product_Id == "undefined") {
    await sleep(1);
  }
  // const proxy = new HttpsProxyAgent("http://thanhxa:aiobotagents@51.141.43.213:3128");
/* -------------------------------------------------------------------------- */
/*                              product color id                              */
/* -------------------------------------------------------------------------- */
  https.get(`https://www.supremenewyork.com/shop/${Final_product_Id}.json`,
    { agent: proxyy },
    (res) => {
      // console.log(res)
      var body = "";
      res.on("data", function (chunk) {
        body += chunk;
      });
      res.on("end", function () {
        var resp = JSON.parse(body);
        // console.log(resp)
        desired_color = resp.styles;
        // console.log(data_wanted)
        // console.log(desired_color)
        // console.log(desired_color)
        const desiredItem = desired_color.find((item) =>
          item.name.includes(style)
        );
        // console.log("Http Time", desiredItem2.id);
        Style_id = desiredItem.id;
        chk = desiredItem.chk;
        size = desiredItem.sizes;
        // console.log("This is the test"+size)
        for (i = 0 ; i < size.length ; i++ ){
          console.log(size[i])
         if (size[i].name == sizee  && size[i].stock_level == "1" ){
            size_id = size[i].id
         }
        }
        if(typeof size_id == "undefined"){
          // console.log(sizee)
           Size(proxyy,style,sizee)
          console.log("size out of stock ")
          // return  0 ;
        }
        try{
          Product_Url = desiredItem.bigger_zoomed_url
          // console.log(desiredItem)
          Style_name = desiredItem.name
          Style_id = desiredItem.id;
      }catch(e){
        console.log("check style or size Cant Found")
        return;
      } 
        console.log("----------------------------------------------------------------------------------------".red);
        console.log("Style ID : ".green + `${Style_id}`.yellow);
        console.log("Chk Id : ".green + `${chk}`.yellow);
        console.log("Size ID : ".green + `${size_id}`.yellow)
        console.log("----------------------------------------------------------------------------------------".red);
      });
    }
  );
  while (typeof Style_id == "undefined" && typeof chk == "undefined") {
    await sleep(1);
  }
  atc(user,pass,proxy);
  while (typeof set_cookie == "undefined") {
    await sleep(1);
  }
  console.log("----------------------------------------------------------------------------------------".red);
  console.log(`Full time ${new Date() - rq_time}`)
  console.log("Solving Captcha".green);
  console.log("----------------------------------------------------------------------------------------".red);
 time222 = `${new Date() - rq_time}`
  while (typeof TOKEN_LIST[0] == "undefined") {
    await sleep(1);
  }
  console.log(`${new Date() - chek}`)
  cc(user,pass,proxy,sizee);
};
// Product_fetch();
Multi_processing = (() => {
  return async () => {
    if (isMainThread) {
//! -------------------------------------------------------------------------- */
//!                              BIlling Info                                  */
//! -------------------------------------------------------------------------- */
      let taks_info = [ 
        {
          Keyword: "Supreme®/Wheaties® (1 Box)",
          Color: "Yello",
          size: "N/A",
          category : `Accessories`
        }, 
        // {
        //   Keyword: "Logo Zippo",
        //   Color: "Red",
        //   size: "N/A",
        //   category : `Accessories`
        // }, 
        // {
        //   Keyword: "Work Pant",
        //   Color: "Brown Stripe",
        //   size: "30",
        //   category : `Pants`
        // },
        // {
        //   Keyword: "Work Pant",
        //   Color: "Brown Stripe",
        //   size: "30",
        //   category : `Pants`
        // },
        // {
        //   Keyword: "Work Pant",
        //   Color: "Brown Stripe",
        //   size: "30",
        //   category : `Pants`
        // },
        // {
        //   Keyword: "Work Pant",
        //   Color: "Brown Stripe",
        //   size: "30",
        //   category : `Pants`
        // }
      ];
//? -------------------------------------------------------------------------- */
//?                                 Proxy input                                */
//? -------------------------------------------------------------------------- */
      let ProxyList = await prompt(" Input Proxy List ");
      Proxy_list = ProxyList.split("\r");
      console.log(`${Proxy_list.length} tasks has been started `.green.bold)
//! -------------------------------------------------------------------------- */
//!                           Starting MultiThreading                          */
//! -------------------------------------------------------------------------- */
for (let i = 0; i < Proxy_list.length; i++) {
  const idx = i % taks_info.length;
  console.log("i",i)
  console.log("idx",idx)
   new Worker(__filename, {
   workerData: {
     Proxy_list: Proxy_list[i],
     KeyWord: taks_info[idx].Keyword,
     Color: taks_info[idx].Color,
     size: taks_info[idx].size,
     category: taks_info[idx].category,
     index: i,
   },
 });
}
} else {
      // User, Pass, Proxyy, Process_ID
      console.log(workerData.KeyWord)
      console.log(workerData)
      let key_word = workerData.KeyWord;
      let Style = workerData.Color; 
      let size = workerData.size; 
      let category = workerData.category;
      // console.log(key_word);
      /* -------------------------------------------------------------------------- */
      /*                               Proxie spliting                              */
      /* -------------------------------------------------------------------------- */
      parts = workerData.Proxy_list.split(":");
      if (parts.length == 4) {
        Aproxy = parts[0] + ":" + parts[1];
        pUser = parts[2];
        pPass = parts[3];
      }
      // console.log( `************************************************`.red + `Task Number ${workerData.index  1}`.yellow.bold +`************************************************`.red);
      // console.log("Proxies : ".green + parts);
      console.log("Worker Of ID ".green + threadId);
      /* -------------------------------------------------------------------------- */
      /*                                Main Function                               */
      /* -------------------------------------------------------------------------- */
      try {
        // console.log(KeyWord)
        // Product_fetch(pUser,pPass,Aproxy,threadId)
        // key_word,sizee,color,category
        // console.log(key_word)
        // console.log(Style)
        console.log(key_word)
        Product_fetch(pUser,pPass,Aproxy,key_word,Style,size,category)
      } catch (e) {
        console.log("Failed".red);
        console.log(e);
      }
    }
  };
})()
Multi_processing()
// console.log("this is the response " + res_token)