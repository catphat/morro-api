const sequelize = require("../db");
const { Node, Material } = sequelize.models;

async function getAll(req, res) {
  //Enable for cache testing
  //console.log("GET NODES FROM API");
  const nodes = await Node.findAll({
    include: [{ model: Material, through: { attributes: [] } }],
  });
  res.status(200).json(nodes);
}

module.exports = {
  getAll,
};
