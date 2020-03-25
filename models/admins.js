'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize

  class Admins extends Model {}

  Admins.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    sequelize
  })

  Admins.associate = function(models) {
    // associations can be defined here
  };
  return Admins;
};