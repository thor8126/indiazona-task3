const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class UserRoles extends Model {}

UserRoles.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UserRoles",
    tableName: "user_roles",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = UserRoles;
