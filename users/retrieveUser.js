require("dotenv").config();

const Easypost = require("@easypost/api");
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

api.User.retrieve("user_71ef0e481d5442f4891b0b5d86a62b01").then(console.log);
//   .catch(console.log);

// api.User.retrieve("user_71ef0e481d5442f4891b0b5d86a62b01").then(
//   (user) => console.log(user)
//   console.log(user.api_keys);
// );
