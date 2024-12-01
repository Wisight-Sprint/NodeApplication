const database = require("../database/config");

function obterTodosOsDados() {

    var instrucaoSql = `
    WITH ultimos_relatorios AS (
    SELECT relatorio_id
    FROM wisight.relatorio
    ORDER BY relatorio_id DESC
    LIMIT 1000
)
    SELECT 
    d.nome AS nome_departamento,
    c.cidade,
    c.estado,
    YEAR(r.dt_relatorio) AS ano,
	MONTH(r.dt_relatorio) AS mes,
    COUNT(v.vitima_id) AS total_vitimas,
    ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemCamera,
    ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemMental,
    ROUND(AVG(v.idade)) AS mediaIdade,
    COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) AS 'totalMulher',
    COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) AS 'totalHomem',
    CASE 
        WHEN COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) > COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) THEN 'Mulher'
        WHEN COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) > COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) THEN 'Homem'
        ELSE 'Empate'
    END AS generoPredominante,
    COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) AS 'totalBranca',
    COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) AS 'totalNegra',
    COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) AS 'totalAsiática',
    COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) AS 'totalHispânica',
    COUNT(CASE WHEN v.etnia = "NATIVEAMERICAN" THEN 1 END) AS 'totalNativo',
    COUNT(CASE WHEN v.etnia = "" OR v.etnia = "UNKNOWN" OR v.etnia = "UNDETERMINED" OR v.etnia = "OTHER" THEN 1 END) AS totalNula,
    COUNT(CASE WHEN r.fuga = "NOT" THEN 1 END) AS semTentativa,
    COUNT(CASE WHEN r.fuga = "FOOT" THEN 1 END) AS aPe,
    COUNT(CASE WHEN r.fuga = "CAR" THEN 1 END) AS Veículo,
    COUNT(CASE WHEN r.fuga = "OTHER" THEN 1 END) AS outro,
    COUNT(CASE WHEN r.fuga = "" OR r.fuga = "UNKNOWN" OR r.fuga = "UNDETERMINED" THEN 1 END) AS fugaNula,
    COUNT(CASE WHEN v.armamento LIKE '%UNARMED%' THEN 1 END) AS desarmado,
    COUNT(CASE WHEN v.armamento LIKE '%BLUNT_OBJECT%' OR v.armamento LIKE '%KNIFE%' THEN 1 END) AS armaBranca,
    COUNT(CASE WHEN v.armamento LIKE '%GUN%' THEN 1 END) AS armaFogo,
    COUNT(CASE WHEN v.armamento = '' THEN 1 END) AS armaNula
FROM 
    wisight.relatorio r
JOIN 
    wisight.vitima v ON v.fk_relatorio = r.relatorio_id
JOIN 
    wisight.departamento d ON r.fk_departamento = d.departamento_id
JOIN 
    wisight.cidade_estado c ON d.fk_cidade_estado = c.cidade_estado_id
WHERE 
	YEAR(r.dt_relatorio) IN (2023, 2024)
AND
	d.nome != "Desenvolvedores" AND d.nome != "Externos"
GROUP BY 
    d.nome, c.cidade, c.estado, ano, mes
ORDER BY 
    ano, mes, c.estado, c.cidade, d.nome;`

    return database.executar(instrucaoSql)
}

function obterTodosOsDadosCidade() {

    var instrucaoSql = `
    WITH ultimos_relatorios AS (
    SELECT relatorio_id
    FROM wisight.relatorio
    ORDER BY relatorio_id DESC
    LIMIT 1000
)
    SELECT 
    c.cidade,
    YEAR(r.dt_relatorio) AS ano,
	MONTH(r.dt_relatorio) AS mes,
    COUNT(v.vitima_id) AS total_vitimas,
    ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemCamera,
    ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemMental,
    ROUND(AVG(v.idade)) AS mediaIdade,
    COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) AS 'totalMulher',
    COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) AS 'totalHomem',
    CASE 
        WHEN COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) > COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) THEN 'Mulher'
        WHEN COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) > COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) THEN 'Homem'
        ELSE 'Empate'
    END AS generoPredominante,
    COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) AS 'totalBranca',
    COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) AS 'totalNegra',
    COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) AS 'totalAsiática',
    COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) AS 'totalHispânica',
    COUNT(CASE WHEN v.etnia = "NATIVEAMERICAN" THEN 1 END) AS 'totalNativo',
    COUNT(CASE WHEN v.etnia = "" OR v.etnia = "UNKNOWN" OR v.etnia = "UNDETERMINED" OR v.etnia = "OTHER" THEN 1 END) AS 'totalNulo',
    COUNT(CASE WHEN r.fuga = "NOT" THEN 1 END) AS semTentativa,
    COUNT(CASE WHEN r.fuga = "FOOT" THEN 1 END) AS aPe,
    COUNT(CASE WHEN r.fuga = "CAR" THEN 1 END) AS Veículo,
    COUNT(CASE WHEN r.fuga = "OTHER" THEN 1 END) AS outro,
    COUNT(CASE WHEN r.fuga = "" OR r.fuga = "UNKNOWN" OR r.fuga = "UNDETERMINED" THEN 1 END) AS fugaNula,
    COUNT(CASE WHEN v.armamento LIKE '%UNARMED%' THEN 1 END) AS desarmado,
    COUNT(CASE WHEN v.armamento LIKE '%BLUNT_OBJECT%' OR v.armamento LIKE '%KNIFE%' THEN 1 END) AS armaBranca,
    COUNT(CASE WHEN v.armamento LIKE '%GUN%' THEN 1 END) AS armaFogo,
    COUNT(CASE WHEN v.armamento = '' THEN 1 END) AS armaNula
FROM 
    wisight.relatorio r
JOIN 
    wisight.vitima v ON v.fk_relatorio = r.relatorio_id
JOIN 
    wisight.departamento d ON r.fk_departamento = d.departamento_id
JOIN 
    wisight.cidade_estado c ON d.fk_cidade_estado = c.cidade_estado_id
WHERE 
	YEAR(r.dt_relatorio) IN (2023, 2024)
AND
	c.cidade != "Externo"
GROUP BY 
    c.cidade, ano, mes
ORDER BY 
	c.cidade, ano, mes;`

    // console.log("Executando instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)
}

function obterTodosOsDadosEstado() {

    var instrucaoSql = `
    WITH ultimos_relatorios AS (
    SELECT relatorio_id
    FROM wisight.relatorio
    ORDER BY relatorio_id DESC
    LIMIT 1000
)
    SELECT 
    c.estado,
    YEAR(r.dt_relatorio) AS ano,
    MONTH(r.dt_relatorio) AS mes,
    COUNT(v.vitima_id) AS total_vitimas,
    ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemCamera,
    ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemMental,
    ROUND(AVG(v.idade)) AS mediaIdade,
    COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) AS 'totalMulher',
    COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) AS 'totalHomem',
    CASE 
        WHEN COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) > COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) THEN 'Mulher'
        WHEN COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) > COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) THEN 'Homem'
        ELSE 'Empate'
    END AS generoPredominante,
    COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) AS 'totalBranca',
    COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) AS 'totalNegra',
    COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) AS 'totalAsiática',
    COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) AS 'totalHispânica',
    COUNT(CASE WHEN v.etnia = "NATIVEAMERICAN" THEN 1 END) AS 'totalNativo',
    COUNT(CASE WHEN v.etnia = "" OR v.etnia = "UNKNOWN" OR v.etnia = "UNDETERMINED" OR v.etnia = "OTHER" THEN 1 END) AS 'totalNulo',
    COUNT(CASE WHEN r.fuga = "NOT" THEN 1 END) AS semTentativa,
    COUNT(CASE WHEN r.fuga = "FOOT" THEN 1 END) AS aPe,
    COUNT(CASE WHEN r.fuga = "CAR" THEN 1 END) AS Veículo,
    COUNT(CASE WHEN r.fuga = "OTHER" THEN 1 END) AS outro,
    COUNT(CASE WHEN r.fuga = "" OR r.fuga = "UNKNOWN" OR r.fuga = "UNDETERMINED" THEN 1 END) AS fugaNula,
    COUNT(CASE WHEN v.armamento LIKE '%UNARMED%' THEN 1 END) AS desarmado,
    COUNT(CASE WHEN v.armamento LIKE '%BLUNT_OBJECT%' OR v.armamento LIKE '%KNIFE%' THEN 1 END) AS armaBranca,
    COUNT(CASE WHEN v.armamento LIKE '%GUN%' THEN 1 END) AS armaFogo,
    COUNT(CASE WHEN v.armamento = '' THEN 1 END) AS armaNula
FROM 
    wisight.relatorio r
JOIN 
    wisight.vitima v ON v.fk_relatorio = r.relatorio_id
JOIN 
    wisight.departamento d ON r.fk_departamento = d.departamento_id
JOIN 
    wisight.cidade_estado c ON d.fk_cidade_estado = c.cidade_estado_id
WHERE 
    YEAR(r.dt_relatorio) IN (2023, 2024)
AND
    c.estado != "EXT"
GROUP BY 
    c.estado, ano, mes
ORDER BY 
    c.estado, ano, mes;`

    // console.log("Executando instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)
}

module.exports = {
    obterTodosOsDados,
    obterTodosOsDadosCidade,
    obterTodosOsDadosEstado
};