const { models } = require("../db");

async function getAll(req, res) {
  res.status(200).json({ nodes: "Hello from nodes" });
}

/*const combined = nodes.map((node) => {
    const materials = node.materials.map((material) =>
      getFromCache(material.id)
    );
    return { ...node, materials };
  });

  res.json(combined);*/

module.exports = {
  getAll,
};
