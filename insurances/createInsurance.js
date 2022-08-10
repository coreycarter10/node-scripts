require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

/* Either objects or ids can be passed in. If the object does
 * not have an id, it will be created. */
// const toAddress = new api.Address({ ... })
// const fromAddress = new api.Address({ ... })

const insurance = new api.Insurance({
  to_address: "adr_c02f249412a911eda2acac1f6bc72124",
  from_address: "adr_c04b3a9f12a911edb725ac1f6b0a0d1e",
  tracking_code: "EZ1000000001",
  carrier: "FedEx",
  amount: "123.45",
  reference: "1234567",
});

insurance.save().then(console.log).catch(console.log);

// api.Shipment.retrieve("shp_c5110c1e8a244a4fb4910b9104dd2770")
//   .then((s) => {
//     s.insure(400)
//       .then(() => console.log(s))
//       .catch(console.log);
//   })
//   .catch(console.log);
