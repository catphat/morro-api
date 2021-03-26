const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const { expect } = require('chai');
const { describe, it } = require('mocha');
const MarketUtil = require('../../../src/custom_modules/marketplace/marketUtil');

describe('market utility', () => {
  it('throwIfInvalidRegion throws on invalid parameter', () => {
    expect(() => new MarketUtil('NA').throwIfInvalidRegion('BLA')).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidRegion(null)).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidRegion('')).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidRegion('NA')).to.not.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidRegion('EU')).to.not.throw();
  });

  it('getHeader should have correct values', () => {
    const header = new MarketUtil('NA').getHeader();
    expect(header['content-type']).to.equal('application/json');
    expect(header['User-Agent'])
      .to.equal('BlackDesert');
  });

  it('getHeader should throw on invalid region parameter', () => {
    expect(() => new MarketUtil(null).getHeader()).to.throw();
    expect(() => new MarketUtil('blabla').getHeader()).to.throw();
  });

  it('getBaseURL should have correct regional baseURL', () => {
    expect(new MarketUtil('NA').getBaseURL()).to.equal('http://127.0.0.1:8000');
    expect(new MarketUtil('EU').getBaseURL()).to.equal('http://127.0.0.1:9000');
  });

  it('getBaseURL should throw on invalid region parameter', () => {
    expect(() => new MarketUtil(null).getBaseURL()).to.throw();
    expect(() => new MarketUtil('blabla').getBaseURL()).to.throw();
  });

  it('getUrl returns valid URL', () => {
    expect(new MarketUtil('NA').getUrlByByRelativeUrl('Trademarket/GetMarketPriceInfo').href)
      .to.equal('http://127.0.0.1:8000/Trademarket/GetMarketPriceInfo');

    expect(new MarketUtil('EU').getUrlByByRelativeUrl('Trademarket/GetMarketPriceInfo').href)
      .to.equal('http://127.0.0.1:9000/Trademarket/GetMarketPriceInfo');
  });

  it('getRequestOptions returns valid option parameters', () => {
    const optWithBody = new MarketUtil('NA').getRequestOptions('POST', { searchText: 'tungrad' });
    expect(optWithBody.method).to.equal('POST');
    expect(optWithBody.body).to.equal('{"searchText":"tungrad"}');

    const optWithNullBody = new MarketUtil('NA').getRequestOptions('POST');
    expect(optWithNullBody.method).to.equal('POST');
    expect(optWithNullBody.body).to.equal(null);
  });

  it('throwIfInvalidHTTPStatusCodeError throws on invalid status code', () => {
    expect(() => new MarketUtil('NA').throwIfInvalidHTTPStatusCodeError(444, { 'error-prop': 'error-data' })).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidHTTPStatusCodeError(200, { 'error-prop': 'error-data' })).to.not.throw();
  });
});
