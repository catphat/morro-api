const sequelize = require("../db");
const { Node, Material, UserNode } = sequelize.models;

async function getInfo(req, res) {
  res.status(200).json({ message: "Hello User" });
}

async function getNodesForUser(req, res) {
  const userId = req.user["https://api.morrolan.tv/email"];
  const nodes = await UserNode.findAll({
    where: { UserId: userId },
    include: [
      {
        model: Node,
        through: { attributes: [] },
        include: [{ model: Material, through: { attributes: [] } }],
      },
    ],
  });
  res.status(200).json(nodes);
}

async function saveUserNodes(req, res) {
  const payload = req.body;
  console.log(payload);
  const userId = req.user["https://api.morrolan.tv/email"];
  console.log(userId);

  res.status(201).send(payload);
}

module.exports = {
  getInfo,
  getNodesForUser,
  saveUserNodes,
};
