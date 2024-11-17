const express = require("express");
const router = express.Router();
const insightController = require("../controllers/insightController");

router.post("/executeJar", (req, res) => {
    insightController.executeJar(req, res)
});

module.exports = router;
