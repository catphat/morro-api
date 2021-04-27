const { expect } = require('chai');
const { spy, stub } = require('sinon');
const proxyquire = require('proxyquire');

const bdoClientFns = require('../../../src/api/bdo_client');
const bdoCodexFns = require('../../../src/api/bdo_codex');

const getStubs = (fns) => Object.keys(fns)
  .reduce((acc, elem) => {
    acc[elem] = stub()
      .returns(elem);
    return acc;
  }, {});

describe('src/api/index', () => {

  const bdoClientStubs = getStubs(bdoClientFns);
  const bdoCodexStubs = getStubs(bdoCodexFns);

  const bdoClientStubbedMethods = Object.keys(bdoClientStubs);
  const bdoCodexStubbedMethods = Object.keys(bdoCodexStubs);

  const bdo = proxyquire('../../../src/api', {
    './bdo_client': bdoClientStubs,
    './bdo_codex': bdoCodexStubs,
  });

  const resetHistory = () => {
    bdoClientStubbedMethods.forEach((method) => {
      bdoClientStubs[method].resetHistory();
    });
    bdoCodexStubbedMethods.forEach((method) => {
      bdoCodexStubs[method].resetHistory();
    });
  };

  let api;

  const testBdoClientMethods = () => {
    it('returned all available methods', () => {
      bdoClientStubbedMethods.forEach((method) => {
        expect(api).to.have.property(method);
      });
    });
  };

  const testBdoCodextMethods = () => {
    it('returned all available methods', () => {
      bdoCodexStubbedMethods.forEach((method) => {
        expect(api).to.have.property(method);
      });
    });
  };

  context('default configuration', () => {
    before(() => {
      api = bdo;
    });

    after(resetHistory);

    testBdoClientMethods();
    testBdoCodextMethods();
  });
});
