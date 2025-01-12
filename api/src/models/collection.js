const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Collection extends Model {
    // static associate(models) {
    //   Collection.belongsTo(models.User);
    //   Collection.hasMany(models.WishListItem);
    // }
    static associate(models) {
      Collection.belongsTo(models.User, {
        foreignKey: "user_id", // Use the existing user_id column
      });
      Collection.hasMany(models.WishListItem);
    }
  }

  Collection.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Collection",
      tableName: "collections",
      timestamps: false,
    }
  );

  return Collection;
};
