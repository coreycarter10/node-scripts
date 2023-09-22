require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

api.Batch.retrieve("batch_87f977d13f6e458ab08684a4387209ea").then((batch) => {
  batch.createScanForm().then(console.log);
});
