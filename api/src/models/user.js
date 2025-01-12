const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Collection);
      User.hasMany(models.WishListItem);
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      role_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(191),
        unique: true,
      },
      phone: DataTypes.STRING(20),
      password: DataTypes.STRING(191),
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      email_verified_at: DataTypes.DATE,
      phone_verified_at: DataTypes.DATE,
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: false,
    }
  );

  return User;
};
