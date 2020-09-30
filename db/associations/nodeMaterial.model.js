const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const { Node, Material } = sequelize.models;
  const NodeMaterial = sequelize.define(
    "NodeMaterial",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      yield: {
        type: DataTypes.FLOAT,
      },
      luck: {
        type: DataTypes.FLOAT,
      },
    },
    {
      timestamps: false,
    }
  );
  Node.belongsToMany(Material, { through: NodeMaterial });
  Material.belongsToMany(Node, { through: NodeMaterial });
};
