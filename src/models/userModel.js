const database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ",
    email,
    senha
  );
  let instrucaoSql = `
        SELECT usuario_id, nome, email, cidade, cargo FROM wisight.usuario join wisight.cidade_estado as ce WHERE email = '${email}' AND senha = '${senha}' limit 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarUsuario(nome, email, senha, departamentoId, numero) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarUsuario():",
    nome,
    email,
    senha
  );
  let instrucaoSql = `
        INSERT INTO wisight.usuario (nome, email, senha, cargo, fk_departamento, distintivo) VALUES ('${nome}', '${email}', '${senha}', "Chefe", ${departamentoId}, ${numero});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarSenha(novaSenha, usuario_id) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarSenha():",
    novaSenha,
    idUsuario
  );
  let instrucaoSql = `
        UPDATE usuario SET senha = ('${novaSenha}') WHERE usuario_id = ('${usuario_id}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletarUsuario(usuario_id) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarUsuario():",
    idUsuario
  );
  let instrucaoSql = `
        DELETE FROM usuario WHERE usuario_id = ('${usuario_id}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  autenticar,
  cadastrarUsuario,
  atualizarSenha,
  deletarUsuario,
};
