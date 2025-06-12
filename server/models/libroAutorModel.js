const db = require('../config/db');

const LibroAutor = {
    getAll: (callback) => {
        const sql = `SELECT * FROM Libro_has_Autor`;
        db.query(sql, callback);
    },

    create: (relacion, callback) => {
        const sql = `INSERT INTO Libro_has_Autor (Autor_idAutor, Libro_idLibros) VALUES (?, ?)`;
        db.query(sql, [relacion.Autor_idAutor, relacion.Libro_idLibros], callback);
    },

    delete: (autorId, libroId, callback) => {
        const sql = `DELETE FROM Libro_has_Autor WHERE Autor_idAutor = ? AND Libro_idLibros = ?`;
        db.query(sql, [autorId, libroId], callback);
    }
};

module.exports = LibroAutor;
