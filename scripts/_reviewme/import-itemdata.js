require('dotenv').config();
const { Item } = require('ishqbb-calpheonjs');
const fs = require('fs');
const sequelize = require('../../src/db');
const config = require('../../src/config');
const logger = require('../../src/log');

const { Material } = sequelize.models;
const { GetMarketPriceInfo } = require('../../src/custom_modules/marketplace');

// Items to get scrape and market data for
const whitelist = require('./data/itemFetchWhitelist.json');

const GetMarketPriceInfoNA = new GetMarketPriceInfo('NA');
const GetMarketPriceInfoEU = new GetMarketPriceInfo('EU');

async function getItemFromCodex(id) {
  try {
    const codexItem = await Item(id);
    const codex = {
      name: codexItem.data.name,
      icon: codexItem.data.icon,
      prices: codexItem.data.prices,
    };
    return codex;
  } catch (error) {
    logger.log('error', error);
    return error;
  }
}

async function createOrUpdateMaterial(id) {
  try {
    // const material = await Material.findOne({ where: { id } });
    const market = await getItemBuySellInfoClientEU.byMainKey(id);
    if (market.data.resultMsg === 'TRADE_MARKET_ERROR_MSG_UNAUTHORIZED') {
      throw new Error(market.data.resultMsg);
    }
    const marketNA = await getItemBuySellInfoClientNA.byMainKey(id);
    if (marketNA.data.resultMsg === 'TRADE_MARKET_ERROR_MSG_UNAUTHORIZED') {
      throw new Error(marketNA.data.resultMsg);
    }
    fs.writeFileSync(`./scripts/db/import-data/market-na-${id}.json`, JSON.stringify(marketNA.data));
    fs.writeFileSync(`./scripts/db/import-data/market-eu-${id}.json`, JSON.stringify(market.data));
    const codex = await getItemFromCodex(id);
    fs.writeFileSync(`./scripts/db/import-data/codex-${id}.json`, JSON.stringify(codex));
    /*
    if (!material) {
      // Set full material data

      await Material.create({
        id,
        name: codex.name,
        icon: codex.icon,
        priceNA: marketNA ? marketNA.pricePerOne : null,
        priceEU: market ? market.pricePerOne : null,
        countNA: marketNA ? marketNA.count : null,
        countEU: market ? market.count : null,
        floodedNA: marketNA ? marketNA.flooded : null,
        floodedEU: market ? market.flooded : null,
        maxedNA: marketNA ? marketNA.maxed : null,
        maxedEU: market ? market.maxed : null,
        codexBuyPrice: codex.prices.buy,
        codexSellPrice: codex.prices.sell,
      });
    } else {
      await material.update({
        priceNA: marketNA ? marketNA.pricePerOne : null,
        priceEU: market ? market.pricePerOne : null,
        countNA: marketNA ? marketNA.count : null,
        countEU: market ? market.count : null,
        floodedNA: marketNA ? marketNA.flooded : null,
        floodedEU: market ? market.flooded : null,
        maxedNA: marketNA ? marketNA.maxed : null,
        maxedEU: market ? market.maxed : null,
        updatedAt: new Date(),
      });
    }
    */
  } catch (error) {
    logger.log('error', error);
  }
}

async function updateMaterials() {
  const t0 = new Date().getTime();
  const id = 10210;
  const market = await GetMarketPriceInfoNA.byMainKey(id);
  if (market.data.resultMsg === 'TRADE_MARKET_ERROR_MSG_UNAUTHORIZED') {
    throw new Error(market.data.resultMsg);
  }
  const marketNA = await GetMarketPriceInfoEU.byMainKey(id);
  if (marketNA.data.resultMsg === 'TRADE_MARKET_ERROR_MSG_UNAUTHORIZED') {
    throw new Error(marketNA.data.resultMsg);
  }
  fs.writeFileSync(`./scripts/db/import-data/market-na-${id}.json`, JSON.stringify(marketNA.data));
  fs.writeFileSync(`./scripts/db/import-data/market-eu-${id}.json`, JSON.stringify(market.data));
  // await Material.sync({ force: true });
  // whitelist.map(async (id) => {
  //  await createOrUpdateMaterial(id);
  // });

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  logger.log(
    'info',
    `${new Date()} - The script uses approximately ${
      Math.round(used * 100) / 100
    } MB`,
  );
  const t1 = new Date().getTime();
  logger.log(
    'info',
    `${new Date()} - Refresh item data done! It took ${
      (t1 - t0) / 1000 / 60
    } minutes at $`,
    new Date(),
  );
}

updateMaterials();
