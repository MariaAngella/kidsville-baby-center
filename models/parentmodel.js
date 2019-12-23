const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

/* Creating a Database Schema....schema should be the same format as req.body */
const parentregisterSchema = new mongoose.Schema({
  parentfirstname: {
    type: String,
    required: "Please Enter first name"
  },
  parentlastname: {
    type: String,
    required: "Please Enter last name"
  },

  parentusername: {
    type: String,
    unique: true,
    required: "Please Enter user name"
  },
  parentpassword: {
    type: String,
    required: "Please Enter your password"
  },
  parentemailaddress: String,
  parentphysicaladdress: String,
  parentgender: String,
  
});


parentregisterSchema.pre("save", function(next) {
  this.parentpassword = bcryptjs.hashSync(this.parentpassword, 10);
  next();
});

parentregisterSchema.statics.authenticate = async function(
  parentusername,
  parentpassword
) {
  const user = await this.findOne({ parentusername: parentusername });
  if (!user) {
    throw new Error("User not found.");
  }
  const match = await bcryptjs.compare(parentpassword, user.parentpassword);
  if (match) {
    return user;
  }
};

//create a model
module.exports = mongoose.model("Parent", parentregisterSchema);
