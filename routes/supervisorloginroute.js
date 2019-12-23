const express = require("express");
const router = express.Router();
const Register = require("../models/supervisormodel");

const mongoose = require("mongoose");






router.get("/", (req, res) => {
  res.render("supervisorlogin");
});




router.post("/", async (req, res) => {
  try {
    const user = await Register.authenticate(
      req.body.supervisoremailaddress,
      req.body.supervisorpassword
    );
    req.session.user = user;
    console.log(user)
    // res.redirect("/supervisorregistration/search"); 
    res.render("parentregistration")
  } catch {
    res.send("Login Failed")
  }
});


module.exports = router;
