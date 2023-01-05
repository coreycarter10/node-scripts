require("dotenv").config();

const Easypost = require("@easypost/api");

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;

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

// Recreate the shipment
const shipment = new api.Shipment({
  to_address: data.to_address,
  // to_address: { id: "adr_9f04c7d34e2d11ed8e82ac1f6bc72124" },
  from_address: data.from_address,
  // from_address: { id: "adr_ceb6b3ae7fc711ed8d2fac1f6bc7b362" },
  // buyer_address: buyerAddress,
  parcel: data.parcel,
  // options: data.options,
  customs_info: data.customs_info,
  is_return: data.is_return,
  reference: data.reference,
  carrier_accounts: [process.env.USPS],
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
    // print_custom: [
    //   {
    //     name: "RMA",
    //     value: "JSXSKL",
    //     barcode: "true",
    //   },
    //   {
    //     value: "R",
    //   },
    // ],
    // print_custom_1_barcode: true,
    // print_custom_1_code: "RMA",
    // delivery_confirmation: "SIGNATURE",
    // special_rates_eligibility: "HERMES.NEXTDAY",
    // label_format: "PDF",
    // label_size: "4x6",
    // label_date: "2023-01-4 10:30 AM",
    // commercial_invoice_format: "PNG",
    // commercial_invoice_size: "4x6",
    // carrier_insurance_amount: "29.98",
    // commercial_invoice_signature: "IMAGE_2",
    // commercial_invoice_letterhead: "IMAGE_1",
    // hazmat: "SECONDARY_CONTAINED",
    // invoice_number: "RBY200399",
    // print_custom_1: "JSXSKL",
    // print_custom_2: "R",
    incoterm: "DAP",
    // delivered_duty_paid: true,
    // third_party_consignee: buyerAddress,
    // importer_address_id: "adr_66e5966a7fcc11ed9401ac1f6bc72124",
    // importer_address_id: buyerAddress,
    // freight_charge: "10.99",
    // commercial_invoice_format: "PNG",
    // suppress_etd: true,
    // bill_third_party_account: 7308941,
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
// api.Shipment.retrieve("shp_bebc401fb3e2418fbe371ba509d895b8")
//   .then((s) => {
//     s.buy("rate_9d338cfd72754e12b96dff3d4bedc0b4")
//       .then(console.log)
//       .catch((error) => console.log(JSON.stringify(error, null, 2)));
//   })
//   .catch((error) => console.log(JSON.stringify(error, null, 2)));
