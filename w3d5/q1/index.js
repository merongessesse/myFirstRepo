const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    let name = req.query.name;
    let age = req.query.age;

    if (!name) {
        name = 'person';
    }
    if (!age) {
        age = 'age';
    }

    res.send(`Welcome ${name}, with age of ${age}`);
});

app.listen(3000);