'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class ProductCategories extends Model {}

  ProductCategories.init({
    category_name:{
      type:DataTypes.STRING,
      validate:{
        NotEmpty(){
          if (this.category_name == "") {
            throw new Error('nama kategori tidak boleh kosong')
          }
        }
      } 
    } 
  }, {
    sequelize
  })

  ProductCategories.associate = function(models) {
    // associations can be defined here
    ProductCategories.hasMany(models.Products)
  };
  return ProductCategories;
};