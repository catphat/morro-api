const bdo = require('../../api');

const getBdoMarketItemSubList = async (region, id) => {
  const response = { itemId: id, region, itemSubList: [] };

  const itemSubList = await bdo.getWorldMarketSubList(region)({
    mainKey: id,
    keyType: 0,
  });

  itemSubList.marketSubList.forEach((x) => {
    const subListItem = {
      enhancementMin: x.enhancementMin,
      enhancementMax: x.enhancementMax,
      basePrice: x.basePrice,
      currentStock: x.currentStock,
      totalTrades: x.totalTrades,
      priceHardCapMin: x.priceHardCapMin,
      priceHardCapMax: x.priceHardCapMax,
      lastSalePrice: x.lastSalePrice,
      lastSaleTime: x.lastSaleTime,
    };

    response.itemSubList.push(subListItem);
  });

  return response;
};

const getBdoMarketItemOrdersByEnhancementMin = async (region, id, enhancementMin) => {
  const orders = await bdo.getBiddingInfoList(region)({
    mainKey: id,
    subKey: enhancementMin,
  });

  const response = {
    itemId: id,
    region,
    enhancementMin,
    bids: [],
    asks: [],
  };

  orders.biddingList.forEach((x) => {
    if (x.sellOrders > 0) {
      response.asks.push({
        price: x.price,
        amount: x.sellOrders,
      });
    } else if (x.buyOrders > 0) {
      response.bids.push({
        price: x.price,
        amount: x.buyOrders,
      });
    }
  });

  return response;
};

const retry = (maxRetries, fn) => fn().catch((err) => {
  if (maxRetries <= 0) {
    throw err;
  }
  return retry(maxRetries - 1, fn);
});

const getBdoMarketItemState = async (region, id) => {
  const observationTime = Math.floor((new Date()).getTime() / 1000);
  const state = {
    observationTime,
    itemId: id,
    isValid: true,
    region,
    subList: [],
  };
  try {
    const items = await retry(2, () => getBdoMarketItemSubList(region, id));
    const tasks = items.itemSubList.map(async (x) => {
      try {
        const orders = await retry(2,
          () => getBdoMarketItemOrdersByEnhancementMin(
            items.region, items.itemId, x.enhancementMin,
          ));
        return {
          ...x,
          bids: orders.bids,
          asks: orders.asks,
        };
      } catch (e) {
        throw new Error(`ItemId: ${items.itemId} Region: ${region} EnhancementMin: ${x.enhancementMin} | Threw error: ${e.message}`);
      }
    });

    const results = await Promise.all(tasks);
    for (let i = 0; i < results.length; i += 1) {
      const result = results[i];
      state.subList.push(result);
    }
  } catch (e) {
    state.isValid = false;
    state.exception = e;
  }

  return state;
};

module.exports = getBdoMarketItemState;
