require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

api.Shipment.retrieve("shp_be2019c080274e989809ae3405036894").then(console.log);
