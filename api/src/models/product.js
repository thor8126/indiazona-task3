const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      Product.hasOne(models.WishListItem);
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      brand_id: DataTypes.INTEGER,
      packed_weight: DataTypes.DECIMAL(10, 2),
      product_description: DataTypes.TEXT,
      thumbnail_image_url: DataTypes.STRING(255),
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      created_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      timestamps: false,
    }
  );

  return Product;
};
