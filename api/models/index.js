const { Sequelize } = require("sequelize");
require("dotenv").config();

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

const UserRole = require("./UserRole")(sequelize);
const User = require("./User")(sequelize);
const HSNCode = require("./HSNCode")(sequelize);
const Brand = require("./Brand")(sequelize);
const Product = require("./Product")(sequelize);
const Wishlist = require("./Wishlist")(sequelize);
const Collection = require("./Collection")(sequelize);
const CollectionItem = require("./CollectionItem")(sequelize);

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

module.exports = {
  sequelize,
  UserRole,
  User,
  HSNCode,
  Brand,
  Product,
  Wishlist,
  Collection,
  CollectionItem,
};
