require("dotenv").config();

const Easypost = require('@easypost/api');

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;

const api = new Easypost(apiKey);

// Assign JSON data from file to variable
const data = require('../misc.json');

// Get rid of all the things
delete data.to_address.id;
delete data.to_address.mode;
delete data.to_address.updated_at;
delete data.to_address.created_at;
delete data.to_address.carrier_facility;
delete data.from_address.id;
delete data.from_address.created_at;
delete data.from_address.mode;
delete data.from_address.updated_at;
delete data.parcel.id;
delete data.parcel.created_at;
delete data.parcel.mode;
delete data.parcel.updated_at;
if (data.parcel.predefined_package === null) {
  delete data.parcel.predefined_package;
}
if (data.customs_info) {
  delete data.customs_info.id;
  delete data.customs_info.created_at;
  delete data.customs_info.mode;
  delete data.customs_info.updated_at;
  for (let i = 0; i < data.customs_info.customs_items.length; i++) {
    delete data.customs_info.customs_items[i].id;
    delete data.customs_info.customs_items[i].created_at;
    delete data.customs_info.customs_items[i].mode;
    delete data.customs_info.customs_items[i].updated_at;
    if (data.customs_info.customs_items[i].currency === null) {
      delete data.customs_info.customs_items[i].currency;
    }

    // Convert shipment customs_items values from strings to numbers to get around prop type differences
    // This is required for the EasyPost Node lib v5+, lib versions prior to this don't need this fix
    if (data.customs_info.customs_items[i].value) {
      data.customs_info.customs_items[i].value = Number(data.customs_info.customs_items[i].value);
    }
  }
}
delete data.batch_id;
delete data.batch_message;
delete data.batch_status;

// Recreate the shipment
const shipment = new api.Shipment({
  to_address: data.to_address,
  from_address: data.from_address,
  parcel: data.parcel,
  options: data.options,
  customs_info: data.customs_info,
  is_return: data.is_return,
  carrier_accounts: [process.env.USPS],
  options: {
    // print_custom_1: 'Print Custom 1',
    // print_custom_2: 'Print Custom 2'
    // incoterm: "DDP",
//     commercial_invoice_format: 'PNG',
// label_size: "4x6"
// suppress_etd: true
  }
});

shipment.save().then(console.log).catch(console.log);

//============buy shipment by lowest rate============
// shipment
//   .save()
//   .then((s) => {
//     s.buy(s.lowestRate())
//       .then(console.log)
//       .catch((error) => console.log(JSON.stringify(error, null, 2)));
//   })
//   .catch((error) => console.log(JSON.stringify(error, null, 2)));

//============buy shipment by carrier name/service type============
// shipment.save().then(s =>
//   s.buy(shipment.lowestRate(['Purolator'], ['PurolatorGround']))
//     .then(console.log).catch(error => console.log(JSON.stringify(error, null, 2))))
// ).catch(error => console.log(JSON.stringify(error, null, 2)));

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_17f069aa057742a09df076f207d08673').then(s => {
//   s.buy('rate_e0acf12e45dc418587e61365646a7091').then(console.log).catch(error => console.log(JSON.stringify(error, null, 2)));
// }).catch(error => console.log(JSON.stringify(error, null, 2)));
