const express = require("express");
const router = express.Router();
const gearController = require("../controllers/gear.controller");
const jwtCheck = require("../middleware/auth");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(`${__dirname}/../public/images/gear`));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/text", gearController.getGear);

router.post("/text", jwtCheck, gearController.saveText);

router.post(
  "/images",
  jwtCheck,
  upload.array("file", 12),
  gearController.saveImages
);

module.exports = router;
