const bdoClientConfig = {
  test: {
    BASE_URL_NA: process.env.TEST_BDO_CLIENT_BASE_URL_NA || 'http://127.0.0.1:9990',
    BASE_URL_EU: process.env.TEST_BDO_CLIENT_BASE_URL_EU || 'http://127.0.0.1:9991',
    PROXY_URL: process.env.TEST_BDO_CLIENT_PROXY_URL || '127.0.0.1',
    PROXY_PORT: process.env.TEST_BDO_CLIENT_PROXY_PORT || '7770',
    USE_PROXY: process.env.TEST_BDO_CLIENT_USE_PROXY || true,
    REQUEST_DELAY: 150,
    REQUEST_RETRIES: 3,
  },
  development: {
    BASE_URL_NA: process.env.DEV_BDO_CLIENT_BASE_URL_NA || 'https://na-trade.naeu.playblackdesert.com/Trademarket',
    BASE_URL_EU: process.env.DEV_BDO_CLIENT_BASE_URL_EU || 'https://eu-trade.naeu.playblackdesert.com/Trademarket',
    PROXY_URL: process.env.DEV_BDO_CLIENT_PROXY_URL || '127.0.0.1',
    PROXY_PORT: process.env.DEV_BDO_CLIENT_PROXY_PORT || '7770',
    USE_PROXY: process.env.DEV_BDO_CLIENT_USE_PROXY || true,
    REQUEST_DELAY: 150,
    REQUEST_RETRIES: 3,
  },
  production: {
    BASE_URL_NA: process.env.BDO_CLIENT_BASE_URL_NA || 'https://na-trade.naeu.playblackdesert.com/Trademarket',
    BASE_URL_EU: process.env.BDO_CLIENT_BASE_URL_EU || 'https://eu-trade.naeu.playblackdesert.com/Trademarket',
    PROXY_URL: process.env.BDO_CLIENT_PROXY_URL || '127.0.0.1',
    PROXY_PORT: process.env.BDO_CLIENT_PROXY_PORT || '1110',
    USE_PROXY: process.env.BDO_CLIENT_USE_PROXY || true,
    REQUEST_DELAY: 150,
    REQUEST_RETRIES: 3,
  },
};

module.exports = { bdoClientConfig };
