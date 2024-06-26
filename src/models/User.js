const model = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
  }, {
    underscored: true,
    tableName: 'users',
    timestamps:false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'blogPosts' });
  };

  return User;
  };
module.exports = model;