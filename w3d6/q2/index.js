const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
    res.render('form');
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
    res.render('result', { name: name, age: age });
});

app.listen(3000);