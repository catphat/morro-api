require('dotenv').config();
const axios = require('axios');
const qs = require('qs');
const config = require('../../config');

const tokenEU = config.MARKET_TOKEN_EU;
const tokenNA = config.MARKET_TOKEN_NA;
const baseUrlEU = config.MARKET_BASE_URL_EU;
const baseUrlNA = config.MARKET_BASE_URL_NA;

class Market {
  static ENDPOINTS = {
    MARKET_SEARCH: 'GetWorldMarketSearchList',
    MARKET_SUBLIST: 'GetWorldMarketSubList',
    MARKET_SELLBUYINFO: 'GetItemSellBuyInfo',
  };

  static regionError = new Error('region must be NA or EU');

  static endpointError = new Error(`endpoint must be one of the following: ${Object.keys(this.ENDPOINTS).join(', ')}`);

  /**
   * @param {'NA'|'EU'} region
   */
  static throwIfInvalidRegion(region) {
    if ((region == null) || (region !== 'NA' && region !== 'EU')) {
      throw this.regionError;
    }
  }

  /**
   * @param {string} endpoint
   */
  static throwIfInvalidEndpoint(endpoint) {
    if (endpoint == null || (this.ENDPOINTS)[endpoint] === undefined) {
      throw this.endpointError;
    }
  }

  /**
   * @param {'NA'|'EU'} region
   */
  static getRequestVerificationToken(region) {
    this.throwIfInvalidRegion(region);
    return `__RequestVerificationToken=${(region === 'NA' ? tokenNA : tokenEU)}`;
  }

  /**
   * @param {'NA'|'EU'} region
   */
  static getHeader(region) {
    this.throwIfInvalidRegion(region);
    return {
      accept: '*/*',
      user_Agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) '
          + 'Version/6.0 Mobile/10A5376e Safari/8536.25',
      DNT: '1',
      cookie: this.getRequestVerificationToken(region),
    };
  }

  /**
   * @param {'NA'|'EU'} region
   */
  static getBaseURL(region) {
    this.throwIfInvalidRegion(region);
    return (region === 'NA' ? baseUrlNA : baseUrlEU);
  }

  /**
   * @param {"NA"|"EU"} region
   * @param {string} endpoint
   */
  static getUrl(region, endpoint) {
    this.throwIfInvalidRegion(region);
    this.throwIfInvalidEndpoint(endpoint);
    const baseUrl = this.getBaseURL(region);
    const relativeUrl = this.ENDPOINTS[endpoint];
    return new URL(relativeUrl, baseUrl);
  }

  /**
   * @param {string} endpoint
   * @param {any} data
   * @param {'NA'|'EU'} region
   */
  static fetchData(endpoint, data, region) {
    this.throwIfInvalidRegion(region);
    this.throwIfInvalidEndpoint(endpoint);
    axios
      .post(this.getUrl(region, endpoint).href, data, { headers: this.getHeader(region) })
      .then((x) => x.data);
  }

  /**
     * Search the marketplace for an item by name.
     * @param {String} name - The name of the item you'd like to search.
     * @param region
     * @returns {Promise<string>} - Returns an array of possible items.
     */
  static searchItem(name, region) {
    const formData = qs.stringify({
      __RequestVerificationToken: region === 'NA' ? tokenNA : tokenEU,
      searchText: name,
    });

    return this.fetchData('MARKET_SEARCH', formData, region)
      .then((x) => JSON.stringify(x));
  }

  /**
     * Fetch the item by the ID, can be found by searching
     * the item on BDOCodex, and copying the last digits in the URL.
     * @param {Number|String} id - The BDOCodex ID of the item.
     * @param region
     */
  static fetchItemById(id, region) {
    const formData = qs.stringify({
      __RequestVerificationToken: region === 'NA' ? tokenNA : tokenEU,
      mainKey: id,
      usingClient: 0,
    });

    return this.fetchData(endpoint, formData).then((x) => x.detailList);
  }

  /**
     * Fetch the item by the ID, can be found by searching
     * the item on BDOCodex, and copying the last digits in the URL.
     * @param {Number|String} id - The BDOCodex ID of the item.
     * @param {String} region - The market region to get data from
     */
  fetchItemStats(id, region) {
    throw new Error('not implemented');
    const endpoint = '/GetItemSellBuyInfo';

    const formData = qs.stringify({
      __RequestVerificationToken: region === 'NA' ? tokenNA : tokenEU,
      chooseKey: 0,
      count: 0,
      countText: 0,
      grade: 0,
      isUp: true,
      keyType: 0,
      mainKey: id,
      subKey: 0,
      sumCountText: 0,
    });

    // Baseprice us used to achieve a more consistent result. This will prevent market fluctuation to be cached for 1 hour
    // If more than 10 000 items are sold at min price, consider flooded
    return this.fetchData(endpoint, formData).then((x) => ({
      pricePerOne: x.basePrice ? x.basePrice : null,
      count: x.marketConditionList
        ? x.marketConditionList.reduce((a, mat) => a + mat.sellCount, 0)
        : null,
      flooded: x.marketConditionList
        ? !!(x.marketConditionList[0].sellCount > 50000
                    && x.marketConditionList[0].pricePerOne === x.basePrice)
        : null,
      maxed: x.marketConditionList
        ? x.marketConditionList[x.marketConditionList.length - 1].buyCount
                > 5000
        : null,
    }));
  }
}

module.exports = Market;
