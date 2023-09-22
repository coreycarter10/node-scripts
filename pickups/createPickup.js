require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
// const address = new api.Address({
//   name: "EasyPost",
//   street1: "37620 N Poplar road",
//   city: "San Tan Valley",
//   state: "AZ",
//   zip: "85140",
//   phone: "8013761006",
// });

// const shipment = "shp_addf8a263c9d4a3aa824ab94d93d6695";
// const batch = "batch_8ae9854e4d0345da951ae8938b0a0fc8";
// const address = "adr_ab8185999e5f11ed9e97ac1f6bc7b362";

// const address = api.Address.retrieve(
//   "adr_ab8185999e5f11ed9e97ac1f6bc7b362"
// ).then(console.log);

const pickup = new api.Pickup({
  // address,
  // batch,
  // shipment,
  // batch: { id: "batch_8ae9854e4d0345da951ae8938b0a0fc8" },
  // address: { id: "adr_2b95a0819e6611ed82f6ac1f6bc7bdc6" },
  address: "adr_e68bf5a7527111eea244ac1f6bc53342",
  shipment: { id: "shp_37650a9de6e04004977ed480a616c7c7" },
  // carrier_account: process.env.USPS,
  reference: "Pickup Testing",
  min_datetime: "2023-09-14 12:00:00",
  max_datetime: "2023-09-14 13:59:59",
  // is_account_address: false,
  instructions: "This is a FedEx test",
});

// console.log(pickup.address);
pickup.save().then(console.log).catch(console.log);
