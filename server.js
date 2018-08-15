var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.listen(3000, function (err) {
    if (err) {
        throw err;
    }
    console.log("server is running");
});

app.get('/', function (req, res) {
    var message = "welcome";
    res.json(message);
});


app.get('/about', function (req, res) {
    res.json("welcome to about page");
});