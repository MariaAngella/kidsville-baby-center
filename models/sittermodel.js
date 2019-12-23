const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

/* Creating a Database Schema....schema should be the same format as req.body */
const sitterregisterSchema = new mongoose.Schema({
  sitterfirstname: {
    type: String,
    required: "Please Enter first name"
  },

  sitterlastname: {
    type: String,
    required: "Please Enter last name"
  },
  sitterusername: {
    type: String,
    unique: true,
    required: "Please Enter user name"
  },
  sitterpassword: {
    type: String,
    required: "Please Enter password"
  },

  sitteremailaddress: {
    type: String,
    unique: true,
    required: "Please Enter email address"
  },
  sitterphysicaladdress: String,
  sittergender: String
});


sitterregisterSchema.pre("save", function(next) {
  this.sitterpassword = bcryptjs.hashSync(this.sitterpassword, 10);
  next();
});

sitterregisterSchema.statics.authenticate = async function(
  sitteremailaddress,
  sitterpassword
) {
  const user = await this.findOne({ sitteremailaddress: sitteremailaddress });
  if (!user) {
    throw new Error("User not found.");
  }
  const match = await bcryptjs.compare(sitterpassword, user.sitterpassword);
  if (match) {
    return user;
  }
};

//create a model
module.exports = mongoose.model("Sitter", sitterregisterSchema);
