const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardControllers")

router.get("/obterRegioes", (req,res) => {
    dashboardController.obterRegioes(req, res)
})

router.get("/obterMediaIdade", (req,res) => {
    dashboardController.obterMediaIdade(req, res)
})

router.get("/obterCameraCorporal", (req,res) => {
    dashboardController.obterCameraCorporal(req, res)
})

router.get("/obterTranstorno", (req,res) => {
    dashboardController.obterTranstorno(req, res)
})

router.get("/obterGenero", (req, res) => {
    dashboardController.obterGenero(req, res)
})

router.get("/obterArma", (req, res) => {
    dashboardController.obterArma(req, res)
})

router.get("/obterEtnia", (req,res) => {
    dashboardController.obterEtnia(req, res)
})

router.get("/obterFuga", (req,res) => {
    dashboardController.obterFuga(req, res)
})

module.exports = router;