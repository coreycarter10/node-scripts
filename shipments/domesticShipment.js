require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.childUserTestKey;
// const apiKey = process.env.childUserProdKey;

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const toAddress = new api.Address({
  verify: ["delivery", "zip4"],
  // verify_strict: true,
  // verify: ["delivery"],
  // company: "Swing Away Golf Studio",
  name: "Mr. EP",
  street1: "1009 Fairway Lane",
  // // street2: "Unit 530",
  city: "Sherrard",
  state: "IL",
  zip: "61281",
  country: "US",
  // phone: "2705355109",
  // residential: true,
  // email: "swingawaygolfstudio@gmail.com",
  // residential: true,

  // name: "Mr. EP",
  street1: "75 Brainard Road",
  // street2: "APT 16B",
  city: "Hartford",
  state: "CT",
  zip: "6114",
  country: "US",
  // phone: "4803039337",
  // email: "lorinda@masterlinkcom.com",
});

const fromAddress = new api.Address({
  // company: "EasyPost",
  // name: "Corey Carter",
  // street1: "14191 N Washington Hwy",
  // street2: "STE B",
  // city: "Ashland",
  // state: "VA",
  // zip: "23005",
  // country: "US",
  // phone: "8013761006",
  // email: "ccarter@easypost.com",
  // residential: true,

  // name: "CFO",
  name: "Brandon Kida",
  company: "EasyPost",
  street1: "2558 Caminito Pescado #12",
  // street2: "Bardon Hill",
  state: "CA",
  city: "San Diego",
  zip: "92107",
  country: "US",
  phone: "8015401281",
  email: "kidakat15@gmail.com",
  // email: "swingawaygolfstudio@gmail.com",

  // name: "Hey Dude Shoes",
  // company: "Hey Dude Shoes",
  // street1: "549 Mill Road",
  // city: "Edison",
  // state: "NY",
  // zip: "08818",
  // country: "US",
  // phone: "908-405-4446",
});

const returnAddress = new api.Address({
  company: "EasyPost",
  name: "CFO",
  street1: "4710 S Ferric",
  // street2: "STE B",
  city: "Mesa",
  state: "AZ",
  zip: "85212",
  country: "US",
  phone: "8013761006",
  email: "ccarter@easypost.com",
  // name: "SUTERA",
  // company: "SUTERA",
  // street1: "3300 Wood Drive",
  // street2: "STE 200",
  // state: "TX",
  // city: "Garland",
  // zip: "75041",
  // country: "US",
  // phone: "3176983299",
  // email: "acarney@echodata.com",
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
  // predefined_package: "Flat",
  length: 18,
  width: 6.5,
  height: 6,
  weight: 16,
});

// parcel.save().then(console.log);
// parcel.save()

const shipment = new api.Shipment({
  to_address: toAddress,
  // to_address: { id: "adr_adb3b06c42b611ee84ccac1f6bc539ae" },
  from_address: fromAddress,
  return_address: fromAddress,
  // return_address: returnAddress,
  parcel: parcel,
  // reference: "Reference",
  // carrier: "USPS",
  // service: "First",
  // reference: 'Insurance testing',
  // is_return: true,
  // ancillary_endorsement: true,
  options: {
    // print_custom: [
    //   {
    //     name: "print_custom_1",
    //     value: "RMA value",
    //     barcode: false,
    //   },
    //   {
    //     name: "RMA",
    //     value: "JQ9044",
    //     barcode: "true",
    //   },
    //   {
    //     value: "R",
    //   },
    // ],
    // end_shipper_id: "es_7ea1fa877f594966980a4c477642c658",
    // commercial_invoice_signature: "IMAGE_2",
    // commercial_invoice_letterhead: "IMAGE_1",
    // invoice_number: "invoice number",
    // endorsement: "FORWARDING_SERVICE_REQUESTED",
    // carrier_insurance_amount: 100,
    // registered_mail: true,
    // registered_mail_amount: 100,
    // special_rates_eligibility: "USPS.MEDIAMAIL",
    // type: "Prepaid",
    // dry_ice: true,
    // dry_ice_weight: 5,
    // hazmat: "CLASS_9_DRY_ICE",
    // additional_handling: true,
    // label_date: "2023-09-25T00:00:00Z",
    // endorsement: 'ADDRESS_SERVICE_REQUESTED',
    // carrier_insurance_amount: 999.99
    // print_custom_1: "Lint Roller",
    // print_custom_2: "Hazels in a corner?",
    // print_custom_3: "Scout has big ears",
    // print_custom_1_code: "PO",
    // print_custom_2_code: "PO",
    // label_format: "PDF",
    // postage_label_inline: true,
    // saturday_delivery: true,
    // import_federal_tax_id: "",
    // label_size: "4x6",
    // label_format: "PDF",
    // commercial_invoice_letterhead: 'IMAGE_1',
    // commercial_invoice_signature: 'IMAGE_2',
    // certified_mail: true,
    // return_receipt: true,
    // dropoff_type: "DROP_BOX",
    // delivery_confirmation: "ADULT_SIGNATURE",
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

shipment.save().then((s) => {
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
  console.log(s.id);
});

// Carbon Offset log rates
// shipment.save(true).then((s) => {
//   console.log(s.rates);
// });

// shipment.save(true).then(s => {
//   console.log(s.rates[0].service);
//   console.log(s.rates[0].carrier);
//   console.log(s.rates[0].rate);
//   console.log(s.rates[0].delivery_days);
// }).catch(console.log);

// shipment.save().then(console.log).catch(console.log);

// ============buy shipment by lowest rate============
// shipment
//   .save()
//   .then((s) => {
//     s.buy(s.lowestRate()).then(console.log).catch(console.log);
//   })
//   .catch(console.log);

// Buy Shipment by ID & rate
// api.Shipment.retrieve("shp_eb5081f3bad24f678b3e8f27b09a2f55")
//   .then((s) => {
//     s.buy("rate_858a72ffe53d4b21827cac69eb0b74c4")
//       .then(console.log)
//       .catch(console.log);
//   })
//   .catch(console.log);

// ============Carbon offset Buy Shipment by ID============
// api.Shipment.retrieve("shp_9e1383777a314d2c90b1f40bc8051016")
//   .then((s) => {
//     s.buy("rate_dde54ce5f99e480f9a6449099523c232", null, true)
//       .then(console.log)
//       .catch(console.log);
//   })
//   .catch(console.log);

//============buy shipment by carrier name/service type============
// shipment
//   .save()
//   .then((buyShipment) => {
//     shipment.buy("Parcll", "Economy West").then(console.log).catch(console.log);
//   })
//   .catch(console.log);
