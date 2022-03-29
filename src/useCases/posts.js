const { default: mongoose } = require("mongoose");
const Post = require("../models/posts");

function getAllPost() {
  return Post.find({}).populate("writer", { name: 1, lastName: 1 });
}
function createPost(dataPost, userId) {
  const { title, tags, content } = dataPost;
  return Post.create({ title, tags, content, writer: userId });
}
function getPostById(idPost) {
  return Post.findById(idPost).populate("writer", { name: 1, lastName: 1 });
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
