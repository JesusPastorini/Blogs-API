'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('blogPosts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    published: {
      type: DataTypes.DATE
    },
    updated: {
      type: DataTypes.DATE
    },
  },
  {
    underscored: true,
    tableName: 'blog_posts',
  })
  return blogPosts;
};