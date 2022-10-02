var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images", express.static("./images"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/main.html');
});

app.get('/contactus', function (req, res) {
    res.sendFile(__dirname + '/views/contactus.html');
});

app.get('/aboutus', function (req, res) {
    res.sendFile(__dirname + '/views/aboutus.html');
});

app.get('/eventgallery', function (req, res) {
    res.sendFile(__dirname + '/views/eventgallery.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastNam
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running http://localhost:5000');
});



































































