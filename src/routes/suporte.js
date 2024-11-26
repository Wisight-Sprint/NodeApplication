const express = require("express");
const router = express.Router();
const suporteController = require("../controllers/suporteController");

router.post("/buscarTodosChamadosAtivos", (req, res) => {
    suporteController.buscarTodosChamadosAtivos(req, res)
});

router.post("/buscarTodosChamadosFinalizados", (req, res) => {
    suporteController.buscarTodosChamadosFinalizados(req, res)
});

router.post("/criarChamado", (req, res) => {
    suporteController.criarChamado(req, res)
});

router.post("/atualizarChamado", (req, res) => {
    suporteController.atualizarChamado(req, res)
});

router.post("/deletarChamado", (req, res) => {
    suporteController.deletarChamado(req, res)
});

module.exports = router;
