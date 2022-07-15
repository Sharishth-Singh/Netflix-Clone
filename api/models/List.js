const mongoose = require('mongoose');

const ListScheme = new mongoose.Schema(
   {
      title: { type: String, require: true, unique: true},
      type: { type: String},
      genre: { type: String},
      content: {type:Array},
   },
   { timestamps: true }
);

module.exports = mongoose.model("List",ListSchema);