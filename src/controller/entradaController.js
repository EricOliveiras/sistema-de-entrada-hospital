const serviceEntrada = require('../service/entradaService');
const serviceUsuario = require('../service/usuarioService');
const Usuario = require('../database/models/Usuario');

module.exports = {
  // Cria uma nova entrada
  async criarEntrada(req, res) {
    // Recebe os dados da requisição
    const { nome_paciente, documento_paciente, nome_acompanhante, documento_acompanhante, telefone, observacao } = req.body;
    
    // Verifica se o usuário já existe
    const usuarioPacienteExiste = await serviceUsuario.checarSeUsuarioExiste(documento_paciente);

    // Se o usuário não existe, cria um novo usuário
    if (!usuarioPacienteExiste) {
      let usuario = ({
        nome: nome_paciente,
        documento: documento_paciente,
        telefone: telefone ? telefone : null,
      });

      // Cria o usuário
      await serviceUsuario.criarUsuario(usuario);
    };

     // Se eiste um acompanhante, cria um novo usuário
    if (documento_acompanhante) {
      // Verifica se o usuário já existe
      const usuarioAcompanhanteExiste = await serviceUsuario.checarSeUsuarioExiste(documento_acompanhante);

      // Se o usuário não existe, cria um novo usuário
      if (!usuarioAcompanhanteExiste) {
        let usuario = ({
          nome: nome_acompanhante,
          documento: documento_acompanhante,
          telefone: telefone ? telefone : null,
        });

        // Cria o usuário
        await serviceUsuario.criarUsuario(usuario);
      };
    };

    // Captura o id do usuário
    const usuarioPaciente = await serviceUsuario.checarSeUsuarioExiste(documento_paciente);

    // Cria a entrada
    const entrada = await serviceEntrada.criarEntrada({
      usuario_id: usuarioPaciente.id,
      nome_paciente: nome_paciente,
      documento_paciente: documento_paciente,
      nome_acompanhante: nome_acompanhante,
      documento_acompanhante: documento_acompanhante,
      telefone: telefone ? telefone : null,
      observacao: observacao ? observacao : null,
    });

    // Retorna a entrada criada
    return res.json(entrada);
  },

  // Lista todas as entradas
  async listarEntradas(req, res) {
    // Recebe os entradas via service
    const entradas = await serviceEntrada.listarEntradas();

    // Se não houver entradas, retorna um erro
    if (entradas.length === 0) {
      return res.status(404).json('Nenhuma entrada cadastrada');
    };

    // Retorna a lista de entradas
    return res.json(entradas);
  }
};