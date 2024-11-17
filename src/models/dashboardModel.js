const database = require("../database/config");


function obterRegioes(){

    let instrucaoSql = `
    select cidade, estado from wisight.cidade_estado;
    `
    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterMediaIdade(cidadeUsuario) {
     
    var instrucaoSql = ``

    if (cidadeUsuario == null || cidadeUsuario == '' || cidadeUsuario == undefined) {
        instrucaoSql = `
        SELECT 
        -- round(avg(idade)) as idadeIncidente,
        COUNT(*) AS numero_vitimas,
        (COUNT(*) / (SELECT COUNT(*) FROM wisight.vitima)) * 100 AS porcentagem
        FROM wisight.vitima
        GROUP BY idade
        ORDER BY numero_vitimas DESC
        LIMIT 1;
    `
    } else {
            instrucaoSql = `
                SELECT 
                ce.cidade, 
                ce.estado,
                round(avg(idade)) as idadeIncidente,
                COUNT(v.vitima_id) AS numero_vitimas,
                (COUNT(*) / (SELECT COUNT(*) FROM wisight.vitima)) * 100 AS porcentagem
                FROM 
                    wisight.cidade_estado ce
                JOIN 
                    wisight.departamento d ON d.fk_cidade_estado = ce.cidade_estado_id
                JOIN 
                    wisight.relatorio r ON r.fk_departamento = d.departamento_id
                JOIN 
                    wisight.vitima v ON v.fk_relatorio = r.relatorio_id
                WHERE
                    ce.cidade = '${cidadeUsuario}'
                GROUP BY 
                    ce.cidade, ce.estado;
            `
        
    }

console.log("executando a instrução SQL: \n" + instrucaoSql)

return database.executar(instrucaoSql)

}

function obterCameraCorporal(cidadeUsuario){

    var instrucaoSql = ``

    if (cidadeUsuario == null || cidadeUsuario == '' || cidadeUsuario == undefined) {
        instrucaoSql= `
        SELECT 
        ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagem
        FROM wisight.relatorio;
        `
    } else {
        instrucaoSql = `
        SELECT 
            ROUND((COUNT(CASE WHEN r.camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagem
        FROM 
            wisight.relatorio r
        JOIN 
            wisight.departamento d ON d.departamento_id = r.fk_departamento
        JOIN 
            wisight.cidade_estado ce ON ce.cidade_estado_id = d.fk_cidade_estado
        WHERE
            ce.cidade = '${cidadeUsuario}';
    `
    }

    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterTranstorno(cidadeUsuario){

    var instrucaoSql = ``

    if (cidadeUsuario == null || cidadeUsuario == "" || cidadeUsuario == undefined) {
        instrucaoSql = `
        SELECT 
        ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagem
        FROM wisight.relatorio;
        `
    } else {
        instrucaoSql = `
        SELECT 
            ROUND((COUNT(CASE WHEN r.problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagem
        FROM 
            wisight.relatorio r
        JOIN 
            wisight.departamento d ON d.departamento_id = r.fk_departamento
        JOIN 
            wisight.cidade_estado ce ON ce.cidade_estado_id = d.fk_cidade_estado
        WHERE
            ce.cidade = '${cidadeUsuario}';
        `
    }
    

    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterGenero(cidadeUsuario){

    var instrucaoSql = ``

    if (cidadeUsuario == null || cidadeUsuario == "" || cidadeUsuario == undefined){
        instrucaoSql = `
        SELECT 
    v.genero AS generoIncidente,
    COUNT(v.vitima_id) AS numero_vitimas,
    (COUNT(v.vitima_id) / (
    SELECT 
        COUNT(vitima_id) AS total_vitimas
    FROM 
        wisight.vitima
)) * 100 AS porcentagem
FROM 
    wisight.vitima v
GROUP BY 
    v.genero
ORDER BY 
    numero_vitimas DESC;
        `
    } else {
        instrucaoSql = `
        SELECT 
    ce.cidade,
    v.genero AS generoIncidente,
    COUNT(v.vitima_id) AS numero_vitimas,
    (COUNT(v.vitima_id) / total_vitimas.total_vitimas) * 100 AS porcentagem
FROM 
    wisight.vitima v
JOIN 
    wisight.relatorio r ON r.relatorio_id = v.fk_relatorio
JOIN 
    wisight.departamento d ON d.departamento_id = r.fk_departamento
JOIN 
    wisight.cidade_estado ce ON ce.cidade_estado_id = d.fk_cidade_estado
JOIN (
    SELECT 
        ce.cidade, 
        COUNT(v.vitima_id) AS total_vitimas
    FROM 
        wisight.vitima v
    JOIN 
        wisight.relatorio r ON r.relatorio_id = v.fk_relatorio
    JOIN 
        wisight.departamento d ON d.departamento_id = r.fk_departamento
    JOIN 
        wisight.cidade_estado ce ON ce.cidade_estado_id = d.fk_cidade_estado
    WHERE 
        ce.cidade = '${cidadeUsuario}' 
    GROUP BY 
        ce.cidade
) AS total_vitimas ON total_vitimas.cidade = ce.cidade
WHERE 
    ce.cidade = '${cidadeUsuario}' 
GROUP BY 
    ce.cidade, v.genero
ORDER BY 
    numero_vitimas DESC
LIMIT 1;
        `
    }


    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)


}

function obterArma(cidadeUsuario){

    var instrucaoSql = ``

    if (cidadeUsuario == null || cidadeUsuario == "" || cidadeUsuario == undefined){
        instrucaoSql = `
        SELECT armamento, COUNT(*) AS quantidade
        FROM wisight.vitima
        GROUP BY armamento;
        `
    } else {
        instrucaoSql = `
        SELECT 
            v.armamento, 
            COUNT(*) AS quantidade
        FROM 
            wisight.vitima v
        JOIN 
            wisight.relatorio r ON r.relatorio_id = v.fk_relatorio
        JOIN 
            wisight.departamento d ON d.departamento_id = r.fk_departamento
        JOIN 
            wisight.cidade_estado ce ON ce.cidade_estado_id = d.fk_cidade_estado
        WHERE 
            ce.cidade = '${cidadeUsuario}'
        GROUP BY 
            v.armamento;

        `
    }


    console.log("Executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterEtnia(cidadeUsuario) {

    var instrucaoSql = ``

    if (cidadeUsuario == null || cidadeUsuario == "" || cidadeUsuario == undefined) {
        instrucaoSql = `
        SELECT etnia, COUNT(*) AS quantidade
        FROM wisight.vitima
        GROUP BY etnia;
        `
    } else {
        instrucaoSql = `
        SELECT 
            v.etnia, 
            COUNT(*) AS quantidade
        FROM 
            wisight.vitima v
        JOIN 
            wisight.relatorio r ON r.relatorio_id = v.fk_relatorio
        JOIN 
            wisight.departamento d ON d.departamento_id = r.fk_departamento
        JOIN 
            wisight.cidade_estado ce ON ce.cidade_estado_id = d.fk_cidade_estado
        WHERE 
            ce.cidade = '${cidadeUsuario}'
        GROUP BY 
            v.etnia;
        `

    }


    console.log("Executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterFuga(cidadeUsuario) {

    var instrucaoSql = ``

    if (cidadeUsuario == null || cidadeUsuario == "" || cidadeUsuario == undefined) {

        instrucaoSql = `
        SELECT fuga, COUNT(*) AS quantidade
        FROM wisight.relatorio
        GROUP BY fuga;
        `
    } else {
        instrucaoSql = `
        SELECT 
            r.fuga, 
            COUNT(*) AS quantidade
        FROM 
            wisight.relatorio r
        JOIN 
            wisight.departamento d ON d.departamento_id = r.fk_departamento
        JOIN 
            wisight.cidade_estado ce ON ce.cidade_estado_id = d.fk_cidade_estado
        WHERE 
            ce.cidade = '${cidadeUsuario}'
        GROUP BY 
            r.fuga;
            `
    }
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterVitima(cidadeUsuario){

    var instrucaoSql = ``

    if (cidadeUsuario == null || cidadeUsuario == "" || cidadeUsuario == undefined) {
        instrucaoSql = `
        SELECT 
        YEAR(r.dt_ocorrencia) AS ano,
        MONTH(r.dt_ocorrencia) AS mes,
        COUNT(v.vitima_id) AS total_vitimas
        FROM 
        wisight.vitima v
        JOIN 
        wisight.relatorio r ON v.fk_relatorio = r.relatorio_id
        WHERE 
        YEAR(r.dt_ocorrencia) IN (2023, 2024)
        GROUP BY 
        ano, mes
        ORDER BY 
        ano, mes;
        `
    } else {
        instrucaoSql = `
        SELECT 
            YEAR(r.dt_ocorrencia) AS ano,
            MONTH(r.dt_ocorrencia) AS mes,
            COUNT(v.vitima_id) AS total_vitimas
        FROM 
            wisight.vitima v
        JOIN 
            wisight.relatorio r ON v.fk_relatorio = r.relatorio_id
        JOIN 
            wisight.departamento d ON r.fk_departamento = d.departamento_id
        JOIN 
            wisight.cidade_estado ce ON d.fk_cidade_estado = ce.cidade_estado_id
        WHERE 
            YEAR(r.dt_ocorrencia) IN (2023, 2024)
            AND ce.cidade = '${cidadeUsuario}'  -- Filtrando pela cidade "Atlanta"
        GROUP BY 
            ano, mes
        ORDER BY 
            ano, mes;
        `
    }


    console.log("Executando instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

module.exports = {
    obterRegioes,
    obterMediaIdade,
    obterCameraCorporal,
    obterTranstorno,
    obterGenero,
    obterArma,
    obterEtnia,
    obterFuga,
    obterVitima
};