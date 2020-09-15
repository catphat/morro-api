const sequelize = require("../db");
const { Node, Material, UserNode, User } = sequelize.models;

async function getInfo(req, res) {
  const userId = req.user["https://api.morrolan.tv/email"];
  if (!userId) {
    return res.sendStatus(401);
  }
  res.status(200).json({ message: `Hello User ${userId}` });
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
  if (!nodes) {
    return res.sendStatus(401);
  }
  res.status(200).json(nodes);
}

async function saveUserNodes(req, res) {
  const payload = req.body;
  const userId = req.user["https://api.morrolan.tv/email"];

  res.status(201).send(payload);
}

module.exports = {
  getInfo,
  getNodesForUser,
  saveUserNodes,
};
