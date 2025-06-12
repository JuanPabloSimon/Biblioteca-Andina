const db = require('../config/db');

const Libro = {
    getAll: (callback) => {
        const sql = `SELECT * FROM Libro`;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `SELECT * FROM Libro WHERE idLibros = ?`;
        db.query(sql, [id], callback);
    },

    create: (libro, callback) => {
        const sql = `
    INSERT INTO Libro (idLibros, Titulo, fechaPublicacion, genero_idgenero, editorial, disponible, Editorial_idEditorial)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
        const params = [
            libro.idLibros,
            libro.Titulo,
            libro.fechaPublicacion,
            libro.genero_idgenero,
            libro.editorial,
            libro.disponible,
            libro.Editorial_idEditorial
        ];
        db.query(sql, params, callback);
    },

    update: (id, libro, callback) => {
        const sql = `
    UPDATE Libro SET Titulo = ?, fechaPublicacion = ?, genero_idgenero = ?, editorial = ?, disponible = ?, Editorial_idEditorial = ?
    WHERE idLibros = ?
    `;
        const params = [
            libro.Titulo,
            libro.fechaPublicacion,
            libro.genero_idgenero,
            libro.editorial,
            libro.disponible,
            libro.Editorial_idEditorial,
            id
        ];
        db.query(sql, params, callback);
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM Libro WHERE idLibros = ?`;
        db.query(sql, [id], callback);
    }
};

module.exports = Libro;
