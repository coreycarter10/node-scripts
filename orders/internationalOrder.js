require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

// set addresses
const toAddress = new api.Address({
  // company: "THE TESTING CO.",
  // name: 'MR. TEST',
  // street1: '358 S 700 E',
  // street2: 'STE B',
  // city: 'Salt Lake City',
  // state: 'UT',
  // zip: '84102',
  // country: 'US',
  // phone: '4165555556',
  // email: 'TEST123@YOPMAIL.COM',

  name: "CP Order test",
  street1: "154 Lucy Lane",
  city: "Orillia",
  state: "ON",
  zip: "L3V7T5",
  country: "CA",
  phone: "9999999999",

  // company: "THE TESTY MCTESTFACE CO.",
  // name: "Test user",
  // street1: "ARENA PLAZA SHOPPING CENTRE",
  // street2: "KEREPESI UTCA 9. F061",
  // city: "Budapest",
  // // state: "",
  // zip: "1087",
  // country: "HU",
  // phone: "6135699941",
});

const fromAddress = new api.Address({
  company: "THE TESTING CO.",
  name: "MR. TEST",
  street1: "358 S 700 E",
  // street2: "STE B",
  city: "Salt Lake City",
  state: "UT",
  zip: "84102",
  country: "US",
  phone: "4165555556",
  email: "TEST123@YOPMAIL.COM",
  // federal_tax_id: "Test123",
  // state_tax_id: "Test456",

  // company: "THE TESTY MCTESTFACE CO.",
  // name: "MR. TESTY MCTESTFACE",
  // street1: "278 Lakeshore Rd E",
  // // street2: '',
  // city: "Mississauga",
  // state: "ON",
  // zip: "L5G1H1",
  // country: "CA",
  // phone: "9999999999",
  // phone: "6135699941",
});

const customs_info = {
  eel_pfc: "NOEEI 30.37(a)",
  customs_certify: true,
  customs_signer: "Tim Peterson",
  contents_type: "other",
  restriction_type: "none",
  restriction_comments: "",
  non_delivery_option: "return",
  contents_explanation: "Nutritional Supplements",
  // declaration: '',
  customs_items: [
    new api.CustomsItem({
      description: "MusclePharm Combat XL Mass Gainer - 12lbs Vanilla",
      quantity: 1,
      weight: 5,
      value: 2600,
      hs_tariff_number: "12345678",
      origin_country: "US",
      code: "MPH0213",
    }),
  ],
};

const customs_info2 = {
  eel_pfc: "NOEEI 30.37(a)",
  customs_certify: true,
  customs_signer: "Tim Peterson",
  contents_type: "other",
  restriction_type: "none",
  restriction_comments: "",
  non_delivery_option: "return",
  contents_explanation: "Nutritional Supplements",
  // declaration: '',
  customs_items: [
    new api.CustomsItem({
      description: "Myprotein Impact Weight Gainer V2 - 11lbs Chocolate Smooth",
      quantity: 2,
      weight: 5,
      value: 70.0,
      // 'hs_tariff_number': '852352',
      origin_country: "US",
      code: "MYP0134",
    }),
  ],
};

// const customs_info3 = {
//   eel_pfc: "NOEEI 30.37(a)",
//   customs_certify: true,
//   customs_signer: "Tim Peterson",
//   contents_type: "other",
//   restriction_type: "none",
//   restriction_comments: "",
//   non_delivery_option: "return",
//   contents_explanation: "Nutritional Supplements",
//   // declaration: '',
//   customs_items: [
//     new api.CustomsItem({
//       description: "MusclePharm Combat XL Mass Gainer - 12lbs Vanilla",
//       quantity: 1,
//       weight: 192,
//       value: 47.99,
//       // 'hs_tariff_number': '852352',
//       origin_country: "US",
//       code: "MPH0213",
//     }),
//   ],
// };

//   const customs_info4 = {
//     eel_pfc: "NOEEI 30.37(a)",
//     customs_certify: true,
//     customs_signer: 'Tim Peterson',
//     contents_type: 'other',
//     restriction_type: 'none',
//     restriction_comments: '',
//     non_delivery_option: 'return',
//     contents_explanation: 'Nutritional Supplements',
//     // declaration: '',
//     customs_items: [
//         new api.CustomsItem({
//             'description': 'Myprotein Impact Weight Gainer V2 - 11lbs Chocolate Smooth',
//             'quantity': 2,
//             'weight': 704,
//             'value': 70.0,
//             // 'hs_tariff_number': '852352',
//             'origin_country': 'US',
//             'code': 'MYP0134',
//         }),
//     ],
//   };

const order = new api.Order({
  to_address: toAddress,
  from_address: fromAddress,
  customs_info: customs_info,
  // service: "ParcelDpd12:00",
  shipments: [
    new api.Shipment({
      parcel: {
        weight: 20,
        width: 7.5,
        height: 10.5,
        length: 4.5,
      },
      options: {
        label_format: "ZPL",
        // label_size: "8.5x11",
        // commercial_invoice_letterhead: "IMAGE_1",
        // commercial_invoice_signature: "IMAGE_2",
      },
      customs_info,
    }),
    new api.Shipment({
      parcel: {
        weight: 40,
        width: 8,
        height: 3,
        length: 10,
      },
      options: {
        label_format: "ZPL",
      },
      customs_info,
    }),
    // new api.Shipment({
    //     parcel: {
    //         weight: 17.5,
    //         width: 8,
    //         height: 3,
    //         length: 10,
    //     },
    //     // customs_info3
    // }),
    // new api.Shipment({
    //     parcel: {
    //         weight: 17.5,
    //         width: 8,
    //         height: 3,
    //         length: 10,
    //     },
    //     // customs_info4
    // }),
  ],
  carrier_accounts: [process.env.UPS],
  // carrier_accounts: [{"id":"ca_e5ecb8da97d643349f1c57ccd143eb91"}, {"id":"ca_b281591570e24e0c961a09901a5c2b57"}],
  // carrier_accounts: [ {"id":"ca_c37dd0aa979646ad9b5e113a4743e61a"}],
});

order.save().then((s) => {
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
  console.log(order.id);
});
