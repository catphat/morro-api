const { expect } = require('chai');
const { describe, it } = require('mocha');
const config = require('../../../src/config');

describe('config', () => {
  it('should have correct dotenv values', () => {
    expect(config.ENV).to.equal('test');
    expect(config.bdoClient.BDO_CLIENT_BASE_URL_NA).to.equal('127.0.0.1:9990');
    expect(config.bdoClient.BDO_CLIENT_BASE_URL_EU).to.equal('127.0.0.1:9991');
    expect(config.bdoClient.BDO_CLIENT_PROXY_URL).to.equal('127.0.0.1');
    expect(config.bdoClient.BDO_CLIENT_PROXY_PORT).to.equal('7770');
    expect(config.bdoClient.BDO_CLIENT_USE_PROXY).to.equal(true);
  });
});
