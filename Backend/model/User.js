const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    firstName: {
      type: String,
      trim:true,
      required: true,
    },
    lastName: {
      type: String,
      trim:true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim:true,
      required: true,
    },
    password: {
      type: String,
      trim:true,
      required: true,
    },
    confirmPassword: {
      type: String,
      trim:true,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports=mongoose.model("User",userSchema)
