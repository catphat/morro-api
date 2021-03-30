const axios = require('axios');
const SocksProxyAgent = require('socks-proxy-agent');

const transformResponse = require('./transformResponse');
const makeTransformError = require('./makeTransformError');
const TransportError = require('../errors/TransportError');
const { validateFields } = require('../validation');

let transports = [];

const makeTransport = (options) => {
  const {
    baseUrl,
    headers,
    socksConf,
  } = options;

  const config = {
    baseUrl,
    headers,
    socksConf,
    ...options,
  };

  try {
    validateFields(config, { baseUrl: ['isRequired'] });
    validateFields(headers, { 'Content-Type': ['isRequired'], 'User-Agent': ['isRequired'] });
    if (socksConf !== undefined && Object.keys(socksConf).length > 0) {
      validateFields(socksConf, {
        host: ['isRequired'],
        port: ['isRequired'],
      });
      config.httpsAgent = new SocksProxyAgent(`socks5://${socksConf.host}:${socksConf.port}`);
    }
  } catch (error) {
    throw new TransportError(error);
  }

  transports[baseUrl] = axios.create(config);

  transports[baseUrl].interceptors
    .response.use(transformResponse, makeTransformError(transports[baseUrl]));
};

/**
 * @typedef socksConf
 * @property {!string} host
 * @property {!number|string} port
 */

/**
 * @typedef transportOptions
 * @property {!string} baseUrl - the baseUrl used for the transport instance.
 *                              Will create one transport per unique baseUrl.
 * @property {!Object} headers - the headers used for the transport
 * @property {?socksConf} socksConf - if provided transport will initialize with socks proxy.
 * @property {?number} timeout
 * @property {?number} retries
 */

/**
 *
 * @param {transportOptions} transportOptions
 * @return {{post: (function(*=, *=): *), get: (function(*=): *)}}
 */
const getTransport = (transportOptions) => {
  const { baseUrl } = transportOptions;
  if (!transports[baseUrl]) makeTransport(transportOptions);
  const get = async (path) => transports[baseUrl].get(path);
  const post = async (path, data) => transports[baseUrl].post(path, data);

  return { get, post };
};

const close = (baseUrl) => {
  transports[baseUrl] = undefined;
};

const closeAll = () => {
  transports = [];
};

module.exports = { getTransport, close, closeAll };
