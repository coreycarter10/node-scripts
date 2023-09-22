require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const user = new api.User({
  name: "Real child ",
});

user.save().then((u) => console.log(u.id, u.apiKey));
