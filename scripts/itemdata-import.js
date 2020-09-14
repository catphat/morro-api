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

  await Promise.all(
    whitelist.map(async (id, index) => {
      //Needed to prevent market from crashing
      await marketCallDelay(index * 50);
      await createOrUpdateMaterial(id);
    })
  );

  await sequelize.close();
  var t1 = new Date().getTime();
  console.log(`Done! It took ${t1 - t0}`);
}

function marketCallDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
        priceNA: market.pricePerOne,
        priceEU: market.pricePerOne,
        totalTradeCountNA: market.totalTradeCount,
        totalTradeCountEU: market.totalTradeCount,
        countNA: market.count,
        countEU: market.count,
        odexBuyPrice: codex.prices.buy
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
    throw new Error(error);
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
    throw new Error(error);
  }
}

updateMaterials();
