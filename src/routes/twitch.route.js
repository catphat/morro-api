const express = require("express");
const router = express.Router();
const twitchController = require("../controllers/twitch.controller");
const flatCacheMiddleware = require("../middleware/cache");

router.get("/live", twitchController.isLive);
router.get("/bits", flatCacheMiddleware, twitchController.getBits);
router.get("/subs", flatCacheMiddleware, twitchController.getSubs);
router.get("/donations", flatCacheMiddleware, twitchController.getDonations);

module.exports = router;
