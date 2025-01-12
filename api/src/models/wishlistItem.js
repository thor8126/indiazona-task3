const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class WishListItem extends Model {
    static associate(models) {
      // Specify the foreign key names in the belongsTo associations
      WishListItem.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      WishListItem.belongsTo(models.Collection, {
        foreignKey: "collection_id",
      });
      WishListItem.belongsTo(models.Product, {
        foreignKey: "product_id",
      });
    }
  }
  WishListItem.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
      },
      collection_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "WishListItem",
      tableName: "wish_list",
      timestamps: false,
    }
  );
  return WishListItem;
};
