const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded());
app.use('/css', express.static(path.join(__dirname, 'css')));

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
    let name = req.body.name;
    let age = req.body.age;

    if (!name) {
        name = 'person';
    }
    if (!age) {
        age = 'age';
    }

    res.send(`Welcome ${name}, with age of ${age}`);
});

app.listen(3000);