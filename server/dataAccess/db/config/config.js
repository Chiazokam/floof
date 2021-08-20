const dotenv = require('dotenv');
const env = require('../../../config/env');

dotenv.config();

module.exports = {
  development: {
    url: env.DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
