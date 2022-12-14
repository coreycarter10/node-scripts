require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
  verify_strict: ["delivery", "zip4"],
  // verify: ["delivery"],
  // company: "Swing Away Golf Studio",
  // name: "Testing",
  // street1: "807 TERRACE AVE",
  // street2: 'APT 1',
  // city: "Virginia Beach",
  // state: "VA",
  // zip: "23451",
  // country: "US",
  // phone: "8015401281",
  // email: "ccarter@easypost.com",
  name: "Mr. EP",
  street1: "500 Edgemont Road",
  // street2: "",
  city: "Charlottesville",
  state: "VA",
  zip: "22903",
  country: "US",
  // phone: "6042236185",
  // email: "MAARTEN.STAM@YAHOO.NL",
});

// 53 broad meadow rd, Colchester, CT 06415
// 2825 Old Route 12, Paris, NY 13501
// 102 Forest Avenur, Fairfield, CT 06824

verifiableAddress
  .save()
  .then((r) => {
    console.log(JSON.stringify(r));
  })
  .catch(console.log);

// verifiableAddress.save().then(a => {
//     console.log(a.verifications);
//     console.log(a.id);
//   }).catch(console.log);

// const address = new api.Address({
//   verify: ['delivery'],
//   state: 'CA',
//   city: 'San Francisco',
//   zip: '94104',
//   country: 'US',
//   street1: "417 MONTGOMERY ST FL 5",
// });

// const addressVerification = await address.save();

// output:
// {
//   "id": "adr_f55acd48036111ed920dac1f6bc72124",
//   "object": "Address",
//   "mode": "test",
//   "street1": "417 MONTGOMERY ST FL 5",
//   "city": "SAN FRANCISCO",
//   "state": "CA",
//   "zip": "94104-1129",
//   "country": "US",
//   "verify": [
//       "delivery"
//   ],
//   "verifications": {
//       "delivery": {
//           "success": true,
//           "errors": [
//               {
//                   "code": "E.SECONDARY_INFORMATION.INVALID",
//                   "field": "street2",
//                   "message": "Invalid secondary information(Apt/Suite#)",
//                   "suggestion": null
//               }
//           ],
//           "details": {
//               "latitude": 37.79342,
//               "longitude": -122.40288,
//               "time_zone": "America/Los_Angeles"
//           }
//       }
//   }
// }
