const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const { expect } = require('chai');
const { describe, it } = require('mocha');
const config = require('../../src/config');

// this test case is intentionally excessive and not an indicator of expected test coverage. (ishq)
describe('config', () => {
  it('should have correct dotenv values', () => {
    expect(config.MARKET_BASE_URL_EU).to.equal('http://127.0.0.1:9000');
    expect(config.MARKET_BASE_URL_NA).to.equal('http://127.0.0.1:8000');
    expect(config.MARKET_REQ_VERIFICATION_COOKIE_TOKEN_EU).to.equal('EUCOOKIETOKEN123');
    expect(config.MARKET_REQ_VERIFICATION_COOKIE_TOKEN_NA).to.equal('NACOOKIETOKEN123');
    expect(config.MARKET_REQ_VERIFICATION_BODY_TOKEN_EU).to.equal('EUBODYTOKEN123');
    expect(config.MARKET_REQ_VERIFICATION_BODY_TOKEN_NA).to.equal('NABODYTOKEN123');
    expect(config.DB_URL).to.equal('postgres://user:pass@example.com:5432/dbname');
    expect(config.PORT).to.equal('7000');
    expect(config.ENV).to.equal('TEST-DEV');
    expect(config.GEAR_EMAIL).to.equal('efzUFE83suBCR5Z@FcqM9nGPLYb.com');
    expect(config.SE_TOKEN).to.equal('fD3JT8CGdNA');
    expect(config.TWITCH_CLIENT_ID).to.equal('VSoAt4J8paZ');
    expect(config.TWITCH_CLIENT_SECRET).equal('ZhAzwXtyf7r');
    expect(config.TWITCH_USER_ID).equal('4ZHC28bsaHX');
  });
});
