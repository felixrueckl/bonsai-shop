const { Router } = require("express");
const router = new Router();
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/faq", (req, res, next) => res.render("/....."));
