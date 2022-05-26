const serviceEntrada = require('../service/entradaService');
const serviceUsuario = require('../service/usuarioService');

module.exports = {
  // Cria uma nova entrada
  async criarEntrada(req, res) {
    const { nome_paciente, documento_paciente, nome_acompanhante, documento_acompanhante, telefone, observacao } = req.body;
    
    const usuarioPacienteExiste = await serviceUsuario.checarSeUsuarioExiste(documento_paciente);
    const usuarioAcompanhanteExiste = await serviceUsuario.checarSeUsuarioExiste(documento_acompanhante);

    if (!usuarioPacienteExiste) {
      let usuario = ({
        nome: nome_paciente,
        documento: documento_paciente,
        telefone: telefone,
      });

      await serviceUsuario.criarUsuario(usuario);
    };

    if (!usuarioAcompanhanteExiste) {
      let usuario = ({
        nome: nome_acompanhante,
        documento: documento_acompanhante,
        telefone: telefone,
      });

      await serviceUsuario.criarUsuario(usuario);
    };

    const entradaCriada = await serviceEntrada.criarEntrada({
      nome_paciente,
      documento_paciente,
      nome_acompanhante,
      documento_acompanhante,
      telefone,
      observacao
    });

    return res.status(201).json(entradaCriada);
  },

  // Lista todas as entradas
  async listarEntradas(req, res) {
    const entradas = await serviceEntrada.listarEntradas();

    if (entradas.length === 0) {
      return res.status(404).json('Nenhuma entrada cadastrada');
    };

    return res.json(entradas);
  }
};