/*
* next()函数的路由跳转
* */
var express = require('express');
var app = express();
app.use(function (req, res, next) {
    console.log('app use1');
    next();
});

app.get('/:name', function (req, res, next) {
    res.send('hello' + req.params.name);
    next('route');
}, function (req, res) {
    console.log('middle');
});

app.get('/:name', function (req, res) {
    console.log('my name is douqing');
});

app.use(function (req, res) {
    console.log('app use2');
});

app.listen(3000, function () {
    console.log('listen 3000 port');
});