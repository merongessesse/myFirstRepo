const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', function(req, res, next) {
    res.send('<form action="/result" method="POST"><label>Name</label><input type="text" name="name"/><form><label>Age</label><input type="number" name="age"/><input type="submit" value="Submit Query"></form>');
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