const serviceEntrada = require('../service/entradaService');
const serviceUsuario = require('../service/usuarioService');

module.exports = {
  // Cria uma nova entrada
  async criarEntrada(req, res) {
    // Recebe os dados da requisição
    const { nome_paciente, documento_paciente, nome_acompanhante, documento_acompanhante, telefone } = req.body;
    
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
        usuario = ({
          nome: nome_acompanhante,
          documento: documento_acompanhante,
          telefone: telefone ? telefone : null,
        });

        // Cria o usuário
        await serviceUsuario.criarUsuario(usuario);
      };
    };

    // Cria a entrada
    const entrada = await serviceEntrada.criarEntrada(req.body);

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