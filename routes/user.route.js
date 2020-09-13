const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const jwtCheck = require("./auth");

router.get("/", jwtCheck, userController.getInfo);

module.exports = router;
