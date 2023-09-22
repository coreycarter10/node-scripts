require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

api.Order.retrieve("order_3154e09681ae47febb5d3e738fd720b5")
  .then((order) => {
    order.buy("FedEx", "FEDEX_GROUND").then(console.log).catch(console.log);
  })
  .catch(console.log);

// api.Order.retrieve('order_0e0fded9ef7d42cfb101c12076f769f7').then(console.log).catch(o => console.log(JSON.stringify(o)));
