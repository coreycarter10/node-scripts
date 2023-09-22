require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;

const api = new Easypost(apiKey);

const fromAddress = new api.Address({
  // name: "John Doe",
  // street1: "358 S 700 E",
  // street2: "STE B",
  // city: "Salt Lake City",
  // state: "UT",
  // zip: "84102",
  // country: "US",
  // phone: "4165555556",

  name: "Test user",
  street1: "8261 Fraser Reach Court",
  city: "Burnaby",
  state: "BC",
  zip: "V3N 2V7",
  country: "CA",
  phone: "9999999999",
});

const customsInfo = new api.CustomsInfo({
  eel_pfc: "NOEEI 30.37(a)",
  customs_certify: true,
  customs_signer: "Brandon Kida",
  contents_type: "Merchandise",
  restriction_type: "none",
  // restriction_comments: "Tesing commercial invoice stuff and things",
  // non_delivery_option: 'return',
  // contents_explanation: "On UPS LABEL",
  // declaration: "I do declare",
  customs_items: [
    new api.CustomsItem({
      description: "Merchandise - Golf Putter",
      quantity: 1,
      weight: 1,
      value: 25,
      // hs_tariff_number: "490101",
      origin_country: "US",
      code: "95062900",
      currency: "USD",
    }),
  ],
});

const batch = new api.Batch({
  shipments: [
    // {
    //   from_address: fromAddress,
    //   to_address: {
    //     name: "Stan Marsh",
    //     street1: "706 Main St",
    //     city: "Fairplay",
    //     state: "CO",
    //     zip: "80440",
    //   },
    //   parcel: {
    //     length: 2,
    //     width: 2,
    //     height: 2,
    //     weight: 7.2,
    //   },
    //   carrier: "USPS",
    //   // 'service': 'Priority',
    //   carrier_accounts: ["ca_da51134536554c59ac27cd9f580f30be"],
    // },
    {
      from_address: fromAddress,
      to_address: {
        name: "Kenny McCormick",
        street1: "1302 camino del mar",
        city: "Del Mar",
        state: "CA",
        zip: "92014",
        country: "US",
        phone: "9999999999",
      },
      parcel: {
        length: 12.5,
        width: 8,
        height: 6,
        weight: 1,
      },
      customs_info: customsInfo,
      carrier: "CanadaPost",
      service: "ExpeditedParcelUSA",
      carrier_accounts: ["ca_9006efbd836b4009baafb6682feeec5e"],
    },
  ],
});
// console.log(batch);
// batch.save();

// .then(buyBatch => {
//     batch.buy().then(console.log).catch(console.log);
//     }).catch(console.log);

api.Batch.retrieve("batch_0258ae967d7b4450b7ba43ce0d752001").then((batch) =>
  batch.buy().then(console.log)
);
