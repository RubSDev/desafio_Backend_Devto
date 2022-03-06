const { default: mongoose } = require("mongoose");
const Post = require("../models/posts");

function getAllPost() {
  return Post.find({});
}
function createPost(dataPost) {
  const { title, tags, content } = dataPost;
  return Post.create({ title, tags, content });
}
function getPostById(idPost) {
  return Post.findById(idPost);
}
function patchPostById(idPost, dataToUpdate) {
  return Post.findByIdAndUpdate(idPost, dataToUpdate, { new: true });
}
function deletePostById(idPost) {
  return Post.findByIdAndDelete(idPost);
}

module.exports = {
  getAllPost,
  createPost,
  getPostById,
  patchPostById,
  deletePostById,
};
