const https = require('https');
const http = require('http');
const { getTransport, closeAll } = require('../../utils/transport');
const { transportOptions, defaultHeaders } = require('./defaults');

const config = require('../../config');
const TransportError = require('../../errors/TransportError');

/**
 * @param {'NA'|'EU'} region
 */
const throwIfInvalidRegion = (region) => {
  if ((region == null) || (region !== 'NA' && region !== 'EU')) {
    throw new TransportError('Region must be in NA or EU');
  }
};

const getBdoTransportOptions = (region) => {
  throwIfInvalidRegion(region);
  const baseURL = (region === 'NA' ? config.bdoClient.BASE_URL_NA : config.bdoClient.BASE_URL_EU);

  const url = new URL(baseURL);
  let wrapper;
  if (url.protocol === 'https:') {
    wrapper = {
      ...https,
      request: (options, callback) => https.request({
        ...options,
        insecureHTTPParser: true,
      }, callback),
    };
  }
  /* istanbul ignore next */
  else if (url.protocol === 'http:') {
    wrapper = {
      ...http,
      request: (options, callback) => http.request({
        ...options,
        insecureHTTPParser: true,
      }, callback),
    };
  }

  const options = {
    baseURL,
    ...transportOptions,
    headers: defaultHeaders,
    retries: config.bdoClient.REQUEST_RETRIES,
    transport: wrapper,
  };

  if (config.bdoClient.USE_PROXY) {
    options.socksConf = {
      host: config.bdoClient.PROXY_URL,
      port: config.bdoClient.PROXY_PORT,
    };
  }

  return options;
};

const parseErrorResponseOrDefault = (resp) => {
  let isValid = true;
  if (resp.resultCode === 0 && resp.resultMsg === '0') {
    isValid = false;
  } else if (resp.resultCode === undefined || resp.resultMsg === undefined) {
    isValid = false;
  }

  if (!isValid) {
    const errorResp = {
      isValid,
    };
    if (resp.resultMsg !== undefined) {
      errorResp.errorMsg = resp.resultMsg;
    } else {
      errorResp.errorMsg = `${resp}`;
    }

    if (resp.resultCode !== undefined) {
      errorResp.resultCode = resp.resultCode;
    }

    return errorResp;
  }

  return null;
};

const getRegionalBdoTransport = (region) => {
  const options = getBdoTransportOptions(region);
  return getTransport(options);
};

module.exports = {
  getRegionalBdoTransport, getBdoTransportOptions, closeAll, parseErrorResponseOrDefault,
};
