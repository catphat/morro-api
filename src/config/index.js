const config = {
  MARKET_BASE_URL_EU: process.env.MARKET_BASE_URL_EU || 'https://eu-trade.naeu.playblackdesert.com',
  MARKET_BASE_URL_NA: process.env.MARKET_BASE_URL_NA || 'https://na-trade.naeu.playblackdesert.com',
  MARKET_TOKEN_EU: process.env.MARKET_TOKEN_EU,
  MARKET_TOKEN_NA: process.env.MARKET_TOKEN_NA,
  DB_URL: process.env.DB_URL, /* 'postgres://user:pass@example.com:5432/dbname' */
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV || 'development',
  CACHE_LIFETIME_MIN: 60,
  MARKETPLACE_REQUEST_DELAY_MS: 50,
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
