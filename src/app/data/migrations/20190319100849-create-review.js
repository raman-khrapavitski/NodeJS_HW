'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Review', {
      guid: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING(1024)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Review');
  }
};
