require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

api.Order.retrieve("order_374749c99d4d48acbf5f63f52c9f2ba8")
  .then((order) => {
    order
      .buy("AustraliaPost", "IntlStandardPackTrack")
      .then(console.log)
      .catch(console.log);
  })
  .catch(console.log);

// api.Order.retrieve('order_0e0fded9ef7d42cfb101c12076f769f7').then(console.log).catch(o => console.log(JSON.stringify(o)));
