const service = require('../service/usuarioService');

module.exports = {
  async criarUsuario(req, res) {
    const { nome, documento, telefone } = req.body;
    const usuarioExistente = await service.buscarUsuarioPorDocumento(documento);
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Usuário já cadastrado' });
    };
    const usuario = { nome, documento, telefone };
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
