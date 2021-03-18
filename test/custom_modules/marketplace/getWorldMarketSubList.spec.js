const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const { expect } = require('chai');
const { describe, it } = require('mocha');
const fs = require('fs');
const nock = require('nock');
const { GetWorldMarketSubList } = require('../../../src/custom_modules/marketplace/index');

describe('getWorldMarketSublist method', () => {
  it('bySearchText returns valid request parameters', () => {
    const marketSubList = new GetWorldMarketSubList('NA');
    const req = marketSubList.getRequestParameters(11629);
    expect(req.url.href).to.equal('http://127.0.0.1:8000/Home/GetWorldMarketSubList');
    expect(req.opt.method).to.equal('POST');
    expect(req.opt.headers.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
    expect(req.opt.body).to.equal('__RequestVerificationToken=NABODYTOKEN123&mainKey=11629&usingClient=0');
  });

  describe('WorldMarketSubList', () => {
    const marketSubList = new GetWorldMarketSubList('NA');
    const reqRawResponsePath = path.resolve('test/custom_modules/marketplace/raw_requests/GetItemSellBuyInfo_response.json');
    const responseJSON = fs.readFileSync(reqRawResponsePath);
    const reqParams = marketSubList.getRequestParameters(11629);

    it('byMainKey has valid req/res parameters', async () => {
      nock(`http://${reqParams.url.host}`)
        .post(reqParams.url.pathname)
      // eslint-disable-next-line func-names
        .reply(function (uri, requestBody) {
          expect(uri).to.equal('/Home/GetWorldMarketSubList');
          expect(this.req.headers.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
          expect(requestBody).to.equal('__RequestVerificationToken=NABODYTOKEN123&mainKey=11629&usingClient=0');

          return [
            200,
            responseJSON,
            { 'Content-Type': 'application/json; charset=utf-8' }];
        });

      const resp = await marketSubList.byMainKey(11629);
      expect(resp.status).to.equal(200);
      expect(resp.data.priceList.length).to.equal(14);
      expect(resp.data.marketConditionList.length).to.equal(27);
      expect(resp.data.basePrice).to.equal(87500000);
    });
  });
});
