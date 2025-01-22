const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER || "root",
  process.env.DB_PASS || "admin",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    },
  }
);

module.exports = sequelize;
