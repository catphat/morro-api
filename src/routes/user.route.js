const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const jwtCheck = require("../middleware/auth");

router.get("/info", jwtCheck, userController.getInfo);

router.post("/info", jwtCheck, userController.setInfo);

router.get("/userNodes", jwtCheck, userController.getNodesForUser);

router.post("/userNodes", jwtCheck, userController.saveUserNodes);

router.get(
  "/materialPreferences",
  jwtCheck,
  userController.getMaterialPreferences
);

router.post(
  "/materialPreferences",
  jwtCheck,
  userController.saveMaterialPreferences
);

module.exports = router;
