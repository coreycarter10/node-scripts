require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

api.Shipment.retrieve("shp_d2a67196673349ba841ae5575cd49d66")
  .then((s) => {
    s.refund(console.log(s)).then(console.log).catch(console.log);
  })
  .catch(console.log);
