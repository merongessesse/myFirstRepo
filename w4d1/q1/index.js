const express = require('express');
const cookie = require('cookie-parser');
const path = require('path');

const app = express();

app.use(cookie());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.locals = {cookies: req.cookies}
    res.render('index');
});

app.post('/', (req, res) => {
    res.cookie(req.body.key, req.body.value);
    res.redirect('/');
})

app.listen(3000);