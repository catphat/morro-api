const sequelize = require("../db");
const { Recipe, Group, RecipeIngredient, Material } = sequelize.models;

async function getAll(req, res) {
  const dbdata = await Recipe.findAll({
    include: [
      {
        model: RecipeIngredient,
        attributes: ["quantity"],
        include: [
          {
            model: Material,
          },
          {
            model: Group,
            attributes: ["name"],
            include: { model: Material },
          },
        ],
      },
      {
        model: Material,
        as: "products",
      },
    ],
  });

  res.status(200).json(dbdata);
}

module.exports = {
  getAll,
};
