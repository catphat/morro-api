require('dotenv').config();
const MarketUtil = require('./marketUtil');

class GetMarketPriceInfo {
  constructor(region) {
    this.mu = new MarketUtil(region);
    this.client = this.mu.getClient(region);
  }

  /**
   * @param {int} mainKey
   */
  getRequestParameters(mainKey) {
    const endpoint = this.mu.ENDPOINTS.MARKET_MARKETPRICEINFO;
    const body = {
      keyType: 0,
      mainKey,
      subKey: 0,
    };
    return {
      url: this.mu.getUrlByEndpointPath(endpoint.path),
      opt: this.mu.getRequestOptions(endpoint.method, body),
    };
  }

  /**
   *  @typedef {Object} ParsedMarketInfoResponse
   *  @property {!boolean} isValid - received a valid resultCode (0)
   *  @property {string | undefined} errorMsg - remote API provided error message if exists.
   *  @property {!number} resultCode - remote API provided resultCode
   *  @property {number | undefined} currentBasePrice - latest base price
   *  @property {Array<int>|undefined} priceHistoryAsc - 90 day price history in ascending order.
   *                                                     Last array item being most recent.
   */

  /**
   *  @param {RawMarketInfoResponseData} resp
   *  @return {ParsedMarketInfoResponse}
   */
  static handleResponse(resp) {
    if (resp.resultCode !== 0) {
      return {
        isValid: false,
        resultCode: resp.resultCode,
        errorMsg: resp.resultMsg,
      };
    }
    const priceHistoryStr = resp.resultMsg.split('-');
    const priceHistory = priceHistoryStr.map((x) => parseInt(x, 10));
    return {
      isValid: true,
      resultCode: resp.resultCode,
      currentBasePrice: priceHistory[priceHistory.length - 1],
      priceHistoryAsc: priceHistory,
    };
  }

  /**
   *  @typedef {Object} RawMarketInfoResponseData
   *  @property {number} resultCode - 0 indicates success
   *  @property {string} resultMsg - 90 days of price information in ascending order.
   *                                 Delimited by a '-' last value being the most recent price.
   */

  /**
   * Get the price history of an item for the last 90 days.
   * @param {int} mainKey
   * @return {Promise<RawMarketInfoResponseData>}
   */
  async byMainKey(mainKey) {
    const params = this.getRequestParameters(mainKey);
    try {
      const resp = await this.client.post(
        params.url.href, params.opt.body, { headers: params.opt.headers },
      );

      if (resp.status !== 200) {
        throw new Error(
          `Invalid Response HTTP Status Code: ${resp.status} \n`
           + `Data: ${resp.data}`,
        );
      }
      return resp.data;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}

module.exports = GetMarketPriceInfo;
