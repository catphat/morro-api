function createAssociations(sequelize) {
  const { Node, Material } = sequelize.models;
  Node.belongsToMany(Material, { through: "NodeMaterials" });
  Material.belongsToMany(Node, { through: "NodeMaterials" });
}

module.exports = { createAssociations };
