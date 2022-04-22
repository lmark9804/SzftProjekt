const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    felhasznalonev: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    jelszo: {
        type: String,
        required: true,
    },
    
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;