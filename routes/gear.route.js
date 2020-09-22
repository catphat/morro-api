const express = require("express");
const router = express.Router();
const gearController = require("../controllers/gear.controller");
const jwtCheck = require("../middleware/auth");

router.get("/text", gearController.getGear);

router.post("/text", jwtCheck, gearController.saveText);

router.post("/images", jwtCheck, gearController.saveImages);

module.exports = router;
