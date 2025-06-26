const db = require("../config/db");

const Libro = {
  getAll: (callback) => {
    const sql = `SELECT * FROM libro`;
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = `SELECT * FROM libro WHERE idLibros = ?`;
    db.query(sql, [id], callback);
  },

  // create
  create: (libro, callback) => {
    const sql = `
    INSERT INTO libro (Titulo, fechaPublicacion, genero_idgenero, ejemplares, disponible, Editorial_idEditorial, imagen)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      libro.Titulo,
      libro.fechaPublicacion,
      libro.genero_idgenero,
      libro.ejemplares,
      libro.disponible,
      libro.Editorial_idEditorial,
      libro.imagen,
    ];
    db.query(sql, params, callback);
  },

  // update
  update: (id, libro, callback) => {
    const sql = `
    UPDATE libro SET Titulo = ?, fechaPublicacion = ?, genero_idgenero = ?, disponible = ?, Editorial_idEditorial = ?, imagen = ?
    WHERE idLibros = ?
    `;
    const params = [
      libro.Titulo,
      libro.fechaPublicacion,
      libro.genero_idgenero,
      libro.disponible,
      libro.Editorial_idEditorial,
      libro.imagen,
      id,
    ];
    db.query(sql, params, callback);
  },

  delete: (id, callback) => {
    const sql = `DELETE FROM libro WHERE idLibros = ?`;
    db.query(sql, [id], callback);
  },
};

module.exports = Libro;
