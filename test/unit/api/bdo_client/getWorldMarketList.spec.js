const doTest = require('../../../helpers/bdoClientHandlerTest');

describe('bdo_client/getWorldMarketList', () => {
  const config = {
    responseFile: 'worldmarketlist-1_1_0.json',
    expectedFile: 'worldmarketlist-expected-parse-1_1_0.json',
    handler: 'getWorldMarketList',
    params: { mainCategory: 11607, subCategory: 1 },
    validation: {
      mainCategory: ['isRequired', 'isPositiveNumber'],
      subCategory: ['isRequired', 'isNonNegativeNumber'],
      keyType: ['isNonNegativeNumber'],
    },
  };

  doTest(config);
});
