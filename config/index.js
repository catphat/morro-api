const config = {
  DB_URL:
    process.env.DATABASE_URL ||
    "postgresql://postgres:london@localhost/morrolantvDB",
  PORT: process.env.PORT || 5100,
  ENV: process.env.NODE_ENV || "development",
  CACHE_LIFETIME_MIN: 60,
  MARKETPLACE_REQUEST_DELAY_MS: 50,
  GEAR_EMAIL: process.env.GEAR_EMAIL || "iluwathar@gmail.com",
  AUTH_AUDIENCE: "https://api.morrolan.tv",
  SE_TOKEN: process.env.SE_TOKEN || "",
};

module.exports = config;
