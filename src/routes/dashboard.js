const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardControllers")

router.get("/obterRegioes", (req,res) => {
    dashboardController.obterRegioes(req, res)
})

router.get("/obterMediaIdade", (req,res) => {
    dashboardController.obterMediaIdade(req, res)
})

module.exports = router;