const doTest = require('../../../helpers/bdoClientHandlerTest');
const isPositiveNumber = require('../../../../src/validation/isPositiveNumber');

describe('bdo_client/getWorldMarketSubList', () => {
  const config = {
    responseFile: 'worldmarketsublist-11607.json',
    expectedFile: 'worldmarketsublist-expected-parse-11607.json',
    handler: 'getWorldMarketSubList',
    params: { mainKey: 11607, keyType: 0 },
    validation: {
      mainKey: ['isRequired', 'isPositiveNumber'],
      keyType: ['isRequired', 'isPositiveNumber'],
    },
  };

  doTest(config);
});
