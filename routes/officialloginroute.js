const express = require("express");
const router = express.Router();
const Register = require("../models/officialmodel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("officiallogin");
});

router.post("/", async (req, res) => {
  try {
    const user = await Register.authenticate(
      req.body.officialemailaddress,
      req.body.officialpassword
    );
    req.session.user = user;
    console.log(user);
    // res.redirect("/officialregistration/search");
    res.redirect("/officialdashboard")
  } catch {
    res.send("Login Failed");
  }
});

module.exports = router;
