require("dotenv").config();

const Easypost = require("@easypost/api");

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;

// const apiKey = process.env.personalTestKey;
// const apiKey = process.env.personalProdKey;

// const apiKey = process.env.childUserTestKey;
// const apiKey = process.env.childUserProdKey;

const api = new Easypost(apiKey);

// Assign JSON data from file to variable
const data = require("../misc.json");

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

delete data.return_address.id;
delete data.return_address.created_at;
delete data.return_address.mode;
delete data.return_address.updated_at;

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
      data.customs_info.customs_items[i].value = Number(
        data.customs_info.customs_items[i].value
      );
    }
  }
}
delete data.batch_id;
delete data.batch_message;
delete data.batch_status;

// const buyerAddress = new api.Address({
//   name: "Test user",
//   // company: "EasyPost",
//   street1: "CTC: MACARENA GANZABAL",
//   street2: "1350 NW 121ST AVE",
//   city: "MIAMI",
//   state: "FL",
//   zip: "33182",
//   country: "US",
//   phone: "34234234",
//   email: "",
// });

const toAddress = new api.Address({
  // name: "Mr. EP",
  // street1: "4 The Nurses House, Adams Walk",
  // // street2: "CARRICKMINES MANOR",
  // city: "Midhurst",
  // state: "CO",
  // zip: "GU29 0FF",
  // country: "GB",

  name: "Mr. EP",
  street1: "4710 S Ferric",
  city: "Mesa",
  state: "AZ",
  zip: "85212",
  country: "US",
});

const fromAddress = new api.Address({
  // company: "EasyPost",
  // name: "Corey Carter",
  // street1: "37620 N Poplar road",
  // street2: "STE B",
  // city: "San Tan Valley",
  // state: "AZ",
  // zip: "85140",
  // country: "US",
  // phone: "999-999-9999",
  // email: "ccarter@easypost.com",
  // residential: true,

  name: "The Ridge",
  company: "SUTERA",
  street1: "Unit 3 Interlink Way E",
  street2: "Bardon Hill",
  state: "GB",
  city: "Coalville",
  zip: "LE67 1LG",
  country: "GB",
  // phone: "3176983299",
});

const returnAddress = new api.Address({
  company: "EasyPost",
  // name: "Corey Carter",
  street1: "37620 N Poplar road",
  // street2: "STE B",
  city: "San Tan Valley",
  state: "AZ",
  zip: "85140",
  country: "US",
  phone: "999-999-9999",
  email: "ccarter@easypost.com",
  // residential: true,

  // name: "The Ridge",
  // company: "SUTERA",
  // street1: "Unit 3 Interlink Way E",
  // street2: "Bardon Hill",
  // state: "GB",
  // city: "Coalville",
  // zip: "LE67 1LG",
  // country: "GB",
  // phone: "3176983299",
});

const buyerAddress = new api.Address({
  company: "EasyPost",
  // name: "Corey Carter",
  street1: "4710 S Ferric",
  // street2: "STE B",
  city: "Mesa",
  state: "AZ",
  zip: "85212",
  country: "US",
  phone: "999-999-9999",
  email: "ccarter@easypost.com",
  // residential: true,

  // name: "The Ridge",
  // company: "SUTERA",
  // street1: "Unit 3 Interlink Way E",
  // street2: "Bardon Hill",
  // state: "GB",
  // city: "Coalville",
  // zip: "LE67 1LG",
  // country: "GB",
  // phone: "3176983299",
});

// Recreate the shipment
const shipment = new api.Shipment({
  to_address: data.to_address,
  // to_address: toAddress,
  // to_address: { id: "adr_9f04c7d34e2d11ed8e82ac1f6bc72124" },
  from_address: data.from_address,
  // from_address: fromAddress,
  // from_address: { id: "adr_ceb6b3ae7fc711ed8d2fac1f6bc7b362" },
  // buyer_address: buyerAddress,
  // buyer_address: data.buyer_address,
  return_address: data.return_address,
  // return_address: returnAddress,
  parcel: data.parcel,
  // options: data.options,
  customs_info: data.customs_info,
  is_return: data.is_return,
  // is_return: true,
  reference: data.reference,
  // reference: "HiI'mReference",
  // service: "Ground",
  // carrier: "LoomisExpress",
  carrier_accounts: [process.env.FEDEX],
  // tax_identifiers: [
  //   {
  //     entity: "SENDER",
  //     tax_id: "GB123456789",
  //     tax_id_type: "IOSS",
  //     issuing_country: "GB",
  //   },
  //   {
  //     entity: "RECEIVER",
  //     tax_id: "GB123456789",
  //     tax_id_type: "VAT",
  //     issuing_country: "NL",
  //   },
  // ],
  // import_federal_tax_id: "1234",
  // tax_expiration_date: "2022-10-31"
  options: {
    // dry_ice: true,
    // dry_ice_weight: "162.0",
    // currency: "USD",
    // suppress_etd: true,
    // commercial_invoice_signature: "IMAGE_2",
    // commercial_invoice_letterhead: "IMAGE_1",
    // hazmat: "LITHIUM_ION_CONTAINED_IN_EQUIPMENT",
    // postage_label_inline: true,
    // label_date: "2023-08-19T23:59:59+00:00",
    // print_custom: [
    //   {
    //     name: "print_custom_1",
    //     value: "This is print custom 1",
    //     barcode: false,
    //   },
    //   {
    //     name: "RZ",
    //     value: "JQ9044",
    //     barcode: "true",
    //   },
    //   {
    //     value: "R",
    //   },
    // ],
    // duty_payment: {
    //   account: "723960134",
    //   type: "THIRD_PARTY",
    //   country: "US",
    //   postal_code: "85140",
    // },
    // invoice_number: "12345",
    // print_custom_1_barcode: true,
    // print_custom_1_code: "RZ",
    // delivery_confirmation: "ADULT_SIGNATURE",
    // hold_for_pickup: false,
    // handling_instructions: "FRAGILE",
    // special_rates_eligibility: "HERMES.NEXTDAY",
    // special_rates_eligibility: "USPS.MEDIAMAIL",
    // label_format: "PDF",
    // label_size: "4x6",
    // import_control: "PRINT",
    // import_control_description: "DESCRIPTION_HERE",
    // label_date: "2023-05-05 10:30 AM",
    // commercial_invoice_format: "PNG",
    // suppress_etd: true,
    // commercial_invoice_size: "8.5x11",
    // carrier_insurance_amount: "200",
    // delivery_confirmation: "SIGNATURE",
    // commercial_invoice_signature: "IMAGE_2",
    // commercial_invoice_letterhead: "IMAGE_1",
    // hazmat: "AIR_ELIGIBLE_ETHANOL",
    // invoice_number: "RBY200399",
    // print_custom_1: "Print custom 1",
    // handling_instructions: "Call the customer",
    // print_custom_2: "This is print custom 2",
    // print_custom_3: "This is Print custom 3",
    // incoterm: "DDP",
    // invoice_number: "23426797",
    // label_date: "2023-08-08T11:42:20+00:00",
    // delivered_duty_paid: false,
    // third_party_consignee: buyerAddress,
    // importer_address_id: "adr_faf10e56227311ee8c62ac1f6bc539ae",
    // importer_address_id: buyerAddress,
    // customs_broker_address_id: "adr_5d9eb64c226c11ee9ffbac1f6bc539aa",
    // freight_charge: "10.99",
    // bill_third_party_account: 7308941,
    // delivery_max_datetime: "2023-04-21T17:14:01Z",
    // dropoff_max_datetime: "2022-02-17T08:22:10Z",
    // pickup_max_datetime: "2022-02-17T08:22:10Z",
    // pickup_min_datetime: "2022-02-17T08:22:10Z",
  },
});

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

// shipment.save().then(console.log).catch(console.log);

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
// api.Shipment.retrieve("shp_b9e1b29585a9476ea355bb5d92799186")
//   .then((s) => {
//     s.buy("rate_012dc720337049c5ae44807bc702bf32")
//       .then(console.log)
//       .catch((error) => console.log(JSON.stringify(error, null, 2)));
//   })
//   .catch((error) => console.log(JSON.stringify(error, null, 2)));
