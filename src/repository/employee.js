const db = require("../config/database");

const getEmployees = () => {
    return db.query('SELECT id, nombres,apellidos, tipoIdentificacion, numeroIdentificacion, correoElectronico, fechaIngreso, salarioMensual FROM empleados');
    //return db.query('select nombres,apellidos, tipoIdentificacion, numeroIdentificacion, correoElectronico, fechaIngreso, telefonica.* from empleados LEFT JOIN telefonica ON empleados.id = telefonica.personaId order by empleados.id ASC')
}


const getEmployee = (id) => {
    return db.query('SELECT id, nombres,apellidos, tipoIdentificacion, numeroIdentificacion, correoElectronico, fechaIngreso, salarioMensual FROM empleados where id = ?', [id]);
}

const getexistentDocument = (document, type) => {
    return db.query('SELECT * FROM empleados where numeroIdentificacion = ? and tipoIdentificacion = ?', [document, type]);
}

const save = (newEmployee) => {
    return db.query('INSERT INTO empleados set ?', [newEmployee])
}

const updateEmployee = (newEmployee, id) => {
    return db.query('UPDATE empleados SET ? where id = ?', [newEmployee, id]);
}



module.exports = { getEmployees, save, updateEmployee, getEmployee, getexistentDocument }