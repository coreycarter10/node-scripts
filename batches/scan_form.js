require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const scanForm = new api.ScanForm({
  shipments: ["shp_7d9c1553667b4b98a58b7feddc0d5e2d"],
});

scanForm.save().then(console.log).catch(console.log);
