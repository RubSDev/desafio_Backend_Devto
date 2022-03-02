const Post = require("../models/posts");

function getAllPost() {
  return Post.find({});
}

module.exports = { getAllPost };
