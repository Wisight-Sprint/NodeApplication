const database = require("../database/config");

function criarMapa() {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): "
    );
    let instrucaoSql = `
    SELECT c.estado,
    COUNT(r.relatorio_id) AS total_relatorios_por_estado,
    ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemCamera,
    ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemMental,
    ROUND(AVG(v.idade)) as mediaIdade,
    
    CASE 
        WHEN COUNT(CASE WHEN v.genero = "Feminino" THEN 1 END) > COUNT(CASE WHEN v.genero = "Masculino" THEN 1 END) THEN 'Mulher'
        WHEN COUNT(CASE WHEN v.genero = "Masculino" THEN 1 END) > COUNT(CASE WHEN v.genero = "Feminino" THEN 1 END) THEN 'Homem'
        ELSE 'Empate'
    END AS generoPredominante,
    
    CASE 
        WHEN COUNT(CASE WHEN v.etnia = "Branca" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Negra" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Branca" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Asiática" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Branca" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Hispânica" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Branca" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Indígena" THEN 1 END) THEN 'Branca'
		WHEN COUNT(CASE WHEN v.etnia = "Negra" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Branca" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Negra" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Asiática" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Negra" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Hispânica" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Negra" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Indígena" THEN 1 END) THEN 'Negra'  
        WHEN COUNT(CASE WHEN v.etnia = "Asiática" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Branca" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Asiática" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Negra" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Asiática" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Hispânica" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Asiática" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Indígena" THEN 1 END) THEN 'Asiática'
        WHEN COUNT(CASE WHEN v.etnia = "Hispânica" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Branca" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Hispânica" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Negra" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Hispânica" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Asiática" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Hispânica" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Indígena" THEN 1 END) THEN 'Hispânica'
        WHEN COUNT(CASE WHEN v.etnia = "Indígena" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Branca" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Indígena" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Negra" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Indígena" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Asiática" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "Indígena" THEN 1 END) > COUNT(CASE WHEN v.etnia = "Hispânica" THEN 1 END) THEN 'Indígena'
        ELSE 'Empate'
    END AS etniaPredominante,
    
    CASE 
        WHEN COUNT(CASE WHEN r.fuga = "Sem tentativa" THEN 1 END) > COUNT(CASE WHEN r.fuga = "A pé" THEN 1 END) AND COUNT(CASE WHEN r.fuga = "Sem tentativa" THEN 1 END) > COUNT(CASE WHEN r.fuga = "Veículo" THEN 1 END) THEN 'Sem tentativa'
        WHEN COUNT(CASE WHEN r.fuga = "A pé" THEN 1 END) > COUNT(CASE WHEN r.fuga = "Sem tentativa" THEN 1 END) AND COUNT(CASE WHEN r.fuga = "A pé" THEN 1 END) > COUNT(CASE WHEN r.fuga = "Veículo" THEN 1 END) THEN 'A pé'
        WHEN COUNT(CASE WHEN r.fuga = "Veículo" THEN 1 END) > COUNT(CASE WHEN r.fuga = "A pé" THEN 1 END) AND COUNT(CASE WHEN r.fuga = "Veículo" THEN 1 END) > COUNT(CASE WHEN r.fuga = "Sem tentativa" THEN 1 END) THEN 'Veículo'
        ELSE 'Empate'
    END AS fugaPredominante,
    
    CASE 
        WHEN COUNT(CASE WHEN v.armamento = "Não armado" THEN 1 END) > COUNT(CASE WHEN v.armamento = "Arma branca" THEN 1 END) AND COUNT(CASE WHEN v.armamento = "Não armado" THEN 1 END) > COUNT(CASE WHEN v.armamento = "Arma de fogo" THEN 1 END) THEN 'Não armado'
        WHEN COUNT(CASE WHEN v.armamento = "Arma branca" THEN 1 END) > COUNT(CASE WHEN v.armamento = "Não armado" THEN 1 END) AND COUNT(CASE WHEN v.armamento = "Arma branca" THEN 1 END) > COUNT(CASE WHEN v.armamento = "Arma de fogo" THEN 1 END) THEN 'Arma branca'
        WHEN COUNT(CASE WHEN v.armamento = "Arma de fogo" THEN 1 END) > COUNT(CASE WHEN v.armamento = "Arma branca" THEN 1 END) AND COUNT(CASE WHEN v.armamento = "Arma de fogo" THEN 1 END) > COUNT(CASE WHEN v.armamento = "Não armado" THEN 1 END) THEN 'Arma de fogo'
        ELSE 'Empate'
    END AS armamentoPredominante
    
    FROM wisight.relatorio r
    JOIN wisight.vitima v ON v.fk_relatorio = r.relatorio_id
    JOIN wisight.departamento d ON r.fk_departamento = d.departamento_id
    JOIN wisight.cidade_estado c ON d.fk_cidade_estado = c.cidade_estado_id
    GROUP BY c.estado
    ORDER BY c.estado;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    criarMapa
}