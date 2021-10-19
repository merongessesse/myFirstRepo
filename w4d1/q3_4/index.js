const Product = require("./product_model");
const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({extended: false}));
app.use(session({secret: "kdfjso90384dhflsd8je089f203fkd"}));

const products = [
    new Product("milk", 2000, "500ml white milk Nido", 1),
    new Product("bread", 3000, "richly buttered break", 2),
    new Product("sugar", 2500, "pack of sugar 50 cubes", 3)
]

const cart = [
    {
        product: products[0],
        quantity: 5
    },
    {
        product: products[1],
        quantity: 2
    }
]

app.get("/products", (req, res) => {
    console.log(req.url.split('/').pop());
    res.locals = {products: products};
    res.render('products');
})

app.get("/products/:productName", (req, res) => {
    res.locals = {
        product: products.find(prod => prod.getName() === req.params.productName)
    };
    res.render('product');
})

app.post('/post', (req, res) => {
    console.log("##########");
})

app.post("/addToCart", (req, res) => {
    if(!req.session.cart){ req.session.cart = {}; }
    const prod = products.find(prod => prod.getName() === req.body.name);
    const price = parseInt(req.session.cart[req.body.name])
    req.session.cart[req.body.name] =  price ? price + prod.getPrice() : prod.getPrice();
    res.redirect('/cart');
})

app.get("/cart", (req, res) =>{
    res.locals = {cart: req.session.cart};
    res.render('shoppingCart');
})

app.listen(3000);