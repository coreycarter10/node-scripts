require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
// const address = new api.Address({
//     name: 'EasyPost',
//     street1: 'Ferris Dr 6410',
//     city: 'Houston',
//     state: 'TX',
//     zip: '77081',
//     phone: '5481855189',
// });

// const batch = 'batch_18ada6eaf30b459898416444fefdcfb5';
const address = "adr_bc36db21860111edb1a9ac1f6b0a0d1e";
const shipment = "shp_0f7b1942928f4655a110e07e41637053";

const pickup = new api.Pickup({
  address,
  // batch,
  shipment,
  carrier_account: process.env.CANADAPOST,
  reference: "Pickup Testing",
  min_datetime: "2022-12-27 12:22:00",
  max_datetime: "2022-12-27 14:59:59",
  // is_account_address: false,
  instructions: "This is a CanadaPost test",
});

pickup.save().then(console.log).catch(console.log);
