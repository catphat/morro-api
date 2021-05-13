const fs = require('fs');
const bdo = require('../src/api');

const outDir = 'test/unit/domain/query/parsed_responses';

const get = async (mainKey, region) => {
  const result = await bdo.getWorldMarketSubList(region)({
    mainKey,
    keyType: 0,
  });

  return result;
};

const mainKey = 11609;
const region = 'NA';

Promise.all([get(mainKey, region).then((x) => {
  fs.writeFileSync(`${outDir}/getWorldMarketSubList-${mainKey}.json`, JSON.stringify(x));

  const tasks = x.marketSubList.map(async (y) => {
    const { enhancementMin } = y;
    const orders = await bdo.getBiddingInfoList(region)({
      mainKey,
      subKey: enhancementMin,
    });
    fs.writeFileSync(`${outDir}/getBiddingInfoList-${mainKey}-${enhancementMin}.json`, JSON.stringify(orders));
    console.log(`${y.itemId}-${y.enhancementMin}`);
  });
  Promise.all(tasks);
})]);
