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
  res.status(200).end();
}

async function saveImages(req, res, next) {
  const userId = req.user["https://api.morrolan.tv/email"];
  if (!userId || userId != GEAR_EMAIL) {
    return res.sendStatus(401);
  }
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }

  res.status(200).end();
}

module.exports = {
  getGear,
  saveText,
  saveImages,
};
