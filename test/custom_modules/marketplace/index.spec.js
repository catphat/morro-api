const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const { expect } = require('chai');
const { describe, it } = require('mocha');
const Market = require('../../../src/custom_modules/marketplace');

describe('market request utility method', () => {
  it('endpointError prints out ENDPOINTS keys', () => {
    expect(Market.endpointError.message)
      .to.equal('endpoint must be one of the following: MARKET_SEARCH, MARKET_SUBLIST, MARKET_SELLBUYINFO');
  });

  it('throwIfInvalidRegion throws on invalid parameter', () => {
    expect(() => Market.throwIfInvalidRegion('BLA')).to.throw();
    expect(() => Market.throwIfInvalidRegion(null)).to.throw();
    expect(() => Market.throwIfInvalidRegion('')).to.throw();
    expect(() => Market.throwIfInvalidRegion('NA')).to.not.throw();
    expect(() => Market.throwIfInvalidRegion('EU')).to.not.throw();
  });

  it('throwIfInvalidEndpoint throws on invalid parameter', () => {
    expect(() => Market.throwIfInvalidEndpoint('BLA').to.throw());
    expect(() => Market.throwIfInvalidEndpoint(null).to.throw());
    expect(() => Market.throwIfInvalidEndpoint(Market.ENDPOINTS.MARKET_SEARCH).to.not.throw());
  });

  it('getHeader should have correct regional RequestVerificationToken', () => {
    expect(Market.getHeader('NA').cookie).to.equal('__RequestVerificationToken=NAABC123');
    expect(Market.getHeader('EU').cookie).to.equal('__RequestVerificationToken=EUABC123');
  });

  it('getHeader should throw on invalid region parameter', () => {
    expect(() => Market.getHeader(null)).to.throw();
    expect(() => Market.getHeader('blabla')).to.throw();
  });

  it('getBaseURL should have correct regional baseURL', () => {
    expect(Market.getBaseURL('NA')).to.equal('http://127.0.0.1:8000');
    expect(Market.getBaseURL('EU')).to.equal('http://127.0.0.1:9000');
  });

  it('getBaseURL should throw on invalid region parameter', () => {
    expect(() => Market.getBaseURL(null)).to.throw();
    expect(() => Market.getBaseURL('blabla')).to.throw();
  });

  it('getUrl returns valid URL', () => {
    expect(Market.getUrl('NA', 'MARKET_SEARCH').href)
      .to.equal('http://127.0.0.1:8000/GetWorldMarketSearchList');

    expect(Market.getUrl('EU', 'MARKET_SUBLIST').href)
      .to.equal('http://127.0.0.1:9000/GetWorldMarketSubList');
  });

  it('getUrl throws on invalid input', () => {
    expect(() => Market.getUrl('EU', null)).to.throw();
    expect(() => Market.getUrl(null, 'MARKET_SEARCH')).to.throw();
    expect(() => Market.getUrl('NA', 'ABCBLAMARKET_SEARCH')).to.throw();
    expect(() => Market.getUrl('ABC', 'MARKET_SEARCH')).to.throw();
  });
});
