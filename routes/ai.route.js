const express = require("express");
const {
  tranlateController,
  changeToneController,
} = require("../controllers/ai.controller.js");
const router = express.Router();

router.post("/translate", tranlateController);
router.post("/change_tone", changeToneController);

module.exports = router;
