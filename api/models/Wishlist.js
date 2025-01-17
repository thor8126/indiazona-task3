const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("wishlists", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "My Wishlist",
    },
  });
};
