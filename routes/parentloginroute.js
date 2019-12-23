const express = require("express");
const router = express.Router();
const Register = require("../models/parentmodel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("parentlogin");
});

router.post("/", async (req, res) => {
  try {
    const user = await Register.authenticate(
      req.body.parentusername,
      req.body.parentpassword
    );
    req.session.user = user;
    console.log(user);
    res.redirect("/parentregistration/search"); 
  } catch {
    res.send("Login Failed");
  }
});

module.exports = router;
