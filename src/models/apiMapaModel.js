const database = require("../database/config");

function criarMapa() {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): "
    );
    let instrucaoSql = `
    WITH ultimos_relatorios AS (
    SELECT relatorio_id
    FROM wisight.relatorio
    ORDER BY relatorio_id DESC
    LIMIT 1000
)
    SELECT c.estado,
    COUNT(r.relatorio_id) AS total_relatorios_por_estado,
    ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemCamera,
    ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemMental,
    ROUND(AVG(v.idade)) as mediaIdade,
    
    CASE 
        WHEN COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) > COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) THEN 'Mulher'
        WHEN COUNT(CASE WHEN v.genero = "MALE" THEN 1 END) > COUNT(CASE WHEN v.genero = "FEMALE" THEN 1 END) THEN 'Homem'
        ELSE 'Empate'
    END AS generoPredominante,
    
    CASE 
        WHEN COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) > COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) > COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) > COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) > COUNT(CASE WHEN v.etnia = "OTHER" THEN 1 END) THEN 'WHITE'
		WHEN COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) > COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) > COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) > COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) > COUNT(CASE WHEN v.etnia = "OTHER" THEN 1 END) THEN 'BLACK'  
        WHEN COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) > COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) > COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) > COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) > COUNT(CASE WHEN v.etnia = "OTHER" THEN 1 END) THEN 'ASIAN'
        WHEN COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) > COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) > COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) > COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) > COUNT(CASE WHEN v.etnia = "OTHER" THEN 1 END) THEN 'HISPANIC'
        WHEN COUNT(CASE WHEN v.etnia = "OTHER" THEN 1 END) > COUNT(CASE WHEN v.etnia = "WHITE" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "OTHER" THEN 1 END) > COUNT(CASE WHEN v.etnia = "BLACK" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "OTHER" THEN 1 END) > COUNT(CASE WHEN v.etnia = "ASIAN" THEN 1 END) AND COUNT(CASE WHEN v.etnia = "OTHER" THEN 1 END) > COUNT(CASE WHEN v.etnia = "HISPANIC" THEN 1 END) THEN 'OTHER'
        ELSE 'Empate'
    END AS etniaPredominante,
    
    CASE 
        WHEN COUNT(CASE WHEN r.fuga = "NOT" THEN 1 END) > COUNT(CASE WHEN r.fuga = "FOOT" THEN 1 END) AND COUNT(CASE WHEN r.fuga = "NOT" THEN 1 END) > COUNT(CASE WHEN r.fuga = "CAR" THEN 1 END) THEN 'NOT'
        WHEN COUNT(CASE WHEN r.fuga = "FOOT" THEN 1 END) > COUNT(CASE WHEN r.fuga = "NOT" THEN 1 END) AND COUNT(CASE WHEN r.fuga = "FOOT" THEN 1 END) > COUNT(CASE WHEN r.fuga = "CAR" THEN 1 END) THEN 'FOOT'
        WHEN COUNT(CASE WHEN r.fuga = "CAR" THEN 1 END) > COUNT(CASE WHEN r.fuga = "FOOT" THEN 1 END) AND COUNT(CASE WHEN r.fuga = "CAR" THEN 1 END) > COUNT(CASE WHEN r.fuga = "NOT" THEN 1 END) THEN 'CAR'
        ELSE 'Empate'
    END AS fugaPredominante,
    
    CASE 
        WHEN COUNT(CASE WHEN v.armamento = "UNARMED" THEN 1 END) > COUNT(CASE WHEN v.armamento = "BLUNT_OBJECT" THEN 1 END) AND COUNT(CASE WHEN v.armamento = "UNARMED" THEN 1 END) > COUNT(CASE WHEN v.armamento = "GUN" THEN 1 END) THEN 'UNARMED'
        WHEN COUNT(CASE WHEN v.armamento = "BLUNT_OBJECT" THEN 1 END) > COUNT(CASE WHEN v.armamento = "UNARMED" THEN 1 END) AND COUNT(CASE WHEN v.armamento = "BLUNT_OBJECT" THEN 1 END) > COUNT(CASE WHEN v.armamento = "GUN" THEN 1 END) THEN 'BLUNT_OBJECT'
        WHEN COUNT(CASE WHEN v.armamento = "GUN" THEN 1 END) > COUNT(CASE WHEN v.armamento = "BLUNT_OBJECT" THEN 1 END) AND COUNT(CASE WHEN v.armamento = "GUN" THEN 1 END) > COUNT(CASE WHEN v.armamento = "UNARMED" THEN 1 END) THEN 'GUN'
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