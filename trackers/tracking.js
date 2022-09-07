require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const trackArray = [
  "EZ1000000001",
  // "EZ2000000002",
  //   "EZ3000000003",
  //   "EZ74000000004",
  //   "EZ50000000005",
  //   "EZ6000000006",
  //   "EZ7000000007",
];

// console.log(trackArray[2]);

const tracker1 = new api.Tracker({
  tracking_code: trackArray[0],
  // tracking_code: "1234",
  carrier: "Evri",
});

tracker1.save().then(console.log).catch(console.log);

//This will log everything, meaning the "tracking_location: [Object]" will be unpacked.
// tracker1.save().then(r => {console.log(JSON.stringify(r))}).catch(console.log);
