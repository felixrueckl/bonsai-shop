// setup
const { Router } = require("express");
const router = new Router();
const mongoose = require("mongoose");

const Product = require("../models/Product.model");
const ShoppingCart = require("../models/ShoppingCart.model");
const User = require("../models/User.model");

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

router.post("/purchases", (req, res) => {
  const { shippingAddress, album } = req.body;
  Purchase.create({ shippingAddress: shippingAddress, album: album._id })
    .then((createdPurchase) =>
      res.render("/shopping-cart", { data: createdPurchase })
    )
    .catch((error) => console.log(error));
});

router.post("/shop/:productId/submit", (req, res, next) => {
  const { productId } = req.params;
  // ShoppingCart.post("$push", {req.params});
  console.log("productId", req.params);
  Product.findById(productId).then((product) => {
    console.log("product:", product);
    console.log("Current User", req.session.currentUser);
    console.log("userId: ", req.session.currentUser);
    const { _id } = req.session.currentUser;
    console.log("Userid", _id);
    // User.findById({ products: product._id }).then((addedProduct) => {
    //   console.log("Added product:", addedProduct);
    //   const userId =
    // });
  });
});

// export
module.exports = router;
