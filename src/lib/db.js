const mongoose = require("mongoose");

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect() {
  return mongoose.connect(URL); // regresa una promesa
}

module.exports = connect;
