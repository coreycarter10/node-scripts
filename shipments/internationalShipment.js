require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



  const toAddress = new api.Address({
  company: '',
  name: 'TESTY MCTESTFACE',
  street1: '721 Government St',
  // street2: '',
  city: 'Victoria',
  state: 'BC',
  zip: 'V8W 1W5',
  country: 'CA',
  phone: '6135699941',




  // company: "TEST",
  // name: 'TEST',
  // street1: '358 S 700 E',
  // street2: 'STE B',
  // city: 'Salt Lake City',
  // state: 'UT',
  // zip: '84102',
  // country: 'US',
  // phone: '4165555556',
  // email: 'TEST123@YOPMAIL.COM',



  // name: "CAROLINA HURTADO",
  // // company:"",
  // street1: "626 Pale San Vitores Road",
  // city: "Tamuning",
  // state: "GU",
  // // zip: "96931",
  // country: "GU",
  // phone: "0467159999",
  // // email: "mack@blackbearfulfillment.com.au"


  // name: "The Dude",
  // street1: "Summit House",
  // street2: "Athey St",
  // city: "Macclesfield",
  // state: "Cheshire",
  // zip: "SK116QU",
  // country: "GB",
  // phone: "1234567890",
  // email: "email@email.com"
});

const fromAddress = new api.Address({
  company: "TEST",
  name: 'TEST',
  street1: '358 S 700 E',
  street2: 'STE B',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84102',
  country: 'US',
  phone: '4165555556',
  email: 'TEST123@YOPMAIL.COM',


  //  // company: '',
  // name: 'Test',
  // street1: '600 University Ave',
  // // street2: '',
  // city: 'Toronto',
  // state: 'ON',
  // zip: 'M5G 1X5',
  // country: 'CA',
  // phone: '6135699941',



//   company: "Muscle & Strength, LLC",
//     street1: "1180 First Street South",
//     city: "Columbia",
//     state: "SC",
//     zip: "29209",
//     country: "US",
//     phone: "18005379910",
//     email: "support@muscleandstrength.com",
});


fromAddress.save().then(console.log).catch(console.log);

toAddress.save().then(console.log).catch(console.log);

const customsInfo = new api.CustomsInfo({
    eel_pfc: "NOEEI 30.36",
    customs_certify: true,
    customs_signer: 'TEST',
    contents_type: 'other',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'return',
    contents_explanation: 'Stuff',
    // declaration: '',
    customs_items: [
        new api.CustomsItem({
            'description': 'Things',
            'quantity': 1,
            'weight': 1,
            'value': 2600,
            'hs_tariff_number': '852352',
            'origin_country': 'US',
            // 'code': 'MPH0213',
        })],
});

const parcel = new api.Parcel({
    // predefined_package: 'Satchel',
    length: 10,
    width: 10,
    height: 10,
    weight: 190,
});

parcel.save().then(console.log).catch(console.log);

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    customs_info: customsInfo,
    // is_return: true,
    options: {
      incoterm: 'DDP'
    //  label_format: "PDF",
    //  delivery_confirmation: 'do_not_safe_drop',
    //  hold_for_pickup: false,
    // handling_instructions: 'These are my instructions!!!!!'
    },
    carrier_accounts: [process.env.USPS],
});

shipment.save().then(console.log).catch(console.log);



// ============buy shipment by ID============

// api.Shipment.retrieve('shp_6dbaf5e82b8245ff9f588f65753b6b87').then(s => {
//   s.buy('rate_cd480fea53e14d28b42d69b477ce8303').then(console.log).catch(console.log);
// }).catch(console.log);


// ============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(console.log).catch(console.log);
}).catch(console.log);
