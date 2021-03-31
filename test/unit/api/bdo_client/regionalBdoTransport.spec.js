const chai = require('chai');

chai.use(require('sinon-chai'));

const { expect } = chai;
const { stub, spy } = require('sinon');
const proxyquire = require('proxyquire');

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

  const { getRegionalBdoTransport, getBdoTransportOptions, closeAll } = proxyquire('../../../../src/api/bdo_client/regionalBdoTransport', {
    '../../utils/transport': { getTransport },
  });

  const resetHistory = () => {
    axios.resetHistory();
    axios.create.resetHistory();
    axios.get.resetHistory();
    axios.post.resetHistory();
    axios.interceptors.response.use.resetHistory();
    makeTransformError.resetHistory();
  };

  const reset = () => {
    closeAll();
    resetHistory();
  };

  context('getBdoTransportOptions', () => {
    const validOptions = {
      baseUrl: 'https://na-trade.naeu.playblackdesert.com/Trademarket',
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

});
