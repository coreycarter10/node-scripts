require("dotenv").config();

// const Easypost = require("@easypost/api");

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;

// const apiKey = process.env.personalTestKey;
// const apiKey = process.env.personalProdKey;

// const api = new Easypost(apiKey);

const EasyPostClient = require("@easypost/api");

const client = new EasyPostClient(apiKey);

(async () => {
  const rates = await client.Beta.Rate.retrieveStatelessRates({
    to_address: {
      name: "Dr. Steve Brule",
      street1: "179 N Harbor Dr",
      city: "Redondo Beach",
      state: "CA",
      zip: "90277",
      country: "US",
      email: "dr_steve_brule@gmail.com",
      phone: "4155559999",
    },
    from_address: {
      street1: "417 montgomery street",
      street2: "FL 5",
      city: "San Francisco",
      state: "CA",
      zip: "94104",
      country: "US",
      company: "EasyPost",
      phone: "415-123-4567",
    },
    parcel: {
      length: 20.2,
      width: 10.9,
      height: 5,
      weight: 65.9,
    },
  });

  console.log(rates);
})();
