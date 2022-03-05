const mongoose = require("mongoose");

//const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

/*const DB_USER = "desafioBackend";
const DB_PASSWORD = "jesrobrub";
const DB_HOST = "cluster0.kg3lw.mongodb.net";
const DB_NAME = "devto";*/

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect() {
  return mongoose.connect(URL); // regresa una promesa
}

module.exports = connect;
