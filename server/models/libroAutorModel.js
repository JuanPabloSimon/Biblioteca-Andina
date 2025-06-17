const db = require("../config/db");

const LibroAutor = {
  getAll: (callback) => {
    const sql = `SELECT * FROM libro_has_Autor`;
    db.query(sql, callback);
  },

  create: (relacion, callback) => {
    const sql = `INSERT INTO libro_has_Autor (Autor_idAutor, Libro_idLibros) VALUES (?, ?)`;
    db.query(sql, [relacion.Autor_idAutor, relacion.Libro_idLibros], callback);
  },

  delete: (autorId, libroId, callback) => {
    const sql = `DELETE FROM libro_has_Autor WHERE id_Libro_has_Autor = ?`;
    db.query(sql, [id], callback);
  },
};

module.exports = LibroAutor;
