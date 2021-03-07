const { DataTypes } = require("sequelize");
// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  const { Recipe, Material } = sequelize.models;
  const RecipeProduct = sequelize.define(
    "RecipeProduct",
    {
      // The following specification of the 'id' attribute could be omitted
      // since it is the default.
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  Recipe.belongsToMany(Material, { through: RecipeProduct, as: "products" });
  Material.belongsToMany(Recipe, { through: RecipeProduct, as: "matproducts" });
};
