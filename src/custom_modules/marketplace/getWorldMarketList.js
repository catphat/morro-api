require('dotenv').config();
const MarketUtil = require('./marketUtil');

class GetWorldMarketList {
  constructor(region) {
    this.mu = new MarketUtil(region);
    this.client = this.mu.getClient(region);
  }

  /**
   * @param {!number} mainCategory
   * @param {number} subCategory
   * @param {number} keyType
   */
  getRequestParameters(mainCategory, subCategory = 0, keyType = 0) {
    const paramType = typeof (1);
    this.mu.throwIfParamUndefinedOrInvalidType('mainCategory', mainCategory, paramType);
    if (keyType !== 0) {
      this.mu.throwIfParamUndefinedOrInvalidType('keyType', keyType, paramType);
    }
    if (subCategory !== 0) {
      this.mu.throwIfParamUndefinedOrInvalidType('subCategory', subCategory, paramType);
    }

    const body = {
      keyType,
      mainCategory,
      subCategory,
    };
    return {
      url: this.mu.getUrlByByRelativeUrl('Trademarket/GetWorldMarketList'),
      opt: this.mu.getRequestOptions('POST', body),
    };
  }

  /**
   *  @typedef {Object} WorldMarketListItem
   *  @property {number} itemId
   *  @property {number} itemStock
   *  @property {number} totalTrades
   *  @property {number} basePrice
   */

  /**
   *  @typedef {Object} ParsedWorldMarketList
   *  @property {!boolean} isValid - received a valid resultCode (0)
   *  @property {string | undefined} errorMsg - remote API provided error message if exists.
   *  @property {!number} resultCode - remote API provided resultCode
   *  @property {Array<WorldMarketListItem> | undefined} itemList
   */

  /**
   * @param {RawWorldMarketListData} resp
   * @return {ParsedWorldMarketList}
   */
  static handleResponse(resp) {
    if (resp.resultCode !== 0) {
      return {
        isValid: false,
        resultCode: resp.resultCode,
        errorMsg: resp.resultMsg,
      };
    }
    const itemList = resp.resultMsg.split('|').map((x) => {
      const entry = x.split('-');
      const itemId = parseInt(entry[0], 10);
      const itemStock = parseInt(entry[1], 10);
      const totalTrades = parseInt(entry[2], 10);
      const basePrice = parseInt(entry[3], 10);
      return {
        itemId,
        itemStock,
        totalTrades,
        basePrice,
      };
    });

    return {
      isValid: true,
      resultCode: resp.resultCode,
      itemList,
    };
  }

  /**
   *  @typedef {Object} RawWorldMarketListData
   *  @property {number} resultCode - 0 indicates success
   *  @property {string} resultMsg - Item data delimited by a '|'.
   *                                 Each item is delimited by a '-'.
   *                                 i.e.: ItemId-ItemStock-TotalTrades-BasePrice|ItemId-...
   */

  /**
   * @param {!number} mainCategory
   * @param {number} subCategory
   * @param {number} keyType
   * @return {Promise<RawWorldMarketListData>}
   */
  async byMainCategorySubCategoryAndKeyType(mainCategory, subCategory = 0, keyType = 0) {
    const params = this.getRequestParameters(mainCategory, subCategory, keyType);
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

module.exports = GetWorldMarketList;
