const express = require("express");
const router = express.Router();
const Register = require("../models/sittermodel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("sitterdashboard");
});

router.post("/", async (req, res) => {
     res.render("sitterlogin");
});

module.exports = router;
