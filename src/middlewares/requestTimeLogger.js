const logger = require("../services/loggerService");

function requestTimeLogger(req, res, next) {
  logger.info(`${req.method} ${req.originalUrl} [STARTED]`);
  const start = Date.now();

  res.on('finish', () => {
    const durationInMilliseconds = Date.now() - start;
    logger.info(`${req.method} ${req.originalUrl} [FINISHED] ${durationInMilliseconds} ms`);
  });

  res.on('close', () => {
    const durationInMilliseconds = Date.now() - start;
    logger.info(`${req.method} ${req.originalUrl} [CLOSED] ${durationInMilliseconds} ms`);
  })

  next()
}

module.exports = requestTimeLogger;
