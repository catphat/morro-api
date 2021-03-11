require('dotenv').config();
const qs = require('qs');
const config = require('../../config');

class MarketUtil {
    static CONFIG = {
      cookieReqTokenEU: config.MARKET_REQ_VERIFICATION_COOKIE_TOKEN_EU,
      cookieReqTokenNA: config.MARKET_REQ_VERIFICATION_COOKIE_TOKEN_NA,
      bodyReqTokenEU: config.MARKET_REQ_VERIFICATION_BODY_TOKEN_EU,
      bodyReqTokenNA: config.MARKET_REQ_VERIFICATION_BODY_TOKEN_NA,
      baseUrlEU: config.MARKET_BASE_URL_EU,
      baseUrlNA: config.MARKET_BASE_URL_NA,
    }

    static ENDPOINTS = {
      MARKET_SEARCH: { path: 'Home/GetWorldMarketSearchList', method: 'POST' },
      MARKET_SUBLIST: { path: 'Home/GetWorldMarketSubList', method: 'POST' },
      MARKET_SELLBUYINFO: { path: 'Home/GetItemSellBuyInfo', method: 'POST' },
    };

    static ERRORS = {
      region: new Error('region must be NA or EU'),
      endpointKey: new Error(`endpoint key must be one of the following :${Object.keys(this.ENDPOINTS).join(', ')}`),
      endpointValue: new Error('endpoint value must be one of the following:'
      + `${Object.values(this.ENDPOINTS).map((val) => val.path).join(', ')}`),
    }

    /**
     * @param {'NA'|'EU'} region
     */
    static throwIfInvalidRegion(region) {
      if ((region == null) || (region !== 'NA' && region !== 'EU')) {
        throw this.ERRORS.region;
      }
    }

    /**
     * @param {MarketUtil.ENDPOINTS|{path: string, method: string}} endpoint
     */
    static throwIfInvalidEndpointKey(endpoint) {
      if (endpoint == null || (this.ENDPOINTS)[endpoint] === undefined) {
        throw this.ERRORS.endpointKey;
      }
    }

    /**
     * @param {ENDPOINTS.path} endpoint
     */
    static throwIfInvalidEndpointValue(endpoint) {
      if (endpoint == null) {
        throw this.ERRORS.endpointValue;
      }
      const isValid = Object.keys(this.ENDPOINTS)
        .some((k) => this.ENDPOINTS[k].path === endpoint);
      if (!isValid) {
        throw this.ERRORS.endpointValue;
      }
    }

    /**
     * @param {'NA'|'EU'} region
     */
    static getCookieRequestVerificationToken(region) {
      this.throwIfInvalidRegion(region);
      return (region === 'NA' ? this.CONFIG.cookieReqTokenNA : this.CONFIG.cookieReqTokenEU);
    }

    /**
     * @param {"NA"|"EU"} region
     */
    static getCookie(region) {
      this.throwIfInvalidRegion(region);
      return {
        cookie: {
          lang: 'en-US',
          __RequestVerificationToken: `${this.getCookieRequestVerificationToken(region)}`
          ,
        },
      };
    }

    /**
     * @param {'NA'|'EU'} region
     */
    static getHeader(region) {
      this.throwIfInvalidRegion(region);
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
        cookie: qs.stringify(this.getCookie(region).cookie, { delimiter: ';' }),
      };
    }

    /**
     * @param {'NA'|'EU'} region
     */
    static getBodyRequestVerificationToken(region) {
      this.throwIfInvalidRegion(region);
      return { __RequestVerificationToken: `${(region === 'NA' ? this.CONFIG.bodyReqTokenNA : this.CONFIG.bodyReqTokenEU)}` };
    }

    /**
     * @param {"NA"|"EU"} region
     * @param { any } formData
     */
    static getBody(region, formData = null) {
      this.throwIfInvalidRegion(region);
      const body = {
        body: this.getBodyRequestVerificationToken(region),
      };

      if (formData != null) {
        body.body = { ...body.body, ...formData };
      }
      body.body = qs.stringify(body.body);
      return body;
    }

    /**
     * @param {'NA'|'EU'} region
     */
    static getBaseURL(region) {
      this.throwIfInvalidRegion(region);
      return (region === 'NA' ? this.CONFIG.baseUrlNA : this.CONFIG.baseUrlEU);
    }

    /**
     * @param {"NA"|"EU"} region
     * @param {ENDPOINTS | {path: string, method: string}} endpoint
     */
    static getUrlByEndpoint(region, endpoint) {
      this.throwIfInvalidRegion(region);
      this.throwIfInvalidEndpointKey(endpoint);
      const baseUrl = this.getBaseURL(region);
      const relativeUrl = this.ENDPOINTS[endpoint].path;
      return new URL(relativeUrl, baseUrl);
    }

    /**
     * @param {"NA"|"EU"} region
     * @param {ENDPOINTS.path} endpointPath
     */
    static getUrlByEndpointPath(region, endpointPath) {
      this.throwIfInvalidRegion(region);
      this.throwIfInvalidEndpointValue(endpointPath);
      const baseUrl = this.getBaseURL(region);
      return new URL(endpointPath, baseUrl);
    }

    /**
     * @param {"NA"|"EU"} region
     * @param {"POST"|"GET"} method
     * @param {any} formData
     */
    static getRequestOptions(region, method, formData = null) {
      this.throwIfInvalidRegion(region);
      return {
        method,
        headers: this.getHeader(region),
        body: (formData != null ? this.getBody(region, formData).body : null),
      };
    }

    /**
     * @param {"NA"|"EU"} region
     * @param {string} searchText
     */
    static getRequestWorldMarketSearchList(region, searchText) {
      const endpoint = this.ENDPOINTS.MARKET_SEARCH;
      return {
        url: this.getUrlByEndpointPath(region, endpoint.path).href,
        opt: this.getRequestOptions(region, endpoint.method, { searchText }),
      };
    }
}

module.exports = MarketUtil;
