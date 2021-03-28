const {
  getRawResponse, describe, expect, it, nock,
} = require('../../../helpers/bdo_client');

const { GetMarketPriceInfo } = require('../../../../src/api/bdo_client/index');

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
    const responseJSON = getRawResponse('marketpriceinfo-11607.json');
    const invalidResponseTXT = getRawResponse('invalid-response.txt');
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
