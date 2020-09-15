const { use } = require("passport");
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
  if (req.user) {
    const userId = req.user["https://api.morrolan.tv/email"];
    //const userId = req.user["https://api.morrolan.tv/email"];
    const nodes = await Node.findAll({
      include: [{ model: Material, through: { attributes: [] } }],
    });
    for (const index of nodes.keys()) {
      const usernode = await UserNode.findOne({
        where: { UserUsername: userId, nodeId: nodes[index].id },
        attributes: ["contribution", "workload", "averageYield", "workspeed"],
      });
      if (usernode) {
        nodes[index].contribution = usernode.contribution;
        nodes[index].workload = usernode.workload;
        nodes[index].averageYield = usernode.averageYield;
        nodes[index].workspeed = usernode.workspeed;
      }
    }
    if (!nodes) {
      return res.sendStatus(404);
    }
    res.status(200).json(nodes);
  } else {
    return res.sendStatus(401);
  }
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
