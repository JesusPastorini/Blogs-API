module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id'
        }
      },
      categoryId: {
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
      timestamps: false,
    })

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
        models.BlogPost.belongsToMany(models.Category, {
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
      };

    return PostCategory;
  };