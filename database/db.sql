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