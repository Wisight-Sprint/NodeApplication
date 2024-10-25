const express = require("express");
const router = express.Router();

const departamentoController = require("../controllers/departamentoController");

router.post("/buscarDepartamentoPorNome", (req, res) => {
  departamentoController.buscarDepartamentoPorNome(req, res);
});

module.exports = router;