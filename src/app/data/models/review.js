'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    guid: { type: DataTypes.STRING, primaryKey: true },
    productId: DataTypes.STRING,
    review: DataTypes.STRING
  }, { timestamps: false, freezeTableName: true });
  Review.associate = function (models) {
    // associations can be defined here
  };
  return Review;
};
