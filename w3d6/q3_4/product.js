const express = require('express');
const router = express.Router();
let product = {
    id: 1,
    name: "product",
    description: "description of the p",
    price: 12.00
};

router.get('/', (req, res, next) => {
    res.render('product', { product });
});

module.exports = router;