const env = require('../../../config/env');

module.exports = {
  development: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DEV,
    host: env.DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_TEST,
    host: env.DB_HOST,
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
