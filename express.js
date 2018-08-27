var express = require('express');
var http = require('http');
var app = express();

var webrtc = require('./routes/webrtc');

app.use('/', webrtc);
app.use('/webrtc', webrtc);


var server = http.createServer(app).listen(3000, function () {
    console.log('Example app listening on port 3000!');
});