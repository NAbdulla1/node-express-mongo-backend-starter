const logger = require("../services/loggerService");

function errorHandler(options) {
  return function (err, req, res, next) {
    const statusCode = options?.statusCode ?? 500;
    logger.error(`Unhandled error: ${err.message ?? err}`);

    res.status(statusCode).json();
  }
}

module.exports = errorHandler;
