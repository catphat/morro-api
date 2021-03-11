const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const { expect } = require('chai');
const { describe, it } = require('mocha');
const MarketUtil = require('../../../src/custom_modules/marketplace/marketUtil');

describe('market utility', () => {
  it('ERRORS.endpointKey prints out ENDPOINTs keys', () => {
    expect(MarketUtil.ERRORS.endpointKey.message.split(':')[1])
      .to.equal('MARKET_SEARCH, MARKET_SUBLIST, MARKET_SELLBUYINFO');
  });

  it('ERRORS.endpointValue prints out ENDPOINTS value', () => {
    expect(MarketUtil.ERRORS.endpointValue.message.split(':')[1])
      .to.equal('GetWorldMarketSearchList, GetWorldMarketSubList, GetItemSellBuyInfo');
  });

  it('throwIfInvalidRegion throws on invalid parameter', () => {
    expect(() => MarketUtil.throwIfInvalidRegion('BLA')).to.throw();
    expect(() => MarketUtil.throwIfInvalidRegion(null)).to.throw();
    expect(() => MarketUtil.throwIfInvalidRegion('')).to.throw();
    expect(() => MarketUtil.throwIfInvalidRegion('NA')).to.not.throw();
    expect(() => MarketUtil.throwIfInvalidRegion('EU')).to.not.throw();
  });

  it('throwIfInvalidEndpointKey throws on invalid parameter', () => {
    expect(() => MarketUtil.throwIfInvalidEndpointKey('BLA')).to.throw();
    expect(() => MarketUtil.throwIfInvalidEndpointKey(null)).to.throw();
    expect(() => MarketUtil.throwIfInvalidEndpointKey('MARKET_SEARCH')).to.not.throw();
  });

  it('throwIfInvalidEndpointValue throws on invalid parameter', () => {
    expect(() => MarketUtil.throwIfInvalidEndpointValue('BLA')).to.throw();
    expect(() => MarketUtil.throwIfInvalidEndpointValue(null)).to.throw();
    expect(() => MarketUtil.throwIfInvalidEndpointValue('MARKET_SEARCH')).to.throw();
    expect(() => MarketUtil.throwIfInvalidEndpointValue(MarketUtil.ENDPOINTS.MARKET_SEARCH.path))
      .to.not.throw();
  });

  it('getCookieRequestVerificationToken should have correct token', () => {
    expect(MarketUtil.getCookieRequestVerificationToken('NA')).to.equal('NACOOKIETOKEN123');
    expect(MarketUtil.getCookieRequestVerificationToken('EU')).to.equal('EUCOOKIETOKEN123');
  });

  it('getCookie should have correct values', () => {
    expect(MarketUtil.getCookie('NA').cookie.lang).to.equal('en-US');
    // eslint-disable-next-line no-underscore-dangle
    expect(MarketUtil.getCookie('NA').cookie.__RequestVerificationToken).to.equal('NACOOKIETOKEN123');

    expect(MarketUtil.getCookie('EU').cookie.lang).to.equal('en-US');
    // eslint-disable-next-line no-underscore-dangle
    expect(MarketUtil.getCookie('EU').cookie.__RequestVerificationToken).to.equal('EUCOOKIETOKEN123');
  });

  it('getHeader should have correct values', () => {
    const header = MarketUtil.getHeader('NA');
    expect(header.accept).to.equal('*/*');
    expect(header['User-Agent'])
      .to.equal('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36');
    expect(header.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
  });

  it('getBodyRequestVerificationToken should have correct token', () => {
    // eslint-disable-next-line no-underscore-dangle
    expect(MarketUtil.getBodyRequestVerificationToken('NA').__RequestVerificationToken).to.equal('NABODYTOKEN123');
    // eslint-disable-next-line no-underscore-dangle
    expect(MarketUtil.getBodyRequestVerificationToken('EU').__RequestVerificationToken).to.equal('EUBODYTOKEN123');
  });

  it('getHeader should throw on invalid region parameter', () => {
    expect(() => MarketUtil.getHeader(null)).to.throw();
    expect(() => MarketUtil.getHeader('blabla')).to.throw();
  });

  it('getBody should return valid parameters', () => {
    expect(MarketUtil.getBody('NA').body).to.equal('__RequestVerificationToken=NABODYTOKEN123');
    expect(MarketUtil.getBody('NA', { searchText: 'tungrad' }).body).to.equal('__RequestVerificationToken=NABODYTOKEN123&searchText=tungrad');
  });

  it('getBaseURL should have correct regional baseURL', () => {
    expect(MarketUtil.getBaseURL('NA')).to.equal('http://127.0.0.1:8000');
    expect(MarketUtil.getBaseURL('EU')).to.equal('http://127.0.0.1:9000');
  });

  it('getBaseURL should throw on invalid region parameter', () => {
    expect(() => MarketUtil.getBaseURL(null)).to.throw();
    expect(() => MarketUtil.getBaseURL('blabla')).to.throw();
  });

  it('getUrl returns valid URL', () => {
    expect(MarketUtil.getUrlByEndpoint('NA', 'MARKET_SEARCH').href)
      .to.equal('http://127.0.0.1:8000/GetWorldMarketSearchList');

    expect(MarketUtil.getUrlByEndpoint('EU', 'MARKET_SUBLIST').href)
      .to.equal('http://127.0.0.1:9000/GetWorldMarketSubList');
  });

  it('getUrlByEndpoint throws on invalid input', () => {
    expect(() => MarketUtil.getUrlByEndpoint('EU', null)).to.throw();
    expect(() => MarketUtil.getUrlByEndpoint(null, 'MARKET_SEARCH')).to.throw();
    expect(() => MarketUtil.getUrlByEndpoint('NA', 'ABCBLAMARKET_SEARCH')).to.throw();
    expect(() => MarketUtil.getUrlByEndpoint('ABC', 'MARKET_SEARCH')).to.throw();

    expect(() => MarketUtil.getUrlByEndpoint('NA', 'MARKET_SEARCH')).to.not.throw();
    expect(() => MarketUtil.getUrlByEndpoint('NA', MarketUtil.ENDPOINTS.MARKET_SEARCH.path)).to.throw();
  });

  it('getUrlByEndpointPath throws on invalid input', () => {
    expect(() => MarketUtil.getUrlByEndpointPath('EU', null)).to.throw();
    expect(() => MarketUtil.getUrlByEndpointPath(null, 'MARKET_SEARCH')).to.throw();
    expect(() => MarketUtil.getUrlByEndpointPath('NA', 'ABCBLAMARKET_SEARCH')).to.throw();
    expect(() => MarketUtil.getUrlByEndpointPath('ABC', 'MARKET_SEARCH')).to.throw();

    expect(() => MarketUtil.getUrlByEndpointPath('NA', 'MARKET_SEARCH')).to.throw();
    expect(() => MarketUtil.getUrlByEndpointPath('NA', MarketUtil.ENDPOINTS.MARKET_SEARCH.path)).to.not.throw();

  });

  it('getRequestOptions returns valid option parameters', () => {
    const optWithBody = MarketUtil.getRequestOptions('NA', 'POST', { searchText: 'tungrad' });
    expect(optWithBody.method).to.equal('POST');
    expect(optWithBody.headers.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
    expect(optWithBody.body).to.equal('__RequestVerificationToken=NABODYTOKEN123&searchText=tungrad');

    const optWithNullBody = MarketUtil.getRequestOptions('NA', 'POST');
    expect(optWithNullBody.method).to.equal('POST');
    expect(optWithNullBody.headers.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
    expect(optWithNullBody.body).to.equal(null);
  });

});
