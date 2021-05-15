const path = require('path');
const fs = require('fs');
const csv = require('csv');

const getRegionItemAndCategoryIds = (regionCode) => {
  const filePath = path.resolve(`dump/data-bdo-market-${regionCode}-ItemIdsAndMainCategoryIds.json`);
  return JSON.parse(fs.readFileSync(filePath).toString());
};

const NAItemAndCategoryIds = [];
const EUItemAndCategoryIds = [];

const findCategoryId = (itemsAndCategoryIds, regionCode, itemId) => {
  if (itemsAndCategoryIds.length > 0) {
    const found = itemsAndCategoryIds[0].find((x) => x.id === itemId);
    return found.mainCategoryId;
  }
  itemsAndCategoryIds.push(getRegionItemAndCategoryIds(regionCode));
  return findCategoryId(itemsAndCategoryIds, regionCode, itemId);
};

const getRegionItemAndCategoryIdByRegionAndItemId = (regionCode, itemId) => {
  switch (regionCode.toUpperCase()) {
    case 'EU':
      return findCategoryId(EUItemAndCategoryIds, regionCode, itemId);
    case 'NA':
      return findCategoryId(NAItemAndCategoryIds, regionCode, itemId);
    default:
      throw new Error(`Invalid regionCode: ${regionCode}`);
  }
};

const getISOTimestampFromString = (timestampStr) => {
  if (timestampStr) {
    return new Date(timestampStr * 1000).toISOString();
  }
  return 'NULL';
};

const itemsCSVHeader = 'poll_timestamp_tz, region_code, category_id, item_id, enhancement_level_min, '
                        + 'base_price, current_stock, total_trades, last_sale_timestamp_tz, last_sale_price\n';

const getItemsCSVRow = (
  pollTimestampTz, regionCode, categoryId, itemId, enhancementLevelMin,
  basePrice, currentStock, totalTrades, lastSaleTimeTimestampTz, lastSalePrice,
) => {
  if (!pollTimestampTz) {
    throw new Error('pollTimestampTz cannot be undefined.');
  }
  if (!regionCode) {
    throw new Error('regionId cannot be undefined');
  }
  if (!categoryId) {
    throw new Error('categoryId cannot be undefined');
  }
  if (!itemId) {
    throw new Error('itemId cannot be undefined');
  }
  if (!enhancementLevelMin && enhancementLevelMin !== 0) {
    throw new Error('enhancementLevelMin cannot be undefined');
  }
  if (!basePrice) {
    throw new Error('basePrice cannot be undefined');
  }
  if (!currentStock && currentStock !== 0) {
    throw new Error('currentStock cannot be undefined');
  }
  if (!totalTrades && totalTrades !== 0) {
    throw new Error('totalTrades cannot be undefined');
  }

  return `${pollTimestampTz}|${regionCode}|${categoryId}|${itemId}|${enhancementLevelMin}`
  + `|${basePrice}|${currentStock}|${totalTrades}|${((lastSaleTimeTimestampTz) || 'NULL')}|${((lastSalePrice) || 'NULL')}\n`;
};

const ordersCSVHeader = 'poll_timestamp_tz, region_code, category_id, item_id, enhancement_level_min, '
  + 'order_type, price, amount\n';

const getOrdersCSVRow = (
  pollTimestampTz, regionCode, categoryId, itemId, enhancementLevelMin,
  orderType, price, amount,
) => {
  if (!pollTimestampTz) {
    throw new Error('pollTimestampTz cannot be undefined.');
  }
  if (!regionCode) {
    throw new Error('regionId cannot be undefined');
  }
  if (!categoryId) {
    throw new Error('categoryId cannot be undefined');
  }
  if (!itemId) {
    throw new Error('itemId cannot be undefined');
  }
  if (!enhancementLevelMin && enhancementLevelMin !== 0) {
    throw new Error('enhancementLevelMin cannot be undefined');
  }
  if (!orderType) {
    throw new Error('orderType cannot be undefined');
  }
  if (!price) {
    throw new Error('price cannot be undefined');
  }
  if (!amount) {
    throw new Error('amount cannot be undefined');
  }

  return `${pollTimestampTz}|${regionCode}|${categoryId}|${itemId}|${enhancementLevelMin}`
    + `|${orderType}|${price}|${amount}\n`;
};

const convertV1aBiddingInfo2OrdersCSVRows = (
  filePath, itemId, regionCode, categoryId, enhancementLevelMin, pollTimestampTz, response,
) => response.biddingList.reduce((result, x) => {
  let orderType;
  let amount;
  const { price } = x;

  if (x.sellOrders > 0) {
    orderType = 'a';
    amount = Number.parseInt(x.sellOrders, 10);
  } else if (x.buyOrders > 0) {
    orderType = 'b';
    amount = Number.parseInt(x.buyOrders, 10);
  }

  if (orderType && amount) {
    result.push(getOrdersCSVRow(
      pollTimestampTz, regionCode, categoryId, itemId, enhancementLevelMin, orderType, price, amount,
    ));
  }
  return result;
}, []);

const convertV1aSublist2ItemsCSVRows = (filePath, itemId, regionCode, categoryId, pollTimestampTz, response) => response.marketSubList.map((x) => {
  const enhancementLevelMin = Number.parseInt(x.enhancementMin, 10);
  const basePrice = Number.parseInt(x.basePrice, 10);
  const currentStock = Number.parseInt(x.currentStock, 10);
  const totalTrades = Number.parseInt(x.totalTrades, 10);
  const lastSaleTime = getISOTimestampFromString(x.lastSaleTime);
  let lastSalePrice;
  if (x.lastSalePrice || x.lastSalePrice >= 0) {
    lastSalePrice = Number.parseInt(x.lastSalePrice, 10);
  }

  return getItemsCSVRow(
    pollTimestampTz, regionCode, categoryId, itemId, enhancementLevelMin, basePrice, currentStock, totalTrades, lastSaleTime, lastSalePrice,
  );
});

const getConvertedV1aObj = (responseType, file, rows) => ({
  responseType,
  filePath: file,
  rows,
});

// region is always NA
// v1a types:
//    biddinginfo-206-0-1619710987.json
//    responseType - itemId - enhancementMinLevel - pollTimestampTz
//
//    sublist-15638-1619726855.json
//    responseType - itemId - pollTimestampTz
const convertV1aJSONFile2CSV = (file) => {
  const fileName = path.basename(file);

  if (!fileName.includes('.json')) {
    throw new Error(`Not JSON file: ${file}`);
  }

  const fileNameArray = fileName.replace('.json', '').split('-');
  const response = JSON.parse(fs.readFileSync(file).toString());
  const itemId = Number.parseInt(fileNameArray[1], 10);
  const categoryId = getRegionItemAndCategoryIdByRegionAndItemId('NA', itemId);

  if (!response.isValid || response.resultCode !== 0) {
    throw new Error(`Invalid File: ${file}`);
  }

  if (fileNameArray.length === 4) {
    const enhancementLevelMin = Number.parseInt(fileNameArray[2], 10);
    const pollTimestampTz = getISOTimestampFromString(fileNameArray[3]);
    const rows = convertV1aBiddingInfo2OrdersCSVRows(file,
      itemId, 'NA', categoryId, enhancementLevelMin, pollTimestampTz, response);

    return getConvertedV1aObj('orders', file, rows);
  }

  if (fileNameArray.length === 3) {
    const pollTimestampTz = getISOTimestampFromString(fileNameArray[2]);
    const rows = convertV1aSublist2ItemsCSVRows(file, itemId, 'NA', categoryId, pollTimestampTz, response);
    return getConvertedV1aObj('items', file, rows);
  }

  throw new Error('not valid v1a file');
};

// v1b types:
//    biddinginfo-NA-731101-19-1619773265.json
//    responseType - regionCode - itemId - enhancementMinLevel - pollTimestampTz
//
//    sublist-NA-21660-1619771124.json
//    responseType- regionCode - itemId - pollTimestampTz
const convertV1bJSONFile2CSV = (file) => {
  const fileName = path.basename(file);

  if (!fileName.includes('.json')) {
    throw new Error(`Not JSON file: ${file}`);
  }

  const fileNameArray = fileName.replace('.json', '').split('-');

  const regionCode = fileNameArray[1];
  const itemId = Number.parseInt(fileNameArray[2], 10);

  const categoryId = getRegionItemAndCategoryIdByRegionAndItemId(regionCode, itemId);
  const response = JSON.parse(fs.readFileSync(file).toString());

  if (!response.isValid || response.resultCode !== 0) {
    throw new Error(`Invalid File: ${file}`);
  }

  if (fileNameArray.length === 5) {
    const enhancementLevelMin = Number.parseInt(fileNameArray[3], 10);
    const pollTimestampTz = getISOTimestampFromString(fileNameArray[4]);

    const rows = convertV1aBiddingInfo2OrdersCSVRows(file,
      itemId, regionCode, categoryId, enhancementLevelMin, pollTimestampTz, response);

    return getConvertedV1aObj('orders', file, rows);
  }

  if (fileNameArray.length === 4) {
    const pollTimestampTz = getISOTimestampFromString(fileNameArray[3]);
    const rows = convertV1aSublist2ItemsCSVRows(file, itemId, regionCode, categoryId, pollTimestampTz, response);
    return getConvertedV1aObj('items', file, rows);
  }

  throw new Error('not valid v1b file');
};

const getErrorFileLogRow = (file, error) => `${file}|${error}\n`;

const convertV1aOrV1bType = (dir, version, convertFunc, fileExtType) => {
  const outputCSVDir = `${dir}/../`;
  const outputOrdersCSVFile = `${outputCSVDir}/${version}-${path.basename(dir)}-orders.csv`;
  const outputItemsCSVFile = `${outputCSVDir}/${version}-${path.basename(dir)}-items.csv`;
  const outputErrorLog = `${outputCSVDir}/${version}-${path.basename(dir)}-errors.csv`;

  const errors = [];

  fs.writeFileSync(outputOrdersCSVFile, ordersCSVHeader);
  fs.writeFileSync(outputItemsCSVFile, itemsCSVHeader);

  const files = fs.readdirSync(dir).filter((file) => file.includes(fileExtType));
  const fileCount = files.length;
  let completedFileCount = 0;

  files.forEach((x) => {
    let convertedObj;
    try {
      convertedObj = convertFunc(`${dir}/${x}`);
    } catch (e) {
      fs.appendFileSync(outputErrorLog, getErrorFileLogRow(x, e.message));
      errors.push({ file: x, error: e.message });
    }
    if (convertedObj) {
      switch (convertedObj.responseType) {
        case 'items':
          convertedObj.rows.forEach((row) => fs.appendFileSync(outputItemsCSVFile, row));
          break;
        case 'orders':
          convertedObj.rows.forEach((row) => fs.appendFileSync(outputOrdersCSVFile, row));
          break;
        default:
          throw new Error(`invalid response type for file: ${convertedObj.filePath}`);
      }
    }

    completedFileCount += 1;

    console.clear();
    console.log(`Current File ${x}`);
    console.log(`Remaining: ${fileCount - completedFileCount} | Progress ${((completedFileCount / fileCount)).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })}`);
    if (errors.length > 0) {
      errors.forEach((err) => {
        console.log(`${err.file}: ${err.message}`);
      });
    }
  });
};

const getRegionCodeById = (id) => {
  switch (id) {
    case 1:
      return 'NA';
    case 2:
      return 'EU';
    default:
      throw new Error(`Invalid RegionId: ${id}`);
  }
};
// v1b types:
//    1620438775-EU-market_items_table.csv
//    beginningTimestamp - regionCode - responseType
//
//    1620438775-EU-market_orders_table.csv
//    beginningTimestamp - regionCode - responseType
const convertV1cCSVFile2CSVAsync = async (file, outputItemsCsvFile, outputOrdersCsvFile, outputErrorLog) => new Promise((resolve, reject) => {
  const fileName = path.basename(file);

  if (!fileName.includes('.csv')) {
    throw new Error(`Not CSV file: ${file}`);
  }

  const fileNameArray = fileName.replace('.csv', '')
    .split('-');
  const responseType = fileNameArray[2].toLowerCase();

  const stream = fs.createReadStream(file);
  const parser = csv.parse({ delimiter: '|' });

  stream.on('ready', () => {
    stream.pipe(parser);
  });

  parser.on('readable', () => {
    let record;
    while (record = parser.read()) {
      if (responseType === 'market_items_table') {
        const pollTimestampTz = record[0];
        const itemId = Number.parseInt(record[1], 10);
        const regionId = Number.parseInt(record[2], 10);
        const regionCode = getRegionCodeById(regionId);

        const categoryId = getRegionItemAndCategoryIdByRegionAndItemId(regionCode, itemId);
        const enhancementMinLevel = Number.parseInt(record[3], 10);
        const basePrice = Number.parseInt(record[4], 10);
        const currentStock = Number.parseInt(record[5], 10);
        const totalTrades = Number.parseInt(record[6], 10);
        let lastSaleTimeTz = record[7];
        const lastSaleTimeTzDate = new Date(lastSaleTimeTz);
        if (lastSaleTimeTzDate.getFullYear() === 1970) {
          lastSaleTimeTz = 'NULL';
        }
        let lastSalePrice;
        const recordLastSalePrice = record[8];
        if (recordLastSalePrice || recordLastSalePrice >= 0) {
          lastSalePrice = Number.parseInt(recordLastSalePrice, 10);
        }

        fs.appendFileSync(outputItemsCsvFile, getItemsCSVRow(
          pollTimestampTz, regionCode, categoryId, itemId, enhancementMinLevel, basePrice, currentStock, totalTrades, lastSaleTimeTz, lastSalePrice,
        ));
      } else if (responseType === 'market_orders_table') {
        const pollTimestampTz = record[0];
        const itemId = Number.parseInt(record[1], 10);
        const regionId = Number.parseInt(record[2], 10);
        const regionCode = getRegionCodeById(regionId);

        const categoryId = getRegionItemAndCategoryIdByRegionAndItemId(regionCode, itemId);
        const enhancementMinLevel = Number.parseInt(record[3], 10);

        const orderTypeInt = Number.parseInt(record[4], 10);
        let orderType;
        if (orderTypeInt === 0) {
          orderType = 'b';
        } else if (orderTypeInt === 1) {
          orderType = 'a';
        } else {
          throw new Error(`invalid order type: ${orderTypeInt}`);
        }

        const price = Number.parseInt(record[5], 10);
        const amount = Number.parseInt(record[6], 10);

        fs.appendFileSync(outputOrdersCsvFile, getOrdersCSVRow(pollTimestampTz, regionCode, categoryId, itemId, enhancementMinLevel, orderType, price, amount));
      }
    }
  });

  parser.on('error', (err) => {
    console.error(err.message);
    reject();
  });

  parser.on('end', () => {
    resolve();
  });
});

const convertV1cTypeAsync = async (dir) => {
  const outputCSVDir = `${dir}/../`;

  const files = fs.readdirSync(dir).filter((file) => file.includes('.csv'));
  const fileCount = files.length;

  const version = 'v1c';
  const outputOrdersCSVFile = `${outputCSVDir}/${version}-${path.basename(dir)}-orders.csv`;
  const outputItemsCSVFile = `${outputCSVDir}/${version}-${path.basename(dir)}-items.csv`;
  const outputErrorLog = `${outputCSVDir}/${version}-${path.basename(dir)}-errors.csv`;

  fs.writeFileSync(outputOrdersCSVFile, ordersCSVHeader);
  fs.writeFileSync(outputItemsCSVFile, itemsCSVHeader);

  for (let i = 0; i < fileCount; i += 1) {
    const file = files[i];
    await convertV1cCSVFile2CSVAsync(`${dir}/${file}`, outputItemsCSVFile, outputOrdersCSVFile, outputErrorLog);
    console.clear();
    console.log(`Current File ${file}`);
    console.log(`Remaining: ${fileCount - i} | Progress ${((i / fileCount)).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })}`);
  }
};

// convertAllOfType('../../MAPI_DEV_DB_DATA/v1b/subListData2', 'v1b', convertV1bJSONFile2CSV, '.json');
// convertAllOfType('../../MAPI_DEV_DB_DATA/v1b/subListData3a', 'v1b', convertV1bJSONFile2CSV, '.json');
// convertAllOfType('../../MAPI_DEV_DB_DATA/v1b/subListData3b', 'v1b', convertV1bJSONFile2CSV, '.json');
// convertAllOfType('../../MAPI_DEV_DB_DATA/v1b/subListData4', 'v1b', convertV1bJSONFile2CSV, '.json');
// convertAllOfType('../../MAPI_DEV_DB_DATA/v1b/subListData5', 'v1b', convertV1bJSONFile2CSV, '.json');
// convertAllOfType('../../MAPI_DEV_DB_DATA/v1b/subListData6', 'v1b', convertV1bJSONFile2CSV, '.json');
// convertAllOfType('../../MAPI_DEV_DB_DATA/v1b/subListData7', 'v1b', convertV1bJSONFile2CSV, '.json');

// convertAllOfType('../../MAPI_DEV_DB_DATA/v1c/subListData7', 'v1c', convertV1cCSVFile2CSVAsync, '.csv');
//convertV1cTypeAsync('../../MAPI_DEV_DB_DATA/v1c/subListData7');
 convertV1cTypeAsync('../../MAPI_DEV_DB_DATA/v1c/subListData8');
