const mongoose = require("mongoose");


/* Creating a Database Schema....schema should be the same format as req.body */
const parentdbregisterSchema = new mongoose.Schema({
  parentphone: String,
  babyname: {
    type: String,
    unique: true,
    required: "Please Enter baby name"
  },
 
  babyage: String,
  childinformation: String,
  club: String,
  sitter: String,
  bill: String,
  hour: String
});


module.exports = mongoose.model("Parentdb", parentdbregisterSchema);
