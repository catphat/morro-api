const fs = require('fs');
const path = require('path');

const dumpDir = path.resolve('dump');

const getUniqueMarketIds = (region) => {
  const uniqueIds = [];
  const marketItemCategoryFile = `${dumpDir}/data-bdo-market-${region}-ItemIdsAndMainCategoryIds.json`;
  const marketItemCategory = JSON.parse(fs.readFileSync(marketItemCategoryFile).toString());

  marketItemCategory.forEach((x) => {
    if (!uniqueIds.some((i) => i === x.id)) {
      uniqueIds.push({
        id: x.id,
        region,
        category: x.mainCategoryId,
      });
    }
  });

  uniqueIds.sort((a, b) => a - b);
  return uniqueIds;
};

const getAndWriteUniqueMarketIdsToFile = (region) => {
  const itemIds = getUniqueMarketIds(region);
  const items = {
    itemIds,
  };

  const outputSeedFile = `${dumpDir}/data-bdo-market-${region}-itemIds.json`;
  fs.writeFileSync(outputSeedFile, JSON.stringify(items));
};

getAndWriteUniqueMarketIdsToFile('NA');
