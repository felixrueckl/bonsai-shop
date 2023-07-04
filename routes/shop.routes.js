// setup
const { Router } = require("express");
const router = new Router();
const mongoose = require("mongoose");

const Product = require("../models/Product.model");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/home", (req, res, next) => {
  res.render("index");
});

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

router.post("/shop/:productId/submit", (req, res, next) => {
  const { productId } = req.params;
  // ShoppingCart.post("$push", {req.params});
  console.log("productId", req.params);
});

// export
module.exports = router;
