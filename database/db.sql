CREATE DATABASE prueba_de_conocimiento;

USE prueba_de_conocimiento;


CREATE TABLE empleados(
    id int(11) NOT NULL AUTO_INCREMENT,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    tipoIdentificacion enum('nit','cc') NOT NULL,
    numeroIdentificacion INT NOT NULL,
    correoElectronico VARCHAR(50),
    fechaIngreso DATE,
    salarioMensual DECIMAL(19,4) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE telefonica(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo enum('cell','tel') NOT NULL,
    numero VARCHAR(50) NOT NULL,
    indicativo varchar(10),
    personaId INT(11) NOT NULL,
    FOREIGN KEY(personaId) REFERENCES empleados(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

INSERT INTO empleados (`nombres`,`apellidos`,`tipoIdentificacion`,`numeroIdentificacion`,`correoElectronico`,`fechaIngreso`,`salarioMensual`) VALUES ("Juan", "Casseres", "nit", "147852","ass2d@gmail.com","2018-04-25","1500000");
INSERT INTO empleados (`nombres`,`apellidos`,`tipoIdentificacion`,`numeroIdentificacion`,`correoElectronico`,`fechaIngreso`,`salarioMensual`) VALUES ("Yendis","Jimenez", "cc", "10478512","a2ssd@gmail.com","2018-03-25","2000000");
INSERT INTO empleados (`nombres`,`apellidos`,`tipoIdentificacion`,`numeroIdentificacion`,`correoElectronico`,`fechaIngreso`,`salarioMensual`) VALUES ("Juan", "Caicedo", "nit", "107852","asfsd@gmail.com","2018-02-25","2000000");
INSERT INTO empleados (`nombres`,`apellidos`,`tipoIdentificacion`,`numeroIdentificacion`,`correoElectronico`,`fechaIngreso`,`salarioMensual`) VALUES ("J", "Almirante", "cc", "10478524","asdds@gmail.com","2018-01-25","1000000");
INSERT INTO empleados (`nombres`,`apellidos`,`tipoIdentificacion`,`numeroIdentificacion`,`correoElectronico`,`fechaIngreso`,`salarioMensual`) VALUES ("Oscar", "Casseres", "cc", "10478252","adsd@gmail.com","2017-05-25","1000000");
INSERT INTO empleados (`nombres`,`apellidos`,`tipoIdentificacion`,`numeroIdentificacion`,`correoElectronico`,`fechaIngreso`,`salarioMensual`)  VALUES ("Gabriela", "Acevedo", "nit", "1447852","asfd@gmail.com","2016-05-25","1000000");


insert into telefonica (`tipo`,`numero`,`indicativo`,`personaId`) values ("cell","123456","57","2");
insert into telefonica (`tipo`,`numero`,`indicativo`,`personaId`) values ("cell","123456","57","3");
insert into telefonica (`tipo`,`numero`,`indicativo`,`personaId`) values ("cell","123456","57","4");
insert into telefonica (`tipo`,`numero`,`indicativo`,`personaId`) values ("cell","123456","57","2");
insert into telefonica (`tipo`,`numero`,`indicativo`,`personaId`) values ("cell","123456","57","3");
insert into telefonica (`tipo`,`numero`,`indicativo`,`personaId`) values ("cell","123456","57","2");