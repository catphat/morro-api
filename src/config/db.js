
const dbConfig = {
  development: {
    database: 'mapi_db_dev',
    dialect: 'postgres',
    migrationStorage: 'json',
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    host: process.env.DB_DEV_HOST,
    port: process.env.DB_DEV_PORT,
  },
  test: {
    database: 'mapi_db_test',
    dialect: 'postgres',
    migrationStorage: 'json',
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    host: process.env.DB_TEST_HOST,
    port: process.env.DB_TEST_PORT,
  },
  production: {
    database: 'mapi_db_prod',
    dialect: 'postgres',
    migrationStorage: 'json',
    username: process.env.DB_PROD_USERNAME,
    password: process.env.DB_PROD_PASSWORD,
    host: process.env.DB_PROD_HOST,
    port: process.env.DB_PROD_PORT,
  },
};

module.exports = { dbConfig };
