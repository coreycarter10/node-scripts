require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

// set addresses
const toAddress = new api.Address({
  verify: ["delivery", "zip4"],
  company: "Stark Tower",
  name: "Tony Stark",
  street1: "200 Park Ave",
  // street2: '',
  city: "New York",
  state: "NY",
  zip: "10079",
  country: "US",
  phone: "8012220000",
  email: "email@email.com",
});

const fromAddress = new api.Address({
  company: "THE TESTING CO.",
  name: "MR. TEST",
  street1: "358 S 700 E",
  street2: "STE B",
  city: "Salt Lake City",
  state: "UT",
  zip: "84102",
  country: "US",
  phone: "4165555556",
  email: "TEST123@YOPMAIL.COM",
});

const order = new api.Order({
  to_address: toAddress,
  from_address: fromAddress,
  // service: 'Priority',
  // carrier: 'USPS',
  // is_return: true,
  shipments: [
    new api.Shipment({
      parcel: {
        weight: 20,
        width: 14.6,
        height: 14.6,
        length: 14.6,
      },
      options: {
        // label_format: "ZPL",
      },
    }),
    // new api.Shipment({
    //   parcel: {
    //     weight: 306.68,
    //     width: 13.83,
    //     height: 13.83,
    //     length: 13.83,
    //   },
    //   options: {
    //     // label_format: "ZPL",
    //   },
    // }),
    // new api.Shipment({
    //     parcel: {
    //         weight: 17.5,
    //         width: 8,
    //         height: 3,
    //         length: 10,
    //     },
    // }),
    // new api.Shipment({
    //     parcel: {
    //         weight: 17.5,
    //         width: 8,
    //         height: 3,
    //         length: 10,
    //     },
    // }),
  ],
  // carrier_accounts: [{"id":"ca_e5ecb8da97d643349f1c57ccd143eb91"}, {"id":"ca_b281591570e24e0c961a09901a5c2b57"}],
  // carrier_accounts: [ {"id":"ca_b281591570e24e0c961a09901a5c2b57"}],
  carrier_accounts: [{ id: process.env.OSM }],
});

order.save().then(console.log).catch(console.log);
