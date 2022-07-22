// Middleware para validar string
module.exports = {
  // Checa o tamanho da string
  checarTamanhoString: (req, res, next) => {
    const { nome, documento, telefone } = req.body;

    if (nome.length < 3) {
      return res.status(400).json({ error: 'Nome deve ter no mínimo 3 caracteres' });
    };

    if (documento.length < 3) {
      return res.status(400).json({ error: 'Documento deve ter no mínimo 3 caracteres' });
    };

    if (telefone.length < 3) {
      return res.status(400).json({ error: 'Telefone deve ter no mínimo 3 caracteres' });
    };

    next();
  },

  trasnformarString: (req, res, next) => {
    const { nome } = req.body;

    req.body.nome = nome.toLowerCase();

    next();
  }

};