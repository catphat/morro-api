const fs = require('fs');

const getBdoMarketItemState = require('../src/domain/query/BdoMarketItemById');

const dumpDir = '../../MAPI_DEV_DB_DATA/subListData7';
const logFile = `${dumpDir}/log-errors.txt`;

const getMarketItemsQueue = (itemIds) => {
  const itemQueue = [];
  itemIds.forEach((x) => {
    itemQueue.push(x);
  });
  return itemQueue;
};

const getMarketItemsQueueFromJSONFile = (region) => {
  const marketItemIdsFilePath = `./dump/data-bdo-market-${region}-itemIds.json`;
  const marketItemIdsFileContents = fs.readFileSync(marketItemIdsFilePath).toString();
  const marketItemIds = JSON.parse(marketItemIdsFileContents).itemIds;
  return getMarketItemsQueue(marketItemIds);
};

const getRegionId = (regionName) => {
  switch (regionName.toLowerCase()) {
    case 'na':
      return 1;
    case 'eu':
      return 2;
  }
};

const getTablePrimaryKey = (itemState, enhancementMin) => {
  const observedTime = itemState.observationTime;
  const observationISO = new Date(observedTime * 1000).toISOString();
  const { itemId } = itemState;
  const regionId = getRegionId(itemState.region);
  return {
    observedTime: observationISO,
    itemId,
    regionId,
    enhancementMin,
  };
};

const getSubListCsvRowsV1 = (itemState) => itemState.subList.map((x) => {
  const primaryKey = getTablePrimaryKey(itemState, x.enhancementMin);
  const { basePrice } = x;
  const { currentStock } = x;
  const { totalTrades } = x;
  const { lastSaleTime } = x;
  const { lastSalePrice } = x;
  const lastSaleTimeISO = new Date(lastSaleTime * 1000).toISOString();

  return `${primaryKey.observedTime}|${primaryKey.itemId}|${primaryKey.regionId}|${primaryKey.enhancementMin}|${basePrice}|${currentStock}|${totalTrades}|${lastSaleTimeISO}|${lastSalePrice}\n`;
});

const getMarketOrderRowsV1 = (itemState) => {
  const rows = [];
  itemState.subList.forEach((x) => {
    const primaryKey = getTablePrimaryKey(itemState, x.enhancementMin);

    if (x.bids.length > 0) {
      rows.push(x.bids.map((y) => `${primaryKey.observedTime}|${primaryKey.itemId}|${primaryKey.regionId}|${primaryKey.enhancementMin}|1|${y.price}|${y.amount}\n`));
    }

    if (x.asks.length > 0) {
      rows.push(x.asks.map((y) => `${primaryKey.observedTime}|${primaryKey.itemId}|${primaryKey.regionId}|${primaryKey.enhancementMin}|0|${y.price}|${y.amount}\n`));
    }
  });

  return rows;
};
const getAllSubListsByMarketItemsQueue = async (marketItemQueue, region, fileNameTimestamp) => {
  let errorCount = 0;
  let lastError;
  while (marketItemQueue.length > 0 && errorCount < 10) {
    const itemId = marketItemQueue[marketItemQueue.length - 1];

    console.log(`${fileNameTimestamp}: ${region} - ${itemId}`);
    const itemState = await getBdoMarketItemState(region, itemId);
    if (!itemState.isValid) {
      errorCount += 1;
      lastError = itemState.exception;
      if (errorCount >= 3) {
        marketItemQueue.pop();
      }
    } else {
      errorCount = 0;
      marketItemQueue.pop();
    }
    const subListCsvRows = getSubListCsvRowsV1(itemState);
    subListCsvRows.forEach((x) => {
      fs.appendFileSync(`${dumpDir}/${fileNameTimestamp}-${region}-market_items_table.csv`, x);
    });
    const marketOrdersCsvRows = getMarketOrderRowsV1(itemState);
    marketOrdersCsvRows.forEach((x) => {
      x.forEach((y) => {
        fs.appendFileSync(`${dumpDir}/${fileNameTimestamp}-${region}-market_orders_table.csv`, y);
      });
    });
  }

  if (errorCount > 0) {
    throw new Error(lastError);
  }
  return lastError;
};

const divideArray = (arr, div) => {
  const divIndex = Math.ceil(arr.length / div);
  const result = [];
  for (let i = 0; i < div; i += 1) {
    result.push(arr.splice(-divIndex));
  }

  if (arr.length > 0) {
    result.push(arr);
  }

  return result;
};

const loopUpdate = async (region, fileNameTimestamp) => {
  const itemQueue = getMarketItemsQueueFromJSONFile(region);
  const itemQueueLength = itemQueue.length;
  const itemSubQueues = divideArray(itemQueue, 2);

  let totalSubQueueItemCount = 0;

  itemSubQueues.forEach((x) => {
    totalSubQueueItemCount += x.length;
  });

  if (totalSubQueueItemCount !== itemQueueLength) {
    throw new Error(`SubQueue was not divided properly. ItemQueueLength: ${itemQueueLength} | TotalSubQueueCount ${totalSubQueueItemCount}`);
  }

  const promises = itemSubQueues.map(async (subQueue) => {
    const result = await getAllSubListsByMarketItemsQueue(subQueue, region, fileNameTimestamp);
    return result;
  });

  return Promise.all(promises);
};

(async function () {
  for (let i = 0; i < 10000; i += 1) {

    const fileNameTimestamp = Math.floor((new Date()).getTime() / 1000);

    const promises = [];
    promises.push(loopUpdate('EU', fileNameTimestamp));

    await Promise.all(promises);
  }
}());

(async function () {
  for (let i = 0; i < 10000; i += 1) {
    const fileNameTimestamp = Math.floor((new Date()).getTime() / 1000);
    const promises = [];
    promises.push(loopUpdate('NA', fileNameTimestamp));

    await Promise.all(promises);
  }
}());
