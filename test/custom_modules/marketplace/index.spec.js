const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const { expect } = require('chai');
const { describe, it } = require('mocha');
const market = require('../../../src/custom_modules/marketplace');

describe('market request', () => {
  it('getHeader should have correct regional cookie', () => {
    expect(market.getHeader('NA').cookie).to.equal('NAABC123');
    expect(market.getHeader('EU').cookie).to.equal('EUABC123');
  });
  it('getHeader should throw on invalid region parameter', () => {
    expect(() => market.getHeader(null)).to.throw();
    expect(() => market.getHeader('blabla')).to.throw();
  });
  it('getBaseURL should have correct regional baseURL', () => {
    expect(market.getBaseURL('NA')).to.equal('127.0.0.1:8000');
    expect(market.getBaseURL('EU')).to.equal('127.0.0.1:9000');
  });
  it('getBaseURL should throw on invalid region parameter', () => {
    expect(() => market.getBaseURL(null)).to.throw();
    expect(() => market.getBaseURL('blabla')).to.throw();
  });
});
