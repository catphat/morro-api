const chai = require('chai');

chai.use(require('sinon-chai'));

const { expect } = chai;
const { match, stub, spy } = require('sinon');
const proxyquire = require('proxyquire');
const ValidationError = require('../../../src/errors/ValidationError');

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

  const baseUrl = 'https://fake.test.url.123abc.000';
  const baseUrl2 = 'https://fake.test.url.123abc.001';

  const defaults = {
    timeout: 2500,
  };

  const defaultHeaders = {
    'Content-Type': 'application/json',
    'User-Agent': 'Test User Agent',
  };

  const options = {
    ...defaults,
    headers: defaultHeaders,
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
      const conf = { ...options, headers: { ...defaultHeaders } };
      context('without socksConf', () => {
        before(() => {
          const testTransport = getTransport(baseUrl);
          testTransport(conf);
        });

        after(reset);

        it('did not configure the httpsAgent', () => {
          expect(axios.create.getCall(0).args[0].httpsAgent).to.be.undefined;
        });

      });
      context('with socksConf', () => {
        const socksConf = { host: '127.0.0.1', port: 9999 };

        before(() => {
          const testTransport = getTransport(baseUrl, socksConf);
          testTransport(conf);
        });

        after(reset);

        it('did initialize and configure the httpsAgent', () => {
          expect(axios.create.getCall(0).args[0].httpsAgent.proxy.host).to.equal(socksConf.host);
          expect(axios.create.getCall(0).args[0].httpsAgent.proxy.port).to.equal(socksConf.port);
        });

      });

      context('with invalid socksConf', () => {
        const socksConf = { host: '127.0.0.1' };
        let error;

        before(() => {

          try {
            const testTransport = getTransport(baseUrl, socksConf);
            testTransport(conf);
          } catch (err) {
            error = err;
          }
        });

        after(reset);

        it('threw a ValidationError', () => {
          expect(error).to.be.instanceof(ValidationError);
        });

        it('put the expected errors in the error', () => {
          expect(error.errors).to.deep.equal({
            port: [[undefined, 'Field is required']],
          });
        });

      });
    });

    context('before a transport has been got before', () => {

      context('with options', () => {
        const headers = { Authorization: 'Bearer 12345' };
        before(() => {
          const testTransport = getTransport(baseUrl);
          testTransport({ ...options, headers: { ...defaultHeaders, ...headers } });
        });

        after(reset);

        it('called axios.create with extra header', () => {
          expect(axios.create).to.have.been.calledOnceWith(
            match({
              ...defaults,
              headers: { ...defaultHeaders, ...headers },
            }),
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
          const testTransport = getTransport(baseUrl);
          const testTransport2 = getTransport(baseUrl);
          testTransport(options);
          testTransport(options);
          testTransport2(options);
          testTransport2(options);
        });

        after(reset);

        it('only called axios.create once', () => {
          expect(axios.create).to.have.been.calledOnce;
        });
      });

      context('called twice', () => {
        before(() => {
          const testTransport = getTransport(baseUrl);
          const testTransport2 = getTransport(baseUrl2);
          testTransport(options);
          testTransport2(options);
        });

        after(reset);

        it('only called axios.create once', () => {
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
      const testTransport = getTransport(baseUrl);
      const { get } = testTransport(options);
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
      const testTransport = getTransport(baseUrl);
      const { post } = testTransport(options);
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
