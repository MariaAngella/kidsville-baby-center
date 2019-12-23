const express = require("express");
const router = express.Router();
const Register = require("../models/supervisormodel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("supervisorlogin");
});

/* router.post("/", async (req, res) => { 
     res.render("supervisorlogin");
}); */

module.exports = router;
