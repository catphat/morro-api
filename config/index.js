const config = {
  DB_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV || "development",
  CACHE_LIFETIME_MIN: 60,
  MARKETPLACE_REQUEST_DELAY_MS: 50,
  GEAR_EMAIL: process.env.GEAR_EMAIL,
  AUTH_AUDIENCE: "https://api.morrolan.tv",
  SE_TOKEN: process.env.SE_TOKEN,
  SE_BASEURL: "https://api.streamelements.com/kappa/v2/",
  SE_CHANNEL_ID: "595fe4c2ff8f5f74ac7fcfbc",
  TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
  TWITCH_USER_ID: process.env.TWITCH_USER_ID,
};

module.exports = config;
