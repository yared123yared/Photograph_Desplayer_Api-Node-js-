'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Photographers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FName: {
        type: Sequelize.STRING,

      },
      LName: {
        type: Sequelize.STRING,

      },
      Gender: {
        type: Sequelize.STRING,

      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      WorkTitle: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      ProfilePictureName: {
        type: Sequelize.TEXT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Photographers');
  }
};