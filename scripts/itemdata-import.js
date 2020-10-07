"use strict";

require("dotenv").config();
const sequelize = require("../db");
const { Material } = sequelize.models;
const { Item } = require("bdo-scraper");
const MARKET = require("../custom_modules/marketplace");
const market = new MARKET.Market();
//Items to get scrape and market data for
const whitelist = require("./data/itemFetchWhitelist.json");

//TODO: Turn into worker task with setInterval
//This script is fetching item data from both codex and marketplace.
//After this the materials table will be set
//Run this script before importing other game data, to set associations!

async function updateMaterials() {
  var t0 = new Date().getTime();
  //await Material.sync({ force: true });
  for (const id of whitelist) {
    await createOrUpdateMaterial(id);
  }
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(
    `The script uses approximately ${Math.round(used * 100) / 100} MB`
  );
  await sequelize.close();
  var t1 = new Date().getTime();
  console.log(
    `Refresh item data done! It took ${(t1 - t0) / 1000 / 60} minutes`
  );
}

async function createOrUpdateMaterial(id) {
  try {
    const material = await Material.findOne({ where: { id: id } });
    const market = await fetchMarketInfo(id, "EU");
    const marketNA = await fetchMarketInfo(id, "NA");
    if (!material) {
      //Set full material data
      const codex = await getItemFromCodex(id);
      await Material.create({
        id: id,
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
        codexBuyPrice: codex.prices.buy
          ? parseInt(codex.prices.buy.replace(/,/g, ""))
          : 0,
        codexSellPrice: codex.prices.sell
          ? parseInt(codex.prices.sell.replace(/,/g, ""))
          : 0,
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
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchMarketInfo(id, region) {
  try {
    const marketPrice = await market.fetchItemStats(id, region).then((x) => x);
    return marketPrice;
  } catch (error) {
    console.log(error);
  }
}

async function getItemFromCodex(id) {
  try {
    const codexItem = await Item(id);
    const codex = {
      name: codexItem.name,
      icon: codexItem.icon,
      prices: codexItem.prices,
    };
    return codex;
  } catch (error) {
    console.log(id);
    console.log(error);
  }
}

updateMaterials();
//setInterval(updateMaterials, 1000 * 60 * config.CACHE_LIFETIME_MIN);
