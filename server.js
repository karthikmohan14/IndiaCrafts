var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();

app.use(morgan('dev'));

app.listen(3000, function (err) {
    if (err) {
        throw err;
    }
    console.log("server is running");
});

mongoose.connect('mongodb://root:!nd1aCraft5@ds121312.mlab.com:21312/indiacrafts', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to database");
    }
});

app.get('/', function (req, res) {
    var message = "welcome";
    res.json(message);
});


app.get('/about', function (req, res) {
    res.json("welcome to about page");
});