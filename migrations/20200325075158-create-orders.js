'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        references :{
          model:"Customers",
          key:"id"
        }
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references : {
          model: "Products",
          key:"id"
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      delivery_address: {
        type: Sequelize.STRING
      },
      order_status: {
        type: Sequelize.BOOLEAN
      },
      order_date: {
        type: Sequelize.DATE
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};