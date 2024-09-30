create database if not exists Wisight;
use Wisight;

create table if not exists Wisight.cidade_estado (
  idCidade_Estado int,
  cidade varchar(45),
  estado varchar(45),
  primary key (idCidade_Estado)
);

create table if not exists Wisight.departamento (
  idDepartamento int,
  nomeDepartamento varchar(45),
  fkCidade_Estado int,
  primary key (idDepartamento),
    foreign key (fkCidade_Estado)
    references cidade_estado (idCidade_Estado)
);

create table if not exists Wisight.usuario (
  idFuncionario int,
  nomeFuncionario varchar(45),
  emailFuncionario varchar(45),
  numeroFuncionario varchar(45),
  cargo varchar(45),
  senha varchar(45),
  fkDepartamento int,
  primary key (idFuncionario),
    foreign key (fkDepartamento)
    references departamento (idDepartamento)
);

create table if not exists Wisight.relatorio (
  idRelatorio int,
  data_Dep date,
  fuga varchar(45),
  camera_Corporal tinyint,
  problemas_Mentais tinyint,
  fkDepartamento int,
  primary key (idRelatorio, fkDepartamento),
    foreign key (fkDepartamento)
    references departamento (idDepartamento)
);

create table if not exists Wisight.vitima (
  idVitima int,
  idade int,
  raca varchar(45),
  genero varchar(45),
  armamento varchar(45),
  fkRelatorio int,
  primary key (idVitima, fkRelatorio),
    foreign key (fkRelatorio)
    references relatorio (idRelatorio)
);

