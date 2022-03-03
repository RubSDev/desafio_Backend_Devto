const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const allWriters = await useCasesPost.getAllWriters();

    response.json({
      success: true,
      message: "All Writers",
      data: {
        koders: allWriters,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at get all writers",
      error: error.message,
    });
  }
});

module.exports = router;
