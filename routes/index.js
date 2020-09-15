var router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello, from morrolan.tv api. Have a good day!");
});

router.get("/favicon.ico", (req, res) => {
  res.sendStatus(204);
});

router.use("/nodes", require("./nodes.route"));
router.use("/recipes", require("./recipes.route"));
router.use("/user", require("./user.route"));

module.exports = router;
