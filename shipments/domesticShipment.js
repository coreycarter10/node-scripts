require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.personalTestKey

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const toAddress = new api.Address({
  verify: ["delivery", "zip4"],
  // company: "Impact Custom Clubs",
  // name: "Brandon Kida",
  // street1: "2258 Caminito Pescado #12",
  // // street2: "Suite 105",
  // city: "San Diego",
  // state: "CA",
  // zip: "92107",
  // country: "US",
  // phone: "8015401281",
  // email: "kidakat15@gmail.com",
  // residential: true,

  name: "Kim Mauldin",
  company: "EasyPost",
  street1: "2 Royal Oaks Circle",
  // street2: "APT# 506",
  state: "TX",
  city: "Denton",
  zip: "76210",
  country: "US",
  phone: "9999999999",
  // email: "rthompson@gmail.com",
});

const fromAddress = new api.Address({
  // company: "EasyPost",
  // name: "Corey Carter",
  // street1: "37620 N Poplar road",
  // // street2: "STE B",
  // city: "San Tan Valley",
  // state: "AZ",
  // zip: "85140",
  // country: "US",
  // phone: "999-999-9999",
  // email: "ccarter@easypost.com",

  name: "SUTERA",
  // company: "SUTERA",
  street1: "3300 Wood Drive",
  street2: "STE 200",
  state: "TX",
  city: "Garland",
  zip: "75041",
  country: "US",
  phone: "3176983299",
});

const returnAddress = new api.Address({
  // company: "EasyPost",
  // name: "Corey Carter",
  // street1: "37620 N Poplar road",
  // // street2: "STE B",
  // city: "San Tan Valley",
  // state: "AZ",
  // zip: "85140",
  // country: "US",
  // phone: "8013761006",
  // email: "ccarter@easypost.com",
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
  // predefined_package: "Letter",
  length: 36,
  width: 24,
  height: 6,
  weight: 176,
});

// parcel.save().then(console.log);
// parcel.save()

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  // return_address: fromAddress,
  // return_address: returnAddress,
  parcel: parcel,
  // reference: "s8545144:0",
  // carrier: "LSO",
  // service: "ECommerce",
  // reference: 'Insurance testing',
  // is_return: true,
  // ancillary_endorsement: true,
  options: {
    // special_rates_eligibility: "USPS.MEDIAMAIL",
    // type: "Prepaid",
    // dry_ice: true,
    // dry_ice_weight: 160,
    // hazmat: 'LIMITED_QUANTITY',
    // additional_handling: true,
    // label_date: "2022-11-29",
    // endorsement: 'ADDRESS_SERVICE_REQUESTED',
    // carrier_insurance_amount: 999.99
    print_custom_1: "UFC",
    print_custom_2: "Print custom 2",
    print_custom_3: "Print custom 3",
    // print_custom_1_code: 'reference'
    // label_format: "ZPL",
    // import_federal_tax_id: "",
    // label_size: '8.5X11',
    // commercial_invoice_letterhead: 'IMAGE_1',
    // commercial_invoice_signature: 'IMAGE_2',
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
  carrier_accounts: [process.env.UPS],
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
shipment
  .save()
  .then((s) => {
    s.buy(s.lowestRate()).then(console.log).catch(console.log);
  })
  .catch(console.log);

// Buy Shipment by ID & rate
// api.Shipment.retrieve("shp_a97d6d3b73c04b5f8aea3e2768c5f03b")
//   .then((s) => {
//     s.buy("rate_46aefb85bdc24bf39c5e80084134791b")
//       .then(console.log)
//       .catch(console.log);
//   })
//   .catch(console.log);

// ============Carbon offset Buy Shipment by ID============
// api.Shipment.retrieve("shp_dff0d619604043ec8f5cd04858e29bbc")
//   .then((s) => {
//     s.buy("rate_85e33a310863452e85dff5eb5685922d", null, true)
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
