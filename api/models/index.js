// Import Sequelize instance
const sequelize = require("../config/database");

// Import models
const User = require("./User");
const Product = require("./Product");
const HSNCodes = require("./HSNCode");
const Brands = require("./Brands");
const Wishlist = require("./Wishlist");
const Collection = require("./Collection");
const CollectionItem = require("./CollectionItem");
const UserRoles = require("./UserRole");

// User and UserRoles
UserRoles.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(UserRoles, { foreignKey: "role_id" });

// Product and Brands
Brands.hasMany(Product, { foreignKey: "brand_id" });
Product.belongsTo(Brands, { foreignKey: "brand_id" });

// Product and HSNCodes
HSNCodes.hasMany(Product, { foreignKey: "hsn_code_id" });
Product.belongsTo(HSNCodes, { foreignKey: "hsn_code_id" });

// Wishlist and User
User.hasOne(Wishlist, { foreignKey: "user_id", onDelete: "CASCADE" });
Wishlist.belongsTo(User, { foreignKey: "user_id" });

// Wishlist and Collection
Wishlist.hasMany(Collection, {
  foreignKey: "wishlist_id",
  onDelete: "CASCADE",
});
Collection.belongsTo(Wishlist, { foreignKey: "wishlist_id" });

// Collection and Product (Many-to-Many)
Collection.belongsToMany(Product, {
  through: CollectionItem,
  foreignKey: "collection_id",
});
Product.belongsToMany(Collection, {
  through: CollectionItem,
  foreignKey: "product_id",
});

// Export models and Sequelize instance
module.exports = {
  sequelize,
  User,
  Product,
  HSNCodes,
  Brands,
  Wishlist,
  Collection,
  CollectionItem,
  UserRoles,
};
