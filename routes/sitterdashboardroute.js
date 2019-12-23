const express = require("express");
const router = express.Router();
const Register = require("../models/parentdbmodel");

const mongoose = require("mongoose");

/* router.get("/:id", async (req, res) => {
  let mongo_id = req.params.id;
  Register.findById(mongo_id).then(
    item => {
      if (item) res.render("sitterdashboard", { parent: item });
      res.render("404");
    }
  );
}); */



router.get("/", async (req, res) => {
  try {
    const items = await Register.find();
    console.log(items);
    res.render("sitterdashboard", { users: items });
  } catch (err) {
    //.catch promise and used because nodejs asyncronously waits
    res.status(500).send("unable to save to database");
  }
});



module.exports = router;
