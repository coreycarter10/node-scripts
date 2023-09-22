require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

/* Either objects or ids can be passed in. If the object does
 * not have an id, it will be created. */
// const toAddress = new api.Address({
//   // company: "StoreMcStoreFace",
//     name: 'Corey Carter',
//     street1: '37620 N Poplar road',
//     // street2: 'STE B',
//     city: 'San Tan Valley',
//     state: 'AZ',
//     zip: '85140',
//     country: 'US',
//     phone: '8013761006',
//     email: 'ccarter@easypost.com',
// })
// const fromAddress = new api.Address({
//   // company: "StoreMcStoreFace",
//   name: 'Deanna Carter',
//   street1: '75 W Center Str',
//   // street2: 'STE B',
//   city: 'Provo',
//   state: 'UT',
//   zip: '84601',
//   country: 'US',
//   phone: '8013761006',
//   email: 'ccarter@easypost.com',
// })

// const insurance = new api.Insurance({
//   // to_address: "adr_...",
//   // from_address: "adr_...",
//   to_address: toAddress,
//   from_address: fromAddress,
//   tracking_code: "522221325173",
//   carrier: "FedEx",
//   amount: "210.00",
//   reference: "Kaylas glasses",
// });

// insurance.save().then(console.log).catch(console.log);

api.Shipment.retrieve("shp_b599aed3ce91491487e8f50c512398b8")
  .then((s) => {
    s.insure(4400)
      .then(() => console.log(s))
      .catch(console.log);
  })
  .catch(console.log);
