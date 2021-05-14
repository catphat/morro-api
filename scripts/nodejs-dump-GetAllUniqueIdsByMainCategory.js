const fs = require('fs');
const path = require('path');

const { getWorldMarketList } = require('../src/api/bdo_client/getWorldMarketList');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getWorldMarketListNA = getWorldMarketList('NA');
const getWorldMarketListEU = getWorldMarketList('EU');
const mainCategoryIdsPath = path.resolve('./dump/db_bdo_main_category_names.json');
const mainCategoryIdsFile = fs.readFileSync(mainCategoryIdsPath);
const mainCategoryIds = JSON.parse(mainCategoryIdsFile.toString());

const getByMainCategory = async (region, mainCategory, subCategory) => {
  const payload = {
    mainCategory,
    subCategory,
    keyType: 0,
  };
  let result;
  if (region === 'NA') {
    result = await getWorldMarketListNA(payload);
  } else if (region === 'EU') {
    result = await getWorldMarketListEU(payload);
  }
  if (result.resultMsg !== undefined && result.resultMsg === '0') {
    return 0;
  }
  if (Number.isNaN(result.itemList[0].itemStock)) {
    return 0;
  }

  return result;
};

const listAll = async (region) => {
  const uniqueIdsAndCategory = [];

  for (const x of mainCategoryIds) {
    await delay(200);
    const mainCategoryId = Number.parseInt(x.id, 10);
    const result = await getByMainCategory(region, mainCategoryId, 0);
    result.itemList.forEach((item) => {
      console.log(`${mainCategoryId}-${item.itemId}`);
      uniqueIdsAndCategory.push({
        id: item.itemId,
        mainCategoryId,
      });
    });
  }
  const dumpOutfileFile = `data-bdo-market-${region}-ItemIdsAndMainCategoryIds.json`;
  fs.writeFileSync(dumpOutfileFile, JSON.stringify(uniqueIdsAndCategory));
};

listAll('NA').then(() => console.log('finished'));
