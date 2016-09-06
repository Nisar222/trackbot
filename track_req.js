var https = require("https");
var options = {
    hostname: "api.goshippo.com",
    port: 443,
    path: "/v1/tracks/",
    body: {
    "carrier": "usps",
    "tracking_number": "9102969010383081813033"},
    method: "GET"
};

var req = https.request(options, function(res) {
    var responseStr = "";
    res.setEncoding("UTF-8");
    console.log(res.push("chunk"))
    console.log("Hello")
});

/*
var express = require('express');
var app = express();

app.get('https://api.goshippo.com/v1/tracks/', function (req, res) {
  res.send('{"tracking_number":"9400110898680009697924","carrier": "usps"}');
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}
console.log(res);
*/


