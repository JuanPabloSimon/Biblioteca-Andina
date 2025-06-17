const db = require("../config/db");

const Direccion = {
  getAll: (callback) => {
    const sql = `SELECT * FROM direccion`;
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = `SELECT * FROM direccion WHERE idDireccion = ?`;
    db.query(sql, [id], callback);
  },

  create: (direccion, callback) => {
    const sql = `INSERT INTO direccion (calle, numeracion, piso, departamento) VALUES (?, ?, ?, ?)`;
    db.query(
      sql,
      [
        direccion.calle,
        direccion.numeracion,
        direccion.piso,
        direccion.departamento,
      ],
      callback
    );
  },

  update: (id, direccion, callback) => {
    const sql = `UPDATE direccion SET calle = ?, numeracion = ?, piso = ?, departamento = ? WHERE idDireccion = ?`;
    db.query(
      sql,
      [
        direccion.calle,
        direccion.numeracion,
        direccion.piso,
        direccion.departamento,
        id,
      ],
      callback
    );
  },

  delete: (id, callback) => {
    const sql = `DELETE FROM direccion WHERE idDireccion = ?`;
    db.query(sql, [id], callback);
  },
};

module.exports = Direccion;
