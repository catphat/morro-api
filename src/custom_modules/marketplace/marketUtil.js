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

    this.ERRORS = {
      HTTPStatusCode: (statusCode, data) => new Error(
        `Invalid Response HTTP Status Code: ${statusCode} \n`
            + `Data: ${data}`,
      ),
      region: new Error('region must be NA or EU'),
    };

    this.region = region;
  }

  /**
   *
   * @param {number} statusCode
   * @param {object} data
   */
  throwIfInvalidHTTPStatusCodeError(statusCode, data) {
    if (statusCode !== 200) {
      throw this.ERRORS.HTTPStatusCode(statusCode, data);
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
