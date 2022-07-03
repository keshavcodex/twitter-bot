require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(data);
});

app.listen(3000, (res, req) => {
  console.log("app listening on port 3000");
});
var apiKey = process.env.API_KEY;
var apiSecret = process.env.API_KEY_SECRET;
var accessToken = process.env.ACCESS_TOKEN;
var accessSecret = process.env.ACCESS_TOKEN_SECRET;

var Twit = require("twit");
var T = new Twit({
  consumer_key: apiKey,
  consumer_secret: apiSecret,
  access_token: accessToken,
  access_token_secret: accessSecret,
});
console.log(T);
var params = {
  q: "rainbow",
  count: 2,
};
T.get("search/tweets", params, gotData);

function gotData(err, data, response) {
  console.log(data.statuses[0].text);
}
