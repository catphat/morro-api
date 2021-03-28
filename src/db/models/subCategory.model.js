const model = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define(
    'SubCategory',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      subCategoryIndex: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    },
  );
  SubCategory.associate = ({ MainCategory }) => {
    SubCategory.belongsTo(MainCategory);
  };
  return SubCategory;
};

module.exports = model;
