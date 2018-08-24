var express = require('express');
var http = require('http');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports
var server = http.createServer(app).listen(3000, function () {
    console.log('Example app listening on port 3000!');
});