const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardControllers")

router.get("/obterTodosOsDados", (req,res) => {
    dashboardController.obterTodosOsDados(req, res)
})

module.exports = router;