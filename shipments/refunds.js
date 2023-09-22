require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

api.Shipment.retrieve("shp_003f7d317fd24c7e9a17273b2817cf58")
  .then((s) => {
    s.refund(console.log(s)).then(console.log).catch(console.log);
  })
  .catch(console.log);

// bulk refunds
// const refundData = {
//   carrier: "UPS",
//   tracking_codes: ["1Z3063EA0324072110"],
// };

// api.Refund.save(refundData).then(console.log);
