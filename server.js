var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./models/user');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

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

// app.get('/', function (req, res) {
//     var message = "welcome";
//     res.json(message);
// });


// app.get('/about', function (req, res) {
//     res.json("welcome to about page");
// });

app.post('/create-user', function (req, res, next) {

    var user = new User();
    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json('succefully created new user');
    });
});