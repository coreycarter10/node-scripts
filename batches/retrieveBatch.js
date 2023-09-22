require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

// api.Batch.retrieve("batch_487a9a0abf474495b5300ff2bdc71e19").then((b) => {
//   /* Once createScanForm is complete, a webhook will be
//    * fired to indicate that the scan form was created. */
//   console.log(b);
// });

// const Easypost = require('@easypost/api');
// require('dotenv').config();
// // const api = new Easypost(process.env.prodKey);  // prodKey
// const api = new Easypost(process.env.testKey);     // testKey

api.Batch.retrieve("batch_a4eb72d012fb4d94a41155385d15c305").then((b) => {
  /* Once createScanForm is complete, a webhook will be
   * fired to indicate that the scan form was created. */
  b.createScanForm().then(console.log);
});
