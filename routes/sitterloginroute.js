const express = require("express");
const router = express.Router();
const Register = require("../models/sittermodel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("sitterlogin");
});

router.post("/", async (req, res) => {
  try {
    const user = await Register.authenticate(
      req.body.sitteremailaddress,
      req.body.sitterpassword
    );
    req.session.user = user;
    console.log(user);
    // res.redirect("/sitterregistration/search"); 
    res.redirect("/sitterdashboard")
  } catch {
    res.send("Login Failed");
  }
});

module.exports = router;
