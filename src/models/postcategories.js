'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const postCategories = sequelize.define('postCategories', {
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'blog_posts',
      key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
  },
  {
    underscored: true,
    tableName: 'posts_categories',
  })
  return postCategories;
};