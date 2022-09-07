require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const scanForm = new api.ScanForm({
  shipments: ["shp_346a8d222af24af0861db3e52a3631ae"],
});

scanForm.save().then(console.log).catch(console.log);
