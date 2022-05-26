'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('entrada', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_paciente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      documento_paciente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nome_acompanhante: {
        allowNull: true,
        type: Sequelize.STRING
      },
      documento_acompanhante: {
        allowNull: true,
        type: Sequelize.STRING
      },
      telefone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      observacao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('entrada');
  }
};
