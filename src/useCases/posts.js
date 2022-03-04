const Post = require("../models/posts");

function getAllPost() {
  return Post.find({});
}
function createPost(dataPost) {
  const { title, tags, content, writer, date } = dataPost;
  return Post.create({ title, tags, content, writer, date });
}
function getPostById(idPost) {
  return Post.findById(idPost);
}
function patchPostById(idPost, dataToUpdate) {
  return Post.findByIdAndUpdate(idPost, dataToUpdate, { new: true });
}
function deletePostById(idPost) {
  return Post.findById(idPost);
}

module.exports = {
  getAllPost,
  createPost,
  getPostById,
  patchPostById,
  deletePostById,
};
