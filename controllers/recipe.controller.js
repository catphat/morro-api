async function getAll(req, res) {
  res.status(200).json({ recipes: "Hello from recipes" });
}

module.exports = {
  getAll,
};

/*function combine() {
    logger.log('info', 'Accessed %s - at %s', 'recepies', new Date());
    const combined = recipes.map((recipe) => {
      const materials = recipe.materials.map((material) => {
        if (!material.group){
          return { quantity: material.quantity, ...getFromCache(material.id) };
        }
        const rawGroup = getGroup(material.id);
        const group = rawGroup.items.map((item) => getFromCache(item.id));
        return { ...material, group, name: rawGroup.name };
      });
  
      const products = recipe.products.map((product) => {
        return { ...product, ...getFromCache(product.id) };
      });
      return { ...recipe, materials, products };
    });
  
    res.json(combined);
} */
