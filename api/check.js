// Import Sequelize instance
const sequelize = require("../config/database");

// Import models
const User = require("./User");
const UserPersonalDetails = require("./UserPersonalDetails");
const UserAddress = require("./UserAddress");
const City = require("./City");
const State = require("./State");
const UserGstDetails = require("./UserGstDetails");
const UserBusinessDetails = require("./UserBusinessDetails");
const UserOtherPersonDetails = require("./UserOtherPersonDetails");
const UserBusinessType = require("./UserBusinessType");
const UserReferral = require("./UserReferral");
const UserEsignDetails = require("./UserEsignDetails");
const UserBankDetails = require("./UserBankDetails");
const UserApproval = require("./UserApproval");
const UserPlatformRatings = require("./UserPlatformRatings");
const Product = require("./Product");
const ProductCustomization = require("./ProductCustomization");
const ItemCategory = require("./ItemCategory");
const ItemSubCategory = require("./ItemSubCategory");
const Items = require("./Item");
const HSNCode = require("./HSNCode");
const LogisticRates = require("./LogisticRates");
const Brands = require("./Brands");
const MultiAttributes = require("./MultiAttributes");
const OtherProductAttributes = require("./OtherProductAttributes");

const ProductGalleryImages = require("./ProductGalleryImages");

const VendorApiValidations = require("./VendorApiValidations");
const ProductVariants = require("./ProductVariants");
const ProductVariantMeasurements = require("./ProductVariantMeasurements");
const NimbusToken = require("./NimbusToken");

const Orders = require("./Orders");
const ProductOrders = require("./ProductOrders");

const Review = require("./Review");
const ReviewMedia = require("./ReviewMedia");

const Wishlist = require("./Wishlist");
const Collection = require("./Collection");
const CollectionItem = require("./CollectionItem");

// Define associations
User.hasOne(UserPersonalDetails, {
  foreignKey: "user_id",
  as: "personalDetails",
});
UserPersonalDetails.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasOne(VendorApiValidations, {
  foreignKey: "user_id",
  as: "vendorApiValidations",
});
VendorApiValidations.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasOne(UserBusinessDetails, {
  foreignKey: "user_id",
  as: "businessDetails",
});
UserBusinessDetails.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasOne(UserAddress, { foreignKey: "user_id", as: "addressDetails" });
UserAddress.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasOne(UserBankDetails, { foreignKey: "user_id", as: "bankDetails" });
UserBankDetails.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasOne(UserGstDetails, { foreignKey: "user_id", as: "gstDetails" });
UserGstDetails.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasOne(UserOtherPersonDetails, {
  foreignKey: "user_id",
  as: "otherPersonDetails",
});
UserOtherPersonDetails.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasOne(UserReferral, { foreignKey: "user_id", as: "referralDetails" });
UserReferral.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.hasOne(UserEsignDetails, { foreignKey: "user_id", as: "esignDetails" });
UserEsignDetails.belongsTo(User, { foreignKey: "user_id", as: "user" });

UserBusinessDetails.belongsTo(UserBusinessType, {
  foreignKey: "business_type_id",
  as: "businessType",
});
UserBusinessType.hasMany(UserBusinessDetails, {
  foreignKey: "business_type_id",
  as: "businessDetails",
});

State.hasMany(City, { foreignKey: "state_id" });
City.belongsTo(State, { foreignKey: "state_id" });

UserAddress.belongsTo(State, { foreignKey: "state_id", as: "state" });
UserAddress.belongsTo(City, { foreignKey: "city_id", as: "city" });

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

// Export models and Sequelize instance
module.exports = {
  sequelize,
  User,
  UserPersonalDetails,
  UserAddress,
  State,
  City,
  UserGstDetails,
  UserBankDetails,
  UserBusinessDetails,
  UserOtherPersonDetails,
  UserBusinessType,
  UserReferral,
  UserEsignDetails,
  UserApproval,
  UserPlatformRatings,
  Product,
  ProductCustomization,
  ItemCategory,
  ItemSubCategory,
  Items,
  HSNCode,
  LogisticRates,
  Brands,
  MultiAttributes,
  OtherProductAttributes,
  ProductGalleryImages,
  VendorApiValidations,
  ProductVariants,
  ProductVariantMeasurements,
  NimbusToken,
  Review,
  ReviewMedia,
  Orders,
  ProductOrders,
  Wishlist,
  Collection,
  CollectionItem,
};
