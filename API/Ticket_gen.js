
let time = new Date ()
const https = require("https");
const crypto = require('crypto');
const { HttpsProxyAgent } = require("https-proxy-agent");
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
var options = {
    host: 'supremenewyork.com',
    path: '/live.json'
  }
let v  ;
let ntbcc;
// console.log(ntbcc)
let hash ;
let ticket ;
let scc_chk;
Ticket = async(user,pass,host) =>{
    return new Promise(async(resolve, reject) => {

    const proxy = new HttpsProxyAgent(`http://${user}:${pass}@${host}`);
    https.get("https://www.supremenewyork.com/live.json",
     { agent: proxy , headers: {
      "accept": "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9",
      "referer": "https://www.supremenewyork.com/shop",
      "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
    }, },
     function (res) {
      var data = '';
      res.on('data', function (chunk) {
          data += chunk;
      });
      res.on('end', function () {
        // console.log(data)
         v = data.substr(6,160)
      });
    });
    https.get("https://www.supremenewyork.com/ticket.js",
     { agent: proxy },
     function (res) {
      var data = '';
      let start = '';
      res.on('data', function (chunk) {
          data += chunk;
           start = data.substr(0, 48);
          //  console.log(start)
      });
      res.on('end', function () {
          // console.log(start);
         hash = crypto.createHash('md5').update(start).digest('hex');
        //  console.log(hash)
        ticket = `https://ticket.lol/generate?apiKey=rj4fkzO8yrZgXzgwTAYG&hash=${hash}&liveJson=${v}`
        // console.log(`https://ticket.lol/generate?apiKey=rj4fkzO8yrZgXzgwTAYG&hash=${hash}&liveJson=${v}`)
        console.log(`${new Date - time}`)
      });
    });
    (async() =>{
      while(typeof ticket == "undefined"){
        await sleep(2000)
      }
      https.get(`${ticket}`,
      // { agent: proxy },
      function (res) {
       var data = '';
       res.on('data', function (chunk) {
           data += chunk;
       });
       res.on('end', function () {
        console.log(data)
        scc_chk = data.substr(11,7)
        if(scc_chk=="success"){
          console.log("ntbcc has been generated successfully :".green+data.substr(0,20)+"}")
        }else{
        console.log("-------------------------------------------------------------------------------------------".red)
          console.log("Failed to generate Ticket Due to unsupported IP".red.bold)

        console.log("-------------------------------------------------------------------------------------------".red) 
        console.log(`${new Date()- time}`)
          // return 0 ;
        }
        console.log("-------------------------------------------------------------------------------------------".green)
          ntbcc =  data.substr(56,289)
          // console.log("this is the ntbcc"+  ntbcc)

        //  console.log(ntbcc.yellow)
         console.log("-------------------------------------------------------------------------------------------".green)
        });
     });
    })()
    while(typeof ntbcc == "undefined"){
        await sleep(100)
    }
    resolve(ntbcc)
})
    }
module.exports = {Ticket , ntbcc}
let required_fields = ["from_mobile", "cookie-sub", "order[billing_name]", "order[email]", "order[tel]",
"order[billing_address]", "order[billing_address_2]", "order[billing_address_3]", "order[billing_city]",
"order[billing_zip]", "order[billing_country]", "same_as_billing_address", "atok",
"credit_card[type]", "credit_card[cnb]", "credit_card[month]", "credit_card[year]", "credit_card[ovv]",
"order[terms]", "g-recaptcha-response"];