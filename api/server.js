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
  process.env.DB_NAME || "wishlist_db",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);
// Add this with your other models
const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    // Add other user fields as needed
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other fields like email, etc.
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

const Wishlist = sequelize.define(
  "wishlists",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "My Wishlist",
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
User.hasOne(Wishlist, {
  foreignKey: "user_id",
});

Wishlist.belongsTo(User, {
  foreignKey: "user_id",
});

const Collection = sequelize.define(
  "collections",
  {
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
      references: {
        model: "wishlists",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

const CollectionItem = sequelize.define(
  "collection_items",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    collection_id: {
      type: DataTypes.INTEGER.UNSIGNED, // Made consistent with Collection.id
      allowNull: false,
      references: {
        model: "collections",
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
// Update the CollectionItem model to properly reference products
CollectionItem.belongsTo(Product, {
  foreignKey: "product_id",
});

Product.hasMany(CollectionItem, {
  foreignKey: "product_id",
});
// Define Associations
Wishlist.hasMany(Collection, {
  foreignKey: "wishlist_id",
  onDelete: "CASCADE",
});

Collection.belongsTo(Wishlist, {
  foreignKey: "wishlist_id",
});

Collection.hasMany(CollectionItem, {
  foreignKey: "collection_id",
  onDelete: "CASCADE",
});

CollectionItem.belongsTo(Collection, {
  foreignKey: "collection_id",
});

// API Routes
// Product Routes

// Create a new product
app.post("/api/products", async (req, res) => {
  try {
    const { name, description, price, image_url, stock } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      image_url,
      stock,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single product
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update product
app.put("/api/products/:id", async (req, res) => {
  try {
    const { name, description, price, image_url, stock } = req.body;
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.update({
      name,
      description,
      price,
      image_url,
      stock,
    });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Modify your existing collection item route to include product details
app.get("/api/wishlists/:wishlistId/collections", async (req, res) => {
  try {
    const collections = await Collection.findAll({
      where: { wishlist_id: req.params.wishlistId },
      include: [
        {
          model: CollectionItem,
          include: [Product], // Include product details
        },
      ],
    });
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({
      name,
      email,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Create or get wishlist for user
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

// Get user's wishlist with all collections
app.get("/api/wishlists/user/:userId", async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      where: { user_id: req.params.userId },
      include: [
        {
          model: Collection,
          include: [CollectionItem],
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

// Create a new collection in wishlist
app.post("/api/wishlists/:wishlistId/collections", async (req, res) => {
  try {
    const { name } = req.body;
    const collection = await Collection.create({
      name,
      wishlist_id: req.params.wishlistId,
    });
    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all collections in a wishlist
app.get("/api/wishlists/:wishlistId/collections", async (req, res) => {
  try {
    const collections = await Collection.findAll({
      where: { wishlist_id: req.params.wishlistId },
      include: [CollectionItem],
    });
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add product to collection
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

// Remove item from collection
app.delete("/api/collections/:collectionId/items/:itemId", async (req, res) => {
  try {
    const deleted = await CollectionItem.destroy({
      where: {
        collection_id: req.params.collectionId,
        id: req.params.itemId,
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
});

// Delete collection (and all its items)
app.delete("/api/collections/:id", async (req, res) => {
  try {
    const deleted = await Collection.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.json({ message: "Collection deleted" });
    } else {
      res.status(404).json({ message: "Collection not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update collection name
app.put("/api/collections/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const collection = await Collection.findByPk(req.params.id);
    if (collection) {
      await collection.update({ name });
      res.json(collection);
    } else {
      res.status(404).json({ message: "Collection not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

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
