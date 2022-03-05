const express = require("express");
const useCasesWriter = require("../useCases/writers");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const allWriters = await useCasesWriter.getAllWriters();

    response.json({
      success: true,
      message: "All Writers",
      data: {
        writers: allWriters,
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
router.use(auth);
router.get("/:id", async (request, response) => {
  try {
    const idWriter = request.params.id;
    const token = request.headers;
    if (token) {
      const writerFound = await useCasesWriter.getById(idWriter);

      response.json({
        success: true,
        message: "Writer found",
        data: {
          writer: writerFound,
        },
      });
      return;
    }
    if (!writerFound) throw new Error("Writer not found");
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Writer not found",
      error: error.message,
    });
  }
});
router.post("/", async (request, response) => {
  try {
    const dataWriter = request.body;
    const token = request.headers;
    if (token) {
      const newWriter = await useCasesWriter.createWriter(dataWriter);

      response.json({
        success: true,
        message: "Writer created",
        data: {
          writer: newWriter,
        },
      });
    }
  } catch (error) {
    response.json({
      success: false,
      message: "Error to create new writer",
      error: error.message,
    });
  }
});
router.patch("/:id", async (request, response) => {
  try {
    const idWriter = request.params.id;
    const dataToUpdate = request.body;
    const token = request.headers;
    if (token) {
      const writerUpdate = await useCasesWriter.patchById(
        idWriter,
        dataToUpdate,
        { new: true }
      );

      response.json({
        success: true,
        message: "Writer",
        data: {
          writer: writerUpdate,
        },
      });
      return;
    }
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Writer not update",
      error: error.message,
    });
  }
});
router.delete("/:id", async (request, response) => {
  try {
    const idWriter = request.params.id;
    const token = request.headers;
    if (token) {
      const writerDelete = await useCasesWriter.deleteById(idWriter);

      response.json({
        success: true,
        message: "Writer deleted",
        data: {
          writer: writerDelete,
        },
      });
      return;
    }

    if (!writerFound) throw new Error("Writer not found");
  } catch (error) {
    response.status(404);
    response.json({
      success: false,
      message: "Writer not delete",
      error: error.message,
    });
  }
});
router.post("/signup", async (request, response) => {
  try {
    const writerData = request.body;
    const writerCreated = await useCasesWriter.signUp(writerData);

    response.json({
      success: true,
      message: "Writer created",
      data: {
        writer: writerCreated,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: " could not register",
      error: error.message,
    });
  }
});

router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const token = await useCasesWriter.login(email, password);

    response.json({
      success: true,
      message: " writer logged in",
      data: {
        token,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: " could not register",
      error: error.message,
    });
  }
});
module.exports = router;
