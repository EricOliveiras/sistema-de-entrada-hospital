const serviceEntrada = require('../service/entradaService');
const serviceUsuario = require('../service/usuarioService');

module.exports = {
  // Cria uma nova entrada
  async criarEntrada(req, res) {
    const entrada = req.body;
    
    const usuarioPacienteExiste = await serviceUsuario.checarSeUsuarioExiste(entrada.documento_paciente);
    const usuariAcompanhanteExiste = await serviceUsuario.checarSeUsuarioExiste(entrada.documento_acompanhante);

    if (!usuarioPacienteExiste) {
      const { nome_paciente, documento_paciente, telefone} = entrada;
      await serviceUsuario.criarUsuario(nome_paciente, documento_paciente, telefone);
    };

    if (!usuariAcompanhanteExiste) {
      const { nome_acompanhante, documento_acompanhante, telefone} = entrada;
      await serviceUsuario.criarUsuario(nome_acompanhante, documento_acompanhante, telefone);
    };

    const entradaCriada = await serviceEntrada.criarEntrada(entrada);

    res.status(201).json(entradaCriada);
  },

  // Lista todas as entradas
  async listarEntradas(req, res) {
    const entradas = await serviceEntrada.listarEntradas();

    if (entradas.length === 0) {
      res.status(404).json('Nenhuma entrada cadastrada');
    };

    res.json(entradas);
  }
}