const Router = require('express');

const usuarioController = require('../controller/usuarioController');
const middleware = require('../middlewares/validacoesString');

const router = Router();

// Endpoint para criar um novo usuário
router.post('/adicionar',
  middleware.checarTamanhoString,
  middleware.trasnformarString,
  usuarioController.criarUsuario);

// Endpoint para listar todos os usuários
router.get('/listar', usuarioController.listarUsuarios);

// Endpoint para buscar um usuário pelo ID
router.get('/buscar/:id', usuarioController.buscarUsuarioPorId);

// Endpoint para buscar um usuário pelo documento
router.get('/buscar/documento/:documento', usuarioController.buscarUsuarioPorDocumento);

// Endpoint para atualizar um usuário
router.put('/atualizar/:id', usuarioController.atualizarUsuario);

// Endpoint para deletar um usuário
router.delete('/deletar/:id', usuarioController.deletarUsuario);

module.exports = router;