const Model = require('../models/generoModel');

exports.getAll = (req, res) => {
  Model.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Model.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.create = (req, res) => {
  Model.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Genero creado' });
  });
};

exports.update = (req, res) => {
  Model.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Genero actualizado' });
  });
};

exports.delete = (req, res) => {
  Model.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Genero eliminado' });
  });
};
