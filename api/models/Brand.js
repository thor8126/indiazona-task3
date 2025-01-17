const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("brands", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
  });
};
