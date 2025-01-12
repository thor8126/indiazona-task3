const express = require("express");
const router = express.Router();
const collectionRoutes = require("./collection.routes");
const wishlistRoutes = require("./wishlist.routes");

router.use("/collections", collectionRoutes);
router.use("/wishlist", wishlistRoutes);

module.exports = router;
