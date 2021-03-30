const chai = require('chai');

chai.use(require('sinon-chai'));

const { expect } = chai;
const { match, stub, spy } = require('sinon');
const proxyquire = require('proxyquire');
const TransportError = require('../../../src/errors/TransportError');

describe('utils/transport', () => {
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

  const { getTransport, closeAll } = proxyquire('../../../src/utils/transport', {
    axios,
    './makeTransformError': makeTransformError,
    './transformResponse': transformResponse,
  });

  const transportOptions = {
    baseUrl: 'https://fake.test.url.123abc.000',
    timeout: 2500,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Test User Agent',
    },
  };

  const resetHistory = () => {
    axios.resetHistory();
    axios.create.resetHistory();
    axios.get.resetHistory();
    axios.post.resetHistory();
    axios.interceptors.response.use.resetHistory();
    makeTransformError.resetHistory();
  };

  describe('#getTransport', () => {
    const reset = () => {
      closeAll();
      resetHistory();
    };

    context('handles socks proxy initialization', () => {

      context('without socksConf', () => {
        const conf = { ...transportOptions };
        before(() => {
          getTransport(conf);
        });

        after(reset);

        it('did not configure the httpsAgent', () => {
          expect(axios.create.getCall(0).args[0].httpsAgent).to.be.undefined;
        });

      });

      context('with socksConf', () => {
        const socksConf = { host: '127.0.0.1', port: 9999 };
        const conf = { ...transportOptions, socksConf };

        before(() => {
          getTransport(conf);
        });

        after(reset);

        it('did initialize and configure the httpsAgent', () => {
          expect(axios.create.getCall(0).args[0].httpsAgent.proxy.host).to.equal(socksConf.host);
          expect(axios.create.getCall(0).args[0].httpsAgent.proxy.port).to.equal(socksConf.port);
        });

      });

      context('with invalid socksConf', () => {
        const socksConf = { host: '127.0.0.1' };
        const conf = { ...transportOptions, socksConf };
        let error;

        before(() => {

          try {
            getTransport(conf);
          } catch (err) {
            error = err;
          }
        });

        after(reset);

        it('threw a TransportError', () => {
          expect(error).to.be.instanceof(TransportError);
        });

        it('put the expected errors in the error', () => {
          expect(error.errors.errors).to.deep.equal({ port: [[undefined, 'Field is required']] });
        });

      });
    });

    context('before a transport has been got before', () => {

      context('with options', () => {
        const headers = { Authorization: 'Bearer 12345' };
        const conf = {
          ...transportOptions,
          headers: {
            ...transportOptions.headers,
            ...headers,
          },
        };
        before(() => {
          getTransport(conf);
        });

        after(reset);

        it('called axios.create with extra header', () => {
          expect(axios.create).to.have.been.calledOnceWith(
            match(conf),
          );
        });

        it('called makeTransformError with axios', () => {
          expect(makeTransformError).to.have.been.calledOnceWith(axios);
        });

        it('called axios.interceptors.response.use', () => {
          expect(axios.interceptors.response.use).to.have.been.calledOnceWith(
            transformResponse,
            transformError,
          );
        });
      });

      context('not called twice', () => {
        before(() => {

          const conf = { ...transportOptions };
          getTransport(conf);
          getTransport(conf);
        });

        after(reset);

        it('only called axios.create once', () => {
          expect(axios.create).to.have.been.calledOnce;
        });
      });

      context('called twice', () => {
        before(() => {
          const conf = { ...transportOptions };
          getTransport(conf);
          getTransport({ ...conf, baseUrl: 'https://123.testbase.url2' });
        });

        after(reset);

        it('called axios.create twice', () => {
          expect(axios.create).to.have.been.calledTwice;
        });
      });
    });
  });

  describe('#get', () => {
    const path = 'test';
    const expected = 'expected';
    let result;

    before(async () => {
      axios.get.resolves(expected);
      const conf = { ...transportOptions };
      const { get } = getTransport(conf);
      result = await get(path);
    });

    it('called axios.get with the path', () => {
      expect(axios.get).to.have.been.calledOnceWith(path);
    });

    it('returned the expected result', () => {
      expect(result).to.equal(expected);
    });
  });

  describe('#post', () => {
    const path = 'test';
    const data = 'some data';
    const expected = 'expected';
    let result;

    before(async () => {
      axios.post.resolves(expected);
      const conf = { ...transportOptions };
      const { post } = getTransport(conf);
      result = await post(path, data);
    });

    it('called axios.post with the path and data', () => {
      expect(axios.post).to.have.been.calledOnceWith(path, data);
    });

    it('returned the expected result', () => {
      expect(result).to.equal(expected);
    });
  });
});
