const { request } = require("express");
const express = require("express");
const router = express.Router();
const useCasesWriter = require("../useCases/writers");

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
router.get("/:id", async (request, response) => {
  try {
    const idWriter = request.params.id;
    const writerFound = await useCasesWriter.getById(idWriter);

    response.json({
      success: true,
      message: "Writer found",
      data: {
        writer: writerFound,
      },
    });
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
    const newWriter = await useCasesWriter.createWriter(dataWriter);

    response.json({
      success: true,
      message: "Writer created",
      data: {
        writer: newWriter,
      },
    });
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
    const writerDelete = await useCasesWriter.deleteById(idWriter);

    response.json({
      success: true,
      message: "Writer deleted",
      data: {
        writer: writerDelete,
      },
    });
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

module.exports = router;
