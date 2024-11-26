const express = require("express");
const router = express.Router();

const relatorioController = require("../controllers/relatorioController");

router.post("/criarRelatorio/", (req, res) => {
  relatorioController.criarRelatorio(req, res);
});

module.exports = router;
