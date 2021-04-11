const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const { expect } = require('chai');
const { describe, it } = require('mocha');
const config = require('../../../src/config');

describe('config', () => {
  it('should have correct dotenv values', () => {
    expect(config.db.development.username).to.be.undefined;
    expect(config.db.production.username).to.be.undefined;
    expect(config.db.development.host).to.be.undefined;
    expect(config.db.production.host).to.be.undefined;
    expect(config.db.test.username).to.be.equal('dbtestuser01');
    expect(config.db.test.password).to.be.equal('abc123');
    expect(config.db.test.host).to.be.equal('127.0.0.1');
    expect(config.db.test.port).to.be.equal('5432');
    expect(config.BDO_CLIENT_BASE_URL_NA).to.equal('127.0.0.1:9990');
    expect(config.BDO_CLIENT_BASE_URL_EU).to.equal('127.0.0.1:9991');
    expect(config.BDO_CLIENT_PROXY_URL).to.equal('127.0.0.1');
    expect(config.BDO_CLIENT_PROXY_PORT).to.equal('9990');
    expect(config.BDO_CLIENT_USE_PROXY).to.equal('true');
    expect(config.ENV).to.equal('test');
    expect(config.GEAR_EMAIL).to.equal('efzUFE83suBCR5Z@FcqM9nGPLYb.com');
    expect(config.SE_TOKEN).to.equal('fD3JT8CGdNA');
    expect(config.TWITCH_CLIENT_ID).to.equal('VSoAt4J8paZ');
    expect(config.TWITCH_CLIENT_SECRET).to.equal('ZhAzwXtyf7r');
    expect(config.TWITCH_USER_ID).to.equal('4ZHC28bsaHX');
  });
});
