const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

/* Creating a Database Schema....schema should be the same format as req.body */
const officialregisterSchema = new mongoose.Schema({
  officialfirstname: {
    type: String,
    required: "Please Enter first name"
  },
  officiallastname: {
    type: String,
    required: "Please Enter last name"
  },

  officialusername: {
    type: String,
    unique: true,
    required: "Please Enter User name"
  },
  officialpassword: {
    type: String,
    required: "Please Enter password"
  },
  officialemailaddress: {
    type: String,
    unique: true,
    required: "Please Enter emailaddress"
  },

  officialphysicaladdress: String,
  officialgender: String
});

officialregisterSchema.pre("save", function(next) {
  this.officialpassword = bcryptjs.hashSync(this.officialpassword, 10);
  next();
});

officialregisterSchema.statics.authenticate = async function(
  officialemailaddress,
  officialpassword
) {
  const user = await this.findOne({
    officialemailaddress: officialemailaddress
  });
  if (!user) {
    throw new Error("User not found.");
  }
  const match = await bcryptjs.compare(officialpassword, user.officialpassword);
  if (match) {
    return user;
  }
};

//create a model
module.exports = mongoose.model("Official", officialregisterSchema);
