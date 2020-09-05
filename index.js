const credentials = require("./credentials.json");

const MARKET = require("./custom_modules/marketplace");
//Param is anti captcha key
const market = new MARKET.Market();

const { Item } = require("calpheonjs");

const fs = require("fs");
const moment = require("moment");

const express = require("express");
var cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5100;

//--------------------------------------------- 
//Start CORS Setup
//--------------------------------------------- 
var allowedOrigins = [
  "http://localhost:80",
  "https://morrolantv-dev.herokuapp.com",
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
//End CORS Setup

//Import static json data
const groups = require("./resources/recipes/groups.json");
const recipes = require("./resources/recipes/cooking.json");
const nodes = require("./resources/nodes.json");

//Items to get scrape and market data for
const whitelist = require("./resources/whitelist.json");

//Item info storage with codex and marketplace
const cache = require("./resources/cache.json");

app.get("/combinations", (req, res) => {});

app.get("/recipes", (req, res) => {
  const combined = recipes.map((recipe) => {
    const materials = recipe.materials.map((material) => {
      if (!material.group)
        return { quantity: material.quantity, ...getFromCache(material.id) };
      const rawGroup = getGroup(material.id);
      const group = rawGroup.items.map((item) => getFromCache(item.id));
      return { ...material, group, name: rawGroup.name };
    });

    const products = recipe.products.map((product) => {
      return { ...product, ...getFromCache(product.id) };
    });
    return { ...recipe, materials, products };
  });

  res.json(combined);
});

app.get("/nodes", (req, res) => {
  const combined = nodes.map((node) => {
    const materials = node.materials.map((material) =>
      getFromCache(material.id)
    );
    return { ...node, materials };
  });

  res.json(combined);
});

// Heroku basic setup
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

//Start writing to cache
async function dataToCache() {
  whitelist.forEach((x, i) => setTimeout(() => addToCache(x), i * 50));
  setInterval(() => {
    whitelist.forEach((x, i) => setTimeout(() => addToCache(x), i * 50));
  }, 1000 * 60 * 5);
}

function getFromCache(id) {
  const index = cache.findIndex((x) => x.id == id);
  if (index == -1) return addToCache(id);
  return cache[index];
}

async function addToCache(id) {
  const index = cache.findIndex((x) => x.id == id);

  if (index == -1) {
    const codexInfo = await getItemFromCodex(id);
    const marketPrice = await market.fetchItemById(id).then((x) => x[0]);
    cache.push({ id, marketPrice, codexInfo, updated: new Date() });
  } else if (after(1, cache[index].updated)) {
    cache[index].updated = new Date();
    const codexInfo = await getItemFromCodex(id);
    const marketPrice = await market.fetchItemById(id).then((x) => x[0]);
    cache[index] = { id, marketPrice, codexInfo, updated: new Date() };
  }

  fs.writeFileSync("./resources/cache.json", JSON.stringify(cache), "utf8");
}

async function getItemFromCodex(id) {
  const codexItem = await Item(id);
  const codex = {
    name: codexItem.data.name,
    icon: codexItem.data.icon,
    prices: codexItem.data.prices,
  };
  return codex;
}

function getGroup(id) {
  const index = groups.findIndex((group) => group.id == id);
  if (index == -1) throw new Error("Invalid Group ID Provided");
  return groups[index];
}

function after(hours, date) {
  return moment(date).isBefore(moment().subtract(hours, "hours"));
}

dataToCache();
