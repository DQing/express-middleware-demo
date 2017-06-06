const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    res.send('Hello, world!');
});

app.get('/set-cookies', function (req, res) {
    res.cookie('token', 'mike:123456').end();
});

app.get('/cookies', function (req, res) {
    res.send(req.cookies);
});

app.listen(3000, function () {
    console.log('Server listening at http://localhost:3000');
});