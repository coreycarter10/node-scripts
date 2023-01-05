require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

const webhook = new api.Webhook({
  url: "https://webhook.site/33b6c28d-a9fc-4443-aad9-9afde246946f",
});

webhook.save().then(console.log);
