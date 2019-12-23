const mongoose = require("mongoose");


/* Creating a Database Schema....schema should be the same format as req.body */
const supervisordbregisterSchema = new mongoose.Schema({

  babyname: String,
  babyage: String,
  childinformation: String,
  club: String,
  sitter: String,
  
});


module.exports = mongoose.model("supervisordb", parentdbregisterSchema);
