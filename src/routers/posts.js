//const { request } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middlewares/auth");
const jwt = require("jsonwebtoken");

const router = express.Router();

const useCasesPost = require("../useCases/posts");

router.get("/", async (request, response) => {
  try {
    const allPosts = await useCasesPost.getAllPost();

    response.json({
      success: true,
      message: "All Post",
      data: {
        posts: allPosts,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at get all posts",
      error: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const idPost = request.params.id;
    const postFound = await useCasesPost.getPostById(idPost);
    if (!postFound) throw new Error("Post not found");
    response.json({
      success: true,
      message: "Post found",
      data: {
        post: postFound,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Post not found",
      error: error.message,
    });
  }
});
router.use(auth);
router.post("/", async (request, response) => {
  try {
    const dataPost = request.body;
    const { authorization: token } = request.headers;
    const tokenData = jwt.decode(token);
    const userId = tokenData.id;

    const newPost = await useCasesPost.createPost(dataPost, userId);
    response.json({
      success: true,
      message: "Post created",
      data: {
        post: newPost,
        writer: userId,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      message: "Error to create new post",
      error: error.message,
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const idPost = request.params.id;
    const dataToUpdate = request.body;
    const postUpdate = await useCasesPost.patchPostById(idPost, dataToUpdate, {
      new: true,
    });

    response.json({
      success: true,
      message: "Post update",
      data: {
        post: postUpdate,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Post not update",
      error: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const idPost = request.params.id;
    const postDelete = await useCasesPost.deletePostById(idPost);
    if (!postDelete) throw new Error("Post not found");
    response.json({
      success: true,
      message: "Post deleted",
      data: {
        post: postDelete,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Post not delete",
      error: error.message,
    });
  }
});

module.exports = router;
