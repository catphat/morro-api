const dbConfig = {
  test: {
    HOST: process.env.TEST_DB_HOST || '127.0.0.1',
    PORT: process.env.TEST_DB_PORT || '5432',
    DBNAME: process.env.TEST_DB_NAME || 'mapi_db_test',
    USERNAME: process.env.TEST_DB_USERNAME || 'testdbuser01',
    PASSWORD: process.env.TEST_DB_PASSWORD || 'abc123',
  },
  development: {
    HOST: process.env.DEV_DB_HOST || '127.0.0.1',
    PORT: process.env.DEV_DB_PORT || '5432',
    DBNAME: process.env.DEV_DB_NAME || 'mapi_db_dev',
    USERNAME: process.env.DEV_DB_USERNAME || 'devdbuser01',
    PASSWORD: process.env.DEV_DB_PASSWORD,
  },
  production: {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    DBNAME: process.env.DB_NAME,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
  },
};

const getConnectionString = (ENV, config) => `postgresql://${config[ENV].USERNAME}:${config[ENV].PASSWORD}@${config[ENV].HOST}:${config[ENV].PORT}/${config[ENV].DBNAME}`;
module.exports = { dbConfig, getConnectionString };
