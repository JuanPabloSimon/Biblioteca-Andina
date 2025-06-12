const Usuario = require('../models/usuarioModel');

exports.getAllUsuarios = (req, res) => {
    Usuario.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

exports.getUsuarioById = (req, res) => {
    Usuario.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result[0]);
    });
};

exports.createUsuario = (req, res) => {
    const nuevoUsuario = req.body;
    Usuario.create(nuevoUsuario, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Usuario creado', result });
    });
};
