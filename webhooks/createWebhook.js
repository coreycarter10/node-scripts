require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const webhook = new api.Webhook({
    url: 'https://webhook.site/83c66b34-422b-41af-a8ad-efcdc70d4c2c'
});

webhook.save().then(console.log);
