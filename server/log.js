import express from 'express';
import winston from 'winston';
import morgan from 'morgan';
import appRoot from 'app-root-path';

const app = express();

app.use(morgan('combined'));

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 15,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false
});

const stream = {
  write: (message) => {
    logger.info(message);
  }
};

export default stream;
