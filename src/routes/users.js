const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/cadastrarUsuario", (req, res) => {
    userController.cadastrarUsuario(req, res);
});

router.post("/autenticar", (req, res) => {
    userController.autenticar(req, res);
});

router.put("atualizarSenha", (req, res) => {
    userController.atualizarSenha(req, res);
});

router.delete("/deletarUsuario", (req, res) => {
    userController.deletarUsuario(req, res);
});

module.exports = router;