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

exports.update = (req, res) => {
    const id = req.params.id;
    const usuario = req.body;

    Usuario.update(id, usuario, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al actualizar el usuario' });
        res.status(200).json({ mensaje: 'Usuario actualizado correctamente' });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Usuario.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al eliminar el usuario' });
        res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    });
};

