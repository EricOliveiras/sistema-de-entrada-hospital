const entradaRepository = require('../database/models/Entrada');

module.exports = {
  async criarEntrada(entrada) {
    return await entradaRepository.create(entrada);
  },

  async listarEntradas() {
    return await entradaRepository.findAll();
  },

  async listarEntradasPorUsuario(id) {
    return await entradaRepository.findAll({ where: { usuario_id: id } });
  },

};