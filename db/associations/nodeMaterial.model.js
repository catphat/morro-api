const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const { Node, Material } = sequelize.models;
  const NodeMaterial = sequelize.define("NodeMaterial", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
  Node.belongsToMany(Material, { through: NodeMaterial });
  Material.belongsToMany(Node, { through: NodeMaterial });
};
