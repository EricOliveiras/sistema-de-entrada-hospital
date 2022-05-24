const Router = require('express');

const usuarioController = require('../controller/usuarioController');

const router = Router();

router.post('/adicionar', usuarioController.criarUsuario);
router.get('/listar', usuarioController.listarUsuarios);
router.get('/buscar/:id', usuarioController.buscarUsuarioPorId);

module.exports = router;