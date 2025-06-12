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

    // create
    create: (libro, callback) => {
        const sql = `
    INSERT INTO Libro (idLibros, Titulo, fechaPublicacion, genero_idgenero, editorial, disponible, Editorial_idEditorial, imagen)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
        const params = [
            libro.idLibros,
            libro.Titulo,
            libro.fechaPublicacion,
            libro.genero_idgenero,
            libro.editorial,
            libro.disponible,
            libro.Editorial_idEditorial,
            libro.imagen
        ];
        db.query(sql, params, callback);
    },

    // update
    update: (id, libro, callback) => {
        const sql = `
    UPDATE Libro SET Titulo = ?, fechaPublicacion = ?, genero_idgenero = ?, editorial = ?, disponible = ?, Editorial_idEditorial = ?, imagen = ?
    WHERE idLibros = ?
    `;
        const params = [
            libro.Titulo,
            libro.fechaPublicacion,
            libro.genero_idgenero,
            libro.editorial,
            libro.disponible,
            libro.Editorial_idEditorial,
            libro.imagen,
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
