require('dotenv').config();
const sequelize = require('../../src/db');

const {
  Node,
  NodeMaterial,
  Gear,
  Group,
  Recipe,
  Material,
  RecipeIngredient,
  RecipeProduct,
} = sequelize.models;

const nodeList = require('./data/nodeList.json');
const nodeGroups = require('./data/defaultGroups.json');
const groupList = require('./data/itemGroups.json');
const recipeList = require('./data/recipesList.json');

const groupMap = new Map(nodeGroups);

async function createNode(node, index) {
  try {
    await Node.create({
      id: index,
      name: node.name,
      image: node.image,
      contribution: node.cp,
      cpAdd: node.cpAdd,
      workload: node.workload,
      workspeed: 0,
      movespeed: 0,
      luck: 0,
      distances: JSON.stringify(node.distance),
      lodging: node.lodging,
      region: node.region,
      group:
        groupMap.has(index) && groupMap.get(index)
          ? groupMap
            .get(index)
            .replace(
              /(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g,
              '$1"$3":',
            )
          : null,
    });
    node.material.map(async (n) => {
      try {
        await NodeMaterial.create({
          NodeId: index,
          MaterialId: n.id,
          yield: n.yield,
          luck: n.luck,
        });
      } catch (e) {
        console.log(e);
        console.log(node);
        console.log(`Missing material ${n.id}`);
      }
    });
  } catch (error) {
    console.log(node);
    console.log(error);
  }
}

async function setNodes() {
  // Use this script only in dev!
  await Node.sync({ force: true });
  await NodeMaterial.sync({ force: true });
  await Promise.all(
    nodeList.map(async (node, index) => {
      // Index + 1, database cant have 0 as PK
      await createNode(node, index + 1);
    }),
  );
}

async function createGroup(group) {
  try {
    await Group.create({
      id: group.id,
      name: group.name,
    });
    group.items.map(async (i) => {
      const material = await Material.findOne({ where: { id: i.id } });
      if (material) {
        material.GroupId = group.id;
        await material.save();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function setGroups() {
  // Use this script only in dev!
  await Group.sync({ force: true });
  await Promise.all(
    groupList.map(async (group) => {
      await createGroup(group);
    }),
  );
}

async function createRecipe(recipe) {
  try {
    await Recipe.create({
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      level: recipe.level,
      exp: recipe.exp,
    });
    recipe.materials.map(async (material) => {
      await RecipeIngredient.create({
        RecipeId: recipe.id,
        MaterialId: material.group ? null : material.id,
        GroupId: material.group ? material.id : null,
        quantity: material.quantity,
      });
    });
    recipe.products.map(async (product) => {
      await RecipeProduct.create({
        RecipeId: recipe.id,
        MaterialId: product.id,
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function setRecipes() {
  // Use this script only in dev!
  await Recipe.sync({ force: true });
  await RecipeIngredient.sync({ force: true });
  await RecipeProduct.sync({ force: true });
  await Promise.all(
    recipeList.map(async (recipe) => {
      // Index + 1, database cant have 0 as PK
      await createRecipe(recipe);
    }),
  );
}

async function createGear() {
  try {
    await Gear.sync({ force: true });
    await Gear.bulkCreate([
      { name: 'Weapon', stacks: '192', attempts: '23' },
      { name: 'Offhand', stacks: '210', attempts: '15' },
      { name: 'Awaken', stacks: '192', attempts: '23' },
      { name: 'Helmet', stacks: '210', attempts: '15' },
      { name: 'Armor', stacks: '192', attempts: '23' },
      { name: 'Gloves', stacks: '210', attempts: '15' },
      { name: 'Boots', stacks: '192', attempts: '23' },
      { name: 'Pen Weapon Attempts', value: '1/23' },
      { name: 'Pen Armor Attempts', value: '4/46' },
      { name: 'TET Accessory Attempts', value: '1/23' },
      { name: 'Combat Gear Value', value: '150 Billion' },
      { name: 'Lifeskill Gear Value', value: '30 Billion' },
      { name: 'Storage Value', value: '15 Billion' },
      { name: 'Horse Value', value: '12 Billion' },
      { name: 'Net Worth', value: '207 Billion' },
    ]);
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const t0 = new Date().getTime();
  await createGear();
  await setNodes();
  await setGroups();
  await setRecipes();
  await sequelize.close();
  const t1 = new Date().getTime();
  console.log(`Initial import done! It took ${(t1 - t0) / 1000} seconds`);
}

// This script should be used local, then copy database
if (process.env.NODE_ENV !== 'production') {
  main();
}
