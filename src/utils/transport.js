const axios = require('axios');
const SocksProxyAgent = require('socks-proxy-agent');

const transformResponse = require('./transformResponse');
const makeTransformError = require('./makeTransformError');
const { validateFields } = require('../validation');

let transports = [];

const makeTransport = ({ headers, ...options }) => {
  const { baseUrl, socksConf } = options;
  const config = {
    ...options,
    headers,
  };

  validateFields(config, { baseUrl: ['isRequired'] });
  validateFields(headers, { 'Content-Type': ['isRequired'], 'User-Agent': ['isRequired'] });

  if (Object.keys(socksConf).length > 0) {
    validateFields(socksConf, { host: ['isRequired'], port: ['isRequired'] });
    config.httpsAgent = new SocksProxyAgent(`socks5://${socksConf.host}:${socksConf.port}`);
  }

  transports[baseUrl] = axios.create(config);

  transports[baseUrl].interceptors
    .response.use(transformResponse, makeTransformError(transports[baseUrl]));
};

const getTransport = (baseUrl, socksConf = {}) => (opts) => {
  const options = { baseUrl, socksConf, ...opts };
  if (!transports[baseUrl]) makeTransport(options);
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
