const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
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