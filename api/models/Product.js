const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
// const Items = require("./Item");
const Brands = require("./Brands");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   index: true,
    // },
    // user_address_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // item_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    // slug: {
    //   type: DataTypes.STRING(200),
    //   allowNull: false,
    // },
    brand_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      index: true,
    },
    is_made_in_india: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    is_hand_made: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    is_cash_on_delivery: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    is_customizable_product: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    delivery_by: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1, // 1- Shipping by IndiaZona, 0- Shipping by Vendor
    },
    return_policy_id: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    exchange_policy_id: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    hsn_code_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      index: true,
    },
    gst: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    tag_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    iz_commission: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    no_return_discount: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    insurance_premium: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    variant_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
    },
    minimum_purchase_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    low_stock_quantity_warning: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    product_specification: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    thumbnail_image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pdf_specification_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    video_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
    },
    status: {
      type: DataTypes.ENUM("0", "1", "2"),
      allowNull: false, // Set to true if this column can be null
      defaultValue: "0", // Optional default value
    },
  },
  {
    tableName: "products",
    timestamps: true, // Disable Sequelize's automatic timestamps
    createdAt: "created_on",
    updatedAt: "updated_on",
  }
);

Product.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Product, { foreignKey: "user_id" });

// Product.belongsTo(Items, { foreignKey: "item_id" });
// Items.hasOne(Product, { foreignKey: "item_id" });

Product.belongsTo(Brands, { foreignKey: "brand_id" });
Brands.hasOne(Product, { foreignKey: "brand_id" });

module.exports = Product;
