const { bdoClientConfig: bdoClient } = require('./bdoClient');

const ENV = process.env.NODE_ENV || 'development';

const config = {
  ENV,
  bdoClient: bdoClient[ENV],
};

module.exports = config;
