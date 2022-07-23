// Middleware para validar string
module.exports = {
  // Checa o tamanho da string
  checarTamanhoString: (req, res, next) => {
    const { nome, nome_paciente, nome_acompanhante, documento, telefone } = req.body;

    // Checa se o nome é válido
    if (nome) {
      if (nome.length < 3) {
        return res.status(400).json('Nome inválido');
      };
    };

    // Checa se o nome do paciente é válido
    if (nome_paciente) {
      if (nome_paciente.length < 3) {
        return res.status(400).json('Nome do paciente inválido');
      };
    };

    // Checa se o nome do acompanhante é válido
    if (nome_acompanhante) {
      if (nome_acompanhante.length < 3) {
        return res.status(400).json('Nome do acompanhante inválido');
      };
    };

    // Checa se o documento é válido
    if (documento) {
      if (documento.length < 3) {
        return res.status(400).json('Documento inválido');
      };
    };

    // Checa se o telefone é válido
    if (telefone) {
      if (telefone.length < 3) {
        return res.status(400).json('Telefone inválido');
      };
    };

    next();
  },

  trasnformarString: (req, res, next) => {
    const { nome, nome_paciente, nome_acompanhante, observacao } = req.body;

    if(nome) {
      req.body.nome = nome.toLowerCase();
    };

    if(nome_paciente) {
      req.body.nome_paciente = nome_paciente.toLowerCase();
    };

    if(nome_acompanhante) {
      req.body.nome_acompanhante = nome_acompanhante.toLowerCase();
    };

    if(observacao) {
      req.body.observacao = observacao.toLowerCase();
    };

    next();
  }

};
