const sequelize = require("../db");

//This script imports gamedata e.g. nodes, recipes vendor items etc.
//Run this script only after items were imported, to set associations!

async function reset() {
  console.log("Clearing local database. Importing all static game data");

  //This only force-syncs on databases with names ****-dev
  await sequelize.sync({ force: true, match: /-dev$/ });

  await sequelize.models.Node.bulkCreate([
    {
      name: "Wolf Hills",
      image:
        "https://vignette.wikia.nocookie.net/blackdesert/images/6/6c/Wolf_Hills.JPG/revision/latest/window-crop/width/320/x-offset/181/y-offset/0/window-width/1441/window-height/1080?cb=20180126054050",
      contribution: 1,
      workload: 400,
      averageYield: 9,
      distance: 340,
      region: "Balenos",
    },
    {
      name: "Loggia Farm",
      image:
        "https://vignette.wikia.nocookie.net/blackdesert/images/6/6c/Wolf_Hills.JPG/revision/latest/window-crop/width/320/x-offset/181/y-offset/0/window-width/1441/window-height/1080?cb=20180126054050",
      contribution: 3,
      workload: 400,
      averageYield: 20,
      distance: 535,
      region: "Balenos",
    },
    {
      name: "Bartali Farm",
      image:
        "https://vignette.wikia.nocookie.net/blackdesert/images/6/6c/Wolf_Hills.JPG/revision/latest/window-crop/width/320/x-offset/181/y-offset/0/window-width/1441/window-height/1080?cb=20180126054050",
      contribution: 2,
      workload: 400,
      averageYield: 18,
      distance: 468,
      region: "Balenos",
    },
    {
      name: "Bartali Farm",
      image:
        "https://vignette.wikia.nocookie.net/blackdesert/images/6/6c/Wolf_Hills.JPG/revision/latest/window-crop/width/320/x-offset/181/y-offset/0/window-width/1441/window-height/1080?cb=20180126054050",
      contribution: 2,
      workload: 400,
      averageYield: 20,
      distance: 505,
      region: "Balenos",
    },
    {
      name: "Northern Plain of Serendia",
      image:
        "https://vignette.wikia.nocookie.net/blackdesert/images/6/6c/Wolf_Hills.JPG/revision/latest/window-crop/width/320/x-offset/181/y-offset/0/window-width/1441/window-height/1080?cb=20180126054050",
      contribution: 2,
      workload: 400,
      averageYield: 20,
      distance: 1334,
      region: "Serendia",
    },
  ]);

  await sequelize.models.Material.bulkCreate([
    {
      id: 4601,
      name: "Ash Timber",
      icon: "/items/new_icon/03_etc/0…ctmaterial/00004601.png",
      priceNA: 403,
      totalTradeCountNA: 980238968,
      countNA: 36545,
      priceEU: 10000,
      totalTradeCountEU: 100000,
      countEU: 5,
      codexBuyPrice: 1750,
      codexSellPrice: 70,
      updated: new Date(),
    },
    {
      id: 7003,
      name: "Potato",
      icon: "/items/new_icon/03_etc/0…ctmaterial/00007003.png",
      priceNA: 1230,
      totalTradeCountNA: 1089984475,
      countNA: 2303,
      priceEU: 10000,
      totalTradeCountEU: 100000,
      countEU: 5,
      codexBuyPrice: 400,
      codexSellPrice: 16,
      updated: new Date(),
    },
    {
      id: 7921,
      name: "Chicken Meat",
      icon: "/items/new_icon/03_etc/0…ctmaterial/00007921.png",
      priceNA: 950,
      totalTradeCountNA: 868533657,
      countNA: 37416,
      priceEU: 10000,
      totalTradeCountEU: 100000,
      countEU: 5,
      codexBuyPrice: 2500,
      codexSellPrice: 100,
      updated: new Date(),
    },
    {
      id: 9064,
      name: "Egg",
      icon: "/items/new_icon/03_etc/0…ctmaterial/00009064.png",
      priceNA: 5100,
      totalTradeCountNA: 506866017,
      countNA: 0,
      priceEU: 10000,
      totalTradeCountEU: 100000,
      countEU: 5,
      codexBuyPrice: 300,
      codexSellPrice: 30,
      updated: new Date(),
    },
  ]);

  // Let's create random instruments for each orchestra
  /*for (const orchestra of await sequelize.models.orchestra.findAll()) {
    for (let i = 0; i < 10; i++) {
      const type = pickRandom([
        "violin",
        "trombone",
        "flute",
        "harp",
        "trumpet",
        "piano",
        "guitar",
        "pipe organ",
      ]);

      await orchestra.createInstrument({
        type: type,
        purchaseDate: randomDate(),
      });

      // The following would be equivalent in this case:
      // await sequelize.models.instrument.create({
      // 	type: type,
      // 	purchaseDate: randomDate(),
      // 	orchestraId: orchestra.id
      // });
    }
  }*/

  console.log("Done!");
}

reset();

/*const { Item } = require('bdo-scraper');
const MARKET = require("./custom_modules/marketplace");
const market = new MARKET.Market();


async function getItemFromCodex(id) {
    const codexItem = await Item(id);
    const codex = {
      name: codexItem.name,
      icon: codexItem.icon,
      prices: codexItem.prices
    };
    return codex;
  }*/
