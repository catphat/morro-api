const flatCache = require("flat-cache");
const path = require("path");
const cache = flatCache.load(path.join(`${__dirname}/../cache/dbCache`));

const flatCacheMiddleware = (req, res, next) => {
  let key = "__express__" + req.originalUrl || req.url;
  let cacheContent = cache.getKey(key);
  if (cacheContent) {
    res.send(cacheContent);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      cache.setKey(key, body);
      cache.save();
      res.sendResponse(body);
    };
    next();
  }
};

module.exports = flatCacheMiddleware;
