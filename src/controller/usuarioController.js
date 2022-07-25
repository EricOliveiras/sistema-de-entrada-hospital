const service = require('../service/usuarioService');

module.exports = {
  // Cria um novo usuário
  async criarUsuario(req, res) {
    const { nome, documento, telefone } = req.body;

    const checarSeUsuarioExiste = await service.checarSeUsuarioExiste(documento);

    if (checarSeUsuarioExiste) {
      return res.status(400).json({ error: 'Usuário já existe' });
    };
    
    const usuario = await service.criarUsuario({ nome, documento, telefone });

    return res.json(usuario);
  },

  // Lista todos os usuários
  async listarUsuarios(req, res) {
    const usuarios = await service.listarUsuarios(); 

    if (usuarios.length === 0) {
      return res.status(400).json({ error: 'Nenhum usuário encontrado' });
    };

    return res.json(usuarios);
  },

  // Busca um usuário pelo ID
  async buscarUsuarioPorId(req, res) {
    const { id } = req.params;

    const usuario = await service.buscarUsuarioPorId(id);

    if(!usuario) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    };

    return res.json({ usuario });
  },

  // Busca um usuário pelo documento
  async buscarUsuarioPorDocumento(req, res) {
    const { documento } = req.params;

    const usuario = await service.checarSeUsuarioExiste(documento);

    if(!usuario) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    };

    return res.json(usuario);
  },

  // Atualiza um usuário
  async atualizarUsuario(req, res) {
    const { id } = req.params;
    const { nome, documento, telefone } = req.body;

    const usuario = await service.buscarUsuarioPorId(id);

    if(!usuario) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    };

    const usuarioAtualizado = await service.atualizarUsuario(id, { nome, documento, telefone });

    return res.json({
      usuario: usuarioAtualizado,
      mensagem: 'Usuário atualizado com sucesso'
    });
  },

  // Deleta um usuário
  async deletarUsuario(req, res) {
    const { id } = req.params;

    const usuario = await service.buscarUsuarioPorId(id);

    if(!usuario) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    };

    await service.deletarUsuario(id);

    return res.json({ message: 'Usuário deletado com sucesso' });
  }
};
