require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);





/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
// const address = new api.Address({
//     name: 'EasyPost',
//     street1: 'Ferris Dr 6410',
//     city: 'Houston',
//     state: 'TX',
//     zip: '77081',
//     phone: '5481855189',
// });


const address = 'adr_aa8be464189e11edbf06ac1f6bc7b362'
const shipment = 'shp_8072c5ea9e864570a7a1baf18b158478';

const pickup = new api.Pickup({
    address,
    shipment,
    carrier_account: process.env.FEDEX,
    reference: 'Pickup Testing',
    min_datetime: '2022-08-10 04:22:00',
    max_datetime: '2022-08-11 23:59:59',
    // is_account_address: false,
    instructions: 'This is a test',
});

pickup.save().then(console.log).catch(console.log);