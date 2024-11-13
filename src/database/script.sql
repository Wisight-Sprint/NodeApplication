create database if not exists wisight;
use wisight;

create table if not exists wisight.cidade_estado (
  cidade_estado_id INT primary key,
  cidade VARCHAR(45),
  estado VARCHAR(45)
);

create table if not exists wisight.departamento (
  departamento_id INT primary key,
  nome VARCHAR(45),
  fk_cidade_estado INT,
    foreign key (fk_cidade_estado)
    references cidade_estado (cidade_estado_id)
);

create table if not exists wisight.usuario (
  usuario_id INT primary key auto_increment,
  nome VARCHAR(45),
  email VARCHAR(45),
  numero VARCHAR(45),
  permissao ENUM('Administrador', 'Usuário', 'Externo') NOT NULL,
  senha VARCHAR(45),
  pularTutorial tinyint,
  fk_departamento int,
    foreign key (fk_departamento)
    references departamento (departamento_id)
);

create table if not exists wisight.relatorio (
  relatorio_id int,
  dt_dep date,
  fuga VARCHAR(45),
  camera_corporal tinyint,
  problemas_mentais tinyint,
  fk_departamento int,
  primary key (relatorio_id, fk_departamento),
    foreign key (fk_departamento)
    references departamento (departamento_id)
);

create table if not exists wisight.vitima (
  vitima_id INT,
  idade INT,
  etnia VARCHAR(45),
  genero VARCHAR(45),
  armamento VARCHAR(45),
  fk_relatorio INT,
  primary key (vitima_id, fk_relatorio),
    foreign key (fk_relatorio)
    references relatorio (relatorio_id)
);

INSERT INTO wisight.cidade_estado (cidade_estado_id, cidade, estado) VALUES (1, 'New York', 'New York'), (2, 'Los Angeles', 'California'), (3, 'Chicago', 'Illinois'), (4, 'Houston', 'Texas'), (5, 'Phoenix', 'Arizona'), (6, 'Philadelphia', 'Pennsylvania'), (7, 'San Antonio', 'Texas'), (8, 'San Diego', 'California'), (9, 'Dallas', 'Texas'), (10, 'San Jose', 'California'), (11, 'Austin', 'Texas'), (12, 'Jacksonville', 'Florida'), (13, 'Fort Worth', 'Texas'), (14, 'Columbus', 'Ohio'), (15, 'Charlotte', 'North Carolina'), (16, 'Indianapolis', 'Indiana'), (17, 'Seattle', 'Washington'), (18, 'Denver', 'Colorado'), (19, 'Washington', 'District of Columbia'), (20, 'Boston', 'Massachusetts'), (21, 'El Paso', 'Texas'), (22, 'Detroit', 'Michigan'), (23, 'Nashville', 'Tennessee'), (24, 'Memphis', 'Tennessee'), (25, 'Oklahoma City', 'Oklahoma'), (26, 'Louisville', 'Kentucky'), (27, 'Baltimore', 'Maryland'), (28, 'Milwaukee', 'Wisconsin'), (29, 'Albuquerque', 'New Mexico');

INSERT INTO wisight.departamento (departamento_id, nome, fk_cidade_estado) VALUES (1, 'Polícia de New York', 1), (2, 'Polícia de Los Angeles', 2), (3, 'Polícia de Chicago', 3), (4, 'Polícia de Houston', 4), (5, 'Polícia de Phoenix', 5), (6, 'Polícia de Philadelphia', 6), (7, 'Polícia de San Antonio', 7), (8, 'Polícia de San Diego', 8), (9, 'Polícia de Dallas', 9), (10, 'Polícia de San Jose', 10), (11, 'Polícia de Austin', 11), (12, 'Polícia de Jacksonville', 12), (13, 'Polícia de Fort Worth', 13), (14, 'Polícia de Columbus', 14), (15, 'Polícia de Charlotte', 15), (16, 'Polícia de Indianapolis', 16), (17, 'Polícia de Seattle', 17), (18, 'Polícia de Denver', 18), (19, 'Polícia de Washington', 19), (20, 'Polícia de Boston', 20), (21, 'Polícia de El Paso', 21), (22, 'Polícia de Detroit', 22), (23, 'Polícia de Nashville', 23), (24, 'Polícia de Memphis', 24), (25, 'Polícia de Oklahoma City', 25), (26, 'Polícia de Louisville', 26), (27, 'Polícia de Baltimore', 27), (28, 'Polícia de Milwaukee', 28), (29, 'Polícia de Albuquerque', 29);

INSERT INTO wisight.relatorio (relatorio_id, dt_dep, fuga, camera_corporal, problemas_mentais, fk_departamento)
VALUES (1, "2022-05-05", "Sem tentativa", 0, 1, 1), (2, "2022-05-06", "A pé", 1, 0, 1), (3, "2022-05-07", "Veículo", 1, 1, 2), (4, "2022-06-01", "A pé", 0, 0, 2), (5, "2022-06-02", "Veículo", 1, 1, 2), (6, "2022-06-03", "Sem tentativa", 0, 0, 2), (7, "2022-07-01", "A pé", 0, 1, 3), (8, "2022-07-02", "Veículo", 1, 0, 3), (9, "2022-07-03", "Sem tentativa", 0, 0, 3), (10, "2022-08-01", "Veículo", 1, 1, 4), (11, "2022-08-02", "A pé", 0, 0, 4), (12, "2022-08-03", "Sem tentativa", 0, 1, 4), (13, "2022-09-01", "A pé", 1, 0, 5), (14, "2022-09-02", "Veículo", 0, 1, 5), (15, "2022-09-03", "Sem tentativa", 1, 0, 5), (16, "2022-09-04", "A pé", 1, 1, 6), (17, "2022-09-05", "Veículo", 0, 0, 6), (18, "2022-09-06", "Sem tentativa", 1, 1, 6), (19, "2022-09-07", "A pé", 0, 0, 7), (20, "2022-09-08", "Veículo", 1, 1, 7), (21, "2022-09-09", "Sem tentativa", 0, 1, 7), (22, "2022-09-10", "A pé", 1, 0, 8), (23, "2022-09-11", "Veículo", 0, 0, 8), (24, "2022-09-12", "Sem tentativa", 1, 1, 8), (25, "2022-09-13", "A pé", 1, 1, 9), (26, "2022-09-14", "Veículo", 0, 0, 9), (27, "2022-09-15", "Sem tentativa", 1, 0, 9), (28, "2022-09-16", "A pé", 0, 1, 10), (29, "2022-09-17", "Veículo", 1, 1, 10), (30, "2022-09-18", "Sem tentativa", 0, 0, 10), (31, "2022-09-19", "A pé", 1, 0, 11), (32, "2022-09-20", "Veículo", 0, 1, 11), (33, "2022-09-21", "Sem tentativa", 1, 0, 11), (34, "2022-09-22", "A pé", 1, 1, 12), (35, "2022-09-23", "Veículo", 0, 0, 12), (36, "2022-09-24", "Sem tentativa", 1, 1, 12), (37, "2022-09-25", "A pé", 0, 0, 13), (38, "2022-09-26", "Veículo", 1, 1, 13), (39, "2022-09-27", "Sem tentativa", 0, 1, 13), (40, "2022-09-28", "A pé", 1, 0, 14), (41, "2022-09-29", "Veículo", 0, 0, 14), (42, "2022-09-30", "Sem tentativa", 1, 1, 14), (43, "2022-10-01", "Veículo", 1, 1, 15), (44, "2022-10-02", "A pé", 0, 0, 15), (45, "2022-10-03", "Sem tentativa", 0, 1, 16), (46, "2022-10-04", "Veículo", 1, 0, 16), (47, "2022-10-05", "A pé", 0, 1, 17), (48, "2022-10-06", "Sem tentativa", 1, 0, 17), (49, "2022-10-07", "Veículo", 0, 0, 18), (50, "2022-10-08", "A pé", 1, 1, 18), (51, "2022-10-09", "Sem tentativa", 0, 1, 19), (52, "2022-10-10", "A pé", 1, 0, 19), (53, "2022-10-11", "Veículo", 0, 0, 20), (54, "2022-10-12", "Sem tentativa", 1, 1, 20), (55, "2022-10-13", "A pé", 1, 0, 21), (56, "2022-10-14", "Veículo", 0, 1, 21), (57, "2022-10-15", "Sem tentativa", 1, 0, 22), (58, "2022-10-16", "A pé", 0, 1, 22), (59, "2022-10-17", "Veículo", 1, 1, 23), (60, "2022-10-18", "Sem tentativa", 0, 0, 23), (61, "2022-10-19", "A pé", 1, 1, 24), (62, "2022-10-20", "Veículo", 0, 1, 24), (63, "2022-10-21", "Sem tentativa", 1, 0, 25), (64, "2022-10-22", "A pé", 1, 1, 25), (65, "2022-10-23", "Veículo", 0, 1, 26), (66, "2022-10-24", "Sem tentativa", 1, 0, 26), (67, "2022-10-25", "A pé", 1, 1, 27), (68, "2022-10-26", "Veículo", 0, 1, 27), (69, "2022-10-27", "Sem tentativa", 1, 0, 28), (70, "2022-10-28", "A pé", 0, 1, 28), (71, "2022-10-29", "Veículo", 1, 1, 29), (72, "2022-10-30", "Sem tentativa", 0, 1, 29);

INSERT INTO usuario VALUES (default, "João Pedro Mori Noce", "joao.noce@wisight.com", "123", "Administrador", "1111111#", false, 1), (default, "Laise Maria", "laise.maria@wisight.com", "1234", "Administrador", "2222222#", false, 1), (default, "Cauan Araruna", "cauan.araruna@wisight.com", "531", "Administrador", "3333333#", false, 1), (default, "Marco Antonio", "marco.antonio@wisight.com", "1782", "Administrador", "4444444#", false, 1), (default, "Samuel Paz", "samuel.paz@wisight.com", "0986", "Administrador", "5555555#", false, 1), (default, "Giovanni de Souza", "giovanni.souza@wisight.com", "431", "Administrador", "6666666#", false, 1);


INSERT INTO wisight.vitima (vitima_id, idade, etnia, genero, armamento, fk_relatorio) VALUES (1, 25, 'Branca', 'Masculino', 'Não armado', 1), (2, 30, 'Negra', 'Feminino', 'Arma branca', 2), (3, 45, 'Asiática', 'Masculino', 'Não armado', 3), (4, 22, 'Hispânica', 'Feminino', 'Arma de fogo', 4), (5, 35, 'Negra', 'Masculino', 'Arma branca', 5), (6, 28, 'Branca', 'Feminino', 'Arma de fogo', 6), (7, 40, 'Asiática', 'Masculino', 'Não armado', 7), (8, 19, 'Indígena', 'Feminino', 'Não armado', 8), (9, 33, 'Branca', 'Masculino', 'Arma branca', 9), (10, 50, 'Negra', 'Feminino', 'Arma de fogo', 10), (11, 27, 'Hispânica', 'Masculino', 'Não armado', 11), (12, 36, 'Asiática', 'Feminino', 'Arma de fogo', 12), (13, 44, 'Indígena', 'Masculino', 'Arma branca', 13), (14, 21, 'Branca', 'Feminino', 'Não armado', 14), (15, 39, 'Negra', 'Masculino', 'Arma de fogo', 15), (16, 25, 'Asiática', 'Feminino', 'Não armado', 16), (17, 32, 'Hispânica', 'Masculino', 'Arma branca', 17), (18, 30, 'Branca', 'Feminino', 'Arma de fogo', 18), (19, 29, 'Negra', 'Masculino', 'Não armado', 19), (20, 26, 'Asiática', 'Feminino', 'Arma branca', 20), (21, 31, 'Indígena', 'Masculino', 'Arma de fogo', 21), (22, 23, 'Branca', 'Feminino', 'Não armado', 22), (23, 28, 'Negra', 'Masculino', 'Arma branca', 23), (24, 47, 'Asiática', 'Feminino', 'Arma de fogo', 24), (25, 24, 'Hispânica', 'Masculino', 'Não armado', 25), (26, 33, 'Branca', 'Feminino', 'Arma de fogo', 26), (27, 29, 'Negra', 'Masculino', 'Arma branca', 27), (28, 34, 'Asiática', 'Feminino', 'Não armado', 28), (29, 41, 'Indígena', 'Masculino', 'Arma de fogo', 29), (30, 20, 'Branca', 'Feminino', 'Não armado', 30), (31, 38, 'Negra', 'Masculino', 'Arma branca', 31), (32, 43, 'Asiática', 'Feminino', 'Arma de fogo', 32), (33, 24, 'Hispânica', 'Masculino', 'Não armado', 33), (34, 37, 'Branca', 'Feminino', 'Arma branca', 34), (35, 30, 'Negra', 'Masculino', 'Arma de fogo', 35), (36, 45, 'Asiática', 'Feminino', 'Não armado', 36), (37, 19, 'Indígena', 'Masculino', 'Arma branca', 37), (38, 26, 'Branca', 'Feminino', 'Arma de fogo', 38), (39, 40, 'Negra', 'Masculino', 'Não armado', 39), (40, 21, 'Asiática', 'Feminino', 'Arma branca', 40), (41, 36, 'Hispânica', 'Masculino', 'Arma de fogo', 41), (42, 27, 'Branca', 'Feminino', 'Não armado', 42), (43, 35, 'Negra', 'Masculino', 'Arma de fogo', 43), (44, 23, 'Asiática', 'Feminino', 'Arma branca', 44), (45, 30, 'Indígena', 'Masculino', 'Não armado', 45), (46, 29, 'Branca', 'Feminino', 'Arma de fogo', 46), (47, 34, 'Negra', 'Masculino', 'Não armado', 47), (48, 28, 'Asiática', 'Feminino', 'Arma branca', 48), (49, 50, 'Hispânica', 'Masculino', 'Arma de fogo', 49), (50, 22, 'Branca', 'Feminino', 'Não armado', 50), (51, 44, 'Negra', 'Masculino', 'Arma branca', 51), (52, 33, 'Asiática', 'Feminino', 'Arma de fogo', 52), (53, 21, 'Indígena', 'Masculino', 'Não armado', 53), (54, 40, 'Branca', 'Feminino', 'Arma branca', 54), (55, 30, 'Negra', 'Masculino', 'Arma de fogo', 55), (56, 48, 'Asiática', 'Feminino', 'Não armado', 56), (57, 19, 'Hispânica', 'Masculino', 'Arma branca', 57), (58, 25, 'Branca', 'Feminino', 'Arma de fogo', 58), (59, 42, 'Negra', 'Masculino', 'Não armado', 59), (60, 27, 'Asiática', 'Feminino', 'Arma branca', 60), (61, 33, 'Indígena', 'Masculino', 'Arma de fogo', 61), (62, 32, 'Branca', 'Feminino', 'Não armado', 62), (63, 29, 'Negra', 'Masculino', 'Arma branca', 63), (64, 46, 'Asiática', 'Feminino', 'Arma de fogo', 64), (65, 18, 'Hispânica', 'Masculino', 'Não armado', 65), (66, 35, 'Branca', 'Feminino', 'Arma branca', 66), (67, 39, 'Negra', 'Masculino', 'Arma de fogo', 67), (68, 31, 'Asiática', 'Feminino', 'Não armado', 68), (69, 40, 'Indígena', 'Masculino', 'Arma branca', 69), (70, 26, 'Branca', 'Feminino', 'Arma de fogo', 70), (71, 45, 'Negra', 'Masculino', 'Não armado', 71), (72, 28, 'Asiática', 'Feminino', 'Arma branca', 72), (73, 28, 'Negra', 'Feminino', 'Arma branca', 48), (74, 45, 'Branca', 'Masculino', 'Arma de fogo', 49), (75, 60, 'Indígena', 'Feminino', 'Não armado', 50), (76, 23, 'Negra', 'Masculino', 'Arma de fogo', 51), (77, 38, 'Asiática', 'Feminino', 'Não armado', 52), (78, 50, 'Hispânica', 'Masculino', 'Arma branca', 53), (79, 29, 'Branca', 'Feminino', 'Arma de fogo', 54), (80, 37, 'Negra', 'Masculino', 'Não armado', 55), (81, 33, 'Asiática', 'Feminino', 'Arma branca', 56), (82, 42, 'Branca', 'Masculino', 'Arma de fogo', 57), (83, 29, 'Hispânica', 'Feminino', 'Não armado', 58), (84, 55, 'Negra', 'Masculino', 'Arma branca', 59), (85, 30, 'Asiática', 'Feminino', 'Arma de fogo', 60), (86, 49, 'Indígena', 'Masculino', 'Não armado', 61), (87, 36, 'Branca', 'Feminino', 'Arma de fogo', 62), (88, 40, 'Hispânica', 'Masculino', 'Arma branca', 63), (89, 25, 'Negra', 'Feminino', 'Não armado', 64), (90, 27, 'Asiática', 'Masculino', 'Arma de fogo', 65), (91, 35, 'Branca', 'Feminino', 'Arma branca', 66), (92, 47, 'Negra', 'Masculino', 'Não armado', 67), (93, 32, 'Indígena', 'Feminino', 'Arma de fogo', 68), (94, 44, 'Branca', 'Masculino', 'Arma branca', 69), (95, 56, 'Hispânica', 'Feminino', 'Não armado', 70), (96, 31, 'Negra', 'Masculino', 'Arma de fogo', 71), (97, 48, 'Asiática', 'Feminino', 'Não armado', 72), (98, 50, 'Branca', 'Masculino', 'Arma branca', 54), (99, 29, 'Hispânica', 'Feminino', 'Arma de fogo', 69), (100, 39, 'Negra', 'Masculino', 'Não armado', 25);

SELECT * FROM wisight.cidade_estado;
SELECT * FROM wisight.departamento;
SELECT * FROM wisight.usuario;
SELECT * FROM wisight.relatorio;
SELECT * FROM wisight.vitima;
SELECT c.estado,
    COUNT(r.relatorio_id) AS total_relatorios_por_estado,
    ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemCamera,
    ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemMental,
    ROUND(AVG(v.idade)) AS mediaIdade,
    
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
    ORDER BY c.estado;