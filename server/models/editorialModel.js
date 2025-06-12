const db = require('../config/db');

const Editorial = {
    getAll: (callback) => {
        const sql = `SELECT * FROM Editorial`;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `SELECT * FROM Editorial WHERE idEditorial = ?`;
        db.query(sql, [id], callback);
    },

    create: (editorial, callback) => {
        const sql = `
            INSERT INTO Editorial (idEditorial, nombre, Direccion_idDireccion, Telefono_idTelefono)
            VALUES (?, ?, ?, ?)
        `;
        db.query(sql, [
            editorial.idEditorial,
            editorial.nombre,
            editorial.Direccion_idDireccion,
            editorial.Telefono_idTelefono
        ], callback);
    },

    update: (id, editorial, callback) => {
        const sql = `
            UPDATE Editorial
            SET nombre = ?, Direccion_idDireccion = ?, Telefono_idTelefono = ?
            WHERE idEditorial = ?
        `;
        db.query(sql, [
            editorial.nombre,
            editorial.Direccion_idDireccion,
            editorial.Telefono_idTelefono,
            id
        ], callback);
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM Editorial WHERE idEditorial = ?`;
        db.query(sql, [id], callback);
    }
};

module.exports = Editorial;
