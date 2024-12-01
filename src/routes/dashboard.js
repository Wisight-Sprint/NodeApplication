const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardControllers")

router.get("/obterTodosOsDados/:tipoLocal", (req,res) => {
    dashboardController.obterTodosOsDados(req, res)
})

module.exports = router;