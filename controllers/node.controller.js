const sequelize = require("../db");
const { Node, Material } = sequelize.models;

async function getAll(req, res) {
  //Enable for cache testing
  const nodes = await Node.findAll({
    include: { model: Material, through: { attributes: ["yield", "luck"] } },
  });
  res.status(200).json(nodes);
}

module.exports = {
  getAll,
};
