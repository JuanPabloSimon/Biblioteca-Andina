const db = require("../config/db");

const Editorial = {
  getAll: (callback) => {
    const sql = `SELECT * FROM editorial`;
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = `SELECT * FROM editorial WHERE idEditorial = ?`;
    db.query(sql, [id], callback);
  },

  create: (editorial, callback) => {
    const sql = `
            INSERT INTO editorial (nombre, Direccion_idDireccion, Telefono)
            VALUES (?, ?, ?)
        `;
    db.query(
      sql,
      [editorial.nombre, editorial.Direccion_idDireccion, editorial.Telefono],
      callback
    );
  },

  update: (id, editorial, callback) => {
    const sql = `
            UPDATE editorial
            SET nombre = ?, Direccion_idDireccion = ?, Telefono_idTelefono = ?
            WHERE idEditorial = ?
        `;
    db.query(
      sql,
      [
        editorial.nombre,
        editorial.Direccion_idDireccion,
        editorial.Telefono_idTelefono,
        id,
      ],
      callback
    );
  },

  delete: (id, callback) => {
    const sql = `DELETE FROM editorial WHERE idEditorial = ?`;
    db.query(sql, [id], callback);
  },
};

module.exports = Editorial;
