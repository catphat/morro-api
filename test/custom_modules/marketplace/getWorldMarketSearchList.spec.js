const path = require('path');

const dotEnvPath = path.resolve('test/test.env');
require('dotenv').config({ path: dotEnvPath });

const { expect } = require('chai');
const { describe, it } = require('mocha');
const fs = require('fs');
const nock = require('nock');
const { GetWorldMarketSearchList } = require('../../../src/custom_modules/marketplace/index');

describe('worldMarketSearchList method', () => {
  it('bySearchText returns valid request parameters', () => {
    const worldMarketSearchList = new GetWorldMarketSearchList('NA');
    const req = worldMarketSearchList.getRequestParameters('tungrad');
    expect(req.url.href).to.equal('http://127.0.0.1:8000/Home/GetWorldMarketSearchList');
    expect(req.opt.method).to.equal('POST');
    expect(req.opt.headers.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
    expect(req.opt.body).to.equal('__RequestVerificationToken=NABODYTOKEN123&searchText=tungrad');
  });

  describe('WorldMarketSearchList', () => {
    const worldMarketSearchList = new GetWorldMarketSearchList('NA');
    const reqRawResponsePath = path.resolve('test/custom_modules/marketplace/raw_requests/GetWorldMarketSearchList_response.json');
    const responseJSON = fs.readFileSync(reqRawResponsePath);
    const reqParams = worldMarketSearchList.getRequestParameters('tungrad');

    it('getBySearchTextAsync has valid req/res parameters', async () => {
      nock(`http://${reqParams.url.host}`)
        .post(reqParams.url.pathname)
      // eslint-disable-next-line func-names
        .reply(function (uri, requestBody) {
          expect(uri).to.equal('/Home/GetWorldMarketSearchList');
          expect(this.req.headers.cookie).to.equal('lang=en-US;__RequestVerificationToken=NACOOKIETOKEN123');
          expect(requestBody).to.equal('__RequestVerificationToken=NABODYTOKEN123&searchText=tungrad');

          return [
            200,
            responseJSON,
            { 'Content-Type': 'application/json; charset=utf-8' }];
        });

      const resp = await worldMarketSearchList.bySearchTextAsync('tungrad');
      expect(resp.status).to.equal(200);
      expect(resp.data.list.length).to.equal(4);
      expect(resp.data.list[0].mainKey).to.equal(11629);
      expect(resp.data.list[0].name).to.equal('Tungrad Necklace');
      expect(resp.data.list[0].totalSumCount).to.equal(88000000);
      expect(resp.data.list[0].sumCount).to.equal(104);
      expect(resp.data.list[0].grade).to.equal(3);
    });
  });
});
