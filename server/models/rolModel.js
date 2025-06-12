const db = require('../config/db');

const Rol = {
    getAll: (callback) => {
        const sql = `SELECT * FROM Rol`;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `SELECT * FROM Rol WHERE idRol = ?`;
        db.query(sql, [id], callback);
    },

    create: (rol, callback) => {
        const sql = `INSERT INTO Rol (idRol, tipoRol) VALUES (?, ?)`;
        db.query(sql, [rol.idRol, rol.tipoRol], callback);
    },

    update: (id, rol, callback) => {
        const sql = `UPDATE Rol SET tipoRol = ? WHERE idRol = ?`;
        db.query(sql, [rol.tipoRol, id], callback);
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM Rol WHERE idRol = ?`;
        db.query(sql, [id], callback);
    }
};

module.exports = Rol;
