require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;

// const apiKey = process.env.personalTestKey;
// const apiKey = process.env.personalProdKey;
const api = new Easypost(apiKey);

const toAddress = new api.Address({
  // company: "THE TESTY MCTESTFACE CO.",
  // name: "Test user NL",
  // street1: "ARENA PLAZA SHOPPING CENTRE",
  // street2: "KEREPESI UTCA 9. F061",
  // city: "Budapest",
  // // state: "",
  // zip: "1087",
  // country: "HU",
  // phone: "6135699941",
  // email: "ccarter@easypost.com",

  // street1: "1527 Main St",
  // // street2: "Crownhill",
  // city: "Vancouver",
  // state: "BC",
  // zip: "V6A 2W5",
  // country: "CA",
  // phone: "9999999999",

  // company: "Akhilesh Chourey",
  // verify_strict: true,
  name: "Mr. EP",
  street1: "4 The Nurses House, Adams Walk",
  // street2: "CARRICKMINES MANOR",
  city: "Midhurst",
  state: "CO",
  zip: "GU29 0FF",
  country: "GB",
  // 43 Myeongdong-gil, Jung-gu, Seoul, South Korea
  phone: "9999999999",
  email: "williamsanghee@gmail.com",
  // federal_tax_id: "VAT12345",
  // residential: true,
});

const fromAddress = new api.Address({
  // company: "THE TESTING CO.",
  // name: "MR. TEST",
  // street1: "358 S 700 E",
  // street2: "STE B",
  // city: "Salt Lake City",
  // state: "UT",
  // zip: "84102",
  // country: "US",
  // phone: "4165555556",
  // email: "TEST123@YOPMAIL.COM",

  name: "Brandon Kida",
  company: "EasyPost",
  street1: "2558 Caminito Pescado #12",
  // // street2: "Bardon Hill",
  state: "CA",
  city: "San Diego",
  zip: "92107",
  country: "US",
  phone: "8015401281",
  email: "kidakat15@gmail.com",
  // name: "Topps Europe Ltd ",
  // company: "Topps Europe Ltd",
  // street1: "Damrak 8",
  // street2: "Crownhill",
  // city: "Amsterdam",
  // state: "NH",
  // zip: "1012 LG",
  // country: "NL",
  // Damrak 8, 1012 LG Amsterdam, Netherlands
  // phone: "12345678901",
  // email: "xyz@abc.com",
  // federal_tax_id: "GBUNREG",
  // state_tax_id: "GB608693513000",

  // residential: false
});

const buyerAdress = new api.Address({
  company: "THE TESTY MCTESTFACE CO.",
  name: "Test user AX",
  street1: "Kopmansgatan 20 B, 22100 Mariehamn Aland Islands",
  street2: "",
  city: "Mariehamn",
  // state: "",
  zip: "22100",
  country: "AX",
  phone: "6135699941",

  // company: "Akhilesh Chourey",
  // street1: "674 W. Lantern St",
  // street2: "Lantern St",
  // city: "Santa Ana",
  // state: "CA",
  // zip: "92703",
  // country: "US",
  // phone: "9854763210",
  // email: "ACHOUREY@RAVEINFOSYS.COM",
  // residential: true,
});

// fromAddress.save().then(console.log).catch(console.log);

// toAddress.save().then(console.log).catch(console.log);

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
      weight: 5,
      value: 25,
      // hs_tariff_number: "490101",
      origin_country: "US",
      code: "95062900",
      currency: "USD",
    }),

    //     new api.CustomsItem({
    //       description: 'Notecard_12019_Cadolia',
    //       quantity: 280,
    //       weight:0.06,
    //       value: 1.0,
    //       origin_country: 'US',
    //       code: 'Notecard_12019',
    //   }),

    //   new api.CustomsItem({
    //     description: 'Cadolia_Labels',
    //     quantity: 240,
    //     weight: 0.06,
    //     value: 1.0,
    //     origin_country: 'US',
    //     code: 'MPH0213',
    // }),
  ],
});

// const customsInfo = new api.CustomsInfo({
//   eel_pfc: "NOEEI 30.37(a)",
//   contents_type: "merchandise",
//   contents_explanation: "MERCHANDISE",
//   customs_certify: "TRUE",
//   customs_signer: "TOPPS EUROPE LIMITED",
//   non_delivery_option: "return",
//   restriction_type: "none",
//   restriction_comments: "",
//   customs_items: [
//     new api.CustomsItem({
//       description: "WWE Slam Attax 2021 - Starter",
//       quantity: 1,
//       weight: 10.582188,
//       value: 200.0,
//       hs_tariff_number: "4820500000",
//       origin_country: "GB",
//       currency: "GBP",
//     }),
//   ],
// });

const parcel = new api.Parcel({
  // predefined_package: "DHLFlyer",
  length: 6,
  width: 5,
  height: 5,
  weight: 17,
});

// parcel.save().then(console.log).catch(console.log);

const shipment = new api.Shipment({
  to_address: toAddress,
  // toAddress: { id: "adr_94249bc829c811eebb82ac1f6bc539ae" },
  from_address: fromAddress,
  // buyer_address: buyerAdress,
  parcel: parcel,
  customs_info: customsInfo,
  // is_return: true,
  // tax_identifiers: [
  //   {
  //     entity: "RECEIVER",
  //     tax_id: "EORI1234",
  //     tax_id_type: "EORI",
  //     issuing_country: "US",
  //   },
  // ],
  // reference: '123',
  // is_return: true,
  // service: "INTERNATIONAL_ECONOMY",
  options: {
    // hide_account: true,
    // hazmat: "PRIMARY_CONTAINED",
    // parties_to_transaction_are_related: true,
    // content_description: "A shoe",
    // invoice_number: 12345,
    // incoterm: "DDP",
    // suppress_etd: true,
    // duty_payment_account: "147318570",
    // import_federal_tax_id: "1234",
    // tax_id_expiration_date: "2022-12-31",
    // carrier_insurance_amount: 10,
    // importer_address_id: "adr_2d9aad44226d11eeb0013cecef1b359e",
    // customs_broker_address_id: "adr_5d9eb64c226c11ee9ffbac1f6bc539aa",
    //  bill_third_party_account: '12345',
    // incoterm: "DDU",
    //  import_federal_tax_id: 'IM2760000742',
    //  duty_payment_account: '654410658',
    //  machineable: true,
    // commercial_invoice_format: "PNG",
    // commercial_invoice_size: "4x6",
    //  freight_charge: 56.72,
    // label_size: "4X6",
    // label_format: "PDF",
    // delivery_confirmation: "SIGNATURE",
    //  hold_for_pickup: true,
    //  handling_instructions: 'These are my instructions!!!!!',
    //  print_custom_1: 'HEY THIS SHOULD BE ON THE LABEL',
    // commercial_invoice_letterhead: "IMAGE_1",
    // commercial_invoice_signature: "IMAGE_2",
    // delivery_confirmation: "NO_SIGNATURE",
    //  currency: 'USD',
    //  payment: {
    //   type: 'SENDER',
    //   account: '893084290',
    //   postal_code: '84102',
    //   country: 'US'
    //  },
    //  duty_payment: {
    //    type: 'THIRD_PARTY',
    //    account: '123456',
    //    postal_code: '12345',
    //    country: 'US'
    //  },
  },
  // carrier_accounts: ['ca_c37dd0aa979646ad9b5e113a4743e61a'],
  carrier_accounts: [process.env.USPS],
});

//SOME VARIOUS WAYS TO RETURN RESPONSE BODY INFO I'VE PLAYED AROUND WITH

// shipment.save().then(s => {
//   console.log(s.rates)
//   console.log(s.messages)
//   console.log(s.id);
// console.log(s.postage_label); // for one-call buys
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

// shipment.save().then(s => {
//   console.log(s.rates[0].service);
//   console.log(s.rates[0].carrier);
//   console.log(s.rates[0].rate);
//   console.log(s.rates[0].delivery_days);
// }).catch(console.log);

// shipment.save().then(console.log).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve("shp_b0ad8d95d7ee4f0dbf2e46077ac0e569")
//   .then((s) => {
//     s.buy("rate_285151fd72d6479bbf972f020deb3402")
//       .then(console.log)
//       .catch(console.log);
//   })
//   .catch(console.log);

// ============buy shipment by lowest rate============
// shipment
//   .save()
//   .then((s) => {
//     s.buy(s.lowestRate()).then(console.log).catch(console.log);
//   })
//   .catch(console.log);
