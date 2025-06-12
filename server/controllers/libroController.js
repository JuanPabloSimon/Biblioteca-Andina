const Libro = require('../models/libroModel');

exports.getAllLibros = (req, res) => {
    Libro.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

exports.getLibroById = (req, res) => {
    Libro.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result[0]);
    });
};

exports.createLibro = (req, res) => {
    const nuevoLibro = req.body;
    Libro.create(nuevoLibro, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Libro creado', result });
    });
};

exports.updateLibro = (req, res) => {
    const id = req.params.id;
    const datos = req.body;
    Libro.update(id, datos, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Libro actualizado', result });
    });
};

exports.deleteLibro = (req, res) => {
    Libro.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Libro eliminado', result });
    });
};
