const express = require('express');

const router = express.Router();

let products = [{
    id: 1,
    name: "product",
    description: "description of the p",
    price: 12.00
}, {
    id: 2,
    name: "product2",
    description: "description of the p2",
    price: 12.00
}];

router.get('/shoppingcart', (req, res, next) => {

    res.render('shoppingcart', { products });

});

router.post('/addToCart', (req, res, next) => {
    res.redirect('/shoppingcart');
});


module.exports = router;