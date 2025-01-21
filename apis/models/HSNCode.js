const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Brands = require("./Brands");

class HsnCodes extends Model {}

HsnCodes.init(
  {
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
  },
  {
    sequelize,
    modelName: "HsnCodes",
    tableName: "hsn_codes",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// Define associations
HsnCodes.belongsTo(Brands, { foreignKey: "brand_id" });
Brands.hasMany(HsnCodes, { foreignKey: "brand_id" });

module.exports = HsnCodes;
