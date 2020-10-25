function createAssociations(sequelize) {
  const {
    User,
    UserNode,
    Node,
    Group,
    Material,
    MaterialLog,
  } = sequelize.models;
  UserNode.belongsTo(User);
  User.hasMany(UserNode);
  UserNode.belongsTo(Node, { as: "node" });
  Group.hasMany(Material);
  Material.belongsTo(Group);
  MaterialLog.belongsTo(Material);
  Material.hasMany(MaterialLog);
}

module.exports = { createAssociations };
