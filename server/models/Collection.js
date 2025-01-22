const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Collection extends Model {}

Collection.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    wishlist_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Collection",
    tableName: "collections",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Collection;
