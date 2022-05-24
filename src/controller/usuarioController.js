const service = require('../service/usuarioService');

module.exports = {
  async criarUsuario(req, res) {
    const { nome, documento, telefone } = req.body;
    const usuarioExistente = await service.checarSeUsuarioExiste(documento);
    if (usuarioExistente) return res.status(400).send({ error: 'Usuário já existe' });
    const usuario = await service.criarUsuario({ nome, documento, telefone });
    return res.status(201).send(usuario);
  },

  async listarUsuarios(req, res) {
    const usuarios = await service.listarUsuarios();
    if(!usuarios) res.status(404).send('Nenhum usuário encontrado');

    return res.send(usuarios);
  },

  async buscarUsuarioPorId(req, res) {
    const { id } = req.params;
    const usuario = await service.buscarUsuarioPorId(id);
    if(!usuario) res.status(404).send('Usuário não encontrado');

    return res.send(usuario);
  },
};
