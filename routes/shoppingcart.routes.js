const { Router } = require("express");
const router = new Router();
const mongoose = require("mongoose");

/* GET home page */
router.get("/shoppingcart", (req, res, next) => {
  res.render("shop/shopping-cart");
});

// export
module.exports = router;
