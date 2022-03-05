const mongoose = require("mongoose");

const DB_USER = "desafioBackend";
const DB_PASSWORD = "jesrobrub";
const DB_HOST = "cluster0.kg3lw.mongodb.net";
const DB_NAME = "devto";
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect() {
  return mongoose.connect(URL); // regresa una promesa
}

module.exports = connect;
