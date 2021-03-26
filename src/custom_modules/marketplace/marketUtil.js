require('dotenv').config();
const qs = require('qs');
const SocksProxyAgent = require('socks-proxy-agent');
const axios = require('axios');

const config = require('../../config');

class MarketUtil {
  /**
   * @param {'NA'|'EU'} region
   */

  constructor(region) {
    this.throwIfInvalidRegion(region);
    this.CONFIG = {
      baseUrlEU: config.MARKET_BASE_URL_EU,
      baseUrlNA: config.MARKET_BASE_URL_NA,
    };

    this.ENDPOINTS = {
      MARKET_SEARCH: { path: 'Trademarket/GetWorldMarketSearchList', method: 'POST' },
      MARKET_SUBLIST: { path: 'Trademarket/GetWorldMarketSubList', method: 'POST' },
      MARKET_MARKETPRICEINFO: { path: 'Trademarket/GetMarketPriceInfo', method: 'POST' },
    };

    this.ERRORS = {
      region: new Error('region must be NA or EU'),
      endpointKey: new Error(`endpoint key must be one of the following :${Object.keys(this.ENDPOINTS).join(', ')}`),
      endpointValue: new Error('endpoint value must be one of the following:'
          + `${Object.values(this.ENDPOINTS).map((val) => val.path).join(', ')}`),
    };

    this.region = region;
  }

  /**
   *
   * @param {number} statusCode
   * @param {object} data
   */
  static throwIfInvalidHTTPStatusCodeError(statusCode, data) {
    if (statusCode !== 200) {
      throw new Error(
        `Invalid Response HTTP Status Code: ${statusCode} \n`
          + `Data: ${data}`,
      );
    }
  }

  getClient() {
    let baseURL = config.MARKET_BASE_URL_NA;
    let host = config.MARKET_SOCKS_PROXY_URL_NA;
    let port = config.MARKET_SOCKS_PROXY_PORT_NA;
    if (this.region === 'EU') {
      baseURL = config.MARKET_BASE_URL_EU;
      host = config.MARKET_SOCKS_PROXY_URL_EU;
      port = config.MARKET_SOCKS_PROXY_PORT_EU;
    }

    if (config.USE_SOCKS_PROXY_NA) {
      const httpsAgent = new SocksProxyAgent(`socks5://${host}:${port}`);
      return axios.create({ baseURL, httpsAgent });
    }
    if (config.USE_SOCKS_PROXY_EU) {
      const httpsAgent = new SocksProxyAgent(`socks5://${host}:${port}`);
      return axios.create({ baseURL, httpsAgent });
    }
    return axios.create({ baseURL });
  }

  /**
     * @param {'NA'|'EU'} region
     */
  throwIfInvalidRegion(region) {
    if ((region == null) || (region !== 'NA' && region !== 'EU')) {
      throw this.ERRORS.region;
    }
  }

  /**
     * @param {MarketUtil.ENDPOINTS|{path: string, method: string}} endpoint
     */
  throwIfInvalidEndpointKey(endpoint) {
    if (endpoint == null || (this.ENDPOINTS)[endpoint] === undefined) {
      throw this.ERRORS.endpointKey;
    }
  }

  /**
     * @param {ENDPOINTS.path} endpoint
     */
  throwIfInvalidEndpointValue(endpoint) {
    if (endpoint == null) {
      throw this.ERRORS.endpointValue;
    }
    const isValid = Object.keys(this.ENDPOINTS)
      .some((k) => this.ENDPOINTS[k].path === endpoint);
    if (!isValid) {
      throw this.ERRORS.endpointValue;
    }
  }

  getHeader() {
    return {
      'content-type': 'application/json',
      'User-Agent': 'BlackDesert',
    };
  }

  getBaseURL() {
    return (this.region === 'NA' ? this.CONFIG.baseUrlNA : this.CONFIG.baseUrlEU);
  }

  /**
   * @param {ENDPOINTS | {path: string, method: string}} endpoint
   */
  getUrlByEndpoint(endpoint) {
    this.throwIfInvalidEndpointKey(endpoint);
    const baseUrl = this.getBaseURL(this.region);
    const relativeUrl = this.ENDPOINTS[endpoint].path;
    return new URL(relativeUrl, baseUrl);
  }

  /**
   * @param {ENDPOINTS.path} endpointPath
   */
  getUrlByEndpointPath(endpointPath) {
    this.throwIfInvalidEndpointValue(endpointPath);
    const baseUrl = this.getBaseURL(this.region);
    return new URL(endpointPath, baseUrl);
  }

  /**
   * @param {string} relUrl - ex: Trademarket/GetBiddingInfoList
   */
  getUrlByByRelativeUrl(relUrl) {
    const baseUrl = this.getBaseURL(this.region);
    return new URL(relUrl, baseUrl);
  }

  /**
   * @param {"POST"|"GET"} method
   * @param {any} formData
   */
  getRequestOptions(method, formData = null) {
    return {
      method,
      headers: this.getHeader(this.region),
      body: (formData != null ? JSON.stringify(formData) : null),
    };
  }
}

module.exports = MarketUtil;
