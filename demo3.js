var express = require('express');
var app = express();

//
// app.use(function (err, req, res, next) {
//     res.send('ss');
//     console.log("we have an error: " + err);
// });

// a middleware bind to a path
app.get('/', function (req, res, next) {
    res.send('hello');
    next('my-error');
}, function (req, res) {
    console.log('test');
});

app.get('/', function (req, res) {
    console.log('finish');
});

app.listen(3000, function () {
    console.log('listen 3000 port');
});