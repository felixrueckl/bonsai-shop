// setup
const { Router } = require("express");
const router = new Router();
const mongoose = require("mongoose");

const Product = require("../models/Product.model");

/* GET home page */
router.get("/shop", (req, res, next) => {
  Product.find()
    .then((allProducts) => {
      res.render("shop/shop-overview", { products: allProducts });
    })
    .catch((err) => console.log("Error: ", err));
});

router.get("/shop/:productId", (req, res, next) => {
  const { productId } = req.params;

  Product.findById(productId)
    .then((product) => {
      res.render("shop/shop-productpage", product);
    })
    .catch((err) => console.log("Error: ", err));
});

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/home", (req, res, next) => {
  res.render("index");
});

// export
module.exports = router;
