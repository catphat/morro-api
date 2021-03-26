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
const { GetWorldMarketList } = require('../../../src/custom_modules/marketplace/index');

describe('GetWorldMarketList method', () => {
  const worldMarketList = new GetWorldMarketList('NA');
  const reqRawResponsePath = path.resolve('test/custom_modules/marketplace/bdo_client_raw_responses/worldmarketlist-1_1_0.json');
  const invalidResponsePath = path.resolve('test/custom_modules/marketplace/bdo_client_raw_responses/invalid-response.txt');
  const invalidResponseTXT = fs.readFileSync(invalidResponsePath);
  const responseJSON = fs.readFileSync(reqRawResponsePath);
  const reqParams = worldMarketList.getRequestParameters(1, 1, 0);

  it('has valid request parameters', () => {
    const req = worldMarketList.getRequestParameters(1, 1, 0);
    expect(req.url.href).to.equal('http://127.0.0.1:8000/Trademarket/GetWorldMarketList');
    expect(req.opt.method).to.equal('POST');
    expect(req.opt.body).to.equal('{"keyType":0,"mainCategory":1,"subCategory":1}');
  });

  it('byKeyTypeMainAndSubCategory has valid handling of req/resp', async () => {
    nock(`http://${reqParams.url.host}`)
      .post(reqParams.url.pathname)
      // eslint-disable-next-line func-names
      .reply((uri, requestBody) => {
        expect(uri).to.equal('/Trademarket/GetWorldMarketList');
        expect(requestBody.mainCategory).to.equal(1);
        expect(requestBody.subCategory).to.equal(1);
        expect(requestBody.keyType).to.equal(0);

        return [
          200,
          responseJSON,
          { 'Content-Type': 'application/json' }];
      });

    const resp = await new GetWorldMarketList('NA').byMainCategorySubCategoryAndKeyType(1, 1, 0);
    const parsedResp = GetWorldMarketList.handleResponse(resp);
    expect(resp.resultCode).to.equal(0);
    expect(parsedResp.isValid).to.be.true;
    expect(parsedResp.itemList[0].itemId).to.equal(10003);
    expect(parsedResp.itemList[0].itemStock).to.equal(9);
    expect(parsedResp.itemList[0].totalTrades).to.equal(57278);
    expect(parsedResp.itemList[0].basePrice).to.equal(17300);
    expect(parsedResp.errorMsg).to.be.undefined;
  });

  it('byMainKey throws on invalid HTTP status code', async () => {
    nock(`http://${reqParams.url.host}`)
      .post(reqParams.url.pathname)
      // eslint-disable-next-line func-names
      .reply((uri, requestBody) => {
        expect(uri).to.equal('/Trademarket/GetWorldMarketList');
        expect(requestBody.mainCategory).to.equal(1);
        expect(requestBody.subCategory).to.equal(1);
        expect(requestBody.keyType).to.equal(0);

        return [
          444, invalidResponseTXT];
      });

    await expect(new GetWorldMarketList('NA').byMainCategorySubCategoryAndKeyType(1, 1, 0)).to.be.rejectedWith(Error);
  });
});
