require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const scanForm = new api.ScanForm({
  shipments: ["shp_3b557ae87f204b9682db9fa35bae4ad9"],
});

scanForm.save().then(console.log).catch(console.log);
