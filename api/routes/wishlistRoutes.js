const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/app/wishlistController");
const collectionController = require("../controllers/app/collectionController");

router.post("/", wishlistController.createWishlist);
router.get("/user/:userId", wishlistController.getUserWishlist);
router.get(
  "/:wishlistId/collections",
  collectionController.getWishlistCollections
);

module.exports = router;
