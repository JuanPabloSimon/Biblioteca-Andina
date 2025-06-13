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

exports.updateUsuario = (req, res) => {
    const id = req.params.id;
    const usuario = req.body;

    Usuario.update(id, usuario, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al actualizar el usuario' });
        res.status(200).json({ mensaje: 'Usuario actualizado correctamente' });
    });
};

exports.deleteUsuario = (req, res) => {
    const id = req.params.id;

    Usuario.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al eliminar el usuario' });
        res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    });
};

exports.getLectores = (req, res) => {
    Usuario.getLectores((err, results) => {
        if (err) {
            console.error('Error al obtener lectores:', err);
            res.status(500).json({ error: 'Error al obtener lectores' });
        } else {
            res.json(results);
        }
    });
};

exports.getUsuarioByFilters = (req, res) => {
    const filters = {
        rol: req.query.rol,
        dni: req.query.dni
    };

    Usuario.getByFilters(filters, (err, results) => {
        if (err) {
            console.error('Error al obtener usuarios con filtros:', err);
            res.status(500).json({ error: 'Error al obtener usuarios con filtros' });
        } else {
            res.json(results);
        }
    });
};