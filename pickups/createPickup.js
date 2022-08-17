require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
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

// const batch = 'batch_18ada6eaf30b459898416444fefdcfb5';
const address = 'adr_e7cce6631a5c11edb309ac1f6bc7b362';
const shipment = 'shp_eaf06740634f4e67956f17f1a6673ff5';

const pickup = new api.Pickup({
    address,
    // batch,
    shipment,
    carrier_account: process.env.FEDEX,
    reference: 'Pickup Testing',
    min_datetime: '2022-08-12 04:22:00',
    max_datetime: '2022-08-12 06:59:59',
    // is_account_address: false,
    instructions: 'This is an express test',
});

pickup.save().then(console.log).catch(console.log);