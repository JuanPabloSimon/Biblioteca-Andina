const db = require('../config/db');

const Autor = {
    getAll: (callback) => {
        const sql = `SELECT * FROM Autor`;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `SELECT * FROM Autor WHERE idAutor = ?`;
        db.query(sql, [id], callback);
    },

    create: (autor, callback) => {
        const sql = `INSERT INTO Autor (idAutor, nombre, apellido) VALUES (?, ?, ?)`;
        db.query(sql, [autor.idAutor, autor.nombre, autor.apellido], callback);
    },

    update: (id, autor, callback) => {
        const sql = `UPDATE Autor SET nombre = ?, apellido = ? WHERE idAutor = ?`;
        db.query(sql, [autor.nombre, autor.apellido, id], callback);
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM Autor WHERE idAutor = ?`;
        db.query(sql, [id], callback);
    }
};

module.exports = Autor;
