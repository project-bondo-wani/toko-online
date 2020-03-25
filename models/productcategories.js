'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} =sequelize.sequelize

  class ProductCategories extends Model {}

  ProductCategories.init({
    category_name: DataTypes.STRING
  }, {
    sequelize
  })

  ProductCategories.associate = function(models) {
    // associations can be defined here
    ProductCategories.hasMany(models.Products)
  };
  return ProductCategories;
};