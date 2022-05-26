const usuarioRepository = require('../database/models/Usuario');

module.exports = {
  // Checa se o usuário já existe
  async checarSeUsuarioExiste(documento) {
    return await usuarioRepository.findOne({ where: { documento } });
  },

  // Cria um novo usuário
  async criarUsuario(usuario) {
    return await usuarioRepository.create(usuario);
  },

  // Lista todos os usuários
  async listarUsuarios() {
    return await usuarioRepository.findAll();
  },

  // Busca um usuário pelo ID
  async buscarUsuarioPorId(id) {
    return await usuarioRepository.findOne({ where: { id } });
  },

  // Atualiza um usuário
  async atualizarUsuario(id, usuario) {
    return await usuarioRepository.update(usuario, { where: { id } });
  },

  // Deleta um usuário
  async deletarUser(id) {
    return await usuarioRepository.destroy({ where: { id } });
  },
};