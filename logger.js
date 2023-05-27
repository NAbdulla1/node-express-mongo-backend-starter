const winston = require("winston");

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json({ space: 2 }),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.File({
      level: 'error',
      filename: './log/errors.log',
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;
