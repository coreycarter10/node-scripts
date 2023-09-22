require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

// ===============Covert label from PNG to ZPL====================
api.Shipment.retrieve("shp_b9e1b29585a9476ea355bb5d92799186")
  .then((shipment) => {
    shipment.convertLabelFormat("ZPL").then(console.log);
  })
  .catch(console.log);
