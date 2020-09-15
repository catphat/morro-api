"use strict";

const sequelize = require("../db");
const {
  Node,
  NodeMaterial,
  Group,
  Recipe,
  Material,
  RecipeMaterial,
} = sequelize.models;
const nodeList = require("./data/nodeList.json");
const groupList = require("./data/itemGroups.json");
const recipeList = require("./data/recipesList.json");

//TODO: Turn into cron job for 30min, only update marketPrices
//This script is fetching item data from both codex and marketplace.
//After this the materials table will be set
//Run this script before importing other game data, to set associations!

async function setNodes() {
  //Use this script only in dev!
  await Node.sync({ force: true });
  await NodeMaterial.sync({ force: true });
  await Promise.all(
    nodeList.map(async (node, index) => {
      //Index + 1, database cant have 0 as PK
      await createNode(node, index + 1);
    })
  );
}

async function createNode(node, index) {
  try {
    await Node.create({
      id: index,
      name: node.name,
      image: node.image,
      contribution: node.contribution,
      workload: node.workload,
      averageYield: node.averageYield,
      workspeed: 0,
      distance: node.distance,
      region: node.region,
    });
    for (const material of node.materials) {
      await NodeMaterial.create({
        NodeId: index,
        MaterialId: material.id,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function setGroups() {
  //Use this script only in dev!
  await Group.sync({ force: true });
  await Promise.all(
    groupList.map(async (group) => {
      await createGroup(group);
    })
  );
}

async function createGroup(group) {
  try {
    await Group.create({
      id: parseInt(group.id),
      name: group.name,
    });
    for (const i of group.items) {
      const material = await Material.findOne({ where: { id: i.id } });
      if (material) {
        material.groupId = parseInt(group.id);
        await material.save();
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function setRecipes() {
  //Use this script only in dev!
  await Recipe.sync({ force: true });
  await RecipeMaterial.sync({ force: true });
  await Promise.all(
    recipeList.map(async (recipe) => {
      //Index + 1, database cant have 0 as PK
      await createRecipe(recipe);
    })
  );
}

async function createRecipe(recipe) {
  try {
    await Recipe.create({
      id: parseInt(recipe.id),
      name: recipe.name,
      image: recipe.image,
      level: recipe.level,
      exp: recipe.exp,
    });
    for (const material of recipe.materials) {
      await RecipeMaterial.create({
        recipeId: parseInt(recipe.id),
        materialId: material.group ? null : parseInt(material.id),
        groupId: material.group ? parseInt(material.id) : null,
        quantity: material.quantity,
        group: material.group,
        isProduct: false,
      });
    }
    for (const product of recipe.products) {
      await RecipeMaterial.create({
        recipeId: parseInt(recipe.id),
        materialId: parseInt(product.id),
        isProduct: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  var t0 = new Date().getTime();
  await setNodes();
  await setGroups();
  await setRecipes();
  await sequelize.close();
  var t1 = new Date().getTime();
  console.log(`Initial import done! It took ${(t1 - t0) / 1000} seconds`);
}

//This script should be used local, then copy database
if (process.env.NODE_ENV != "production") {
  main();
}
