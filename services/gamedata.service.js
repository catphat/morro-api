const sequelize = require("../db");

//TODO: After testing, turn into cronjobto update database
async function reset() {
  console.log("Will rewrite the example database, adding some dummy data.");

  //This only force-syncs on databases with names ****-dev
  await sequelize.sync({ force: true, match: /-dev$/ });

  await sequelize.models.Node.bulkCreate([
    { username: "jack-sparrow" },
    { username: "white-beard" },
    { username: "black-beard" },
    { username: "brown-beard" },
  ]);

  await sequelize.models.Recipe.bulkCreate([
    { name: "Jalisco Philharmonic" },
    { name: "Symphony No. 4" },
    { name: "Symphony No. 8" },
  ]);

  // Let's create random instruments for each orchestra
  for (const orchestra of await sequelize.models.orchestra.findAll()) {
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
  }

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
