const bdoClientConfig = {
  test: {
    BDO_CLIENT_BASE_URL_NA: process.env.TEST_BDO_CLIENT_BASE_URL_NA || '127.0.0.1:9990',
    BDO_CLIENT_BASE_URL_EU: process.env.TEST_BDO_CLIENT_BASE_URL_EU || '127.0.0.1:9991',
    BDO_CLIENT_PROXY_URL: process.env.TEST_BDO_CLIENT_PROXY_URL || '127.0.0.1',
    BDO_CLIENT_PROXY_PORT: process.env.TEST_BDO_CLIENT_PROXY_PORT || '7770',
    BDO_CLIENT_USE_PROXY: process.env.TEST_BDO_CLIENT_USE_PROXY || true,
    BDO_CLIENT_REQUEST_DELAY: 250,
    BDO_CLIENT_REQUEST_RETRIES: 3,
  },
  development: {
    BDO_CLIENT_BASE_URL_NA: process.env.DEV_BDO_CLIENT_BASE_URL_NA || 'https://na-trade.naeu.playblackdesert.com/Trademarket',
    BDO_CLIENT_BASE_URL_EU: process.env.DEV_BDO_CLIENT_BASE_URL_EU || 'https://eu-trade.naeu.playblackdesert.com/Trademarket',
    BDO_CLIENT_PROXY_URL: process.env.DEV_BDO_CLIENT_PROXY_URL || '127.0.0.1',
    BDO_CLIENT_PROXY_PORT: process.env.DEV_BDO_CLIENT_PROXY_PORT || '9990',
    BDO_CLIENT_USE_PROXY: process.env.DEV_BDO_CLIENT_USE_PROXY || true,
    BDO_CLIENT_REQUEST_DELAY: 250,
    BDO_CLIENT_REQUEST_RETRIES: 3,
  },
  production: {
    BDO_CLIENT_BASE_URL_NA: process.env.BDO_CLIENT_BASE_URL_NA || 'https://na-trade.naeu.playblackdesert.com/Trademarket',
    BDO_CLIENT_BASE_URL_EU: process.env.BDO_CLIENT_BASE_URL_EU || 'https://eu-trade.naeu.playblackdesert.com/Trademarket',
    BDO_CLIENT_PROXY_URL: process.env.BDO_CLIENT_PROXY_URL || '127.0.0.1',
    BDO_CLIENT_PROXY_PORT: process.env.BDO_CLIENT_PROXY_PORT || '1110',
    BDO_CLIENT_USE_PROXY: process.env.BDO_CLIENT_USE_PROXY || true,
    BDO_CLIENT_REQUEST_DELAY: 250,
    BDO_CLIENT_REQUEST_RETRIES: 3,
  },
};

module.exports = { bdoClientConfig };
