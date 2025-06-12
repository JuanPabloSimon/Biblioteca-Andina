const db = require('../config/db');

const Direccion = {
    getAll: (callback) => {
        const sql = `SELECT * FROM Direccion`;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `SELECT * FROM Direccion WHERE idDireccion = ?`;
        db.query(sql, [id], callback);
    },

    create: (direccion, callback) => {
        const sql = `INSERT INTO Direccion (idDireccion, calle, numeracion, piso, departamento) VALUES (?, ?, ?, ?, ?)`;
        db.query(sql, [
            direccion.idDireccion,
            direccion.calle,
            direccion.numeracion,
            direccion.piso,
            direccion.departamento
        ], callback);
    },

    update: (id, direccion, callback) => {
        const sql = `UPDATE Direccion SET calle = ?, numeracion = ?, piso = ?, departamento = ? WHERE idDireccion = ?`;
        db.query(sql, [
            direccion.calle,
            direccion.numeracion,
            direccion.piso,
            direccion.departamento,
            id
        ], callback);
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM Direccion WHERE idDireccion = ?`;
        db.query(sql, [id], callback);
    }
};

module.exports = Direccion;
