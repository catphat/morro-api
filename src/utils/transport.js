const axios = require('axios');
const SocksProxyAgent = require('socks-proxy-agent');

const transformResponse = require('./transformResponse');
const makeTransformError = require('./makeTransformError');
const TransportError = require('../errors/TransportError');
const { validateFields } = require('../validation');

let transports = [];

const makeTransport = (options) => {
  const {
    baseURL,
    headers,
    socksConf,
    timeout,
    retries,
    transport,
  } = options;

  const config = {
    baseURL,
    headers,
    timeout,
    retries,
  };

  if (transport !== undefined) {
    config.transport = transport;
  }

  try {
    validateFields(config, { baseURL: ['isRequired'] });
    validateFields(headers, { 'Content-Type': ['isRequired'], 'User-Agent': ['isRequired'] });
    if (socksConf !== undefined && Object.keys(socksConf).length > 0) {
      validateFields(socksConf, {
        host: ['isRequired'],
        port: ['isRequired'],
      });
      config.httpsAgent = new SocksProxyAgent(`socks5://${socksConf.host}:${socksConf.port}`);
    }

    transports[baseURL] = axios.create({...config});

    transports[baseURL].interceptors
      .response.use(transformResponse, makeTransformError(transports[baseURL]));
  } catch (error) {
    throw new TransportError(error);
  }
};

/**
 * @typedef RequiredHeaders
 * @property {string} 'User-Agent'
 * @property {string} 'Content-Agent'
 */

/**
 * @typedef socksConf
 * @property {!string} host
 * @property {!number|string} port
 */

const getTransport = (transportOptions) => {
  const { baseURL } = transportOptions;
  if (!transports[baseURL]) makeTransport(transportOptions);
  const get = async (path) => transports[baseURL].get(path);
  const post = async (path, data, opt) => transports[baseURL].post(path, data, opt);

  return { get, post };
};

const close = (baseUrl) => {
  transports[baseUrl] = undefined;
};

const closeAll = () => {
  transports = [];
};

module.exports = { getTransport, close, closeAll };
