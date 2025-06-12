const db = require('../config/db');

const roles = [
    { id: 1, tipoRol: 'Administrador' },
    { id: 2, tipoRol: 'Bibliotecario' },
    { id: 3, tipoRol: 'Lector' }
];

const insertRoles = () => {
    roles.forEach(role => {
        const sql = 'INSERT IGNORE INTO Rol (idRol, tipoRol) VALUES (?, ?)';
        db.query(sql, [role.id, role.tipoRol], (err) => {
            if (err) console.error('Error al insertar rol:', err);
        });
    });
};

module.exports = insertRoles;
