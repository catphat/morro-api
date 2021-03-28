require('dotenv').config();
const MarketUtil = require('./marketUtil');

class GetBiddingInfoList {
  constructor(region) {
    this.mu = new MarketUtil(region);
    this.client = this.mu.getClient(region);
  }

  /**
   * @param {number} mainKey
   */
  getRequestParameters(mainKey) {
    const body = {
      keyType: 0,
      mainKey,
      subKey: 0,
    };

    // noinspection SpellCheckingInspection
    return {
      url: this.mu.getUrlByByRelativeUrl('Trademarket/GetBiddingInfoList'),
      opt: this.mu.getRequestOptions('POST', body),
    };
  }

  /**
   *  @typedef {Object} BiddingInfoItem
   *  @property {number} Price
   *  @property {number} SellOrders
   *  @property {number} BuyOrders
   */

  /**
   *  @typedef {Object} ParsedBiddingInfoList
   *  @property {!boolean} isValid - received a valid resultCode (0)
   *  @property {string | undefined} errorMsg - remote API provided error message if exists.
   *  @property {!number} resultCode - remote API provided resultCode
   *  @property {Array<BiddingInfoItem>|undefined} biddingList - all orders for item
   */

  /**
   * @param {RawBiddingInfoListData} resp
   */
  static handleResponse(resp) {
    if (resp.resultCode !== 0) {
      return {
        isValid: false,
        resultCode: resp.resultCode,
        errorMsg: resp.resultMsg,
      };
    }
    const biddingList = resp.resultMsg.split('|').map((x) => {
      const entry = x.split('-');
      const price = parseInt(entry[0], 10);
      const sellOrders = parseInt(entry[1], 10);
      const buyOrders = parseInt(entry[2], 10);
      return {
        price,
        sellOrders,
        buyOrders,
      };
    });

    return {
      isValid: true,
      resultCode: resp.resultCode,
      biddingList,
    };
  }

  /**
   *  @typedef {Object} RawBiddingInfoListData
   *  @property {number} resultCode - 0 indicates success
   *  @property {string} resultMsg - Buy/Sell orders delimited by a '|'.
   *                                 Each order item being delimited by a '-'.
   *                                 i.e.: Price-SellOrders-BuyOrders|Price-SellOrders-BuyOrders...
   */

  /**
   * Get current buy/sell orders for an item.
   * @param {int} mainKey
   * @return {Promise<RawBiddingInfoListData>}
   */
  async byMainKey(mainKey) {
    const params = this.getRequestParameters(mainKey);
    try {
      const resp = await this.client.post(
        params.url.href, params.opt.body, { headers: params.opt.headers },
      );
      this.mu.throwIfInvalidHTTPStatusCodeError(resp.status, resp.data);

      return resp.data;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}

module.exports = GetBiddingInfoList;
