'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
  },
  {
    underscored: true,
    tableName: 'categories',
  }) 
  return categories;
};