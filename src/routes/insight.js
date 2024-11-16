const express = require("express");
const router = express.Router();
const insightsController = require("../controllers/insightController");

router.post("/executeJar", insightController.commonUserExecuteJar);

module.exports = router;
