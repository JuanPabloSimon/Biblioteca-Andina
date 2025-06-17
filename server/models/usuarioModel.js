const db = require("../config/db");

const Usuario = {
  getAll: (callback) => {
    const sql = `
        SELECT u.idUsuario, u.DNI, u.Nombre, u.Apellido, u.fechaNac, u.DNI, u.Telefono, u.Rol,
               d.calle, d.numeracion
        FROM Usuario u
        JOIN Direccion d ON u.Direccion_idDireccion = d.idDireccion;
        `;
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = "SELECT * FROM Usuario WHERE idUsuario = ?";
    db.query(sql, [id], callback);
  },

  create: (usuario, callback) => {
    const sql = `
        INSERT INTO Usuario 
        (Nombre, Apellido, fechaNac, DNI, Direccion_idDireccion, Telefono, Rol) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
    db.query(
      sql,
      [
        usuario.Nombre,
        usuario.Apellido,
        usuario.fechaNac,
        usuario.DNI,
        usuario.Direccion_idDireccion,
        usuario.Telefono,
        usuario.Rol,
      ],
      callback
    );
  },

  update: (id, usuario, callback) => {
    const sql = `
        UPDATE Usuario 
        SET Nombre = ?, Apellido = ?, fechaNac = ?, DNI = ?, 
            Direccion_idDireccion = ?, Telefono = ?, Rol = ?
        WHERE idUsuario = ?
        `;
    db.query(
      sql,
      [
        usuario.Nombre,
        usuario.Apellido,
        usuario.fechaNac,
        usuario.DNI,
        usuario.Direccion_idDireccion,
        usuario.Telefono,
        usuario.Rol,
        id,
      ],
      callback
    );
  },

  delete: (id, callback) => {
    const sql = "DELETE FROM Usuario WHERE idUsuario = ?";
    db.query(sql, [id], callback);
  },

  // CHEKEAR ESTOOOOOOO
  getLectores: (callback) => {
    const sql = `
    SELECT u.idUsuario, u.DNI, u.Nombre, u.Apellido, u.fechaNac, u.DNI, u.Telefono, u.Rol
               d.calle, d.numeracion,
    FROM Usuario u WHERE u.Rol = 'Lector'
    JOIN Direccion d ON u.Direccion_idDireccion = d.idDireccion
    `;
    db.query(sql, callback);
  },

  getByFilters: (filters, callback) => {
    let sql = `
        SELECT u.idUsuario, u.Nombre, u.Apellido, u.fechaNac, u.DNI,
               d.calle, d.numeracion, t.numero, r.tipoRol
        FROM Usuario u
        JOIN Direccion d ON u.Direccion_idDireccion = d.idDireccion
        JOIN Telefono t ON u.Telefono_idTelefono = t.idTelefono
        JOIN Rol r ON u.Rol_idRol = r.idRol
        WHERE 1 = 1
    `;
    const params = [];

    if (filters.rol) {
      sql += ` AND r.tipoRol = ?`;
      params.push(filters.rol);
    }

    if (filters.dni) {
      sql += ` AND u.DNI = ?`;
      params.push(filters.dni);
    }

    db.query(sql, params, callback);
  },
};

module.exports = Usuario;
