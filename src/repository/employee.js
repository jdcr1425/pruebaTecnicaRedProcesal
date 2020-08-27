const db = require("../config/database");

const getEmployees = () => {
    return db.query('SELECT * FROM empleados');
}

const getEmployee = (id) => {
    return db.query('SELECT * FROM empleados where id = ?', [id]);
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