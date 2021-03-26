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
const { GetBiddingInfoList } = require('../../../src/custom_modules/marketplace/index');

describe('BiddingInfoList method', () => {
  it('has valid parameters', () => {
    const biddingInfoList = new GetBiddingInfoList('NA');
    const req = biddingInfoList.getRequestParameters(11629);
    expect(req.url.href).to.equal('http://127.0.0.1:8000/Trademarket/GetBiddingInfoList');
    expect(req.opt.method).to.equal('POST');
    expect(req.opt.body).to.equal('{"keyType":0,"mainKey":11629,"subKey":0}');
  });

  describe('BiddingInfoList', () => {
    const marketPriceInfo = new GetBiddingInfoList('NA');
    const reqRawResponsePath = path.resolve('test/custom_modules/marketplace/bdo_client_raw_responses/biddinginfolist-11629.json');
    const invalidResponsePath = path.resolve('test/custom_modules/marketplace/bdo_client_raw_responses/invalid-response.txt');
    const invalidResponseTXT = fs.readFileSync(invalidResponsePath);
    const responseJSON = fs.readFileSync(reqRawResponsePath);
    const reqParams = marketPriceInfo.getRequestParameters(11607);

    it('byMainKey has valid handling of req/resp', async () => {
      nock(`http://${reqParams.url.host}`)
        .post(reqParams.url.pathname)
      // eslint-disable-next-line func-names
        .reply((uri, requestBody) => {
          expect(uri).to.equal('/Trademarket/GetBiddingInfoList');
          expect(requestBody.keyType).to.equal(0);
          expect(requestBody.mainKey).to.equal(11607);
          expect(requestBody.subKey).to.equal(0);

          return [
            200,
            responseJSON,
            { 'Content-Type': 'application/json' }];
        });

      const resp = await new GetBiddingInfoList('NA').byMainKey(11607);
      const parsedResp = GetBiddingInfoList.handleResponse(resp);
      expect(resp.resultCode).to.equal(0);
      expect(parsedResp.biddingList[0].price).to.equal(97500000);
      expect(parsedResp.biddingList[0].sellOrders).to.equal(1);
      expect(parsedResp.biddingList[0].buyOrders).to.equal(0);
      expect(parsedResp.errorMsg).to.be.undefined;
    });

    it('byMainKey throws on invalid HTTP status code', async () => {
      nock(`http://${reqParams.url.host}`)
        .post(reqParams.url.pathname)
      // eslint-disable-next-line func-names
        .reply((uri, requestBody) => {
          expect(uri).to.equal('/Trademarket/GetBiddingInfoList');
          expect(requestBody.keyType).to.equal(0);
          expect(requestBody.mainKey).to.equal(9999);
          expect(requestBody.subKey).to.equal(0);

          return [
            444, invalidResponseTXT];
        });

      await expect(new GetBiddingInfoList('NA').byMainKey(9999)).to.be.rejectedWith(Error);
    });
  });
});
