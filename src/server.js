const express = require("express");
const cors = require("cors")
//Fata el router
const postRouter = require("./routers/posts");
const writerRouter = require("./routers/writers");

const server = express();

//middlewares
server.use(cors())
server.use(express.json());
//rourters
server.use("/posts", postRouter);
server.use("/writers", writerRouter);

module.exports = server;
