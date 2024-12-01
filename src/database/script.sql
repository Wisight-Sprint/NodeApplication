create database if not exists wisight;
use wisight;

create table if not exists wisight.cidade_estado (
  cidade_estado_id int primary key auto_increment,
  cidade varchar(45),
  estado varchar(45)
);

create table if not exists wisight.departamento (
  departamento_id int primary key auto_increment,
  nome varchar(45),
  fk_cidade_estado int,
    foreign key (fk_cidade_estado)
    references cidade_estado (cidade_estado_id)
);

create table if not exists wisight.usuario (
  usuario_id int primary key auto_increment,
  nome varchar(45),
  email varchar(45),
  numero varchar(45),
  permissao ENUM('Administrador', 'Usuário', 'Externo', 'Desenvolvedor') NOT NULL,
  senha varchar(45),
  pularTutorial tinyint,
  fk_departamento int,
    foreign key (fk_departamento)
    references departamento (departamento_id)
);

create table if not exists wisight.relatorio (
  relatorio_id int auto_increment,
  dt_relatorio date,
  fuga varchar(45),
  camera_corporal tinyint,
  fk_departamento int,
  primary key (relatorio_id, fk_departamento),
    foreign key (fk_departamento)
    references departamento (departamento_id)
);

create table if not exists wisight.vitima (
  vitima_id int auto_increment,
  idade int,
  etnia varchar(45),
  genero varchar(45),
  armamento varchar(45),
  problemas_mentais tinyint,
  fk_relatorio int,
  primary key (vitima_id, fk_relatorio),
    foreign key (fk_relatorio)
    references relatorio (relatorio_id)
);

create table if not exists wisight.insight (
  insight_id int,
  dt_insercao datetime,
  texto_insight varchar(5000),
  fk_cidade_estado int,
  fk_departamento int,
	foreign key (fk_cidade_estado)
    references cidade_estado (cidade_estado_id),
	foreign key (fk_departamento)
    references departamento (departamento_id),
    primary key (insight_id, fk_cidade_estado, fk_departamento)
);

create table if not exists wisight.chamados (
  chamado_id int primary key auto_increment,
  assunto varchar(255),
  descricao varchar(5000),
  status_chamado ENUM('Criado', 'Finalizado'),
  resposta varchar(5000),
  dt_criacao date,
  fk_usuario int,
  fk_departamento int,
  foreign key(fk_usuario)
    references usuario (usuario_id),
  foreign key(fk_departamento)
    references departamento (departamento_id)
);

INSERT INTO wisight.cidade_estado (cidade_estado_id, cidade, estado) VALUES (1, 'Externo', 'EXT'), (2, 'Los Angeles', 'CA'), (3, 'Chicago', 'IL'), (4, 'Houston', 'TX'), (5, 'Phoenix', 'AZ'), (6, 'Philadelphia', 'PA'), (7, 'San Antonio', 'TX'), (8, 'San Diego', 'CA'), (9, 'Dallas', 'TX'), (10, 'San Jose', 'CA'), (11, 'Austin', 'TX'), (12, 'Jacksonville', 'FL'), (13, 'Fort Worth', 'TX'), (14, 'Columbus', 'OH'), (15, 'Charlotte', 'NC'), (16, 'Indianapolis', 'IN'), (17, 'Seattle', 'WA'), (18, 'Denver', 'CO'), (19, 'Washington', 'DC'), (20, 'Boston', 'MA'), (21, 'El Paso', 'TX'), (22, 'Detroit', 'MI'), (23, 'Nashville', 'TN'), (24, 'Memphis', 'TN'), (25, 'Oklahoma City', 'OK'), (26, 'Louisville', 'KY'), (27, 'Baltimore', 'MD'), (28, 'Milwaukee', 'WI'), (29, 'Albuquerque', 'NM'), (30, 'Tucson', 'AZ'), (31, 'Fresno', 'CA'), (32, 'Sacramento', 'CA'), (33, 'Kansas City', 'MO'), (34, 'Mesa', 'AZ'), (35, 'Atlanta', 'GA'), (36, 'Omaha', 'NE'), (37, 'Raleigh', 'NC'), (38, 'Miami', 'FL'), (39, 'Long Beach', 'CA'), (40, 'Virginia Beach', 'VA'), (41, 'Oakland', 'CA'), (42, 'Minneapolis', 'MN'), (43, 'Tulsa', 'OK'), (44, 'Arlington', 'TX'), (45, 'New Orleans', 'LA'), (46, 'Wichita', 'KS'), (47, 'Cleveland', 'OH'), (48, 'Tampa', 'FL'), (49, 'Bakersfield', 'CA'), (50, 'Aurora', 'CO'), (51, 'Anaheim', 'CA'), (52, 'Honolulu', 'HI'), (53, 'Santa Ana', 'CA'), (54, 'Riverside', 'CA'), (55, 'Corpus Christi', 'TX'), (56, 'Lexington', 'KY'), (57, 'Stockton', 'CA'), (58, 'Henderson', 'NV'), (59, 'Saint Paul', 'MN'), (60, 'St. Louis', 'MO'), (61, 'Cincinnati', 'OH'), (62, 'Pittsburgh', 'PA'), (63, 'Greensboro', 'NC'), (64, 'Anchorage', 'AK'), (65, 'Plano', 'TX'), (66, 'Lincoln', 'NE'), (67, 'Orlando', 'FL'), (68, 'Irvine', 'CA'), (69, 'Toledo', 'OH'), (70, 'Jersey City', 'NJ'), (71, 'Chula Vista', 'CA'), (72, 'Durham', 'NC'), (73, 'Fort Lauderdale', 'FL'), (74, 'St. Petersburg', 'FL'), (75, 'Laredo', 'TX'), (76, 'Madison', 'WI'), (77, 'Chandler', 'AZ'), (78, 'Buffalo', 'NY'), (79, 'Lubbock', 'TX'), (80, 'Scottsdale', 'AZ'), (81, 'Reno', 'NV'), (82, 'Glendale', 'AZ'), (83, 'Gilbert', 'AZ'), (84, 'Winston-Salem', 'NC'), (85, 'North Las Vegas', 'NV'), (86, 'Norfolk', 'VA'), (87, 'Chesapeake', 'VA'), (88, 'Garland', 'TX'), (89, 'Irving', 'TX'), (90, 'Hialeah', 'FL'), (91, 'New York', 'NY');

INSERT INTO wisight.departamento (departamento_id, nome, fk_cidade_estado) VALUES (1, 'Externos', 1), (2, 'Desenvolvedores', 1), (3, 'Patrulha de Los Angeles 58', 2), (4, 'Patrulha de Los Angeles 72', 2), (5, 'Patrulha de Chicago 4', 3), (6, 'Patrulha de Chicago 37', 3), (7, 'Patrulha de Houston 81', 4), (8, 'Patrulha de Houston 7', 4), (9, 'Patrulha de Phoenix 56', 5), (10, 'Patrulha de Phoenix 21', 5), (11, 'Patrulha de Philadelphia 99', 6), (12, 'Patrulha de Philadelphia 3', 6), (13, 'Patrulha de San Antonio 61', 7), (14, 'Patrulha de San Antonio 13', 7), (15, 'Patrulha de San Diego 94', 8), (16, 'Patrulha de San Diego 8', 8), (17, 'Patrulha de Dallas 44', 9), (18, 'Patrulha de Dallas 33', 9), (19, 'Patrulha de San Jose 73', 10), (20, 'Patrulha de San Jose 45', 10), (21, 'Patrulha de Austin 17', 11), (22, 'Patrulha de Austin 88', 11), (23, 'Patrulha de Jacksonville 62', 12), (24, 'Patrulha de Jacksonville 14', 12), (25, 'Patrulha de Fort Worth 50', 13), (26, 'Patrulha de Fort Worth 5', 13), (27, 'Patrulha de Columbus 98', 14), (28, 'Patrulha de Columbus 29', 14), (29, 'Patrulha de Charlotte 67', 15), (30, 'Patrulha de Charlotte 91', 15), (31, 'Patrulha de Indianapolis 40', 16), (32, 'Patrulha de Indianapolis 80', 16), (33, 'Patrulha de Seattle 25', 17), (34, 'Patrulha de Seattle 57', 17), (35, 'Patrulha de Denver 89', 18), (36, 'Patrulha de Denver 12', 18), (37, 'Patrulha de Washington 69', 19), (38, 'Patrulha de Washington 36', 19), (39, 'Patrulha de Boston 48', 20), (40, 'Patrulha de Boston 83', 20), (41, 'Patrulha de El Paso 34', 21), (42, 'Patrulha de El Paso 70', 21), (43, 'Patrulha de Detroit 18', 22), (44, 'Patrulha de Detroit 90', 22), (45, 'Patrulha de Nashville 74', 23), (46, 'Patrulha de Nashville 28', 23), (47, 'Patrulha de Memphis 96', 24), (48, 'Patrulha de Memphis 32', 24), (49, 'Patrulha de Oklahoma City 64', 25), (50, 'Patrulha de Oklahoma City 86', 25), (51, 'Patrulha de Louisville 66', 26), (52, 'Patrulha de Louisville 9', 26), (53, 'Patrulha de Baltimore 11', 27), (54, 'Patrulha de Baltimore 41', 27), (55, 'Patrulha de Milwaukee 6', 28), (56, 'Patrulha de Milwaukee 97', 28), (57, 'Patrulha de Albuquerque 92', 29), (58, 'Patrulha de Albuquerque 49', 29), (59, 'Patrulha de Fresno 79', 30), (60, 'Patrulha de Fresno 84', 30), (61, 'Patrulha de Sacramento 22', 31), (62, 'Patrulha de Sacramento 63', 31), (63, 'Patrulha de Kansas City 30', 32), (64, 'Patrulha de Kansas City 53', 32), (65, 'Patrulha de Mesa 27', 33), (66, 'Patrulha de Mesa 39', 33), (67, 'Patrulha de Atlanta 20', 34), (68, 'Patrulha de Atlanta 35', 34), (69, 'Patrulha de Miami 55', 35), (70, 'Patrulha de Miami 24', 35), (71, 'Patrulha de Omaha 95', 36), (72, 'Patrulha de Omaha 77', 36), (73, 'Patrulha de Raleigh 38', 37), (74, 'Patrulha de Raleigh 75', 37), (75, 'Patrulha de Colorado Springs 31', 38), (76, 'Patrulha de Colorado Springs 93', 38), (77, 'Patrulha de Tulsa 46', 39), (78, 'Patrulha de Tulsa 52', 39), (79, 'Patrulha de Arlington 82', 40), (80, 'Patrulha de Arlington 16', 40), (81, 'Patrulha de Minneapolis 68', 41), (82, 'Patrulha de Minneapolis 26', 41), (83, 'Patrulha de Tampa 15', 42), (84, 'Patrulha de Tampa 1', 42), (85, 'Patrulha de New Orleans 10', 43), (86, 'Patrulha de New Orleans 23', 43), (87, 'Patrulha de Wichita 2', 44), (88, 'Patrulha de Wichita 78', 44), (89, 'Patrulha de Cleveland 76', 45), (90, 'Patrulha de Cleveland 100', 45), (91, 'Patrulha de Bakersfield 54', 46), (92, 'Patrulha de Bakersfield 59', 46), (93, 'Patrulha de Aurora 50', 47), (94, 'Patrulha de Aurora 43', 47), (95, 'Patrulha de Anaheim 60', 48), (96, 'Patrulha de Anaheim 65', 48), (97, 'Patrulha de Honolulu 47', 49), (98, 'Patrulha de Honolulu 87', 49), (99, 'Patrulha de New York 85', 91), (100, 'Patrulha de New York 19', 91);


INSERT INTO wisight.relatorio (relatorio_id, dt_relatorio, fuga, camera_corporal, fk_departamento) VALUES (1, "2024-05-05", "NOT", 0, 99), (2, "2024-05-06", "FOOT", 1, 100), (3, "2024-05-07", "CAR", 1, 2), (4, "2024-06-01", "FOOT", 0, 2), (5, "2024-06-02", "CAR", 1, 2), (6, "2023-06-03", "NOT", 0, 2), (7, "2024-07-01", "FOOT", 0, 3), (8, "2024-07-02", "CAR", 1, 3), (9, "2023-07-03", "NOT", 0, 3), (10, "2024-08-01", "CAR", 1, 4), (11, "2024-08-02", "FOOT", 0, 4), (12, "2023-08-03", "NOT", 0, 4), (13, "2024-09-01", "FOOT", 1, 5), (14, "2023-09-02", "CAR", 0, 5), (15, "2024-09-03", "NOT", 1, 5), (16, "2024-09-04", "FOOT", 1, 6), (17, "2023-09-05", "CAR", 0, 6), (18, "2024-09-06", "NOT", 1, 6), (19, "2024-09-07", "FOOT", 0, 7), (20, "2023-09-08", "CAR", 1, 7), (21, "2024-09-09", "NOT", 0, 7), (22, "2024-09-10", "FOOT", 1, 8), (23, "2023-09-11", "CAR", 0, 8), (24, "2024-09-12", "NOT", 1, 8), (25, "2024-09-13", "FOOT", 1, 9), (26, "2023-09-14", "CAR", 0, 9), (27, "2024-09-15", "NOT", 1, 9), (28, "2023-09-16", "FOOT", 0, 10), (29, "2024-09-17", "CAR", 1, 10), (30, "2023-09-18", "NOT", 0, 10), (31, "2024-09-19", "FOOT", 1, 11), (32, "2023-09-20", "CAR", 0, 11), (33, "2024-09-21", "NOT", 1, 11), (34, "2024-09-22", "FOOT", 1, 12), (35, "2023-09-23", "CAR", 0, 12), (36, "2024-09-24", "NOT", 1, 12), (37, "2023-09-25", "FOOT", 0, 13), (38, "2024-09-26", "CAR", 1, 13), (39, "2023-09-27", "NOT", 0, 13), (40, "2024-09-28", "FOOT", 1, 14), (41, "2023-09-29", "CAR", 0, 14), (42, "2024-09-30", "NOT", 1, 14), (43, "2024-10-01", "CAR", 1, 15), (44, "2023-10-02", "FOOT", 0, 15), (45, "2024-10-03", "NOT", 0, 16), (46, "2024-10-04", "CAR", 1, 16), (47, "2023-10-05", "FOOT", 0, 17), (48, "2024-10-06", "NOT", 1, 17), (49, "2023-10-07", "CAR", 0, 18), (50, "2023-10-08", "FOOT", 1, 18), (51, "2023-10-09", "NOT", 0, 19), (52, "2023-10-10", "FOOT", 1, 19), (53, "2023-10-11", "CAR", 0, 20), (54, "2023-10-12", "NOT", 1, 20), (55, "2023-10-13", "FOOT", 1, 21), (56, "2023-10-14", "CAR", 0, 21), (57, "2023-10-15", "NOT", 1, 22), (58, "2023-10-16", "FOOT", 0, 22), (59, "2023-10-17", "CAR", 1, 23), (60, "2023-10-18", "NOT", 0, 23), (61, "2023-10-19", "FOOT", 1, 24), (62, "2023-10-20", "CAR", 0, 24), (63, "2023-10-21", "NOT", 1, 25), (64, "2023-10-22", "FOOT", 1, 25), (65, "2023-10-23", "CAR", 0, 26), (66, "2023-10-24", "NOT", 1, 26), (67, "2023-10-25", "FOOT", 1, 27), (68, "2023-10-26", "CAR", 0, 27), (69, "2023-10-27", "NOT", 1, 28), (70, "2023-10-28", "FOOT", 0, 28), (71, "2023-10-29", "CAR", 1, 29), (72, "2023-10-30", "NOT", 0, 29), (73, "2023-11-01", "FOOT", 1, 30), (74, "2023-11-02", "CAR", 0, 30), (75, "2023-11-03", "NOT", 1, 31), (76, "2023-11-04", "FOOT", 0, 31), (77, "2023-11-05", "CAR", 1, 32), (78, "2023-11-06", "NOT", 0, 32), (79, "2023-11-07", "FOOT", 1, 33), (80, "2023-11-08", "CAR", 0, 33), (81, "2023-11-09", "NOT", 1, 34), (82, "2023-11-10", "FOOT", 1, 34), (83, "2023-11-11", "CAR", 0, 35), (84, "2023-11-12", "NOT", 1, 35), (85, "2023-11-13", "FOOT", 0, 36), (86, "2023-11-14", "CAR", 1, 36), (87, "2023-11-15", "NOT", 0, 37), (88, "2023-11-16", "FOOT", 1, 37), (89, "2023-11-17", "CAR", 0, 38), (90, "2023-11-18", "NOT", 1, 38), (91, "2023-11-19", "FOOT", 0, 39), (92, "2023-11-20", "CAR", 1, 39), (93, "2023-11-21", "NOT", 0, 40), (94, "2023-11-22", "FOOT", 1, 40), (95, "2023-11-23", "CAR", 0, 41), (96, "2023-11-24", "NOT", 1, 41), (97, "2023-11-25", "FOOT", 0, 42), (98, "2023-11-26", "CAR", 1, 42), (99, "2023-11-27", "NOT", 0, 43), (100, "2023-11-28", "FOOT", 1, 43), (101, "2023-11-29", "CAR", 0, 44), (102, "2023-11-30", "NOT", 1, 44), (103, "2023-12-01", "FOOT", 0, 45), (104, "2023-12-02", "CAR", 1, 45), (105, "2023-12-03", "NOT", 0, 46), (106, "2023-12-04", "FOOT", 1, 46), (107, "2023-12-05", "CAR", 0, 47), (108, "2023-12-06", "NOT", 1, 47), (109, "2023-12-07", "FOOT", 0, 48), (110, "2023-12-08", "CAR", 1, 48), (111, "2023-12-09", "NOT", 0, 49), (112, "2023-12-10", "FOOT", 1, 49), (113, "2023-12-11", "CAR", 0, 50), (114, "2024-12-12", "NOT", 1, 50);


INSERT INTO usuario VALUES (default, "João Pedro Mori Noce", "joao.noce@wisight.com", null, "Desenvolvedor", "1111111#", false, 2), (default, "Laise Maria", "laise.maria@wisight.com", "1234", "Administrador", "2222222#", false, 3), (default, "Cauan Araruna", "cauan.araruna@wisight.com", "531", "Administrador", "3333333#", false, 3), (default, "Marco Antonio", "marco.antonio@wisight.com", "1782", "Administrador", "4444444#", false, 3), (default, "Samuel Paz", "samuel.paz@wisight.com", null, "Desenvolvedor", "5555555#", false, 2), (default, "Giovanni de Souza", "giovanni.souza@wisight.com", "431", "Administrador", "6666666#", false, 3), (default, "Ana Carolina Lima", "ana.lima@wisight.com", "4532", "Usuário", "7777777#", false, 3), (default, "Bruna Vieira", "bruna.vieira@wisight.com", null, "Externo", "8888888#", false, 1), (default, "Felipe Castro", "felipe.castro@wisight.com", "7861", "Administrador", "9999999#", false, 4), (default, "Isabela Marques", "isabela.marques@wisight.com", "5674", "Administrador", "1010101#", false, 4), (default, "Renato Pereira", "renato.pereira@wisight.com", null, "Externo", "1111112#", false, 1), (default, "Juliana Santos", "juliana.santos@wisight.com", "9021", "Administrador", "1212121#", false, 5), (default, "Lucas Almeida", "lucas.almeida@wisight.com", "3147", "Administrador", "1313131#", false, 5), (default, "Mariana Oliveira", "mariana.oliveira@wisight.com", "7804", "Usuário", "1414141#", false, 5), (default, "Victor Hugo", "victor.hugo@wisight.com", null, "Externo", "1515151#", false, 1), (default, "Amanda Farias", "amanda.farias@wisight.com", "6571", "Administrador", "1616161#", false, 4), (default, "Guilherme Rodrigues", "guilherme.rodeigues@wisight.com", null, "Externo", "1616161#", false, 1);


INSERT INTO wisight.vitima (vitima_id, idade, etnia, genero, armamento, problemas_mentais, fk_relatorio) VALUES (1, 25, 'WHITE', 'MALE', 'UNARMED', 1, 1), (2, 30, 'BLACK', 'FEMALE', 'BLUNT_OBJECT', 0, 2), (3, 45, 'ASIAN', 'MALE', 'UNARMED', 1, 3), (4, 22, 'HISPANIC', 'FEMALE', 'GUN', 0, 4), (5, 35, 'BLACK', 'MALE', 'BLUNT_OBJECT', 1, 5), (6, 28, 'WHITE', 'FEMALE', 'GUN', 0, 6), (7, 40, 'ASIAN', 'MALE', 'UNARMED', 0, 7), (8, 19, 'OTHER', 'FEMALE', 'UNARMED', 1, 8), (9, 33, 'WHITE', 'MALE', 'BLUNT_OBJECT', 0, 9), (10, 50, 'BLACK', 'FEMALE', 'GUN', 1, 10), (11, 27, 'HISPANIC', 'MALE', 'UNARMED', 1, 11), (12, 36, 'ASIAN', 'FEMALE', 'GUN', 0, 12), (13, 44, 'OTHER', 'MALE', 'BLUNT_OBJECT', 1, 13), (14, 21, 'WHITE', 'FEMALE', 'UNARMED', 0, 14), (15, 39, 'BLACK', 'MALE', 'GUN', 1, 15), (16, 25, 'ASIAN', 'FEMALE', 'UNARMED', 0, 16), (17, 32, 'HISPANIC', 'MALE', 'BLUNT_OBJECT', 1, 17), (18, 30, 'WHITE', 'FEMALE', 'GUN', 0, 18), (19, 29, 'BLACK', 'MALE', 'UNARMED', 1, 19), (20, 26, 'ASIAN', 'FEMALE', 'BLUNT_OBJECT', 0, 20), (21, 31, 'OTHER', 'MALE', 'GUN', 1, 21), (22, 23, 'WHITE', 'FEMALE', 'UNARMED', 0, 22), (23, 28, 'BLACK', 'MALE', 'BLUNT_OBJECT', 1, 23), (24, 47, 'ASIAN', 'FEMALE', 'GUN', 0, 24), (25, 24, 'HISPANIC', 'MALE', 'UNARMED', 1, 25), (26, 33, 'WHITE', 'FEMALE', 'GUN', 1, 26), (27, 29, 'BLACK', 'MALE', 'BLUNT_OBJECT', 0, 27), (28, 34, 'ASIAN', 'FEMALE', 'UNARMED', 0, 28), (29, 41, 'OTHER', 'MALE', 'GUN', 1, 29), (30, 27, 'WHITE', 'FEMALE', 'UNARMED', 1, 31), (31, 34, 'BLACK', 'MALE', 'GUN', 0, 32), (32, 28, 'HISPANIC', 'FEMALE', 'BLUNT_OBJECT', 1, 33), (33, 30, 'OTHER', 'MALE', 'UNARMED', 0, 34), (34, 29, 'WHITE', 'FEMALE', 'GUN', 1, 35), (35, 35, 'BLACK', 'MALE', 'UNARMED', 0, 36), (36, 23, 'ASIAN', 'FEMALE', 'BLUNT_OBJECT', 1, 37), (37, 27, 'HISPANIC', 'MALE', 'GUN', 0, 38), (38, 32, 'OTHER', 'FEMALE', 'UNARMED', 1, 39), (39, 28, 'WHITE', 'MALE', 'BLUNT_OBJECT', 0, 40), (40, 31, 'BLACK', 'FEMALE', 'GUN', 1, 41), (41, 30, 'ASIAN', 'MALE', 'UNARMED', 0, 42), (42, 33, 'HISPANIC', 'FEMALE', 'BLUNT_OBJECT', 1, 43), (43, 29, 'OTHER', 'MALE', 'GUN', 0, 44), (44, 28, 'WHITE', 'FEMALE', 'UNARMED', 1, 45), (45, 27, 'BLACK', 'MALE', 'BLUNT_OBJECT', 0, 46), (46, 32, 'ASIAN', 'FEMALE', 'GUN', 1, 47), (47, 29, 'HISPANIC', 'MALE', 'UNARMED', 0, 48), (48, 34, 'OTHER', 'FEMALE', 'BLUNT_OBJECT', 1, 49), (49, 30, 'WHITE', 'MALE', 'GUN', 0, 50), (50, 31, 'BLACK', 'FEMALE', 'UNARMED', 0, 51), (51, 29, 'ASIAN', 'MALE', 'GUN', 1, 52), (52, 28, 'HISPANIC', 'FEMALE', 'BLUNT_OBJECT', 0, 53), (53, 32, 'OTHER', 'MALE', 'UNARMED', 1, 54), (54, 33, 'WHITE', 'FEMALE', 'GUN', 0, 55), (55, 34, 'BLACK', 'MALE', 'BLUNT_OBJECT', 1, 56), (56, 27, 'ASIAN', 'FEMALE', 'UNARMED', 0, 57), (57, 31, 'HISPANIC', 'MALE', 'GUN', 1, 58), (58, 30, 'OTHER', 'FEMALE', 'BLUNT_OBJECT', 0, 59), (59, 32, 'WHITE', 'MALE', 'UNARMED', 1, 60), (60, 29, 'BLACK', 'FEMALE', 'GUN', 0, 61), (61, 28, 'ASIAN', 'MALE', 'BLUNT_OBJECT', 1, 62), (62, 30, 'HISPANIC', 'FEMALE', 'UNARMED', 0, 63), (63, 33, 'OTHER', 'MALE', 'GUN', 1, 64), (64, 32, 'WHITE', 'FEMALE', 'BLUNT_OBJECT', 0, 65), (65, 31, 'BLACK', 'MALE', 'UNARMED', 1, 66), (66, 28, 'ASIAN', 'FEMALE', 'GUN', 0, 67), (67, 30, 'HISPANIC', 'MALE', 'UNARMED', 1, 68), (68, 29, 'OTHER', 'FEMALE', 'BLUNT_OBJECT', 0, 69), (69, 34, 'WHITE', 'MALE', 'GUN', 1, 70), (70, 31, 'BLACK', 'FEMALE', 'UNARMED', 0, 71), (71, 32, 'ASIAN', 'MALE', 'BLUNT_OBJECT', 1, 72), (72, 28, 'HISPANIC', 'FEMALE', 'UNARMED', 0, 73), (73, 30, 'OTHER', 'MALE', 'GUN', 1, 74), (74, 33, 'WHITE', 'FEMALE', 'BLUNT_OBJECT', 0, 75), (75, 29, 'BLACK', 'MALE', 'UNARMED', 1, 76), (76, 32, 'ASIAN', 'FEMALE', 'GUN', 0, 77), (77, 34, 'HISPANIC', 'MALE', 'UNARMED', 1, 78), (78, 28, 'OTHER', 'FEMALE', 'BLUNT_OBJECT', 0, 79), (79, 31, 'WHITE', 'MALE', 'GUN', 1, 80), (80, 30, 'BLACK', 'FEMALE', 'UNARMED', 0, 81), (81, 29, 'ASIAN', 'MALE', 'BLUNT_OBJECT', 1, 82), (82, 32, 'HISPANIC', 'FEMALE', 'UNARMED', 0, 83), (83, 33, 'OTHER', 'MALE', 'GUN', 1, 84), (84, 34, 'WHITE', 'FEMALE', 'BLUNT_OBJECT', 0, 85), (85, 27, 'BLACK', 'MALE', 'UNARMED', 1, 86), (86, 32, 'ASIAN', 'FEMALE', 'GUN', 0, 87), (87, 28, 'HISPANIC', 'MALE', 'UNARMED', 1, 88), (88, 30, 'OTHER', 'FEMALE', 'BLUNT_OBJECT', 0, 89), (89, 29, 'WHITE', 'MALE', 'GUN', 1, 90), (90, 31, 'BLACK', 'FEMALE', 'UNARMED', 0, 91), (91, 28, 'ASIAN', 'MALE', 'BLUNT_OBJECT', 1, 92), (92, 30, 'HISPANIC', 'FEMALE', 'UNARMED', 0, 93), (93, 32, 'OTHER', 'MALE', 'GUN', 1, 94), (94, 29, 'WHITE', 'FEMALE', 'BLUNT_OBJECT', 0, 95), (95, 33, 'BLACK', 'MALE', 'UNARMED', 1, 96), (96, 31, 'ASIAN', 'FEMALE', 'GUN', 0, 97), (97, 34, 'HISPANIC', 'MALE', 'UNARMED', 1, 98), (98, 29, 'OTHER', 'FEMALE', 'BLUNT_OBJECT', 0, 99), (99, 32, 'WHITE', 'MALE', 'GUN', 1, 100), (100, 30, 'BLACK', 'FEMALE', 'UNARMED', 0, 101), (101, 33, 'ASIAN', 'MALE', 'BLUNT_OBJECT', 1, 102), (102, 28, 'HISPANIC', 'FEMALE', 'UNARMED', 0, 103), (103, 34, 'OTHER', 'MALE', 'GUN', 1, 104), (104, 31, 'WHITE', 'FEMALE', 'BLUNT_OBJECT', 0, 105), (105, 29, 'BLACK', 'MALE', 'UNARMED', 1, 106), (106, 32, 'ASIAN', 'FEMALE', 'GUN', 0, 107), (107, 28, 'HISPANIC', 'MALE', 'UNARMED', 1, 108), (108, 30, 'OTHER', 'FEMALE', 'BLUNT_OBJECT', 0, 109), (109, 33, 'WHITE', 'MALE', 'GUN', 1, 110), (110, 31, 'BLACK', 'FEMALE', 'UNARMED', 0, 111), (111, 28, 'ASIAN', 'MALE', 'BLUNT_OBJECT', 1, 112), (112, 32, 'HISPANIC', 'FEMALE', 'UNARMED', 0, 113), (113, 30, 'OTHER', 'MALE', 'GUN', 1, 114), (114, 34, 'WHITE', 'FEMALE', 'BLUNT_OBJECT', 0, 105), (115, 33, 'BLACK', 'MALE', 'UNARMED', 1, 106), (116, 29, 'ASIAN', 'FEMALE', 'GUN', 0, 107), (117, 28, 'HISPANIC', 'MALE', 'UNARMED', 1, 108), (118, 31, 'OTHER', 'FEMALE', 'BLUNT_OBJECT', 0, 109), (119, 32, 'WHITE', 'MALE', 'GUN', 1, 100), (120, 30, 'BLACK', 'FEMALE', 'UNARMED', 0, 101), (121, 33, 'ASIAN', 'MALE', 'BLUNT_OBJECT', 1, 102), (122, 28, 'HISPANIC', 'FEMALE', 'UNARMED', 0, 103), (123, 34, 'OTHER', 'MALE', 'GUN', 1, 104), (124, 31, 'WHITE', 'FEMALE', 'BLUNT_OBJECT', 0, 105), (125, 29, 'BLACK', 'MALE', 'UNARMED', 1, 106);