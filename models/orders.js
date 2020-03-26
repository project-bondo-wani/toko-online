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
    hooks: {
      beforeCreate: (order, options) => {
        order.order_status = false
        order.order_date = new Date()
      }
    },
    sequelize
  })

  Orders.associate = function(models) {
    // associations can be defined here
    Orders.belongsTo(models.Customers,  {foreignKey: 'CustomerId'})
    Orders.belongsTo(models.Products, {foreignKey: 'ProductId'})
  };
  return Orders;
};