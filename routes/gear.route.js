const express = require("express");
const router = express.Router();
const gearController = require("../controllers/gear.controller");
const jwtCheck = require("../middleware/auth");

router.get("/gear/text", jwtCheck, gearController.getGear);

router.post("/gear/text", jwtCheck, gearController.saveText);

router.post("/gear/images", jwtCheck, gearController.saveImages);

module.exports = router;
