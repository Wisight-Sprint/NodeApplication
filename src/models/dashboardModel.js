const database = require("../database/config");

function obterTodosOsDados() {

    var instrucaoSql = `
    SELECT 
    d.nome AS nome_departamento,
    c.cidade,
    c.estado,
    YEAR(r.dt_dep) AS ano,
	MONTH(r.dt_dep) AS mes,
    COUNT(v.vitima_id) AS total_vitimas,
    ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemCamera,
    ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemMental,
    ROUND(AVG(v.idade)) AS mediaIdade,
    COUNT(CASE WHEN v.genero = "Feminino" THEN 1 END) AS 'totalMulher',
    COUNT(CASE WHEN v.genero = "Masculino" THEN 1 END) AS 'totalHomem',
    CASE 
        WHEN COUNT(CASE WHEN v.genero = "Feminino" THEN 1 END) > COUNT(CASE WHEN v.genero = "Masculino" THEN 1 END) THEN 'Mulher'
        WHEN COUNT(CASE WHEN v.genero = "Masculino" THEN 1 END) > COUNT(CASE WHEN v.genero = "Feminino" THEN 1 END) THEN 'Homem'
        ELSE 'Empate'
    END AS generoPredominante,
    COUNT(CASE WHEN v.etnia = "Branca" THEN 1 END) AS 'totalBranca',
    COUNT(CASE WHEN v.etnia = "Negra" THEN 1 END) AS 'totalNegra',
    COUNT(CASE WHEN v.etnia = "Asiática" THEN 1 END) AS 'totalAsiática',
    COUNT(CASE WHEN v.etnia = "Hispânica" THEN 1 END) AS 'totalHispânica',
    COUNT(CASE WHEN v.etnia = "Indígena" THEN 1 END) AS 'totalIndígena',
    COUNT(CASE WHEN r.fuga = "Sem tentativa" THEN 1 END) AS semTentativa,
    COUNT(CASE WHEN r.fuga = "A pé" THEN 1 END) AS aPe,
    COUNT(CASE WHEN r.fuga = "Veículo" THEN 1 END) AS Veículo,
    COUNT(CASE WHEN v.armamento = "Não armado" THEN 1 END) AS desarmado,
    COUNT(CASE WHEN v.armamento = "Arma branca" THEN 1 END) AS armaBranca,
    COUNT(CASE WHEN v.armamento = "Arma de fogo" THEN 1 END) AS armaFogo
FROM 
    wisight.relatorio r
JOIN 
    wisight.vitima v ON v.fk_relatorio = r.relatorio_id
JOIN 
    wisight.departamento d ON r.fk_departamento = d.departamento_id
JOIN 
    wisight.cidade_estado c ON d.fk_cidade_estado = c.cidade_estado_id
WHERE 
	YEAR(r.dt_dep) IN (2023, 2024)
AND
	d.nome != "Desenvolvedores" AND d.nome != "Externos"
GROUP BY 
    d.nome, c.cidade, c.estado, ano, mes
ORDER BY 
    ano, mes, c.estado, c.cidade, d.nome;
    `

    console.log("Executando instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

module.exports = {
    obterTodosOsDados
};