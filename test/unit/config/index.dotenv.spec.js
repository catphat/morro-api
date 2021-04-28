const { expect } = require('chai');
const { describe, it } = require('mocha');

/**
 * Traverses the cache to search for all the cached
 * files of the specified module name
 */
const searchCache = (moduleName, callback) => {
  // Resolve the module identified by the specified name
  let mod = require.resolve(moduleName);

  // Check if the module has been resolved and found within
  // the cache
  if (mod && ((mod = require.cache[mod]) !== undefined)) {
    // Recursively go over the results
    (function traverse(mod) {
      // Go over each of the module's children and
      // traverse them
      mod.children.forEach((child) => {
        traverse(child);
      });

      // Call the specified callback providing the
      // found cached module
      callback(mod);
    }(mod));
  }
};

// require() caches, so the config module must be purged between tests
// https://stackoverflow.com/a/14801711
const purgeCache = (moduleName) => {
  // Traverse the cache looking for the files
  // loaded by the specified module name
  searchCache(moduleName, (mod) => {
    delete require.cache[mod.id];
  });

  // Remove cached paths to the module.
  // Thanks to @bentael for pointing this out.
  Object.keys(module.constructor._pathCache).forEach((cacheKey) => {
    if (cacheKey.indexOf(moduleName) > 0) {
      delete module.constructor._pathCache[cacheKey];
    }
  });
};

describe('config', () => {

  context('should have correct dotenv values when NODE_ENV is ', () => {
    afterEach(() => {
      purgeCache('../../../src/config');
    });

    it('test', () => {
      process.env.NODE_ENV = 'test';

      const config = require('../../../src/config');
      expect(config.ENV).to.equal('test');
      expect(config.bdoClient.BASE_URL_NA).to.equal('http://127.0.0.1:9990');
      expect(config.bdoClient.BASE_URL_EU).to.equal('http://127.0.0.1:9991');
      expect(config.bdoClient.PROXY_URL).to.equal('127.0.0.1');
      expect(config.bdoClient.PROXY_PORT).to.equal('7770');
      expect(config.bdoClient.USE_PROXY).to.equal(true);
    });

    it('development', () => {
      process.env.NODE_ENV = 'development';

      const config = require('../../../src/config');
      expect(config.ENV).to.equal('development');
      expect(config.bdoClient.BASE_URL_NA).to.equal('https://na-trade.naeu.playblackdesert.com/Trademarket');
      expect(config.bdoClient.BASE_URL_EU).to.equal('https://eu-trade.naeu.playblackdesert.com/Trademarket');
      expect(config.bdoClient.PROXY_URL).to.equal('127.0.0.1');
      expect(config.bdoClient.PROXY_PORT).to.equal('9990');
      expect(config.bdoClient.USE_PROXY).to.equal(true);
    });

    it('production', () => {
      process.env.NODE_ENV = 'production';

      delete require.cache['../../../src/config'];
      const config = require('../../../src/config');
      expect(config.ENV).to.equal('production');
      expect(config.bdoClient.BASE_URL_NA).to.equal('https://na-trade.naeu.playblackdesert.com/Trademarket');
      expect(config.bdoClient.BASE_URL_EU).to.equal('https://eu-trade.naeu.playblackdesert.com/Trademarket');
      expect(config.bdoClient.PROXY_URL).to.equal('127.0.0.1');
      expect(config.bdoClient.PROXY_PORT).to.equal('1110');
      expect(config.bdoClient.USE_PROXY).to.equal(true);
    });

    it('default', () => {
      delete process.env.NODE_ENV;

      const config = require('../../../src/config');
      expect(config.ENV).to.equal('development');
      expect(config.bdoClient.BASE_URL_NA).to.equal('https://na-trade.naeu.playblackdesert.com/Trademarket');
      expect(config.bdoClient.BASE_URL_EU).to.equal('https://eu-trade.naeu.playblackdesert.com/Trademarket');
      expect(config.bdoClient.PROXY_URL).to.equal('127.0.0.1');
      expect(config.bdoClient.PROXY_PORT).to.equal('9990');
      expect(config.bdoClient.USE_PROXY).to.equal(true);
    });

  });
});
