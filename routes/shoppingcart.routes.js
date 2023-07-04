const { Router } = require("express");
const router = new Router();
const mongoose = require("mongoose");
const ShoppingCart = require("../models/ShoppingCart.model");
const Product = require("../models/Product.model");

/* GET home page */
router.get("/shoppingcart", (req, res, next) => {
  res.render("shop/shopping-cart");
});

// export
module.exports = router;
