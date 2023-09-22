require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

// retrieve list of report type
//first argument is the report type: [payment_log, refund, shipment, shipment_invoice, tracker]
// api.Report.all('shipment', { page_size: 2 }).then(console.log);

//retrieve report by ID
api.Report.retrieve("shprep_6c2d13788882403385151df942285cd7")
  .catch(console.log)
  .then(console.log);
