// setup
const { Router } = require("express");
const router = new Router();

/* GET home page */
router.get("/shop", (req, res, next) => {
  res.render("shop/shop-overview");
});

// export
module.exports = router;
