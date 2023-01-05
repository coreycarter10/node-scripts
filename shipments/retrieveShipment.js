require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

api.Shipment.retrieve("shp_e99ec12150054b36a931af997b3e0985").then(console.log);
