require('dotenv').config();
const MarketUtil = require('./marketUtil');

class GetWorldMarketSubList {
  constructor(region) {
    this.mu = new MarketUtil(region);
    this.client = this.mu.getClient(region);
  }

  /**
   * @param {!number} mainKey
   * @param {number} keyType
   * @return {{opt: {headers: {"User-Agent": string, "content-type": string},
   *           method: "POST"|"GET", body: string|null}, url: URL}}
   */
  getRequestParameters(mainKey, keyType = 0) {
    const paramType = typeof (1);
    this.mu.throwIfParamUndefinedOrInvalidType('mainKey', mainKey, paramType);
    if (keyType !== 0) {
      this.mu.throwIfParamUndefinedOrInvalidType('keyType', keyType, paramType);
    }

    const body = {
      keyType,
      mainKey,
    };

    return {
      url: this.mu.getUrlByByRelativeUrl('Trademarket/GetWorldMarketSubList'),
      opt: this.mu.getRequestOptions('POST', body),
    };
  }

  /**
   *  @typedef {Object} WorldMarketSubListItem
   *  @property {number} itemId
   *  @property {number} enhancementMin
   *  @property {number} enhancementMax
   *  @property {number} basePrice
   *  @property {number} currentStock
   *  @property {number} totalTrades
   *  @property {number} priceHardCapMin
   *  @property {number} priceHardCapMax
   *  @property {number} lastSalePrice
   *  @property {number} lastSaleTime
   */

  /**
   *  @typedef {Object} ParsedWorldSubMarketList
   *  @property {!boolean} isValid - received a valid resultCode (0)
   *  @property {string | undefined} errorMsg - remote API provided error message if exists.
   *  @property {!number} resultCode - remote API provided resultCode
   *  @property {Array<WorldMarketSubListItem> | undefined} marketSubList
   */
  static handleResponse(resp) {
    if (resp.resultCode !== 0) {
      return {
        isValid: false,
        resultCode: resp.resultCode,
        errorMsg: resp.resultMsg,
      };
    }
    const marketSubList = resp.resultMsg.split('|').map((x) => {
      const entry = x.split('-');
      const itemId = parseInt(entry[0], 10);
      const enhancementMin = parseInt(entry[1], 10);
      const enhancementMax = parseInt(entry[2], 10);
      const basePrice = parseInt(entry[3], 10);
      const currentStock = parseInt(entry[4], 10);
      const totalTrades = parseInt(entry[5], 10);
      const priceHardCapMin = parseInt(entry[6], 10);
      const priceHardCapMax = parseInt(entry[7], 10);
      const lastSalePrice = parseInt(entry[8], 10);
      const lastSaleTime = parseInt(entry[9], 10);
      return {
        itemId,
        enhancementMin,
        enhancementMax,
        basePrice,
        currentStock,
        totalTrades,
        priceHardCapMin,
        priceHardCapMax,
        lastSalePrice,
        lastSaleTime,
      };
    });

    return {
      isValid: true,
      resultCode: resp.resultCode,
      marketSubList,
    };
  }

  /**
   * @typedef {Object} RawWorldMarketSubListData
   *  @property {number} resultCode - 0 indicates success
   *  @property {string} resultMsg - Each entry is delimited by a '|'.
   *                                 Each item of each entry is delimited by a '-'.
   *                                 i.e.: ItemId-EnhancementMin-EnhancementMax-BasePrice...
   */

  /**
   *
   * @param mainKey
   * @param keyType
   * @return {Promise<RawWorldMarketSubListData>}
   */
  async byMainKeyAndKeyType(mainKey, keyType = 0) {
    const params = this.getRequestParameters(mainKey, keyType);
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

module.exports = GetWorldMarketSubList;