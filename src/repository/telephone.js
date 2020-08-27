const db = require("../config/database");

const getTelephones = (id_employee) => {
    return db.query('SELECT * FROM telefonica where personaId = ?', [id_employee]);
}

const save = (newTel) => {
    return db.query('INSERT INTO telefonica set ?', [newTel]);
}

const deleteTel = (id_tel) => {
    return db.query('DELETE FROM telefonica where id = ?', [id_tel]);
}

const existentPhone = (tipo, personaId, numero, indicativo) => {
    return db.query('SELECT * FROM telefonica where tipo = ? and personaId = ? and numero = ? and  indicativo = ?', [tipo, personaId, numero, indicativo]);
}

module.exports = { getTelephones, save, deleteTel, existentPhone }