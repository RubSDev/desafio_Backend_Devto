const Writer = require("../models/writers");

function getAllWriters() {
  return Writer.find({});
}
function createWriter(dataWriter) {
  const { name, lastName, nationality, dateCreated, biography } = dataWriter;
  return Writer.create({ name, lastName, nationality, dateCreated, biography });
}
function getById(idWriter) {
  return Writer.findById(idWriter);
}
function patchById(idWriter, dataToUpdate) {
  return Writer.findByIdAndUpdate(idWriter, dataToUpdate, { new: true });
}
function deleteById(idWriter) {
  return Writer.findById(idWriter);
}

module.exports = {
  getAllWriters,
  createWriter,
  getById,
  patchById,
  deleteById,
};
