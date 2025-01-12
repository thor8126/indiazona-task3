const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const routes = require("./routes");
const { sequelize } = require("./models");
const jwt = require("jsonwebtoken");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());

// app.use(cors({
//   origin: 'http://your-frontend-domain'
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// testing route
app.post("/api/test-token", (req, res) => {
  const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET);
  res.json({ token });
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Something went wrong!",
  });
});

// Database connection and server startup
const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = app;
