const express = require("express");
const router = express.Router();
const nodeController = require("../controllers/node.controller");
const flatCacheMiddleware = require("../middleware/cache");

router.get("/", flatCacheMiddleware, nodeController.getAll);

module.exports = router;
