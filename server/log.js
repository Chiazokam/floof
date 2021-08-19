import winston from 'winston';
import appRoot from 'app-root-path';
import env from './config/env';

const { NODE_ENV } = env;

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 15,
    colorize: true
  },
  console: {
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

/**
 * Set the winston transports
 */
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false
});

export const stream = {
  write: (message) => {
    logger.info(message);
  }
};

export default logger;
