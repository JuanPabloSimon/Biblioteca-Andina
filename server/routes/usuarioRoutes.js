const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.getAllUsuarios);
// Ruta para obtener usuarios filtrados por rol y/o DNI
router.get('/buscar', usuarioController.getUsuarioByFilters);
router.get('/:id', usuarioController.getUsuarioById);

/* ejemplos de consultas:
GET http://localhost:3000/api/usuarios/buscar?rol=Lector
GET http://localhost:3000/api/usuarios/buscar?dni=12345678
http://localhost:3000/api/usuarios/buscar?rol=Lector&dni=12345678
 */

router.post('/', usuarioController.createUsuario);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

// Ruta para obtener solo los lectores
router.get('/rol/lector', usuarioController.getLectores);
/*queda redundante teniendo los filtros por rol pero queda en esta versión hasta una iteración posterior */

module.exports = router;
