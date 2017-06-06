/*
* next()函数中间件传递
* */

var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log('app use1');
    next();

});
app.get('/', function (req, res, next) {
    res.send('hello');
    next();
}, function (req, res, next) {
    console.log('world');
    next();
});

app.get('/', function (req, res) {
    res.send('second');
    console.log('two');
});

app.use(function (req, res) {
    console.log('app use2');
});
app.listen(3000, function () {
    console.log('listen 3000 port');
});