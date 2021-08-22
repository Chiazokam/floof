const dotenv = require('dotenv');

dotenv.config();

const {
  DB_USERNAME,
  PORT,
  DB_HOST,
  DB_NAME,
  DATABASE_URL,
  DB_PASSWORD,
  NODE_ENV,
  REDIS_URL,
} = process.env;

const envConfig = {
  DB_USERNAME,
  PORT,
  DB_HOST,
  DB_NAME,
  DATABASE_URL,
  DB_PASSWORD,
  NODE_ENV,
  REDIS_URL,
};

module.exports = envConfig;
