'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  
  class Products extends Model {}

  Products.init({
    ProductCategoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize
  })

  Products.associate = function(models) {
    // associations can be defined here
    Products.belongsTo(models.ProductCategories)
    Products.belongsToMany(models.Customers,{
      through : "Orders",
      foreignKey: "ProductId"
    })
  };
  return Products;
};