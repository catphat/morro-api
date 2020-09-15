const config = {
  DB_URL:
    process.env.DATABASE_URL ||
    "postgresql://postgres:london@localhost/morrolantvDB-dev",
  PORT: process.env.PORT || 5100,
  ENV: process.env.NODE_ENV || "development",
  CACHE_LIFETIME_MIN: 60,
  MARKETPLACE_REQUEST_DELAY_MS: 50,
  allowedOrigins: [
    "http://localhost:3000",
    "http://localhost:8888",
    "https://eloquent-keller-9336f4.netlify.app",
  ],
};

module.exports = config;
