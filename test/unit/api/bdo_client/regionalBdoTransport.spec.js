const chai = require('chai');

chai.use(require('sinon-chai'));

const { expect } = chai;
const { stub, spy } = require('sinon');
const proxyquire = require('proxyquire');
const path = require('path');
const fs = require('fs');
const { bdoClientConfig } = require('../../../../src/config/bdoClient');

describe('api/bdo_client/regionalBdoTransport', () => {
  const transformResponse = stub();
  const transformError = stub();
  const makeTransformError = stub().returns(transformError);
  const axios = stub();
  axios.get = stub();
  axios.post = stub();
  axios.interceptors = {
    response: {
      use: spy(),
    },
  };
  axios.create = stub().returns(axios);

  const { getTransport } = proxyquire('../../../../src/utils/transport', {
    axios,
    './makeTransformError': makeTransformError,
    './transformResponse': transformResponse,
  });

  const resetHistory = () => {
    axios.resetHistory();
    axios.create.resetHistory();
    axios.get.resetHistory();
    axios.post.resetHistory();
    axios.interceptors.response.use.resetHistory();
    makeTransformError.resetHistory();
  };

  context('getBdoTransportOptions', () => {

    const config = {
      bdoClient: { ...bdoClientConfig.test },
      ENV: 'test',
    };

    const {
      getRegionalBdoTransport, getBdoTransportOptions, closeAll,
    } = proxyquire('../../../../src/api/bdo_client/regionalBdoTransport', {
      '../../utils/transport': { getTransport },
      '../../config': config,
    });

    const reset = () => {
      closeAll();
      resetHistory();
    };

    const validBaseURL = 'https://127.0.0.1:9990';
    const validOptions = {
      baseURL: validBaseURL,
      socksConf: {
        host: '127.0.0.1',
        port: 7770,
      },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'BlackDesert',
      },
      timeout: 2500,
      retries: 3,
    };

    it('throws on invalid region', () => {
      expect(() => getBdoTransportOptions('ABC')).to.throw();
    });

    it('does not throw on valid region', () => {
      expect(() => getBdoTransportOptions('NA')).to.not.throw();
      expect(() => getBdoTransportOptions('EU')).to.not.throw();
    });

    it('returns valid transport options', () => {
      const options = getBdoTransportOptions('NA');

      expect(options.baseUrl).to.equal(validOptions.baseUrl);
      expect(options.socksConf.host).to.equal(validOptions.socksConf.host);
      expect(options.socksConf.port).to.equal(`${validOptions.socksConf.port}`);
      expect(options.headers['Content-Type']).to.equal(validOptions.headers['Content-Type']);
      expect(options.headers['User-Agent']).to.equal(validOptions.headers['User-Agent']);
      expect(options.timeout).to.equal(validOptions.timeout);
      expect(options.retries).equal(validOptions.retries);
    });

    context('returns options that are correctly used by getTransport', () => {
      const options = getBdoTransportOptions('NA');
      before(() => {
        getRegionalBdoTransport('NA');
      });

      after(reset);

      it('initialized axios with valid configuration', () => {

        const args = axios.create.getCall(0).args[0];
        expect(args.baseUrl).to.equal(validOptions.baseUrl);
        expect(args.httpsAgent.proxy.host).to.equal(validOptions.socksConf.host);
        expect(args.httpsAgent.proxy.port).to.equal(validOptions.socksConf.port);
        expect(args.headers['Content-Type']).to.equal(validOptions.headers['Content-Type']);
        expect(args.headers['User-Agent']).to.equal(validOptions.headers['User-Agent']);
        expect(args.timeout).to.equal(validOptions.timeout);
        expect(args.retries).equal(validOptions.retries);
      });

    });

  });

  context('getBdoTransportOptions proxy', () => {

    it('config sets socksConf when USE_PROXY is set', () => {
      const config = {
        bdoClient: { ...bdoClientConfig.test },
        ENV: 'test',
      };
      config.bdoClient.USE_PROXY = true;

      const { getBdoTransportOptions } = proxyquire('../../../../src/api/bdo_client/regionalBdoTransport', {
        '../../utils/transport': { getTransport },
        '../../config': config,
      });
      const opts = getBdoTransportOptions('NA');
      expect(opts.socksConf).to.not.be.undefined;

    });

    it('config does not set socksConf when USE_PROXY is set to false', () => {
      const config = {
        bdoClient: { ...bdoClientConfig.test },
        ENV: 'test',
      };
      config.bdoClient.USE_PROXY = false;

      const { getBdoTransportOptions } = proxyquire('../../../../src/api/bdo_client/regionalBdoTransport', {
        '../../utils/transport': { getTransport },
        '../../config': config,
      });
      const opts = getBdoTransportOptions('NA');
      expect(opts.socksConf).to.be.undefined;

    });
  });

  context('gets valid transport wrapper by protocol', () => {
    const requestReturnOpt = (options, callback) => options.insecureHTTPParser;

    const http = {
      request: requestReturnOpt,
    };
    const https = {
      request: requestReturnOpt,
    };

    context('when the baseURL contains HTTP', () => {

      const config = {
        bdoClient: { ...bdoClientConfig.test },
        ENV: 'test',
      };

      const validBaseURL = 'http://127.0.0.1';
      config.bdoClient.BASE_URL_NA = validBaseURL;

      const { getRegionalBdoTransport, closeAll } = proxyquire('../../../../src/api/bdo_client/regionalBdoTransport', {
        '../../utils/transport': { getTransport },
        '../../config': config,
        http,
        https,
      });

      const reset = () => {
        closeAll();
        resetHistory();
      };

      before(() => {
        getRegionalBdoTransport('NA');
      });

      after(reset);

      it('initializes the httpAgent', () => {
        const args = axios.create.getCall(0).args[0];
        expect(args.baseURL).to.equal(validBaseURL);
        expect(args.transport.request()).to.equal(true);
        expect(args.transport.globalAgent.protocol).to.equal('http:');

      });
    });

    context('when the baseURL contains HTTPS', () => {

      const config = {
        bdoClient: { ...bdoClientConfig.test },
        ENV: 'test',
      };

      const validBaseURL = 'https://127.0.0.1';
      config.bdoClient.BASE_URL_NA = validBaseURL;

      const { getRegionalBdoTransport, closeAll } = proxyquire('../../../../src/api/bdo_client/regionalBdoTransport', {
        '../../utils/transport': { getTransport },
        '../../config': config,
        http,
        https,
      });

      const reset = () => {
        closeAll();
        resetHistory();
      };

      before(() => {
        const { get, post } = getRegionalBdoTransport('NA');
      });

      after(reset);

      it('initializes the httspAgent', () => {
        const args = axios.create.getCall(0).args[0];
        expect(args.baseURL).to.equal(validBaseURL);
        expect(args.transport.globalAgent.protocol).to.equal('https:');
        expect(args.transport.request()).to.equal(true);
      });
    });
  });

  context('function parseErrorResponseOrDefault', () => {

    const { parseErrorResponseOrDefault } = require('../../../../src/api/bdo_client/regionalBdoTransport');

    it('handles an undefined response resultMsg correctly', () => {
      const invalidResponseFile = path.resolve('test/unit/api/bdo_client/bdo_client_raw_responses/invalid-response.txt');
      const invalidResponseFileContents = fs.readFileSync(invalidResponseFile).toString();

      expect(parseErrorResponseOrDefault(invalidResponseFileContents).errorMsg).to.equal(invalidResponseFileContents);
    });

    it('handles an defined response resultMsg correctly', () => {
      const resp = {
        resultMsg: 'success',
      };

      expect(parseErrorResponseOrDefault(resp).errorMsg).to.equal(resp.resultMsg);
    });

    it('handles an defined response resultCode correctly', () => {
      const resp = {
        resultCode: 777,
      };

      expect(parseErrorResponseOrDefault(resp).resultCode).to.equal(resp.resultCode);
    });
  });

});
