const Router = require('express');

const entradaController = require('../controller/entradaController');
const middleware = require('../middlewares/validacoesString');

const router = Router();

router.post('/entrada/adicionar', 
  middleware.checarTamanhoString,
  middleware.trasnformarString,
  entradaController.criarEntrada
);

router.get('/entrada/listar', entradaController.listarEntradas);

module.exports = router;