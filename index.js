require("dotenv").config();

const express = require("express");
const logger = require("./src/services/loggerService");
const connectMongoose = require("./src/db/connectMongoose");
const router = require("./src/routes");
const errorHandler = require("./src/middlewares/errorHandler");
const requestTimeLogger = require("./src/middlewares/requestTimeLogger");

app = express();

connectMongoose();

if (process.env.NODE_ENV !== 'production') {
  app.use(requestTimeLogger);
}

app.use(express.json());
app.use(router);

app.use(errorHandler());

app.listen(3000, () => {
  logger.info(`server is listening on 3000`);
});
