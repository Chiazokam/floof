const env = require('../../../config/env');

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
