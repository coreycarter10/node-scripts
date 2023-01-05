require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;

const api = new Easypost(apiKey);
const fromAddress = new api.Address({
  name: "John Doe",
  street1: "358 S 700 E",
  street2: "STE B",
  city: "Salt Lake City",
  state: "UT",
  zip: "84102",
  country: "US",
  phone: "4165555556",
});
const batch = new api.Batch({
  shipments: [
    {
      from_address: fromAddress,
      to_address: {
        name: "Stan Marsh",
        street1: "706 Main St",
        city: "Fairplay",
        state: "CO",
        zip: "80440",
      },
      parcel: {
        length: 2,
        width: 2,
        height: 2,
        weight: 7.2,
      },
      carrier: "USPS",
      // 'service': 'Priority',
      carrier_accounts: ["ca_da51134536554c59ac27cd9f580f30be"],
    },
    {
      from_address: fromAddress,
      to_address: {
        name: "Kenny McCormick",
        street1: "640 Hathaway St",
        city: "Fairplay",
        state: "CO",
        zip: "80440",
      },
      parcel: {
        length: 2,
        width: 2,
        height: 2,
        weight: 5,
      },
      carrier: "USPS",
      // 'service': 'Priority',
      carrier_accounts: ["ca_da51134536554c59ac27cd9f580f30be"],
    },
  ],
});
//   console.log(batch)
// batch.save()

// .then(buyBatch => {
//     batch.buy().then(console.log).catch(console.log);
//     }).catch(console.log);

api.Batch.retrieve("batch_e9da1640ce0d4f8e83d03451f4a24516").then((batch) =>
  batch.buy().then(console.log)
);
