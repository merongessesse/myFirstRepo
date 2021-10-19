const express = require('express');
const path = require('path');
const session = require('express-session'); //

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(session({
    secret: 'someBigSecret',
    resave: true,
    saveUninitialized: true
})); //

app.get('/', function(req, res, next) {
    let rdoc = '<!DOCTYPE html><html lang="en">' +
        '<head><title>Q3</title>';

    let date = new Date();

    let h = date.getHours();

    if (h <= 6 && h >= 18) {
        rdoc += '<link href="/css/night.css" rel="stylesheet"';
    } else {
        rdoc += '<link href="/css/day.css" rel="stylesheet"';
    }

    rdoc += '<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>' +
        '<body><form action="/result" method="POST"><label>Name</label><input type="text" name="name"/><form><label>Age</label><input type="number" name="age"/><input type="submit" value="Submit Query"></form></body></html>';

    res.send(rdoc);
});

app.post('/result', function(req, res, next) {
    req.session.name = req.body.name;
    req.session.age = req.body.age;

    res.redirect(303, `/output`);
});

app.get('/output', function(req, res, next) {
    res.send(`Welcome ${req.session.name}, with age of ${req.session.age}`);
});

app.listen(3000);