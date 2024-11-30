const express = require("express");
const router = express.Router();
const suporteController = require("../controllers/suporteController");

router.get("/buscarTodosChamados", (req, res) => {
    suporteController.buscarTodosChamados(req, res)
});

router.post("/criarChamado", (req, res) => {
    suporteController.criarChamado(req, res)
});

router.put("/responderChamado", (req, res) => {
    suporteController.responderChamado(req, res)
});

router.delete("/deletarChamado", (req, res) => {
    suporteController.deletarChamado(req, res)
});

module.exports = router;
