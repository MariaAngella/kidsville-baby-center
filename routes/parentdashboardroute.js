const express = require("express");
const router = express.Router();
const Register = require("../models/parentdbmodel");



router.get("/", (req, res) => {
  
    res.render("parentdashboard");
    res.sendFile(__dirname + "/parentdashboard");
 
});


router.post("/", async (req, res) => {
  const register = new Register(req.body);
  console.log(req.body)
  try {
    await register.save();
    console.log("Item has been saved");
    const items = await Register.find();
    res.render("parentfb", { users: items });
  } catch (err) {
    res.status(500).send("unable to save to database");
  }
});

module.exports = router;
