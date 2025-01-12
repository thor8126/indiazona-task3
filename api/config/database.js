const { Sequelize } = require("sequelize");

// Create a Sequelize instance and configure the connection
const sequelize = new Sequelize({
  dialect: "mysql", // Using MySQL
  host: "localhost", // Your MySQL host, usually localhost
  username: "root", // Your MySQL username
  password: "admin", // Your MySQL password
  database: "wishlist_db", // Your MySQL database name
  logging: false, // Disable logging SQL queries to console
  define: {
    timestamps: true, // Automatically add createdAt and updatedAt fields
    underscored: true, // Use snake_case for column names in DB
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
