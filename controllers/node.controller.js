const sequelize = require("../db");
const { Node, Material } = sequelize.models;

async function getAll(req, res) {
  const nodes = await Node.findAll({
    where: { id: 1 },
    include: [{ model: Material, through: { attributes: [] } }],
  });
  res.status(200).json(nodes);
}

module.exports = {
  getAll,
};
