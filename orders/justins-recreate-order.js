require("dotenv").config();
const Easypost = require("@easypost/api");

const apiKey = process.env.prodKey; // prodKey
// const apiKey = process.env.testKey; // testKey

// const apiKey = process.env.personalTestKey;
// const apiKey = process.env.personalProdKey;

// const apiKey = process.env.childUserTestKey;
// const apiKey = process.env.childUserProdKey;

/* define api key */
const api = new Easypost(apiKey);

// bring in the data from the misc.json file
const data = require("../misc.json");

// Delete order address data
delete data.to_address.id;
delete data.to_address.mode;
delete data.to_address.verifications;
delete data.to_address.updated_at;
delete data.to_address.created_at;
delete data.to_address.carrier_facility;
delete data.to_address.state_tax_id;
delete data.to_address.federal_tax_id;
delete data.from_address.id;
delete data.from_address.mode;
delete data.from_address.verifications;
delete data.from_address.created_at;
delete data.from_address.updated_at;
delete data.from_address.state_tax_id;
delete data.from_address.federal_tax_id;

// Delete all shipment id's, usps_zone's, tracker's, and parcel's
for (let i = 0; i < data.shipments.length; i++) {
  delete data.shipments[i].id;
  delete data.shipments[i].state_tax_id;
  delete data.shipments[i].federal_tax_id;
  delete data.shipments[i].usps_zone;
  delete data.shipments[i].order_id;
  delete data.shipments[i].tracker;
  delete data.shipments[i].to_address.id;
  delete data.shipments[i].from_address.id;
  delete data.shipments[i].buyer_address.id;
  delete data.shipments[i].return_address.id;
  delete data.shipments[i].parcel.id;
  delete data.shipments[i].parcel.created_at;
  delete data.shipments[i].parcel.mode;
  delete data.shipments[i].parcel.updated_at;
  if (data.shipments[i].parcel.predefined_package === null) {
    delete data.shipments[i].parcel.predefined_package;
  }

  // Delete all shipments customs data
  if (data.shipments[i].customs_info) {
    delete data.shipments[i].customs_info.id;
    delete data.shipments[i].customs_info.mode;
    delete data.shipments[i].customs_info.created_at;
    delete data.shipments[i].customs_info.updated_at;
    for (
      let ii = 0;
      ii < data.shipments[i].customs_info.customs_items.length;
      ii++
    ) {
      delete data.shipments[i].customs_info.customs_items[ii].id;
      delete data.shipments[i].customs_info.customs_items[ii].mode;
      delete data.shipments[i].customs_info.customs_items[ii].created_at;
      delete data.shipments[i].customs_info.customs_items[ii].updated_at;
      delete data.shipments[i].customs_info.customs_items[ii].currency;

      // Convert shipment customs_items values from string to numbers (requires Node lib v5+)
      if (data.shipments[i].customs_info.customs_items[ii].value) {
        data.shipments[i].customs_info.customs_items[ii].value = Number(
          data.shipments[i].customs_info.customs_items[ii].value
        );
      }
    }
  }
}

// data.to_address.federal_tax_id = 'IE123456789000'
// data.from_address.federal_tax_id = 'GB123456789000'

// const customs_info = {
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

// Recreate the order
const order = new api.Order({
  to_address: data.to_address,
  from_address: data.from_address,
  shipments: data.shipments,
  options: data.options,
  // options: {
  //   // commercial_invoice_format: "PNG",
  //   // suppress_etd: true,
  //   importer_address_id: "adr_faf10e56227311ee8c62ac1f6bc539ae",
  // },
  customs_info: data.customs_info,
  // customs_info: customs_info,
  carrier_accounts: [{ id: process.env.FEDEX }],
});

// order
//   .save()
//   .then(console.log)
//   .catch((error) => {
//     console.log(JSON.stringify(error));
//   });

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
