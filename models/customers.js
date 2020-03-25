'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Seqeulize

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