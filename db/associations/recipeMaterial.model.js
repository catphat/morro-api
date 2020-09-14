const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const { Recipe, Material } = sequelize.models;
  const RecipeMaterial = sequelize.define("RecipeMaterial", {
    RecipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Recipe,
        key: "id",
      },
    },
    MaterialId: {
      type: DataTypes.INTEGER,
      references: {
        model: Material,
        key: "id",
      },
    },
    image: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    group: {
      type: DataTypes.BOOLEAN,
    },
    isProduct: {
      type: DataTypes.BOOLEAN,
    },
  });
  Recipe.belongsToMany(Material, { through: RecipeMaterial });
  Material.belongsToMany(Recipe, { through: RecipeMaterial });
};
