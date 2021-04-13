const { expect } = require('chai');
const { describe, it } = require('mocha');
const config = require('../../../src/config');

describe('config', () => {
  it('should have correct dotenv values', () => {
    expect(config.ENV).to.equal('test');
    expect(config.bdoClient.BASE_URL_NA).to.equal('http://127.0.0.1:9990');
    expect(config.bdoClient.BASE_URL_EU).to.equal('http://127.0.0.1:9991');
    expect(config.bdoClient.PROXY_URL).to.equal('127.0.0.1');
    expect(config.bdoClient.PROXY_PORT).to.equal('7770');
    expect(config.bdoClient.USE_PROXY).to.equal(true);
  });
});
