const express = require('express');

const router = express.Router();



router.get('/orange', (req, res, next) => {
    let product = {
        id: 1,
        name: "orange",
        description: "its orange",
        price: 12.00
    };

    res.render('product', { product });
});
router.get('/car', (req, res, next) => {
    let product = {
        id: 2,
        name: "car",
        description: "GMC",
        price: 12.00
    };
    res.render('product', { product });
});

router.get('/drink', (req, res, next) => {
    let product = {
        id: 3,
        name: "cola",
        description: "sugar free",
        price: 12.00
    };

    res.render('product', { product });
});

module.exports = router;