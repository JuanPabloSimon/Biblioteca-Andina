const db = require('../config/db');

const Usuario = {
    getAll: (callback) => {
        const sql = `
        SELECT u.idUsuario, u.Nombre, u.Apellido, u.fechaNac, u.DNI,
               d.calle, d.numeracion, t.numero, r.tipoRol
        FROM Usuario u
        JOIN Direccion d ON u.Direccion_idDireccion = d.idDireccion
        JOIN Telefono t ON u.Telefono_idTelefono = t.idTelefono
        JOIN Rol r ON u.Rol_idRol = r.idRol;
        `;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = 'SELECT * FROM Usuario WHERE idUsuario = ?';
        db.query(sql, [id], callback);
    },

    create: (usuario, callback) => {
        const sql = `
        INSERT INTO Usuario 
        (idUsuario, Nombre, Apellido, fechaNac, DNI, Direccion_idDireccion, Telefono_idTelefono, Rol_idRol) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(sql, [
            usuario.idUsuario,
            usuario.Nombre,
            usuario.Apellido,
            usuario.fechaNac,
            usuario.DNI,
            usuario.Direccion_idDireccion,
            usuario.Telefono_idTelefono,
            usuario.Rol_idRol
        ], callback);
    },

    update: (id, usuario, callback) => {
        const sql = `
        UPDATE Usuario 
        SET Nombre = ?, Apellido = ?, fechaNac = ?, DNI = ?, 
            Direccion_idDireccion = ?, Telefono_idTelefono = ?, Rol_idRol = ?
        WHERE idUsuario = ?
        `;
        db.query(sql, [
            usuario.Nombre,
            usuario.Apellido,
            usuario.fechaNac,
            usuario.DNI,
            usuario.Direccion_idDireccion,
            usuario.Telefono_idTelefono,
            usuario.Rol_idRol,
            id
        ], callback);
    },

    delete: (id, callback) => {
        const sql = 'DELETE FROM Usuario WHERE idUsuario = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Usuario;
