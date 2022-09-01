const Router = require('express');

const usuarioController = require('../controller/usuarioController');
const middleware = require('../middlewares/validacoesString');

const router = Router();

router.post('/adicionar',
  middleware.checarTamanhoString,
  middleware.trasnformarString,
  usuarioController.criarUsuario
);

router.get('/listar', usuarioController.listarUsuarios);

router.get('/buscar/:id', usuarioController.buscarUsuarioPorId);

router.get('/buscar/documento/:documento', usuarioController.buscarUsuarioPorDocumento);

router.put('/atualizar/:id', usuarioController.atualizarUsuario);

router.delete('/deletar/:id', usuarioController.deletarUsuario);

module.exports = router;