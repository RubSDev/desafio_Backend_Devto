const Writer = require("../models/writers");

function getAllWriters() {
  return Writer.find({});
}

module.exports = { getAllWriters };
