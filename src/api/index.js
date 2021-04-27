const bdoClient = require('./bdo_client');
const bdoCodex = require('./bdo_codex');

const bdo = {
  ...bdoClient,
  ...bdoCodex,
};

module.exports = bdo;
