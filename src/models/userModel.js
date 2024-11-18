const database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ",
    email,
    senha
  );
  let instrucaoSql = `
        SELECT usuario_id, usuario.nome as nomeUsuario, permissao, pularTutorial, fk_departamento, departamento.nome as nomeDepartamento
        FROM wisight.usuario
        JOIN wisight.departamento ON departamento_id = fk_departamento
        WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarUsuario(nome, email, senha, departamentoId, distintivo, permissao) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarUsuario():",
    nome,
    email,
    senha, permissao
  );
  let instrucaoSql = `
        INSERT INTO wisight.usuario VALUES (default, '${nome}', '${email}', '${distintivo}', '${permissao}', '${senha}', false, ${departamentoId});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarUsuario(usuario_id, usuario_nome, usuario_email, usuario_permissao, usuario_distintivo, usuario_senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarUsuario():",
    usuario_id
  );
  let instrucaoSql = `
        UPDATE usuario SET nome = '${usuario_nome}', email = '${usuario_email}', permissao = '${usuario_permissao}', numero = '${usuario_distintivo}', senha = '${usuario_senha}' WHERE usuario_id = ${usuario_id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletarUsuario(usuario_id) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarUsuario():",
    usuario_id
  );
  let instrucaoSql = `
        DELETE FROM usuario WHERE usuario_id = ('${usuario_id}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUsuarioPorDepartamento(fk_departamento) {
  console.log(
    "ACESSEI O userModel \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUsuarioPorDepartamento(): ",
  );
  let instrucaoSql = `
          SELECT * FROM wisight.usuario WHERE fk_departamento = '${fk_departamento}';
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarExterno(idUsuario) {
  console.log(
    "ACESSEI O userModel \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUsuarioPorDepartamento(): ",
  );
  let instrucaoSql = `
          SELECT * FROM wisight.usuario WHERE usuario_id = '${idUsuario}';
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function removerTutorialMapa(usuario_id) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function removerTutorialMapa(): "
  );
  let instrucaoSql = `
        UPDATE wisight.usuario SET pularTutorial = true WHERE usuario_id = ${usuario_id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  autenticar,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
  buscarUsuarioPorDepartamento,
  buscarExterno,
  removerTutorialMapa
};