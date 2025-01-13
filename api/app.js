const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Configuration
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

// Models Definition
const UserRole = sequelize.define("user_roles", {
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

const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
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
    allowNull: true,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(191),
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

const HSNCode = sequelize.define("hsn_codes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

const Brand = sequelize.define("brands", {
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

const Product = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false,
  },
  brand_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  hsn_code_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  gst: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  stock: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

const Wishlist = sequelize.define("wishlists", {
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

const Collection = sequelize.define("collections", {
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
});

const CollectionItem = sequelize.define("collection_items", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  collection_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
});

// Define Relationships
UserRole.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(UserRole, { foreignKey: "role_id" });

Brand.hasMany(Product, { foreignKey: "brand_id" });
Product.belongsTo(Brand, { foreignKey: "brand_id" });

HSNCode.hasMany(Product, { foreignKey: "hsn_code_id" });
Product.belongsTo(HSNCode, { foreignKey: "hsn_code_id" });

User.hasOne(Wishlist, { foreignKey: "user_id", onDelete: "CASCADE" });
Wishlist.belongsTo(User, { foreignKey: "user_id" });

Wishlist.hasMany(Collection, {
  foreignKey: "wishlist_id",
  onDelete: "CASCADE",
});
Collection.belongsTo(Wishlist, { foreignKey: "wishlist_id" });

Collection.belongsToMany(Product, {
  through: CollectionItem,
  foreignKey: "collection_id",
});
Product.belongsToMany(Collection, {
  through: CollectionItem,
  foreignKey: "product_id",
});

// API Routes

// User Routes
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, phone, password, role_id } = req.body;
    const user = await User.create({
      name,
      email,
      phone,
      password,
      role_id: role_id || 1, // Default role
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.findAll({
      include: [UserRole],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Product Routes
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Brand, HSNCode],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Wishlist Routes
app.post("/api/wishlists", async (req, res) => {
  try {
    const { user_id, name } = req.body;
    const [wishlist, created] = await Wishlist.findOrCreate({
      where: { user_id },
      defaults: { name: name || "My Wishlist" },
    });
    res.status(created ? 201 : 200).json(wishlist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/wishlists/user/:userId", async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      where: { user_id: req.params.userId },
      include: [
        {
          model: Collection,
          include: [
            {
              model: Product,
              include: [Brand, HSNCode],
            },
          ],
        },
      ],
    });
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Collection Routes
app.post("/api/collections", async (req, res) => {
  try {
    const { name, wishlist_id, description } = req.body;
    const collection = await Collection.create({
      name,
      wishlist_id,
      description,
    });
    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/wishlists/:wishlistId/collections", async (req, res) => {
  try {
    const collections = await Collection.findAll({
      where: { wishlist_id: req.params.wishlistId },
      include: [
        {
          model: Product,
          include: [Brand, HSNCode],
        },
      ],
    });
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Collection Items Routes
app.post("/api/collections/:collectionId/items", async (req, res) => {
  try {
    const { product_id } = req.body;
    const collectionItem = await CollectionItem.create({
      collection_id: req.params.collectionId,
      product_id,
    });
    res.status(201).json(collectionItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete(
  "/api/collections/:collectionId/items/:productId",
  async (req, res) => {
    try {
      const deleted = await CollectionItem.destroy({
        where: {
          collection_id: req.params.collectionId,
          product_id: req.params.productId,
        },
      });
      if (deleted) {
        res.json({ message: "Item removed from collection" });
      } else {
        res.status(404).json({ message: "Item not found in collection" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    // Sync models with alter:true to update existing tables
    await sequelize.sync({ alter: true });
    console.log("Models synchronized");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup error:", error);
  }
};

startServer();
