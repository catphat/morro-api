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
      cookieReqTokenEU: config.MARKET_REQ_VERIFICATION_COOKIE_TOKEN_EU,
      cookieReqTokenNA: config.MARKET_REQ_VERIFICATION_COOKIE_TOKEN_NA,
      bodyReqTokenEU: config.MARKET_REQ_VERIFICATION_BODY_TOKEN_EU,
      bodyReqTokenNA: config.MARKET_REQ_VERIFICATION_BODY_TOKEN_NA,
      baseUrlEU: config.MARKET_BASE_URL_EU,
      baseUrlNA: config.MARKET_BASE_URL_NA,
    };

    this.ENDPOINTS = {
      MARKET_SEARCH: { path: 'Home/GetWorldMarketSearchList', method: 'POST' },
      MARKET_SUBLIST: { path: 'Home/GetWorldMarketSubList', method: 'POST' },
      MARKET_SELLBUYINFO: { path: 'Home/GetItemSellBuyInfo', method: 'POST' },
    };

    this.ERRORS = {
      region: new Error('region must be NA or EU'),
      endpointKey: new Error(`endpoint key must be one of the following :${Object.keys(this.ENDPOINTS).join(', ')}`),
      endpointValue: new Error('endpoint value must be one of the following:'
          + `${Object.values(this.ENDPOINTS).map((val) => val.path).join(', ')}`),
    };

    this.region = region;
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

  getCookieRequestVerificationToken() {
    return (this.region === 'NA' ? this.CONFIG.cookieReqTokenNA : this.CONFIG.cookieReqTokenEU);
  }

  getCookie() {
    return {
      cookie: {
        lang: 'en-US',
        __RequestVerificationToken: `${this.getCookieRequestVerificationToken(this.region)}`
        ,
      },
    };
  }

  getHeader() {
    return {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'x-requested-with': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
      cookie: qs.stringify(this.getCookie(this.region).cookie, { delimiter: ';' }),
    };
  }

  getBodyRequestVerificationToken() {
    return { __RequestVerificationToken: `${(this.region === 'NA' ? this.CONFIG.bodyReqTokenNA : this.CONFIG.bodyReqTokenEU)}` };
  }

  /**
   * @param { any } formData
   */
  getBody(formData = null) {
    const body = {
      body: this.getBodyRequestVerificationToken(this.region),
    };

    if (formData != null) {
      body.body = { ...body.body, ...formData };
    }
    body.body = qs.stringify(body.body);
    return body;
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
   * @param {"POST"|"GET"} method
   * @param {any} formData
   */
  getRequestOptions(method, formData = null) {
    return {
      method,
      headers: this.getHeader(this.region),
      body: (formData != null ? this.getBody(formData).body : null),
    };
  }
}

module.exports = MarketUtil;
