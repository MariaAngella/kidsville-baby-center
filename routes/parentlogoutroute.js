const express = require("express");
const router = express.Router();
const Register = require("../models/parentmodel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("parentdashboard");
});

router.post("/", async (req, res) => {
     res.render("parentlogin");
});

module.exports = router;
