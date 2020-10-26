const sequelize = require("../db");
const { ErrorHandler } = require("../util/error");
const { Node, Material, UserNode, User } = sequelize.models;

async function getInfo(req, res) {
  if (!req.user || !req.user.sub)
    throw new ErrorHandler(401, "Missing user for given request");
  try {
    const userId = req.user.sub;
    let user = await User.findOne({
      where: { sub: userId },
    });
    let settings = {
      lastActive: new Date(),
      region: "NA",
      activeHours: 16,
      showFishing: false,
    };
    if (!user) {
      user = await User.create({
        sub: req.user.sub,
        username: req.user["https://api.morrolan.tv/email"],
        region: settings.region,
        showFishing: settings.showFishing,
        activeHours: settings.activeHours,
        disabledMaterials: "[752023]",
      });
    } else {
      settings.lastActive = user.updatedAt;
      settings.region = user.region;
      settings.showFishing = user.showFishing;
      settings.activeHours = user.activeHours;
      user.changed("updatedAt", true);
      await user.update({
        updatedAt: new Date(),
      });
    }
    res.status(200).json(settings);
  } catch {
    throw new ErrorHandler(500, "Could not fetch user status");
  }
}

async function setInfo(req, res) {
  if (!req.user) throw new ErrorHandler(401, "Missing user for given request");
  const settings = JSON.parse(req.body.settings);
  const userId = req.user.sub;
  try {
    let user = await User.findOne({
      where: { sub: userId },
    });
    if (!user) throw new ErrorHandler(401, "Missing user for given request");
    user.changed("updatedAt", true);
    await user.update({
      region: settings.region,
      showFishing: settings.showFishing,
      activeHours: settings.activeHours,
      updatedAt: new Date(),
    });
  } catch {
    throw new ErrorHandler(500, "Error saving user settings");
  }
  res.status(201).send("done");
}

async function getNodesForUser(req, res) {
  if (!req.user) throw new ErrorHandler(401, "Missing user for given request");
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
          "luck",
          "lodging",
          "group",
        ],
      });
      if (usernode) {
        nodes[index].cpAdd = usernode.contribution;
        nodes[index].movespeed = usernode.movespeed;
        nodes[index].workspeed = usernode.workspeed;
        nodes[index].luck = usernode.luck;

        //Check optional values, to prevent overriding
        if (usernode.lodging) nodes[index].lodging = usernode.lodging;
        if (usernode.group) nodes[index].group = usernode.group;
      }
    }
    if (!nodes) {
      throw new ErrorHandler(404, "Could not fetch user nodes");
    }
    res.status(200).json(nodes);
  } catch {
    throw new ErrorHandler(500, "Error loading user nodes");
  }
}

async function saveUserNodes(req, res) {
  if (!req.user) throw new ErrorHandler(401, "Missing user for given request");
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
          luck: node.luck,
          lodging: node.lodging,
          group: node.group,
          nodeId: node.id,
          UserSub: userId,
        });
      } else {
        await userNode.update({
          contribution: node.cpAdd,
          movespeed: node.movespeed,
          workspeed: node.workspeed,
          luck: node.luck,
          lodging: node.lodging,
          group: node.group,
        });
      }
    }
  } catch {
    throw new ErrorHandler(500, "Error saving user nodes");
  }

  res.status(201).send("done");
}

async function getMaterialPreferences(req, res) {
  if (!req.user) throw new ErrorHandler(401, "Missing user for given request");
  const userId = req.user.sub;
  if (!userId) {
    return res.status(401).json({
      status: "error",
      message: "Missing user for given request",
    });
  }
  try {
    let materials = await User.findOne({
      where: { sub: userId },
      attributes: ["disabledMaterials", "overrideMaterials"],
    });
    res.status(200).json(materials);
  } catch {
    throw new ErrorHandler(500, "Error loading user materials");
  }
}

async function saveMaterialPreferences(req, res) {
  if (!req.user) throw new ErrorHandler(401, "Missing user for given request");
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
      throw new ErrorHandler(401, "Missing user for given request");
    }
  } catch {
    throw new ErrorHandler(500, "Error saving user materials");
  }

  res.status(201).send("done");
}

module.exports = {
  getInfo,
  setInfo,
  getNodesForUser,
  saveUserNodes,
  getMaterialPreferences,
  saveMaterialPreferences,
};
