'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    guid:  { type: DataTypes.STRING, primaryKey: true },
    age: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, { timestamps: false, freezeTableName: true });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
