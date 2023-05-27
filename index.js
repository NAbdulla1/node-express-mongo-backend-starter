require("dotenv").config();

const express = require("express");
const logger = require("./src/services/loggerService");
const connectMongoose = require("./src/db/connectMongoose");
const router = require("./src/routes");

app = express();

connectMongoose();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  logger.info(`server is listening on 3000`);
});
