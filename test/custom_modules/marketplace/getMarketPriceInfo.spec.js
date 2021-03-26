const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;
const { describe, it } = require('mocha');
const fs = require('fs');
const nock = require('nock');
const { GetMarketPriceInfo } = require('../../../src/custom_modules/marketplace/index');

describe('MarketPriceInfo method', () => {
  it('bySearchText returns valid request parameters', () => {
    const marketPriceInfo = new GetMarketPriceInfo('NA');
    const req = marketPriceInfo.getRequestParameters(11629);
    expect(req.url.href).to.equal('http://127.0.0.1:8000/Trademarket/GetMarketPriceInfo');
    expect(req.opt.method).to.equal('POST');
    expect(req.opt.body).to.equal('{"keyType":0,"mainKey":11629,"subKey":0}');
  });

  describe('ItemBuySellInfo', () => {
    const marketPriceInfo = new GetMarketPriceInfo('NA');
    const reqRawResponsePath = path.resolve('test/custom_modules/marketplace/bdo_client_raw_responses/marketpriceinfo-11607.json');
    const invalidResponsePath = path.resolve('test/custom_modules/marketplace/bdo_client_raw_responses/invalid-response.txt');
    const invalidResponseTXT = fs.readFileSync(invalidResponsePath);
    const responseJSON = fs.readFileSync(reqRawResponsePath);
    const reqParams = marketPriceInfo.getRequestParameters(11607);

    it('byMainKey has valid handling of req/resp', async () => {
      nock(`http://${reqParams.url.host}`)
        .post(reqParams.url.pathname)
      // eslint-disable-next-line func-names
        .reply((uri, requestBody) => {
          expect(uri).to.equal('/Trademarket/GetMarketPriceInfo');
          expect(requestBody.keyType).to.equal(0);
          expect(requestBody.mainKey).to.equal(11607);
          expect(requestBody.subKey).to.equal(0);

          return [
            200,
            responseJSON,
            { 'Content-Type': 'application/json' }];
        });

      const resp = await new GetMarketPriceInfo('NA').byMainKey(11607);
      const parsedResp = GetMarketPriceInfo.handleResponse(resp);
      expect(resp.resultCode).to.equal(0);
      expect(parsedResp.isValid).to.be.true;
      expect(parsedResp.errorMsg).to.be.undefined;
      expect(parsedResp.currentBasePrice).to.equal(90500000);
      expect(parsedResp.priceHistoryAsc[0]).to.equal(123000000);
    });

    it('byMainKey throws on invalid HTTP status code', async () => {
      nock(`http://${reqParams.url.host}`)
        .post(reqParams.url.pathname)
      // eslint-disable-next-line func-names
        .reply((uri, requestBody) => {
          expect(uri).to.equal('/Trademarket/GetMarketPriceInfo');
          expect(requestBody.keyType).to.equal(0);
          expect(requestBody.mainKey).to.equal(9999);
          expect(requestBody.subKey).to.equal(0);

          return [
            444, invalidResponseTXT];
        });

      await expect(new GetMarketPriceInfo('NA').byMainKey(9999)).to.be.rejectedWith(Error);
    });
  });
});
