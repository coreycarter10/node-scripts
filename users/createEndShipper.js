require("dotenv").config();

const Easypost = require("@easypost/api");

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const endShipper = new api.EndShipper({
  name: "Corey Carter",
  company: "EasyPost",
  street1: "37620 N Poplar road",
  // street2: "UNIT 1",
  city: "San Tan Valley",
  state: "AZ",
  zip: "85140",
  country: "US",
  phone: "801-376-1006",
  email: "ccarter@easypost.com",
});

endShipper.save().then(console.log);

// es_7ea1fa877f594966980a4c477642c658 EndShipper ID
