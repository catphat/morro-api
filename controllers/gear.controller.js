const sequelize = require("../db");
const { Gear } = sequelize.models;

async function getGear(req, res) {
  res.status(200).json(nodes);
}

async function saveText(req, res) {
  res.status(200).json(nodes);
}

async function saveImages(req, res) {
  res.status(200).json(nodes);
}

module.exports = {
  getGear,
  saveText,
  saveImages,
};
