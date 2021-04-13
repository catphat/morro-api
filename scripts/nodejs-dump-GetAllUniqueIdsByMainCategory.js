const fs = require('fs');
const path = require('path');

const { getWorldMarketList } = require('../src/api/bdo_client/getWorldMarketList');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const dumpOutfileFile = 'data-bdo-market-ItemIdsAndMainCategoryIds.json';
const mainCategoryIdsPath = path.resolve('data-bdo-market-MainCategoryIds.json');
const mainCategoryIdsFile = fs.readFileSync(mainCategoryIdsPath);
const mainCategoryIds = JSON.parse(mainCategoryIdsFile.toString());

const getByMainCategory = async (mainCategory, subCategory) => {
  const payload = {
    mainCategory,
    subCategory,
    keyType: 0,
  };
  const result = await getWorldMarketList('NA')(payload);
  if (result.resultMsg !== undefined && result.resultMsg === '0') {
    return 0;
  }
  if (Number.isNaN(result.itemList[0].itemStock)) {
    return 0;
  }

  return result;
};

const listAll = async () => {
  const uniqueIdsAndCategory = [];

  for (const x of mainCategoryIds) {
    await delay(200);
    const mainCategoryId = Number.parseInt(x.id, 10);
    const result = await getByMainCategory(mainCategoryId, 0);
    result.itemList.forEach((item) => {
      console.log(`${mainCategoryId}-${item.itemId}`);
      uniqueIdsAndCategory.push({
        id: item.itemId,
        mainCategoryId,
      });
    });
  }

  fs.writeFileSync(dumpOutfileFile, JSON.stringify(uniqueIdsAndCategory));
};

listAll().then(() => console.log('finished'));
