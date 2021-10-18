const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'view'));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', function(req, res, next) {
    const date = new Date();

    let isDay = true;

    if (date.getHours() <= 6 && date.getHours() >= 18) {
        isDay = false;
    }

    res.render('index', {
        time: date.toString(),
        isDay: isDay
    })
});

app.listen(3000);