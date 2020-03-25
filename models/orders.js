'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} =sequelize.Sequelize

  class Orders extends Model {}

  Orders.init({
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    delivery_address: DataTypes.STRING,
    order_status: DataTypes.BOOLEAN,
    order_date: DataTypes.DATE
  }, {
    sequelize
  })

  Orders.associate = function(models) {
    // associations can be defined here
  };
  return Orders;
};