require("dotenv").config();

const Easypost = require("@easypost/api");

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

api.EndShipper.retrieve("es_7ea1fa877f594966980a4c477642c658").then(
  (endShipper) => {
    endShipper.name = "NEW NAME";
    endShipper.company = "BAZ";
    endShipper.street1 = "164 TOWNSEND STREET UNIT 1";
    // endshipper.street2 = "UNIT 1";
    endShipper.city = "Los Angeles";
    endShipper.state = "CA";
    endShipper.zip = "94107";
    endShipper.country = "PR";
    endShipper.phone = "555-555-5555";
    endShipper.email = "FOO@EXAMPLE.COM";

    endShipper.save().then(console.log);
  }
);

// updated endshipper ID es_7ea1fa877f594966980a4c477642c658
