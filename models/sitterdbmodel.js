const mongoose = require("mongoose");


/* Creating a Database Schema....schema should be the same format as req.body */
const sitterdbregisterSchema = new mongoose.Schema({

  childinformation: String,
  club: String,

});


module.exports = mongoose.model("Parentdb", sitterdbregisterSchema);
