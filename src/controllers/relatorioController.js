const relatorioModel = require("../models/relatorioModel");

async function criarRelatorio(req, res) {
    const { departamentoServer, dataServer, fugaServer, cameraServer, vitimasServer } = req.body;

    try {
        // 1. Cria o relatório
        await relatorioModel.criarRelatorio(dataServer, fugaServer, cameraServer, departamentoServer);

        // 2. Busca o ID do relatório recém-criado
        const responseBuscarRelatorio = await relatorioModel.buscarRelatorio();
        const relatorioId = responseBuscarRelatorio[0].relatorio_id;

        // 3. Insere as vítimas relacionadas
        await relatorioModel.criarVitima(vitimasServer, relatorioId);

        // 4. Retorna sucesso
        res.json({ message: "Relatório e vítimas cadastrados com sucesso!" });
    } catch (erro) {
        console.error("Erro ao criar relatório e vítimas: ", erro);
        res.status(500).json(erro.sqlMessage || "Erro interno");
    }
}

module.exports = {
    criarRelatorio
};
