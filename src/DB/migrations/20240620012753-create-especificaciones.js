'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Especificaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      motor: {
        type: Sequelize.STRING
      },
      transmision: {
        type: Sequelize.STRING
      },
      combustible: {
        type: Sequelize.STRING
      },
      capacidad: {
        type: Sequelize.STRING
      },
      caracteristicas: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Especificaciones');
  }
};