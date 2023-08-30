module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
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
    timestamps: false,
  }) 
  return Category;
};