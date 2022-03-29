const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 150,
      trim: true,
    },
    image: {
      type: String,
      required: false,
      trim: true,
    },
    tags: {
      type: String,
      required: false,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
    writer: { type: mongoose.Schema.Types.ObjectId, ref: "writers" },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("posts", postSchema);

module.exports = model;
