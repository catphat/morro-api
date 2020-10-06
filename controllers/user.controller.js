const sequelize = require("../db");
const { Node, Material, UserNode, User } = sequelize.models;

async function getInfo(req, res) {
  if (req.user) {
    const userId = req.user.sub;
    if (!userId) {
      return res.sendStatus(401);
    }
    let user = await User.findOne({
      where: { sub: userId },
    });
    const lastActive = user ? user.updatedAt : new Date();
    if (!user) {
      user = await User.create({
        sub: req.user.sub,
        username: req.user["https://api.morrolan.tv/email"],
      });
    } else {
      user.changed("updatedAt", true);
      await user.update({
        updatedAt: new Date(),
      });
    }
    res.status(200).json({ activeAt: lastActive });
  } else {
    return res.sendStatus(401);
  }
}

async function getNodesForUser(req, res) {
  if (req.user) {
    const userId = req.user.sub;
    const nodes = await Node.findAll({
      include: [
        { model: Material, through: { attributes: ["yield", "luck"] } },
      ],
    });
    for (const index of nodes.keys()) {
      const usernode = await UserNode.findOne({
        where: { UserSub: userId, nodeId: nodes[index].id },
        attributes: [
          "contribution",
          "movespeed",
          "workspeed",
          "lodging",
          "group",
        ],
      });
      if (usernode) {
        nodes[index].cpAdd = usernode.contribution;
        nodes[index].movespeed = usernode.movespeed;
        nodes[index].workspeed = usernode.workspeed;
        nodes[index].lodging = usernode.lodging;
        nodes[index].group = usernode.group;
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
  const nodes = new Map(JSON.parse(req.body.nodes));
  const userId = req.user.sub;
  for (const [key, value] of nodes.entries()) {
    const userNode = await UserNode.findOne({
      where: { nodeId: key, UserSub: userId },
    });
    if (!userNode) {
      await UserNode.create({
        contribution: value.cpAdd,
        movespeed: value.movespeed,
        workspeed: value.workspeed,
        nodeId: key,
        UserSub: userId,
      });
    } else {
      await userNode.update({
        contribution: value.cpAdd,
        movespeed: value.movespeed,
        workspeed: value.workspeed,
      });
    }
  }

  res.status(201).send("done");
}

module.exports = {
  getInfo,
  getNodesForUser,
  saveUserNodes,
};
