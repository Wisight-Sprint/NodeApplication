const departamentoModel = require("../models/departamentoModel");

function buscarDepartamentoPorNome(req, res) {

  let nome = req.query.departamentoServer;

  departamentoModel.buscarDepartamentoPorNome(nome)
    .then(function (response) {
      res.json(response);

  let nome = req.params.nomeDepartamento;
  let cidade = req.params.cidade;
  let estado = req.params.estado;

  departamentoModel
    .buscarDepartamentoPorNome(nome, cidade, estado)
    .then(function (responseSelect) {
      if (responseSelect.length > 0) {
        console.log("Departamento já existe.");
        // Retorna resposta e interrompe o fluxo
        return res.json({ departamento_id: "Departamento já existe" });
      }

      console.log("Departamento ainda não existe...");

      return departamentoModel.buscarCidadeEstado(cidade, estado).then(function (responseSelectCidadeEstado) {
        if (responseSelectCidadeEstado.length === 0) {
          console.log("Cidade ainda não existe...");

          // Cadastrar nova cidade
          return departamentoModel.cadastrarCidadeEstado(cidade, estado)
            .then(() => departamentoModel.buscarCidadeEstado(cidade, estado))
            .then((responseSelectCidadeEstadoCriado) => {
              const idCidadeEstado = responseSelectCidadeEstadoCriado[0].cidade_estado_id;
              console.log("ID da cidade criada: " + idCidadeEstado);

              // Cadastrar o departamento
              return departamentoModel.cadastrarDepartamento(nome, idCidadeEstado);
            });
        } else {
          // Cidade já existe, pegar o ID
          const idCidadeEstado = responseSelectCidadeEstado[0].cidade_estado_id;
          console.log("ID da cidade existente: " + idCidadeEstado);

          // Cadastrar o departamento
          return departamentoModel.cadastrarDepartamento(nome, idCidadeEstado);
        }
      });
    })
    .then(() => {
      // Após cadastrar o departamento, buscar o ID novamente
      return departamentoModel.buscarDepartamentoPorNome(nome, cidade, estado);
    })
    .then((responseSelectDepartamento) => {
      if (responseSelectDepartamento && responseSelectDepartamento.length > 0) {
        return res.json({
          departamento_id: responseSelectDepartamento[0].departamento_id,
        });
      }
    })
    .catch(function (erro) {
      console.error("Houve um erro ao buscar ou cadastrar o departamento!", erro);
      if (!res.headersSent) {
        // Envia a resposta apenas se ainda não foi enviada
        res.status(500).json(erro.sqlMessage || erro);
      }
    });
}

module.exports = {
  buscarDepartamentoPorNome,
};
