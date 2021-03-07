'use strict';

const expect = require('chai').expect;
const config = require("../../src/config");
const {describe, it} = require("mocha");

// this test case is intentionally excessive and not an indicator of expected test coverage. (ishq)
describe('default env', function() {
   it('should have correct default values', () => {
      expect(config.MARKET_BASE_URL_EU).to.equal('NOT IMPLEMENTED');
      expect(config.MARKET_BASE_URL_NA).to.equal('https://na-trade.naeu.playblackdesert.com');
      expect(config.MARKET_TOKEN_EU).to.be.undefined;
      expect(config.MARKET_TOKEN_NA).to.be.undefined;
      expect(config.DB_URL).to.be.undefined;
      expect(config.PORT).to.be.undefined;
      expect(config.ENV).to.equal('development');
      expect(config.CACHE_LIFETIME_MIN).to.equal(60);
      expect(config.MARKETPLACE_REQUEST_DELAY_MS).to.equal(50);
      expect(config.GEAR_EMAIL).to.be.undefined;
      expect(config.AUTH_AUDIENCE).to.equal("https://api.morrolan.tv");
      expect(config.SE_TOKEN).to.be.undefined;
      expect(config.SE_BASEURL).to.equal("https://api.streamelements.com/kappa/v2/");
      expect(config.SE_CHANNEL_ID).to.equal("595fe4c2ff8f5f74ac7fcfbc");
      expect(config.TWITCH_CLIENT_ID).to.be.undefined;
      expect(config.TWITCH_CLIENT_SECRET).to.be.undefined;
      expect(config.TWITCH_TOKEN_SCOPES).to.equal("chat:read+bits:read+channel:read:subscriptions")
   })
})
