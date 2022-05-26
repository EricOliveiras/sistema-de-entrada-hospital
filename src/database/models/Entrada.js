const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome_paciente: DataTypes.STRING,
      documento_paciente: DataTypes.STRING,
      nome_acompanhante: DataTypes.STRING,
      documento_acompanhante: DataTypes.STRING,
      telefone: DataTypes.STRING,
      observacao: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'entrada',
    });
  };
  
};

module.exports = Usuario;