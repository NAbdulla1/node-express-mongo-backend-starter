const express = require("express");

const logger = require("./logger");

app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json('hello world!');
});

app.listen(3000, () => {
  logger.info(`server is listening on 3000`);
});