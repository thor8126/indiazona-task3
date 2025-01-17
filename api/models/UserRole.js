const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("user_roles", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
  });
};
