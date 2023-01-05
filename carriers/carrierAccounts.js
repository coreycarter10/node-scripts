require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;

// const apiKey = process.env.personalProdKey;
const api = new Easypost(apiKey);

//list all carrier accounts
// api.CarrierAccount.all().then(console.log);

//retrieve specific carrier account by ID
api.CarrierAccount.retrieve("ca_98951534b83848248ed5a83e810ad93b").then(
  console.log
);

//update carrier account
// api.CarrierAccount.retrieve("ca_9006efbd836b4009baafb6682feeec5e")
//   .then((ca) => {
//     ca.credentials["shipper_id"] = "ShipperIDTest";
//     ca.save().then(console.log);
//   })
//   .catch(console.log);
