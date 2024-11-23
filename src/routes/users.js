const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/cadastrarUsuario", (req, res) => {
  userController.cadastrarUsuario(req, res);
});

router.post("/autenticar", (req, res) => {
  userController.autenticar(req, res);
});

router.put("/atualizarUsuario", (req, res) => {
  userController.atualizarUsuario(req, res);
});

router.delete("/deletarUsuario", (req, res) => {
  userController.deletarUsuario(req, res);
});

router.get("/buscarUsuarioPorDepartamento/:departamento", (req, res) => {
  userController.buscarUsuarioPorDepartamento(req, res);
});

router.get("/buscarExterno/:idUsuario", (req, res) => {
  userController.buscarExterno(req, res);
});

router.get("/removerTutorialMapa/:usuario_id", (req, res) => {
  userController.removerTutorialMapa(req, res);
});

module.exports = router;
