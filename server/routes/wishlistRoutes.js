const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/app/wishlistController");
const collectionController = require("../controllers/app/collectionController");

// Create wishlist (already using req.body)
router.post("/", wishlistController.createWishlist);

// Get user wishlist (changed from GET with params to POST with body)
router.post("/user", wishlistController.getUserWishlist);

// Get wishlist collections (changed from GET with params to POST with body)
// This assumes you've updated collectionController.getWishlistCollections as in previous examples
router.post("/collections", collectionController.getWishlistCollections);

module.exports = router;
