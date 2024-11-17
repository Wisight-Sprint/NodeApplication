const express = require("express");
const router = express.Router();

const apiMapaController = require("../controllers/apiMapaController");

router.get("/criarMapa/", (req, res) => {
  apiMapaController.criarMapa(req, res);
});

module.exports = router;
