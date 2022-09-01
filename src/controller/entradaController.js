const serviceEntrada = require('../service/entradaService');
const serviceUsuario = require('../service/usuarioService');

module.exports = {

  async criarEntrada(req, res) {
    
    const { nome_paciente, documento_paciente, nome_acompanhante, documento_acompanhante, telefone, observacao } = req.body; 

    const usuarioPacienteExiste = await serviceUsuario.checarSeUsuarioExiste(documento_paciente);

    if (!usuarioPacienteExiste) {
      let usuario = ({
        nome: nome_paciente,
        documento: documento_paciente,
        telefone: telefone ? telefone : null,
      });

      await serviceUsuario.criarUsuario(usuario);
    };

    if (documento_acompanhante) {
      const usuarioAcompanhanteExiste = await serviceUsuario.checarSeUsuarioExiste(documento_acompanhante);

      if (!usuarioAcompanhanteExiste) {
        let usuario = ({
          nome: nome_acompanhante,
          documento: documento_acompanhante,
          telefone: telefone ? telefone : null,
        });

        await serviceUsuario.criarUsuario(usuario);
      };
    };

    const usuarioPaciente = await serviceUsuario.checarSeUsuarioExiste(documento_paciente);

    const entrada = await serviceEntrada.criarEntrada({
      usuario_id: usuarioPaciente.id,
      nome_paciente: nome_paciente,
      documento_paciente: documento_paciente,
      nome_acompanhante: nome_acompanhante,
      documento_acompanhante: documento_acompanhante,
      telefone: telefone ? telefone : null,
      observacao: observacao ? observacao : null,
    });

    return res.json(entrada);
  },

  async listarEntradas(req, res) {

    const entradas = await serviceEntrada.listarEntradas();

    if (entradas.length === 0) {
      return res.status(404).json('Nenhuma entrada cadastrada');
    };

    return res.json(entradas);
  }
};