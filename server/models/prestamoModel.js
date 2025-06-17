const db = require("../config/db");

const Prestamo = {
  getAll: (callback) => {
    const sql = `SELECT * FROM prestamo`;
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = `SELECT * FROM prestamo WHERE idPrestamo = ?`;
    db.query(sql, [id], callback);
  },

  create: (prestamo, callback) => {
    const sql = `
            INSERT INTO prestamo (Usuario_idUsuario, Libro_idLibros, fechaPrestamo, fechaDevolucion, estado)
            VALUES (?, ?, ?, ?, ?)
        `;
    db.query(
      sql,
      [
        prestamo.Usuario_idUsuario,
        prestamo.Libro_idLibros,
        prestamo.fechaPrestamo,
        prestamo.fechaDevolucion,
        prestamo.estado,
      ],
      callback
    );
  },

  update: (id, prestamo, callback) => {
    const sql = `
            UPDATE prestamo
            SET fechaPrestamo = ?, fechaDevolucion = ?, estado = ?
            WHERE idPrestamo = ?
        `;
    db.query(
      sql,
      [prestamo.fechaPrestamo, prestamo.fechaDevolucion, prestamo.estado, id],
      callback
    );
  },

  delete: (id, callback) => {
    const sql = `DELETE FROM prestamo WHERE idPrestamo = ?`;
    db.query(sql, [id], callback);
  },
};

module.exports = Prestamo;
