'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class Customers extends Model {}

  Customers.init({
    full_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeValidate: (customer, options) => {
        customer.full_name= `${customer.first_name} ${customer.last_name}`
      }
    },
    sequelize
  })

  Customers.associate = function(models) {
    // associations can be defined here
    Customers.belongsToMany(models.Products,{
      through : "Orders",
      foreignKey: "CustomerId"
    })
  };
  return Customers;
};