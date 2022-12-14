require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const toAddress = new api.Address({
  verify: ["delivery", "zip4"],
  company: "EasyPost",
  name: "Mr. EP",
  street1: "817 Maxwell Ave.",
  // street2: 'FL 10',
  city: "Evansville",
  state: "IN",
  zip: "47711",
  country: "US",
  phone: "8012220000",
});

// toAddress.save().then(console.log).catch(console.log);

// const fromAddress = new api.Address({
// company: "StoreMcStoreFace",
// name: "John Smith",
// street1: "358 S 700 E",
// street2: "STE B",
// city: "Salt Lake City",
// state: "UT",
// zip: "84102",
// country: "US",
// phone: "4165555556",
// email: "TEST123@YOPMAIL.COM",

//  company: 'EasyPost',
//  name: 'Mr. EP',
//  street1: '345 California St',
//  street2: 'FL 10',
//  city: 'San Francisco',
//  state: 'CA',
//  zip: '94104',
//  country: 'US',
//  phone: '8012220000',
//  email: 'email@email.com',
// });

toAddress.save().then(console.log).catch(console.log);

// api.Address.retrieve('adr_0b1d4a2aecd24056865753553144afab').then(address => {
//   console.log(address.id);
// }).catch(console.log);
