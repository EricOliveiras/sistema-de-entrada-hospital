const usuarioRepository = require('../database/models/Usuario');

module.exports = {
  async buscarUsuarioPorDocumento(documento) {
    return await usuarioRepository.findOne({ where: { documento } });
  },

  async criarUsuario(usuario) {
    return await usuarioRepository.create(usuario);
  },

  async listarUsuarios() {
    return await usuarioRepository.findAll();
  }
};