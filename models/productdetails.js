module.exports = (sequelize, DataTypes) => {
  const ProductDetails = sequelize.define('ProductDetails', {
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    price: DataTypes.FLOAT,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    upc: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        ProductDetails.hasMany(models.CartWProducts, {
          foreignKey: 'productID',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return ProductDetails;
};
