// setup
const { Router } = require("express");
const router = new Router();
const mongoose = require("mongoose");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

const {
  isLoggedIn,
  isLoggedOut,
  redirectToProfile,
} = require("../middleware/route-guard.js");

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

/* GET product page */
router.get("/shop/:productId", (req, res, next) => {
  const { productId } = req.params;

  Product.findById(productId)
    .then((product) => {
      res.render("shop/shop-productpage", product);
    })
    .catch((err) => console.log("Error: ", err));
});

/* Adding the ProductID to the Shopping Cart of the LoggedIn User */
router.post("/shop/:productId/submit", isLoggedOut, (req, res, next) => {
  const { productId } = req.params;
  //console.log("productId", req.params);
  Product.findById(productId).then(() => {
    const { _id } = req.session.currentUser;

    User.findByIdAndUpdate(_id, { $push: { shoppingCart: productId } })
      .then((cart) => {
        console.log("Updated User:", cart);
      })
      .catch((error) => console.log(error));
  });
});

//  res.render("shop/shop-overview", { products: allProducts });
/* GET shoppingcart page */
router.get("/shoppingcart", isLoggedOut, (req, res, next) => {
  const { _id } = req.session.currentUser;
  // User.find(_id).then((user) => console.log("this is the active user", user));

  res.render("shop/shopping-cart", {});
});

// export
module.exports = router;
