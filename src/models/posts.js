const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150,
    trim: true,
  },
  tags: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 20,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  //writer: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
  writer: { type: Schema.Types.ObjectId, ref: "writers" },
  //revisar como se agrega la fecha
  date: {
    type: Date,
    required: true,
  },
});

const model = mongoose.model("posts", postSchema);

module.exports = model;
