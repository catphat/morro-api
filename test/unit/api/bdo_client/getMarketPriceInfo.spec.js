const doTest = require('../../../helpers/bdoClientHandlerTest');

describe('bdo_client/getWorldMarketList', () => {
  const config = {
    responseFile: 'marketpriceinfo-11607.json',
    expectedFile: 'marketpriceinfo-expected-parse-11607.json',
    handler: 'getMarketPriceInfo',
    params: { mainKey: 11607, keyType: 0, subKey: 0 },
    validation: {
      mainKey: ['isRequired', 'isPositiveNumber'],
      subKey: ['isNonNegativeNumber'],
      keyType: ['isNonNegativeNumber'],
    },
  };

  doTest(config);
});
