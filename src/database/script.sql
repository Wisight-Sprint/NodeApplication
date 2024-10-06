create database if not exists wisight;
use wisight;

create table if not exists wisight.cidade_estado (
  cidade_estado_id int primary key,
  cidade varchar(45),
  estado varchar(45)
);

create table if not exists wisight.departamento (
  departamento_id int primary key,
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
  cargo varchar(45),
  senha varchar(45),
  fk_departamento int,
    foreign key (fk_departamento)
    references departamento (departamento_id)
);

create table if not exists wisight.relatorio (
  relatorio_id int,
  dt_dep date,
  fuga varchar(45),
  camera_corporal tinyint,
  problemas_mentais tinyint,
  fk_departamento int,
  primary key (relatorio_id, fk_departamento),
    foreign key (fk_departamento)
    references departamento (departamento_id)
);

create table if not exists wisight.vitima (
  vitima_id int,
  idade int,
  raca varchar(45),
  genero varchar(45),
  armamento varchar(45),
  fk_relatorio int,
  primary key (vitima_id, fk_relatorio),
    foreign key (fk_relatorio)
    references relatorio (relatorio_id)
);