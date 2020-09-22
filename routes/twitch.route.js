const express = require("express");
const router = express.Router();
const twitchController = require("../controllers/twitch.controller");

router.get("/llive", twitchController.isLive);
router.get("/bits", twitchController.getBits);

module.exports = router;
