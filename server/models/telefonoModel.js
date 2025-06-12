const db = require('../config/db');

const Telefono = {
    getAll: (callback) => {
        const sql = `SELECT * FROM Telefono`;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `SELECT * FROM Telefono WHERE idTelefono = ?`;
        db.query(sql, [id], callback);
    },

    create: (telefono, callback) => {
        const sql = `INSERT INTO Telefono (idTelefono, codigoArea, numero) VALUES (?, ?, ?)`;
        db.query(sql, [telefono.idTelefono, telefono.codigoArea, telefono.numero], callback);
    },

    update: (id, telefono, callback) => {
        const sql = `UPDATE Telefono SET codigoArea = ?, numero = ? WHERE idTelefono = ?`;
        db.query(sql, [telefono.codigoArea, telefono.numero, id], callback);
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM Telefono WHERE idTelefono = ?`;
        db.query(sql, [id], callback);
    }
};

module.exports = Telefono;
