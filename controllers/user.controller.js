const sequelize = require("../db");
const { Node, Material, UserNode, User } = sequelize.models;

async function getInfo(req, res) {
  if (req.user) {
    try {
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
    } catch {
      return res.sendStatus(500);
    }
  } else {
    return res.sendStatus(401);
  }
}

async function getNodesForUser(req, res) {
  if (req.user) {
    const userId = req.user.sub;
    try {
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

          //Check optional values, to prevent overriding
          if (usernode.lodging) nodes[index].lodging = usernode.lodging;
          if (usernode.group) nodes[index].group = usernode.group;
        }
      }
      if (!nodes) {
        return res.sendStatus(404);
      }
      res.status(200).json(nodes);
    } catch {
      return res.sendStatus(500);
    }
  } else {
    return res.sendStatus(401);
  }
}

async function saveUserNodes(req, res) {
  if (req.user) {
    const nodes = req.body.nodes;
    const userId = req.user.sub;
    try {
      for (const node of nodes) {
        const userNode = await UserNode.findOne({
          where: { nodeId: node.id, UserSub: userId },
        });
        if (!userNode) {
          await UserNode.create({
            contribution: node.cpAdd,
            movespeed: node.movespeed,
            workspeed: node.workspeed,
            lodging: node.lodging,
            group:
              node.group !== "null" && node.group !== "NULL" && node.group
                ? node.group
                : null,
            nodeId: node.id,
            UserSub: userId,
          });
        } else {
          await userNode.update({
            contribution: node.cpAdd,
            movespeed: node.movespeed,
            workspeed: node.workspeed,
            lodging: node.lodging,
            group:
              node.group !== "null" && node.group !== "NULL" && node.group
                ? node.group
                : null,
          });
        }
      }
    } catch {
      return res.sendStatus(500);
    }
  } else {
    return res.sendStatus(401);
  }
  res.status(201).send("done");
}

async function getMaterialPreferences(req, res) {
  if (req.user) {
    const userId = req.user.sub;
    if (!userId) {
      return res.sendStatus(401);
    }
    try {
      let materials = await User.findOne({
        where: { sub: userId },
        attributes: ["disabledMaterials", "overrideMaterials"],
      });
      res.status(200).json(materials);
    } catch {
      return res.sendStatus(500);
    }
  } else {
    return res.sendStatus(401);
  }
}

async function saveMaterialPreferences(req, res) {
  if (req.user) {
    const disabledMaterials = req.body.materials.disabled;
    const overrideMaterials = req.body.materials.override;
    const userId = req.user.sub;
    try {
      let user = await User.findOne({
        where: { sub: userId },
      });
      if (user) {
        user.update({
          disabledMaterials: disabledMaterials,
          overrideMaterials: overrideMaterials,
        });
      } else {
        return res.sendStatus(401);
      }
    } catch {
      return res.sendStatus(500);
    }
  } else {
    return res.sendStatus(401);
  }
  res.status(201).send("done");
}

module.exports = {
  getInfo,
  getNodesForUser,
  saveUserNodes,
  getMaterialPreferences,
  saveMaterialPreferences,
};
