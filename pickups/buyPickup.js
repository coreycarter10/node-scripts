require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

// retrieve pickup
// api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
api.Pickup.retrieve("pickup_4211a5b2290b445ea3728722586ced84")
  .then((p) => {
    p.buy("FedEx", "Future-day Ground Pickup")
      .then(console.log)
      .catch(console.log);
  })
  .catch(console.log);

// api.Pickup.retrieve("pickup_2b952a5eb5f749459d8aaa2280003ea0").then((p) => {
//   p.cancel().catch(console.error);
// });
