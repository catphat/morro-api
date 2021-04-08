const config = {
  BDO_CLIENT_BASE_URL_NA: process.env.BDO_CLIENT_BASE_URL_NA || 'https://na-trade.naeu.playblackdesert.com/Trademarket',
  BDO_CLIENT_BASE_URL_EU: process.env.BDO_CLIENT_BASE_URL_EU || 'https://eu-trade.naeu.playblackdesert.com/Trademarket',
  BDO_CLIENT_PROXY_URL: process.env.BDO_CLIENT_PROXY_URL || '127.0.0.1',
  BDO_CLIENT_PROXY_PORT: process.env.BDO_CLIENT_PROXY_PORT || '7770',
  BDO_CLIENT_USE_PROXY: process.env.BDO_CLIENT_USE_PROXY || true,
  BDO_CLIENT_REQUEST_DELAY: 250,
  BDO_CLIENT_REQUEST_RETRIES: 3,
  DB_URL: process.env.DB_URL, /* 'postgres://user:pass@example.com:5432/dbname' */
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV || 'development',
  CACHE_LIFETIME_MIN: 60,
  GEAR_EMAIL: process.env.GEAR_EMAIL,
  AUTH_AUDIENCE: 'https://api.morrolan.tv',
  SE_TOKEN: process.env.SE_TOKEN,
  SE_BASEURL: 'https://api.streamelements.com/kappa/v2/',
  SE_CHANNEL_ID: '595fe4c2ff8f5f74ac7fcfbc',
  TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
  TWITCH_USER_ID: process.env.TWITCH_USER_ID,
  TWITCH_TOKEN_SCOPES: 'chat:read+bits:read+channel:read:subscriptions',
};

module.exports = config;
