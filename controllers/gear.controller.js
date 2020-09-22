const sequelize = require("../db");
const { Gear } = sequelize.models;
const { GEAR_EMAIL } = require("../config");

async function getGear(req, res) {
  const gear = await Gear.findAll();
  res.status(200).json(gear);
}

async function saveText(req, res) {
  const userId = req.user["https://api.morrolan.tv/email"];
  const collection = req.body.collection;
  if (!userId || userId != GEAR_EMAIL) {
    return res.sendStatus(401);
  }
  await Gear.sync({ force: true });
  for (const item of collection) {
    Gear.create(item);
  }
  res.status(200).json(collection);
}

async function saveImages(req, res) {
  const userId = req.user["https://api.morrolan.tv/email"];
  if (!userId || userId != GEAR_EMAIL) {
    return res.sendStatus(401);
  }
  res.status(200).json(nodes);
}

module.exports = {
  getGear,
  saveText,
  saveImages,
};
