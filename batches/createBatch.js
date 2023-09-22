require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

///////////////////////////ADD SHIPMENTS TO A BATCH////////////////////////////////////////////////////////////////

batch = new api.Batch({
  shipments: [
    { id: "shp_37650a9de6e04004977ed480a616c7c7" },
    // { id: "shp_009f2040c40144b0a86864fd4631a778" },
  ],
  // shipments: ["shp_a50d1a8eacb34391930c2a89cf1a9fde"],
});

batch.save().then(console.log).catch(console.log);

////////////////////ADD SHIPMENTS TO BATCH USING AN ARRAY OF OBJECTS/////////////////////////////////////////////////

// batch = new api.Batch({
//   shipments: [{ id: "shp_a50d1a8eacb34391930c2a89cf1a9fde" }],
// });

// batch.save().then(console.log).catch(console.log);

///////////////////RETRIEVE A BATCH AND SCANFORM/////////////////////////////////////////////////////////////////////////////////

// api.Batch.retrieve('batch_d40a6e5e2a3f457494fbca09e2d67be4').then(b => {
//      b.createScanForm().then(console.log);
//    });
