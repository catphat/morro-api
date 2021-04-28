const { bdoClientConfig: bdoClient } = require('./bdoClient');
const { dbConfig: db, getConnectionString: dbGetConnectionString } = require('./db');

const ENV = process.env.NODE_ENV || 'development';

const config = {
  ENV,
  bdoClient: bdoClient[ENV],
  db: {
    CONNECTION_STRING: dbGetConnectionString(ENV, db),
  },

};

module.exports = config;
