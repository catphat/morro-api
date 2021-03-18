require('dotenv').config();
const sequelize = require('../../src/db');
const config = require('../../src/config');
const logger = require('../../src/log');

const { Material } = sequelize.models;
const { Item } = require('../src/custom_modules/calpheonjs/dist');
const MARKET = require('../src/custom_modules/marketplace');

const market = new MARKET.Market();
// Items to get scrape and market data for
const whitelist = require('./data/itemFetchWhitelist.json');

async function updateMaterials() {
  const t0 = new Date().getTime();
  // await Material.sync({ force: true });
  for (const id of whitelist) {
    await createOrUpdateMaterial(id);
  }
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

async function createOrUpdateMaterial(id) {
  try {
    const material = await Material.findOne({ where: { id } });
    const market = await fetchMarketInfo(id, 'EU');
    const marketNA = await fetchMarketInfo(id, 'NA');
    if (!material) {
      // Set full material data
      const codex = await getItemFromCodex(id);
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
  } catch (error) {
    logger.log('error', error);
  }
}

async function fetchMarketInfo(id, region) {
  try {
    const marketPrice = await market.fetchItemStats(id, region).then((x) => x);
    return marketPrice;
  } catch (error) {
    logger.log('error', error);
  }
}

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
  }
}

updateMaterials();
