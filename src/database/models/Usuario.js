const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static associate(models) {
    this.hasMany(models.Entrada, { foreignKey: 'usuario_id', as: 'entradas' });
  };

  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      documento: DataTypes.STRING,
      telefone: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'usuario',
    });
  };
  
};

module.exports = Usuario;