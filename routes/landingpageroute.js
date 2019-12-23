const express = require("express");
const router = express.Router();


const mongoose = require("mongoose");

/* Routes */
//Get reads the registerform.pug and displays it on the path

// const Informer = mongoose.model("Register", registerSchema);

router.get("/", async (req, res) => {
 
    res.render("landingpage");
  
});


module.exports = router;
