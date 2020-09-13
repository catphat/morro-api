const { models } = require("../db");

async function getInfo(req, res) {
  res.status(200).json({ nodes: "Hello from user" });
}

/*const combined = nodes.map((node) => {
    const materials = node.materials.map((material) =>
      getFromCache(material.id)
    );
    return { ...node, materials };
  });

  res.json(combined);*/

module.exports = {
  getInfo,
};
