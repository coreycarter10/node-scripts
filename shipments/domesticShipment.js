require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.personalTestKey

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const toAddress = new api.Address({
  verify: ["delivery", "zip4"],
  company: "Swing Away Golf Studio",
  name: "Brandon Kida",
  street1: "2258 Caminito Pescado #12",
  // street2: '',
  city: "San Diego",
  state: "CA",
  zip: "92107",
  country: "US",
  phone: "8015401281",
  email: "kidakat15@gmail.com",

  // name: 'Bob',
  // street1: '820 E Newfield Dr',
  // street2: '',
  // city: 'Sandy',
  // state: 'UT',
  // zip: '84094',
  // country: 'US',
  // phone: '8014555555',
  // email: 'TEST123@YOPMAIL.COM',
  // residential: true
});

const fromAddress = new api.Address({
  company: "EasyPost",
  name: "Corey Carter",
  street1: "37620 N Poplar road",
  // street2: "STE B",
  city: "San Tan Valley",
  state: "AZ",
  zip: "85140",
  country: "US",
  phone: "8013761006",
  email: "ccarter@easypost.com",

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
});

const returnAddress = new api.Address({
  company: "EasyPost",
  name: "Corey Carter",
  street1: "37620 N Poplar road",
  // street2: "STE B",
  city: "San Tan Valley",
  state: "AZ",
  zip: "85140",
  country: "US",
  phone: "8013761006",
  email: "ccarter@easypost.com",
});

// fromAddress.save().then(console.log).catch(console.log);
// toAddress.save().then(console.log).catch(console.log);

// fromAddress.save()
// toAddress.save()

// These will break out the errors
// fromAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

// const toAddress = new api.Address({ "id": "adr_091a999b7071442fa922d6f8e0fab413" });
// const fromAddress = new api.Address({ "id": "adr_b2904a39f49d4b1eb0b632395302cc78" });

const parcel = new api.Parcel({
  // predefined_package: "FedExPak",
  length: 5,
  width: 5,
  height: 5,
  weight: 5,
});

// parcel.save().then(console.log);
// parcel.save()

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  return_address: returnAddress,
  parcel: parcel,
  // carrier: 'USPS',
  // service: 'First',
  // reference: 'Insurance testing',
  // is_return: true,
  // ancillary_endorsement: true,
  options: {
    // carbon_offset: true,
    // hazmat: 'LIMITED_QUANTITY',
    // additional_handling: true,
    // label_date: '2020-05-29',
    // endorsement: 'ADDRESS_SERVICE_REQUESTED',
    // carrier_insurance_amount: 999.99
    // print_custom_1: 'Print custom 1',
    // print_custom_2: "Print custom 2",
    // print_custom_3: "Print custom 3",
    // print_custom_1_code: 'reference'
    // label_format: 'PDF',
    // label_size: '8.5X11',
    // commercial_invoice_letterhead: 'IMAGE_1',
    //  commercial_invoice_signature: 'IMAGE_2',
    // certified_mail: true,
    // return_receipt: true,
    // dropoff_type: "DROP_BOX",
    // delivery_confirmation: 'ADULT_SIGNATURE',
    // pickup_min_datetime: '2022-02-18T07:00:00.000Z',
    // pickup_max_datetime: '2022-02-22T07:00:00.000Z',
    // delivery_min_datetime: '2022-02-18T07:00:00.000Z',
    // delivery_max_datetime: '2022-02-22T07:00:00.000Z',
    // handling_instructions: 'LEAVE AT DOOR'
    // cost_center: '06'
    // postage_label_inline: true
    // payment: {
    //   type: 'THIRD_PARTY',
    //   account: '64F022',
    //   postal_code: '84094',
    //   country: 'US'
    // }
  },
  carrier_accounts: [process.env.USPS],
  // carrier_accounts: ['ca_51c5e89603c64c04b4ed3d55a3547c8a']
});

//SOME VARIOUS WAYS TO RETURN RESPONSE BODY INFO I'VE PLAYED AROUND WITH

// shipment.save().then(s => {
//   console.log(s.rates)
//   console.log(s.messages);
//   console.log(s.id);
//   console.log(s.usps_zone);
//   console.log(s.postage_label); // for one-call buys
// }).catch(console.log);

// shipment.save().then(s => {
//   s.rates.forEach(x => {
//     const theGoods = x.service + " " + "$" + x.rate
//     console.log(theGoods);
//   })
// }).catch(console.log);

shipment.save(true).then((s) => {
  for (i = 0; i < s.rates.length; i++) {
    console.log(
      s.rates[i].carrier +
        " " +
        s.rates[i].service +
        " " +
        "$" +
        s.rates[i].rate
    );
  }
});

// shipment.save().then(s => {
//   console.log(s.rates[0].service);
//   console.log(s.rates[0].carrier);
//   console.log(s.rates[0].rate);
//   console.log(s.rates[0].delivery_days);
// }).catch(console.log);

// shipment.save().then(console.log).catch(console.log);

//============buy shipment by lowest rate============
// shipment
//   .save()
//   .then((s) => {
//     s.buy(s.lowestRate()).then(console.log).catch(console.log);
//   })
//   .catch(console.log);

// ============Buy Shipment by ID============
// api.Shipment.retrieve("shp_eaf06740634f4e67956f17f1a6673ff5")
//   .then((s) => {
//     s.buy("rate_665970ba85db4c29a8693b5223e910be")
//       .then(console.log)
//       .catch(console.log);
//   })
//   .catch(console.log);

//============buy shipment by carrier name/service type============
// shipment
//   .save()
//   .then((buyShipment) => {
//     shipment.buy("UPS", "Ground").then(console.log).catch(console.log);
//   })
//   .catch(console.log);