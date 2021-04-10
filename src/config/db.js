require('dotenv').config();

module.exports = {
  development: {
    database: 'mapi_db_dev',
    dialect: 'postgres',
    migrationStorage: 'json',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  test: {
    database: 'mapi_db_test',
    dialect: 'postgres',
    migrationStorage: 'json',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  production: {
    database: 'mapi_db_prod',
    dialect: 'postgres',
    migrationStorage: 'json',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
};
