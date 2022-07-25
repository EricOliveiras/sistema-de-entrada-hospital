const { Model, DataTypes } = require('sequelize');

class Entrada extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
  };
  
  static init(sequelize) {
    super.init({
      usuario_id: DataTypes.INTEGER,
      nome_paciente: DataTypes.STRING,
      documento_paciente: DataTypes.STRING,
      nome_acompanhante: DataTypes.STRING,
      documento_acompanhante: DataTypes.STRING,
      telefone: DataTypes.STRING,
      observacao: DataTypes.STRING,
    }, {
      sequelize,
    });
  };
  
};

module.exports = Entrada;