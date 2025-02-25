const express = require("express");
const router = express.Router();
const collectionController = require("../controllers/app/collectionController");

// Create collection (already using req.body)
router.post("/", collectionController.createCollection);

// Get collections by wishlist ID (changed from GET with params to POST with body)
router.post("/wishlists", collectionController.getWishlistCollections);

// Add item to collection (changed from URL param to completely from body)
router.post("/items/add", collectionController.addCollectionItem);

// Remove item from collection (changed from DELETE with params to POST with body)
router.post("/items/remove", collectionController.removeCollectionItem);

// Delete collection (changed from DELETE with params to POST with body)
router.post("/delete", collectionController.deleteCollection);

module.exports = router;
