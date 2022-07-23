const Router = require('express');

const entradaController = require('../controller/entradaController');
const middleware = require('../middlewares/validacoesString');

const router = Router();

// Endpoint para criar uma nova entrada
router.post('/entrada/adicionar', 
  middleware.checarTamanhoString,
  middleware.trasnformarString,
  entradaController.criarEntrada
);

// Endpoint para listar todas as entradas
router.get('/entrada/listar', entradaController.listarEntradas);

module.exports = router;