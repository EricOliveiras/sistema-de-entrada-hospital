const service = require('../service/usuarioService');

module.exports = {
  async criarUsuario(req, res) {
    const usuario = req.body;
    const usuarioExistente = await service.buscarUsuarioPorDocumento(usuario.documento);
    if (usuarioExistente) {
      res.status(400).send('Usuário já cadastrado');
    };

    const usuarioCriado = await service.criarUsuario(usuario);
    return res.json(usuarioCriado);
  },

  async listarUsuarios(req, res) {
    const usuarios = await service.listarUsuarios();
    if(!usuarios) {
      res.status(404).send('Nenhum usuário encontrado');
    };

    return res.json(usuarios);
  }
};
