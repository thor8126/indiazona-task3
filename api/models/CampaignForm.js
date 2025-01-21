const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class CampaignForm extends Model {}

CampaignForm.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobile: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
    business_type: {
      type: DataTypes.ENUM(
        "Aspiring Entrepreneur Without a Defined Plan",
        "Entrepreneur with an Idea but Seeking Launch Assistance",
        "Existing Entrepreneur Aiming to Scale Up"
      ),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    campaign_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Apni Dukaan, Apni Pehchaan",
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "CampaignForm",
    tableName: "campaign_forms",
    timestamps: false,
  }
);

module.exports = CampaignForm;
