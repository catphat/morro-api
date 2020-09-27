function createAssociations(sequelize) {
  const { User, UserNode, Node, Group, Material } = sequelize.models;
  UserNode.belongsTo(User);
  User.hasMany(UserNode);
  UserNode.belongsTo(Node, { as: "node" });
  Group.hasMany(Material);
  Material.belongsTo(Group);
}

module.exports = { createAssociations };
