const express = require("express");
const router = express.Router();
const insightsController = require("../controllers/insightsController");

router.post("/executeJar", insightsController.executeJar);

module.exports = router;
