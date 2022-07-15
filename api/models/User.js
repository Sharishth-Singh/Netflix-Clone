const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
   {
      username: { type: String, require: true, unique: true },
      email: { type: String, require: true, unique: true },
      password: { type: String, require: true },
      profilePic: { type: String, default: "" },
      isAdmin: { type: Boolean, default: false },
   },
   { timestamps: true }
);

module.exports = mongoose.model("User",UserScheme);