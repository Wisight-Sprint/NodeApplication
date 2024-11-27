const database = require("../database/config");

function buscarTodosOsDepartamentos() {
  console.log(
    "function buscarTodosOsDepartamentos(): ",
    
  );
  let instrucaoSql = `
          SELECT departamento_id, nome
          FROM wisight.departamento;
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarDepartamentoPorNome(nome, cidade, estado) {
  console.log(
    "function buscarDepartamentoPorNome(nome, cidade, estado): ",
    nome, cidade, estado
  );
  let instrucaoSql = `
          SELECT departamento_id, cidade_estado_id
          FROM wisight.departamento
          JOIN wisight.cidade_estado
          ON fk_cidade_estado = cidade_estado_id
          WHERE nome = "${nome}"
          AND cidade = "${cidade}"
          AND estado = "${estado}";
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarCidadeEstado(cidade, estado) {
  console.log(
    "function buscarCidadeEstado(cidade, estado): ",
    cidade, estado
  );
  let instrucaoSql = `
          SELECT cidade_estado_id
          FROM wisight.cidade_estado
          WHERE cidade = "${cidade}"
          AND estado = "${estado}";
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarCidadeEstado(cidade, estado) {
  console.log(
    "function cadastrarCidadeEstado(cidade, estado): ",
    cidade, estado
  );
  let instrucaoSql = `
          INSERT INTO wisight.cidade_estado (cidade, estado) VALUES
          ("${cidade}", "${estado}");
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarDepartamento(nome, idCidadeEstado) {
  console.log(
    "function cadastrarDepartamento(nome, idCidadeEstado): ",
    nome, idCidadeEstado
  );
  let instrucaoSql = `
          INSERT INTO wisight.departamento (nome, fk_cidade_estado) VALUES
          ("${nome}", ${idCidadeEstado})
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarTodosOsDepartamentos,
  buscarDepartamentoPorNome,
  buscarCidadeEstado,
  cadastrarCidadeEstado,
  cadastrarDepartamento
};
