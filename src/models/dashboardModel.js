const database = require("../database/config");


function obterRegioes() {

    let instrucaoSql = `
    select cidade, estado, nome from wisight.cidade_estado ce join wisight.departamento d on d.fk_cidade_estado = ce.cidade_estado_id;
;
    `
    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterMediaIdade(localizacaoUsuario, tipoLocalizacao) {

    var instrucaoSql = ``

    if (localizacaoUsuario == null || localizacaoUsuario == undefined) {
        console.log("localizacaoUsuario esta errada")
    } else if (localizacaoUsuario == '' && tipoLocalizacao == '') {
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
    } else if (tipoLocalizacao == 'cidade') {
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
                    ce.cidade = '${localizacaoUsuario}'
                GROUP BY 
                    ce.cidade, ce.estado;
            `
    } else if (tipoLocalizacao == 'estado') {
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
                    ce.estado = '${localizacaoUsuario}'
                GROUP BY 
                    ce.cidade, ce.estado;
        `
    } else if (tipoLocalizacao == 'departamento') {
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
                    d.departamento_id = ${localizacaoUsuario}
                GROUP BY 
                    ce.cidade, ce.estado;
        `
    } else {
        console.log("algo deu errado")
    }

    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterCameraCorporal(localizacaoUsuario, tipoLocalizacao) {

    var instrucaoSql = ``

    if (localizacaoUsuario == null || localizacaoUsuario == undefined) {
        console.log("localizacaoUsuario esta errada")
    } else if (localizacaoUsuario == '' || tipoLocalizacao == '') {
        instrucaoSql = `
        SELECT 
        ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagem
        FROM wisight.relatorio;
        `
    } else if (tipoLocalizacao == 'cidade') {
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
            ce.cidade = '${localizacaoUsuario}';
    `
    } else if (tipoLocalizacao == 'estado') {
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
            ce.estado = '${localizacaoUsuario}';
        `
    } else if (tipoLocalizacao == 'departamento') {
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
            d.departamento_id = ${localizacaoUsuario};
        `
    } else {
        console.log("algo deu errado")
    }

    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterTranstorno(localizacaoUsuario, tipoLocalizacao) {

    var instrucaoSql = ``

    if (localizacaoUsuario == null || localizacaoUsuario == undefined) {
        console.log("localizacaoUsuario esta errada")
    } else if (tipoLocalizacao == "") {
        instrucaoSql = `
        SELECT 
        ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagem
        FROM wisight.relatorio;
        `
    } else if (tipoLocalizacao == 'cidade') {
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
            ce.cidade = '${localizacaoUsuario}';
        `
    } else if (tipoLocalizacao == 'estado') {
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
            ce.estado = '${localizacaoUsuario}';
        `
    } else if (tipoLocalizacao == 'departamento') {
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
            d.departamento_id = '${localizacaoUsuario}';
        `
    } else {
        console.log("algo deu errado")
    }


    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterGenero(localizacaoUsuario, tipoLocalizacao) {

    var instrucaoSql = ``

    if (localizacaoUsuario == null || localizacaoUsuario == undefined) {
        console.log("localizacaoUsuario esta errada")
    } else if (tipoLocalizacao == "") {
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
    } else if (tipoLocalizacao == 'cidade') {
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
        ce.cidade = '${localizacaoUsuario}' 
    GROUP BY 
        ce.cidade
) AS total_vitimas ON total_vitimas.cidade = ce.cidade
WHERE 
    ce.cidade = '${localizacaoUsuario}' 
GROUP BY 
    ce.cidade, v.genero
ORDER BY 
    numero_vitimas DESC
LIMIT 1;
        `
    } else if (tipoLocalizacao == 'estado') {
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
        ce.estado = '${localizacaoUsuario}' 
    GROUP BY 
        ce.cidade
) AS total_vitimas ON total_vitimas.cidade = ce.cidade
WHERE 
    ce.estado = '${localizacaoUsuario}' 
GROUP BY 
    ce.cidade, v.genero
ORDER BY 
    numero_vitimas DESC
LIMIT 1;
        `
    } else if (tipoLocalizacao == 'departamento') {
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
        d.departamento_id = ${localizacaoUsuario}
    GROUP BY 
        ce.cidade
) AS total_vitimas ON total_vitimas.cidade = ce.cidade
WHERE 
    d.departamento_id = ${localizacaoUsuario}
GROUP BY 
    ce.cidade, v.genero
ORDER BY 
    numero_vitimas DESC
LIMIT 1;
        `
    } else {
        console.log("algo deu errado")
    }


    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)


}

function obterArma(localizacaoUsuario, tipoLocalizacao) {

    var instrucaoSql = ``

    if (localizacaoUsuario == null || localizacaoUsuario == undefined) {
        console.log("localizacaoUsuario esta errada")
    } else if (tipoLocalizacao == "") {
        instrucaoSql = `
        SELECT armamento, COUNT(*) AS quantidade
        FROM wisight.vitima
        GROUP BY armamento;
        `
    } else if (tipoLocalizacao == "cidade") {
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
            ce.cidade = '${localizacaoUsuario}'
        GROUP BY 
            v.armamento;
        `
    } else if (tipoLocalizacao == "estado") {
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
            ce.estado = '${localizacaoUsuario}'
        GROUP BY 
            v.armamento;
        `
    } else if (tipoLocalizacao == "departamento") {
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
            d.departamento_id = ${localizacaoUsuario}
        GROUP BY 
            v.armamento;
        `
    } else {
        console.log("algo deu errado")
    }


    console.log("Executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterEtnia(localizacaoUsuario, tipoLocalizacao) {

    var instrucaoSql = ``

    if (localizacaoUsuario == null || localizacaoUsuario == undefined) {
        console.log("localizacaoUsuario esta errada")
    } else if (tipoLocalizacao == "") {
        instrucaoSql = `
        SELECT etnia, COUNT(*) AS quantidade
        FROM wisight.vitima
        GROUP BY etnia;
        `
    } else if (tipoLocalizacao == "cidade") {
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
            ce.cidade = '${localizacaoUsuario}'
        GROUP BY 
            v.etnia;
        `
    } else if (tipoLocalizacao == "estado") {
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
            ce.estado = '${localizacaoUsuario}'
        GROUP BY 
            v.etnia;
        `
    } else if (tipoLocalizacao == "departamento") {
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
            d.departamento_id = ${localizacaoUsuario}
        GROUP BY 
            v.etnia;
        `
    } else {
        console.log("algo deu errado")
    }


    console.log("Executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterFuga(localizacaoUsuario, tipoLocalizacao) {

    var instrucaoSql = ``

    if (localizacaoUsuario == null || localizacaoUsuario == undefined) {
        console.log("localizacaoUsuario esta errada")
    } else if (tipoLocalizacao == "") {

        instrucaoSql = `
        SELECT fuga, COUNT(*) AS quantidade
        FROM wisight.relatorio
        GROUP BY fuga;
        `
    } else if (tipoLocalizacao == "cidade") {
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
            ce.cidade = '${localizacaoUsuario}'
        GROUP BY 
            r.fuga;
            `
    } else if (tipoLocalizacao == "estado") {
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
            ce.estado = '${localizacaoUsuario}'
        GROUP BY 
            r.fuga;
            `
    } else if (tipoLocalizacao == "departamento") {
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
            d.departamento_id = ${localizacaoUsuario}
        GROUP BY 
            r.fuga;
            `
    } else {
        console.log("algo deu errado")
    }


    console.log("Executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterVitima(localizacaoUsuario, tipoLocalizacao) {

    var instrucaoSql = ``

    if (localizacaoUsuario == null || localizacaoUsuario == undefined) {
        console.log("localizacaoUsuario esta errada")
    } else if (localizacaoUsuario == "") {
        instrucaoSql = `
        SELECT 
            YEAR(r.dt_dep) AS ano,
            MONTH(r.dt_dep) AS mes,
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
			YEAR(r.dt_dep) in (2023, 2024) 
        GROUP BY 
            ano, mes
        ORDER BY 
            ano, mes;
        `
    } else if (tipoLocalizacao == "cidade") {
        instrucaoSql = `
        SELECT 
            YEAR(r.dt_dep) AS ano,
            MONTH(r.dt_dep) AS mes,
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
			YEAR(r.dt_dep) in (2023, 2024) and
            ce.cidade = "${localizacaoUsuario}" 
        GROUP BY 
            ano, mes
        ORDER BY 
            ano, mes;
        `
    } else if (tipoLocalizacao == "estado") {
        instrucaoSql = `
        SELECT 
            YEAR(r.dt_dep) AS ano,
            MONTH(r.dt_dep) AS mes,
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
			YEAR(r.dt_dep) in (2023, 2024) and
            ce.estado = "${localizacaoUsuario}" 
        GROUP BY 
            ano, mes
        ORDER BY 
            ano, mes;
        `
    } else if (tipoLocalizacao == "departamento") {
        instrucaoSql = `
        SELECT 
            YEAR(r.dt_dep) AS ano,
            MONTH(r.dt_dep) AS mes,
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
			YEAR(r.dt_dep) in (2023, 2024) and
            d.departamento_id = ${localizacaoUsuario} 
        GROUP BY 
            ano, mes
        ORDER BY 
            ano, mes;
        `
    } else {
        console.log("algo deu errado")
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