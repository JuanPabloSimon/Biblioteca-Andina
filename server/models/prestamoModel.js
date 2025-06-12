const db = require('../config/db');

const Prestamo = {
    getAll: (callback) => {
        const sql = `SELECT * FROM Prestamo`;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `SELECT * FROM Prestamo WHERE idPrestamo = ?`;
        db.query(sql, [id], callback);
    },

    create: (prestamo, callback) => {
        const sql = `
            INSERT INTO Prestamo (idPrestamo, Usuario_idUsuario, Libro_idLibros, fechaPrestamo, fechaDevolucion, estado)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        db.query(sql, [
            prestamo.idPrestamo,
            prestamo.Usuario_idUsuario,
            prestamo.Libro_idLibros,
            prestamo.fechaPrestamo,
            prestamo.fechaDevolucion,
            prestamo.estado
        ], callback);
    },

    update: (id, prestamo, callback) => {
        const sql = `
            UPDATE Prestamo
            SET fechaPrestamo = ?, fechaDevolucion = ?, estado = ?
            WHERE idPrestamo = ?
        `;
        db.query(sql, [
            prestamo.fechaPrestamo,
            prestamo.fechaDevolucion,
            prestamo.estado,
            id
        ], callback);
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM Prestamo WHERE idPrestamo = ?`;
        db.query(sql, [id], callback);
    }
};

module.exports = Prestamo;
