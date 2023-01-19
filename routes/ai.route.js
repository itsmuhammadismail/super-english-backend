const express = require("express");
const {
  tranlateController,
  changeToneController,
  replyController,
} = require("../controllers/ai.controller.js");
const router = express.Router();

router.post("/translate", tranlateController);
router.post("/change_tone", changeToneController);
router.post("/reply", replyController);

module.exports = router;
