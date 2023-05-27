require("dotenv").config();
const express = require("express");

const logger = require("./logger");
const connectMongoose = require("./db/connectMongoose");

app = express();
app.use(express.json());

connectMongoose();

app.get("/", (req, res) => {
  res.status(200).json('hello world!');
});

app.listen(3000, () => {
  logger.info(`server is listening on 3000`);
});
