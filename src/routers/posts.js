//const { request } = require("express");
const express = require("express");

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
    const postFound = await useCasesPost.getById(idPost);

    response.json({
      success: true,
      message: "Post found",
      data: {
        post: postFound,
      },
    });
    if (!postFound) throw new Error("Post not found");
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Post not found",
      error: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const dataPost = request.body;
    const newPost = await useCasesPost.createPost(dataPost);

    response.json({
      success: true,
      message: "Post created",
      data: {
        post: newPost,
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
    const postUpdate = await useCasesPost.patchById(idPost, dataToUpdate, {
      new: true,
    });

    response.json({
      success: true,
      message: "Post",
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
    const postDelete = await useCasesPost.deleteById(idPost);

    response.json({
      success: true,
      message: "Post deleted",
      data: {
        post: postDelete,
      },
    });
    if (!postFound) throw new Error("Post not found");
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
