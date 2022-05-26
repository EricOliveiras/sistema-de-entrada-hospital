const entradaRepository = require('../database/models/Entrada');

module.exports = {
  // Cria uma nova entrada
  async criarEntrada(entrada) {
    return await entradaRepository.create(entrada);
  },

  // Lista todas as entradas
  async listarEntradas() {
    return await entradaRepository.findAll();
  },
};