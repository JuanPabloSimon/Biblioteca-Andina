const db = require('../config/db');

const Genero = {
    getAll: (callback) => {
        const sql = `SELECT * FROM genero`;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `SELECT * FROM genero WHERE idgenero = ?`;
        db.query(sql, [id], callback);
    },

    create: (genero, callback) => {
        const sql = `INSERT INTO genero (idgenero, nombre) VALUES (?, ?)`;
        db.query(sql, [genero.idgenero, genero.nombre], callback);
    },

    update: (id, genero, callback) => {
        const sql = `UPDATE genero SET nombre = ? WHERE idgenero = ?`;
        db.query(sql, [genero.nombre, id], callback);
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM genero WHERE idgenero = ?`;
        db.query(sql, [id], callback);
    }
};

module.exports = Genero;
