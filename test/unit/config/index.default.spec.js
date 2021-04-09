const { expect } = require('chai');
const { describe, it } = require('mocha');
const config = require('../../../src/config');

describe('default env', () => {
  it('should have correct default values', () => {

    expect(config.BDO_CLIENT_BASE_URL_NA).to.equal('https://na-trade.naeu.playblackdesert.com/Trademarket');
    expect(config.BDO_CLIENT_BASE_URL_EU).to.equal('https://eu-trade.naeu.playblackdesert.com/Trademarket');
    expect(config.BDO_CLIENT_PROXY_URL).to.equal('127.0.0.1');
    expect(config.BDO_CLIENT_PROXY_PORT).to.equal('7770');
    expect(config.BDO_CLIENT_USE_PROXY).to.equal(true);
    expect(config.ENV).to.equal('development');
    expect(config.CACHE_LIFETIME_MIN).to.equal(60);
    expect(config.GEAR_EMAIL).to.be.undefined;
    expect(config.AUTH_AUDIENCE).to.equal('https://api.morrolan.tv');
    expect(config.SE_TOKEN).to.be.undefined;
    expect(config.SE_BASEURL).to.equal('https://api.streamelements.com/kappa/v2/');
    expect(config.SE_CHANNEL_ID).to.equal('595fe4c2ff8f5f74ac7fcfbc');
    expect(config.TWITCH_CLIENT_ID).to.be.undefined;
    expect(config.TWITCH_CLIENT_SECRET).to.be.undefined;
    expect(config.TWITCH_TOKEN_SCOPES).to.equal('chat:read+bits:read+channel:read:subscriptions');
  });
});
