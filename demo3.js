var express = require('express');
var app = express();


// a middleware bind to a path
app.get('/', function (req, res, next) {
    console.log(kk);
});

app.use(function (err, req, res, next) {
    console.error('error  ' + err.stack);
    res.status(500).send('Something broke!');
    next(err);
});
app.use(function (err, req, res, next) {
    console.log('err');
});

app.listen(3000, function () {
    console.log('listen 3000 port');
});