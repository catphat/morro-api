const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const { expect } = require('chai');
const { describe, it } = require('mocha');
const MarketUtil = require('../../../src/custom_modules/marketplace/marketUtil');

describe('market utility', () => {
  it('ERRORS.endpointKey prints out ENDPOINTs keys', () => {
    expect(new MarketUtil('NA').ERRORS.endpointKey.message.split(':')[1])
      .to.equal('MARKET_SEARCH, MARKET_SUBLIST, MARKET_SELLBUYINFO');
  });

  it('ERRORS.endpointValue prints out ENDPOINTS value', () => {
    expect(new MarketUtil('NA').ERRORS.endpointValue.message.split(':')[1])
      .to.equal('Home/GetWorldMarketSearchList, Home/GetWorldMarketSubList, Home/GetItemSellBuyInfo');
  });

  it('throwIfInvalidRegion throws on invalid parameter', () => {
    expect(() => new MarketUtil('NA').throwIfInvalidRegion('BLA')).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidRegion(null)).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidRegion('')).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidRegion('NA')).to.not.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidRegion('EU')).to.not.throw();
  });

  it('throwIfInvalidEndpointKey throws on invalid parameter', () => {
    expect(() => new MarketUtil('NA').throwIfInvalidEndpointKey('BLA')).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidEndpointKey(null)).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidEndpointKey('MARKET_SEARCH')).to.not.throw();
  });

  it('throwIfInvalidEndpointValue throws on invalid parameter', () => {
    expect(() => new MarketUtil('NA').throwIfInvalidEndpointValue('BLA')).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidEndpointValue(null)).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidEndpointValue('MARKET_SEARCH')).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidEndpointValue(new MarketUtil('NA').ENDPOINTS.MARKET_SEARCH.path))
      .to.not.throw();
  });

  it('getHeader should have correct values', () => {
    const header = new MarketUtil('NA').getHeader();
    expect(header.accept).to.equal('*/*');
    expect(header['User-Agent'])
      .to.equal('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36');
    expect(header.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
  });

  it('getHeader should throw on invalid region parameter', () => {
    expect(() => new MarketUtil(null).getHeader()).to.throw();
    expect(() => new MarketUtil('blabla').getHeader()).to.throw();
  });

  it('getBody should return valid parameters', () => {
    expect(new MarketUtil('NA').getBody().body).to.equal('__RequestVerificationToken=NABODYTOKEN123');
    expect(new MarketUtil('NA').getBody({ searchText: 'tungrad' }).body).to.equal('__RequestVerificationToken=NABODYTOKEN123&searchText=tungrad');
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
    expect(new MarketUtil('NA').getUrlByEndpoint('MARKET_SEARCH').href)
      .to.equal('http://127.0.0.1:8000/Home/GetWorldMarketSearchList');

    expect(new MarketUtil('EU').getUrlByEndpoint('MARKET_SUBLIST').href)
      .to.equal('http://127.0.0.1:9000/Home/GetWorldMarketSubList');
  });

  it('getUrlByEndpoint throws on invalid input', () => {
    expect(() => new MarketUtil('EU').getUrlByEndpoint(null)).to.throw();
    expect(() => new MarketUtil(null).getUrlByEndpoint('MARKET_SEARCH')).to.throw();
    expect(() => new MarketUtil('NA').getUrlByEndpoint('ABCBLAMARKET_SEARCH')).to.throw();
    expect(() => new MarketUtil('ABC').getUrlByEndpoint('MARKET_SEARCH')).to.throw();

    expect(() => new MarketUtil('NA').getUrlByEndpoint('MARKET_SEARCH')).to.not.throw();
    expect(() => new MarketUtil('NA').getUrlByEndpoint(new MarketUtil('NA').ENDPOINTS.MARKET_SEARCH.path)).to.throw();
  });

  it('getUrlByEndpointPath throws on invalid input', () => {
    expect(() => new MarketUtil('EU').getUrlByEndpointPath(null)).to.throw();
    expect(() => new MarketUtil(null).getUrlByEndpointPath('MARKET_SEARCH')).to.throw();
    expect(() => new MarketUtil('NA').getUrlByEndpointPath('ABCBLAMARKET_SEARCH')).to.throw();
    expect(() => new MarketUtil('ABC').getUrlByEndpointPath('MARKET_SEARCH')).to.throw();

    expect(() => new MarketUtil('NA').getUrlByEndpointPath('MARKET_SEARCH')).to.throw();
    expect(() => new MarketUtil('NA').getUrlByEndpointPath(new MarketUtil('NA').ENDPOINTS.MARKET_SEARCH.path)).to.not.throw();
  });

  it('getRequestOptions returns valid option parameters', () => {
    const optWithBody = new MarketUtil('NA').getRequestOptions('POST', { searchText: 'tungrad' });
    expect(optWithBody.method).to.equal('POST');
    expect(optWithBody.headers.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
    expect(optWithBody.body).to.equal('__RequestVerificationToken=NABODYTOKEN123&searchText=tungrad');

    const optWithNullBody = new MarketUtil('NA').getRequestOptions('POST');
    expect(optWithNullBody.method).to.equal('POST');
    expect(optWithNullBody.headers.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
    expect(optWithNullBody.body).to.equal(null);
  });

  it('throwIfInvalidHTTPStatusCodeError throws on invalid status code', () => {
    expect(() => new MarketUtil('NA').throwIfInvalidHTTPStatusCodeError(444, { 'error-prop': 'error-data' })).to.throw();
    expect(() => new MarketUtil('NA').throwIfInvalidHTTPStatusCodeError(200, { 'error-prop': 'error-data' })).to.not.throw();
  });
});
