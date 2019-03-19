'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    guid:  { type: DataTypes.STRING, primaryKey: true },
    isActive: DataTypes.BOOLEAN,
    price: DataTypes.STRING,
    company: DataTypes.STRING,
    about: DataTypes.STRING
  }, { timestamps: false, freezeTableName: true });
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
