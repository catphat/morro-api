"use strict";

const sequelize = require("../db");
const { Material } = sequelize.models;
const { Item } = require("bdo-scraper");
const MARKET = require("../custom_modules/marketplace");
const market = new MARKET.Market();
//Items to get scrape and market data for
const whitelist = require("./itemFetchWhitelist.json");

//TODO: Turn into cron job for 30min, only update marketPrices
//This script is fetching item data from both codex and marketplace.
//After this the materials table will be set
//Run this script before importing other game data, to set associations!

async function updateMaterials() {
  var t0 = new Date().getTime();
  await Material.sync({ force: true });
  for (const id of whitelist) {
    await createOrUpdateMaterial(id);
  }
  await sequelize.close();
  var t1 = new Date().getTime();
  console.log(`Done! It took ${(t1 - t0) / 1000 / 60} minutes`);
}

async function createOrUpdateMaterial(id) {
  try {
    const material = await Material.findOne({ where: { id: id } });
    const market = await fetchMarketInfo(id);
    if (!material) {
      //Set full material data
      const codex = await getItemFromCodex(id);
      await Material.create({
        id: id,
        name: codex.name,
        icon: codex.icon,
        priceNA: market ? market.pricePerOne : null,
        priceEU: market ? market.pricePerOne : null,
        totalTradeCountNA: market ? market.totalTradeCount : null,
        totalTradeCountEU: market ? market.totalTradeCount : null,
        countNA: market ? market.count : null,
        countEU: market ? market.count : null,
        codexBuyPrice: codex.prices.buy
          ? parseInt(codex.prices.buy.replace(/,/g, ""))
          : 0,
        codexSellPrice: codex.prices.sell
          ? parseInt(codex.prices.sell.replace(/,/g, ""))
          : 0,
      });
    } else {
      await material.update({
        priceNA: market.pricePerOne,
        priceEU: market.pricePerOne,
        totalTradeCountNA: market.totalTradeCount,
        totalTradeCountEU: market.totalTradeCount,
        countNA: market.count,
        countEU: market.count,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchMarketInfo(id) {
  try {
    const marketPrice = await market.fetchItemById(id).then((x) => x[0]);
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
    console.log(error);
  }
}

updateMaterials();
