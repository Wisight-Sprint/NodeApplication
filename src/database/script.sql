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
  dt_dep date,
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

INSERT INTO wisight.cidade_estado (cidade_estado_id, cidade, estado) VALUES
(1, 'Externo', 'EXT'),
(2, 'Los Angeles', 'CA'),
(3, 'Chicago', 'IL'),
(4, 'Houston', 'TX'),
(5, 'Phoenix', 'AZ'),
(6, 'Philadelphia', 'PA'),
(7, 'San Antonio', 'TX'),
(8, 'San Diego', 'CA'),
(9, 'Dallas', 'TX'),
(10, 'San Jose', 'CA'),
(11, 'Austin', 'TX'),
(12, 'Jacksonville', 'FL'),
(13, 'Fort Worth', 'TX'),
(14, 'Columbus', 'OH'),
(15, 'Charlotte', 'NC'),
(16, 'Indianapolis', 'IN'),
(17, 'Seattle', 'WA'),
(18, 'Denver', 'CO'),
(19, 'Washington', 'DC'),
(20, 'Boston', 'MA'),
(21, 'El Paso', 'TX'),
(22, 'Detroit', 'MI'),
(23, 'Nashville', 'TN'),
(24, 'Memphis', 'TN'),
(25, 'Oklahoma City', 'OK'),
(26, 'Louisville', 'KY'),
(27, 'Baltimore', 'MD'),
(28, 'Milwaukee', 'WI'),
(29, 'Albuquerque', 'NM'),
(30, 'Tucson', 'AZ'),
(31, 'Fresno', 'CA'),
(32, 'Sacramento', 'CA'),
(33, 'Kansas City', 'MO'),
(34, 'Mesa', 'AZ'),
(35, 'Atlanta', 'GA'),
(36, 'Omaha', 'NE'),
(37, 'Raleigh', 'NC'),
(38, 'Miami', 'FL'),
(39, 'Long Beach', 'CA'),
(40, 'Virginia Beach', 'VA'),
(41, 'Oakland', 'CA'),
(42, 'Minneapolis', 'MN'),
(43, 'Tulsa', 'OK'),
(44, 'Arlington', 'TX'),
(45, 'New Orleans', 'LA'),
(46, 'Wichita', 'KS'),
(47, 'Cleveland', 'OH'),
(48, 'Tampa', 'FL'),
(49, 'Bakersfield', 'CA'),
(50, 'Aurora', 'CO'),
(51, 'Anaheim', 'CA'),
(52, 'Honolulu', 'HI'),
(53, 'Santa Ana', 'CA'),
(54, 'Riverside', 'CA'),
(55, 'Corpus Christi', 'TX'),
(56, 'Lexington', 'KY'),
(57, 'Stockton', 'CA'),
(58, 'Henderson', 'NV'),
(59, 'Saint Paul', 'MN'),
(60, 'St. Louis', 'MO'),
(61, 'Cincinnati', 'OH'),
(62, 'Pittsburgh', 'PA'),
(63, 'Greensboro', 'NC'),
(64, 'Anchorage', 'AK'),
(65, 'Plano', 'TX'),
(66, 'Lincoln', 'NE'),
(67, 'Orlando', 'FL'),
(68, 'Irvine', 'CA'),
(69, 'Toledo', 'OH'),
(70, 'Jersey City', 'NJ'),
(71, 'Chula Vista', 'CA'),
(72, 'Durham', 'NC'),
(73, 'Fort Lauderdale', 'FL'),
(74, 'St. Petersburg', 'FL'),
(75, 'Laredo', 'TX'),
(76, 'Madison', 'WI'),
(77, 'Chandler', 'AZ'),
(78, 'Buffalo', 'NY'),
(79, 'Lubbock', 'TX'),
(80, 'Scottsdale', 'AZ'),
(81, 'Reno', 'NV'),
(82, 'Glendale', 'AZ'),
(83, 'Gilbert', 'AZ'),
(84, 'Winston-Salem', 'NC'),
(85, 'North Las Vegas', 'NV'),
(86, 'Norfolk', 'VA'),
(87, 'Chesapeake', 'VA'),
(88, 'Garland', 'TX'),
(89, 'Irving', 'TX'),
(90, 'Hialeah', 'FL'),
(91, 'New York', 'NY');

INSERT INTO wisight.departamento (departamento_id, nome, fk_cidade_estado) VALUES
(1, 'Externos', 1),
(2, 'Desenvolvedores', 1),
(3, 'Patrulha de Los Angeles 58', 2),
(4, 'Patrulha de Los Angeles 72', 2),
(5, 'Patrulha de Chicago 4', 3),
(6, 'Patrulha de Chicago 37', 3),
(7, 'Patrulha de Houston 81', 4),
(8, 'Patrulha de Houston 7', 4),
(9, 'Patrulha de Phoenix 56', 5),
(10, 'Patrulha de Phoenix 21', 5),
(11, 'Patrulha de Philadelphia 99', 6),
(12, 'Patrulha de Philadelphia 3', 6),
(13, 'Patrulha de San Antonio 61', 7),
(14, 'Patrulha de San Antonio 13', 7),
(15, 'Patrulha de San Diego 94', 8),
(16, 'Patrulha de San Diego 8', 8),
(17, 'Patrulha de Dallas 44', 9),
(18, 'Patrulha de Dallas 33', 9),
(19, 'Patrulha de San Jose 73', 10),
(20, 'Patrulha de San Jose 45', 10),
(21, 'Patrulha de Austin 17', 11),
(22, 'Patrulha de Austin 88', 11),
(23, 'Patrulha de Jacksonville 62', 12),
(24, 'Patrulha de Jacksonville 14', 12),
(25, 'Patrulha de Fort Worth 50', 13),
(26, 'Patrulha de Fort Worth 5', 13),
(27, 'Patrulha de Columbus 98', 14),
(28, 'Patrulha de Columbus 29', 14),
(29, 'Patrulha de Charlotte 67', 15),
(30, 'Patrulha de Charlotte 91', 15),
(31, 'Patrulha de Indianapolis 40', 16),
(32, 'Patrulha de Indianapolis 80', 16),
(33, 'Patrulha de Seattle 25', 17),
(34, 'Patrulha de Seattle 57', 17),
(35, 'Patrulha de Denver 89', 18),
(36, 'Patrulha de Denver 12', 18),
(37, 'Patrulha de Washington 69', 19),
(38, 'Patrulha de Washington 36', 19),
(39, 'Patrulha de Boston 48', 20),
(40, 'Patrulha de Boston 83', 20),
(41, 'Patrulha de El Paso 34', 21),
(42, 'Patrulha de El Paso 70', 21),
(43, 'Patrulha de Detroit 18', 22),
(44, 'Patrulha de Detroit 90', 22),
(45, 'Patrulha de Nashville 74', 23),
(46, 'Patrulha de Nashville 28', 23),
(47, 'Patrulha de Memphis 96', 24),
(48, 'Patrulha de Memphis 32', 24),
(49, 'Patrulha de Oklahoma City 64', 25),
(50, 'Patrulha de Oklahoma City 86', 25),
(51, 'Patrulha de Louisville 66', 26),
(52, 'Patrulha de Louisville 9', 26),
(53, 'Patrulha de Baltimore 11', 27),
(54, 'Patrulha de Baltimore 41', 27),
(55, 'Patrulha de Milwaukee 6', 28),
(56, 'Patrulha de Milwaukee 97', 28),
(57, 'Patrulha de Albuquerque 92', 29),
(58, 'Patrulha de Albuquerque 49', 29),
(59, 'Patrulha de Fresno 79', 30),
(60, 'Patrulha de Fresno 84', 30),
(61, 'Patrulha de Sacramento 22', 31),
(62, 'Patrulha de Sacramento 63', 31),
(63, 'Patrulha de Kansas City 30', 32),
(64, 'Patrulha de Kansas City 53', 32),
(65, 'Patrulha de Mesa 27', 33),
(66, 'Patrulha de Mesa 39', 33),
(67, 'Patrulha de Atlanta 20', 34),
(68, 'Patrulha de Atlanta 35', 34),
(69, 'Patrulha de Miami 55', 35),
(70, 'Patrulha de Miami 24', 35),
(71, 'Patrulha de Omaha 95', 36),
(72, 'Patrulha de Omaha 77', 36),
(73, 'Patrulha de Raleigh 38', 37),
(74, 'Patrulha de Raleigh 75', 37),
(75, 'Patrulha de Colorado Springs 31', 38),
(76, 'Patrulha de Colorado Springs 93', 38),
(77, 'Patrulha de Tulsa 46', 39),
(78, 'Patrulha de Tulsa 52', 39),
(79, 'Patrulha de Arlington 82', 40),
(80, 'Patrulha de Arlington 16', 40),
(81, 'Patrulha de Minneapolis 68', 41),
(82, 'Patrulha de Minneapolis 26', 41),
(83, 'Patrulha de Tampa 15', 42),
(84, 'Patrulha de Tampa 1', 42),
(85, 'Patrulha de New Orleans 10', 43),
(86, 'Patrulha de New Orleans 23', 43),
(87, 'Patrulha de Wichita 2', 44),
(88, 'Patrulha de Wichita 78', 44),
(89, 'Patrulha de Cleveland 76', 45),
(90, 'Patrulha de Cleveland 100', 45),
(91, 'Patrulha de Bakersfield 54', 46),
(92, 'Patrulha de Bakersfield 59', 46),
(93, 'Patrulha de Aurora 50', 47),
(94, 'Patrulha de Aurora 43', 47),
(95, 'Patrulha de Anaheim 60', 48),
(96, 'Patrulha de Anaheim 65', 48),
(97, 'Patrulha de Honolulu 47', 49),
(98, 'Patrulha de Honolulu 87', 49),
(99, 'Patrulha de New York 85', 91),
(100, 'Patrulha de New York 19', 91);


INSERT INTO wisight.relatorio (relatorio_id, dt_dep, fuga, camera_corporal, fk_departamento)
VALUES 
(1, "2022-05-05", "Sem tentativa", 0, 99),
(2, "2022-05-06", "A pé", 1, 100),
(3, "2022-05-07", "Veículo", 1, 2),
(4, "2022-06-01", "A pé", 0, 2),
(5, "2022-06-02", "Veículo", 1, 2),
(6, "2022-06-03", "Sem tentativa", 0, 2),
(7, "2022-07-01", "A pé", 0, 3),
(8, "2022-07-02", "Veículo", 1, 3),
(9, "2022-07-03", "Sem tentativa", 0, 3),
(10, "2022-08-01", "Veículo", 1, 4),
(11, "2022-08-02", "A pé", 0, 4),
(12, "2022-08-03", "Sem tentativa", 0, 4),
(13, "2022-09-01", "A pé", 1, 5),
(14, "2022-09-02", "Veículo", 0, 5),
(15, "2022-09-03", "Sem tentativa", 1, 5),
(16, "2022-09-04", "A pé", 1, 6),
(17, "2022-09-05", "Veículo", 0, 6),
(18, "2022-09-06", "Sem tentativa", 1, 6),
(19, "2022-09-07", "A pé", 0, 7),
(20, "2022-09-08", "Veículo", 1, 7),
(21, "2022-09-09", "Sem tentativa", 0, 7),
(22, "2022-09-10", "A pé", 1, 8),
(23, "2022-09-11", "Veículo", 0, 8),
(24, "2022-09-12", "Sem tentativa", 1, 8),
(25, "2022-09-13", "A pé", 1, 9),
(26, "2022-09-14", "Veículo", 0, 9),
(27, "2022-09-15", "Sem tentativa", 1, 9),
(28, "2022-09-16", "A pé", 0, 10),
(29, "2022-09-17", "Veículo", 1, 10),
(30, "2022-09-18", "Sem tentativa", 0, 10),
(31, "2022-09-19", "A pé", 1, 11),
(32, "2022-09-20", "Veículo", 0, 11),
(33, "2022-09-21", "Sem tentativa", 1, 11),
(34, "2022-09-22", "A pé", 1, 12),
(35, "2022-09-23", "Veículo", 0, 12),
(36, "2022-09-24", "Sem tentativa", 1, 12),
(37, "2022-09-25", "A pé", 0, 13),
(38, "2022-09-26", "Veículo", 1, 13),
(39, "2022-09-27", "Sem tentativa", 0, 13),
(40, "2022-09-28", "A pé", 1, 14),
(41, "2022-09-29", "Veículo", 0, 14),
(42, "2022-09-30", "Sem tentativa", 1, 14),
(43, "2022-10-01", "Veículo", 1, 15),
(44, "2022-10-02", "A pé", 0, 15),
(45, "2022-10-03", "Sem tentativa", 0, 16),
(46, "2022-10-04", "Veículo", 1, 16),
(47, "2022-10-05", "A pé", 0, 17),
(48, "2022-10-06", "Sem tentativa", 1, 17),
(49, "2022-10-07", "Veículo", 0, 18),
(50, "2022-10-08", "A pé", 1, 18),
(51, "2022-10-09", "Sem tentativa", 0, 19),
(52, "2022-10-10", "A pé", 1, 19),
(53, "2022-10-11", "Veículo", 0, 20),
(54, "2022-10-12", "Sem tentativa", 1, 20),
(55, "2022-10-13", "A pé", 1, 21),
(56, "2022-10-14", "Veículo", 0, 21),
(57, "2022-10-15", "Sem tentativa", 1, 22),
(58, "2022-10-16", "A pé", 0, 22),
(59, "2022-10-17", "Veículo", 1, 23),
(60, "2022-10-18", "Sem tentativa", 0, 23),
(61, "2022-10-19", "A pé", 1, 24),
(62, "2022-10-20", "Veículo", 0, 24),
(63, "2022-10-21", "Sem tentativa", 1, 25),
(64, "2022-10-22", "A pé", 1, 25),
(65, "2022-10-23", "Veículo", 0, 26),
(66, "2022-10-24", "Sem tentativa", 1, 26),
(67, "2022-10-25", "A pé", 1, 27),
(68, "2022-10-26", "Veículo", 0, 27),
(69, "2022-10-27", "Sem tentativa", 1, 28),
(70, "2022-10-28", "A pé", 0, 28),
(71, "2022-10-29", "Veículo", 1, 29),
(72, "2022-10-30", "Sem tentativa", 0, 29),
(73, "2022-11-01", "A pé", 1, 30),
(74, "2022-11-02", "Veículo", 0, 30),
(75, "2022-11-03", "Sem tentativa", 1, 31),
(76, "2022-11-04", "A pé", 0, 31),
(77, "2022-11-05", "Veículo", 1, 32),
(78, "2022-11-06", "Sem tentativa", 0, 32),
(79, "2022-11-07", "A pé", 1, 33),
(80, "2022-11-08", "Veículo", 0, 33),
(81, "2022-11-09", "Sem tentativa", 1, 34),
(82, "2022-11-10", "A pé", 1, 34),
(83, "2022-11-11", "Veículo", 0, 35),
(84, "2022-11-12", "Sem tentativa", 1, 35),
(85, "2022-11-13", "A pé", 0, 36),
(86, "2022-11-14", "Veículo", 1, 36),
(87, "2022-11-15", "Sem tentativa", 0, 37),
(88, "2022-11-16", "A pé", 1, 37),
(89, "2022-11-17", "Veículo", 0, 38),
(90, "2022-11-18", "Sem tentativa", 1, 38),
(91, "2022-11-19", "A pé", 0, 39),
(92, "2022-11-20", "Veículo", 1, 39),
(93, "2022-11-21", "Sem tentativa", 0, 40),
(94, "2022-11-22", "A pé", 1, 40),
(95, "2022-11-23", "Veículo", 0, 41),
(96, "2022-11-24", "Sem tentativa", 1, 41),
(97, "2022-11-25", "A pé", 0, 42),
(98, "2022-11-26", "Veículo", 1, 42),
(99, "2022-11-27", "Sem tentativa", 0, 43),
(100, "2022-11-28", "A pé", 1, 43),
(101, "2022-11-29", "Veículo", 0, 44),
(102, "2022-11-30", "Sem tentativa", 1, 44),
(103, "2022-12-01", "A pé", 0, 45),
(104, "2022-12-02", "Veículo", 1, 45),
(105, "2022-12-03", "Sem tentativa", 0, 46),
(106, "2022-12-04", "A pé", 1, 46),
(107, "2022-12-05", "Veículo", 0, 47),
(108, "2022-12-06", "Sem tentativa", 1, 47),
(109, "2022-12-07", "A pé", 0, 48),
(110, "2022-12-08", "Veículo", 1, 48),
(111, "2022-12-09", "Sem tentativa", 0, 49),
(112, "2022-12-10", "A pé", 1, 49),
(113, "2022-12-11", "Veículo", 0, 50),
(114, "2022-12-12", "Sem tentativa", 1, 50);

INSERT INTO usuario VALUES
(default, "João Pedro Mori Noce", "joao.noce@wisight.com", null, "Desenvolvedor", "1111111#", false, 2),
(default, "Laise Maria", "laise.maria@wisight.com", "1234", "Administrador", "2222222#", false, 3),
(default, "Cauan Araruna", "cauan.araruna@wisight.com", "531", "Administrador", "3333333#", false, 3),
(default, "Marco Antonio", "marco.antonio@wisight.com", "1782", "Administrador", "4444444#", false, 3),
(default, "Samuel Paz", "samuel.paz@wisight.com", null, "Desenvolvedor", "5555555#", false, 2),
(default, "Giovanni de Souza", "giovanni.souza@wisight.com", "431", "Administrador", "6666666#", false, 3),
(default, "Ana Carolina Lima", "ana.lima@wisight.com", "4532", "Usuário", "7777777#", false, 3),
(default, "Bruna Vieira", "bruna.vieira@wisight.com", null, "Externo", "8888888#", false, 1),
(default, "Felipe Castro", "felipe.castro@wisight.com", "7861", "Administrador", "9999999#", false, 4),
(default, "Isabela Marques", "isabela.marques@wisight.com", "5674", "Administrador", "1010101#", false, 4),
(default, "Renato Pereira", "renato.pereira@wisight.com", null, "Externo", "1111112#", false, 1),
(default, "Juliana Santos", "juliana.santos@wisight.com", "9021", "Administrador", "1212121#", false, 5),
(default, "Lucas Almeida", "lucas.almeida@wisight.com", "3147", "Administrador", "1313131#", false, 5),
(default, "Mariana Oliveira", "mariana.oliveira@wisight.com", "7804", "Usuário", "1414141#", false, 5),
(default, "Victor Hugo", "victor.hugo@wisight.com", null, "Externo", "1515151#", false, 1),
(default, "Amanda Farias", "amanda.farias@wisight.com", "6571", "Administrador", "1616161#", false, 4),
(default, "Guilherme Rodrigues", "guilherme.rodeigues@wisight.com", null, "Externo", "1616161#", false, 1);


INSERT INTO wisight.vitima (vitima_id, idade, etnia, genero, armamento, problemas_mentais, fk_relatorio) VALUES
(1, 25, 'Branca', 'Masculino', 'Não armado', 1, 1),
(2, 30, 'Negra', 'Feminino', 'Arma branca', 0, 2),
(3, 45, 'Asiática', 'Masculino', 'Não armado', 1, 3),
(4, 22, 'Hispânica', 'Feminino', 'Arma de fogo', 0, 4),
(5, 35, 'Negra', 'Masculino', 'Arma branca', 1, 5),
(6, 28, 'Branca', 'Feminino', 'Arma de fogo', 0, 6),
(7, 40, 'Asiática', 'Masculino', 'Não armado', 0, 7),
(8, 19, 'Indígena', 'Feminino', 'Não armado', 1, 8),
(9, 33, 'Branca', 'Masculino', 'Arma branca', 0, 9),
(10, 50, 'Negra', 'Feminino', 'Arma de fogo', 1, 10),
(11, 27, 'Hispânica', 'Masculino', 'Não armado', 1, 11),
(12, 36, 'Asiática', 'Feminino', 'Arma de fogo', 0, 12),
(13, 44, 'Indígena', 'Masculino', 'Arma branca', 1, 13),
(14, 21, 'Branca', 'Feminino', 'Não armado', 0, 14),
(15, 39, 'Negra', 'Masculino', 'Arma de fogo', 1, 15),
(16, 25, 'Asiática', 'Feminino', 'Não armado', 0, 16),
(17, 32, 'Hispânica', 'Masculino', 'Arma branca', 1, 17),
(18, 30, 'Branca', 'Feminino', 'Arma de fogo', 0, 18),
(19, 29, 'Negra', 'Masculino', 'Não armado', 1, 19),
(20, 26, 'Asiática', 'Feminino', 'Arma branca', 0, 20),
(21, 31, 'Indígena', 'Masculino', 'Arma de fogo', 1, 21),
(22, 23, 'Branca', 'Feminino', 'Não armado', 0, 22),
(23, 28, 'Negra', 'Masculino', 'Arma branca', 1, 23),
(24, 47, 'Asiática', 'Feminino', 'Arma de fogo', 0, 24),
(25, 24, 'Hispânica', 'Masculino', 'Não armado', 1, 25),
(26, 33, 'Branca', 'Feminino', 'Arma de fogo', 1, 26),
(27, 29, 'Negra', 'Masculino', 'Arma branca', 0, 27),
(28, 34, 'Asiática', 'Feminino', 'Não armado', 0, 28),
(29, 41, 'Indígena', 'Masculino', 'Arma de fogo', 1, 29),
(30, 27, 'Branca', 'Feminino', 'Não armado', 1, 31),
(31, 34, 'Negra', 'Masculino', 'Arma de fogo', 0, 32),
(32, 28, 'Hispânica', 'Feminino', 'Arma branca', 1, 33),
(33, 30, 'Indígena', 'Masculino', 'Não armado', 0, 34),
(34, 29, 'Branca', 'Feminino', 'Arma de fogo', 1, 35),
(35, 35, 'Negra', 'Masculino', 'Não armado', 0, 36),
(36, 23, 'Asiática', 'Feminino', 'Arma branca', 1, 37),
(37, 27, 'Hispânica', 'Masculino', 'Arma de fogo', 0, 38),
(38, 32, 'Indígena', 'Feminino', 'Não armado', 1, 39),
(39, 28, 'Branca', 'Masculino', 'Arma branca', 0, 40),
(40, 31, 'Negra', 'Feminino', 'Arma de fogo', 1, 41),
(41, 30, 'Asiática', 'Masculino', 'Não armado', 0, 42),
(42, 33, 'Hispânica', 'Feminino', 'Arma branca', 1, 43),
(43, 29, 'Indígena', 'Masculino', 'Arma de fogo', 0, 44),
(44, 28, 'Branca', 'Feminino', 'Não armado', 1, 45),
(45, 27, 'Negra', 'Masculino', 'Arma branca', 0, 46),
(46, 32, 'Asiática', 'Feminino', 'Arma de fogo', 1, 47),
(47, 29, 'Hispânica', 'Masculino', 'Não armado', 0, 48),
(48, 34, 'Indígena', 'Feminino', 'Arma branca', 1, 49),
(49, 30, 'Branca', 'Masculino', 'Arma de fogo', 0, 50),
(50, 31, 'Negra', 'Feminino', 'Não armado', 0, 51),
(51, 29, 'Asiática', 'Masculino', 'Arma de fogo', 1, 52),
(52, 28, 'Hispânica', 'Feminino', 'Arma branca', 0, 53),
(53, 32, 'Indígena', 'Masculino', 'Não armado', 1, 54),
(54, 33, 'Branca', 'Feminino', 'Arma de fogo', 0, 55),
(55, 34, 'Negra', 'Masculino', 'Arma branca', 1, 56),
(56, 27, 'Asiática', 'Feminino', 'Não armado', 0, 57),
(57, 31, 'Hispânica', 'Masculino', 'Arma de fogo', 1, 58),
(58, 30, 'Indígena', 'Feminino', 'Arma branca', 0, 59),
(59, 32, 'Branca', 'Masculino', 'Não armado', 1, 60),
(60, 29, 'Negra', 'Feminino', 'Arma de fogo', 0, 61),
(61, 28, 'Asiática', 'Masculino', 'Arma branca', 1, 62),
(62, 30, 'Hispânica', 'Feminino', 'Não armado', 0, 63),
(63, 33, 'Indígena', 'Masculino', 'Arma de fogo', 1, 64),
(64, 32, 'Branca', 'Feminino', 'Arma branca', 0, 65),
(65, 31, 'Negra', 'Masculino', 'Não armado', 1, 66),
(66, 28, 'Asiática', 'Feminino', 'Arma de fogo', 0, 67),
(67, 30, 'Hispânica', 'Masculino', 'Não armado', 1, 68),
(68, 29, 'Indígena', 'Feminino', 'Arma branca', 0, 69),
(69, 34, 'Branca', 'Masculino', 'Arma de fogo', 1, 70),
(70, 31, 'Negra', 'Feminino', 'Não armado', 0, 71),
(71, 32, 'Asiática', 'Masculino', 'Arma branca', 1, 72),
(72, 28, 'Hispânica', 'Feminino', 'Não armado', 0, 73),
(73, 30, 'Indígena', 'Masculino', 'Arma de fogo', 1, 74),
(74, 33, 'Branca', 'Feminino', 'Arma branca', 0, 75),
(75, 29, 'Negra', 'Masculino', 'Não armado', 1, 76),
(76, 32, 'Asiática', 'Feminino', 'Arma de fogo', 0, 77),
(77, 34, 'Hispânica', 'Masculino', 'Não armado', 1, 78),
(78, 28, 'Indígena', 'Feminino', 'Arma branca', 0, 79),
(79, 31, 'Branca', 'Masculino', 'Arma de fogo', 1, 80),
(80, 30, 'Negra', 'Feminino', 'Não armado', 0, 81),
(81, 29, 'Asiática', 'Masculino', 'Arma branca', 1, 82),
(82, 32, 'Hispânica', 'Feminino', 'Não armado', 0, 83),
(83, 33, 'Indígena', 'Masculino', 'Arma de fogo', 1, 84),
(84, 34, 'Branca', 'Feminino', 'Arma branca', 0, 85),
(85, 27, 'Negra', 'Masculino', 'Não armado', 1, 86),
(86, 32, 'Asiática', 'Feminino', 'Arma de fogo', 0, 87),
(87, 28, 'Hispânica', 'Masculino', 'Não armado', 1, 88),
(88, 30, 'Indígena', 'Feminino', 'Arma branca', 0, 89),
(89, 29, 'Branca', 'Masculino', 'Arma de fogo', 1, 90),
(90, 31, 'Negra', 'Feminino', 'Não armado', 0, 91),
(91, 28, 'Asiática', 'Masculino', 'Arma branca', 1, 92),
(92, 30, 'Hispânica', 'Feminino', 'Não armado', 0, 93),
(93, 32, 'Indígena', 'Masculino', 'Arma de fogo', 1, 94),
(94, 29, 'Branca', 'Feminino', 'Arma branca', 0, 95),
(95, 33, 'Negra', 'Masculino', 'Não armado', 1, 96),
(96, 31, 'Asiática', 'Feminino', 'Arma de fogo', 0, 97),
(97, 34, 'Hispânica', 'Masculino', 'Não armado', 1, 98),
(98, 29, 'Indígena', 'Feminino', 'Arma branca', 0, 99),
(99, 32, 'Branca', 'Masculino', 'Arma de fogo', 1, 100),
(100, 30, 'Negra', 'Feminino', 'Não armado', 0, 101),
(101, 33, 'Asiática', 'Masculino', 'Arma branca', 1, 102),
(102, 28, 'Hispânica', 'Feminino', 'Não armado', 0, 103),
(103, 34, 'Indígena', 'Masculino', 'Arma de fogo', 1, 104),
(104, 31, 'Branca', 'Feminino', 'Arma branca', 0, 105),
(105, 29, 'Negra', 'Masculino', 'Não armado', 1, 106),
(106, 32, 'Asiática', 'Feminino', 'Arma de fogo', 0, 107),
(107, 28, 'Hispânica', 'Masculino', 'Não armado', 1, 108),
(108, 30, 'Indígena', 'Feminino', 'Arma branca', 0, 109),
(109, 33, 'Branca', 'Masculino', 'Arma de fogo', 1, 110),
(110, 31, 'Negra', 'Feminino', 'Não armado', 0, 111),
(111, 28, 'Asiática', 'Masculino', 'Arma branca', 1, 112),
(112, 32, 'Hispânica', 'Feminino', 'Não armado', 0, 113),
(113, 30, 'Indígena', 'Masculino', 'Arma de fogo', 1, 114),
(114, 34, 'Branca', 'Feminino', 'Arma branca', 0, 105),
(115, 33, 'Negra', 'Masculino', 'Não armado', 1, 106),
(116, 29, 'Asiática', 'Feminino', 'Arma de fogo', 0, 107),
(117, 28, 'Hispânica', 'Masculino', 'Não armado', 1, 108),
(118, 31, 'Indígena', 'Feminino', 'Arma branca', 0, 109),
(119, 32, 'Branca', 'Masculino', 'Arma de fogo', 1, 100),
(120, 30, 'Negra', 'Feminino', 'Não armado', 0, 101),
(121, 33, 'Asiática', 'Masculino', 'Arma branca', 1, 102),
(122, 28, 'Hispânica', 'Feminino', 'Não armado', 0, 103),
(123, 34, 'Indígena', 'Masculino', 'Arma de fogo', 1, 104),
(124, 31, 'Branca', 'Feminino', 'Arma branca', 0, 105),
(125, 29, 'Negra', 'Masculino', 'Não armado', 1, 106);

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
    ORDER BY c.estado;

    
select * from usuario;
select * from relatorio;
select * from departamento;
select * from vitima;
select * from cidade_estado;
select * from insight;

