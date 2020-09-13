var router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello, Dokku!");
});

router.use("/nodes", require("./nodes.route"));
router.use("/recipes", require("./recipes.route"));
router.use("/user", require("./recipes.route"));

module.exports = router;
