const express = require("express");
const router = express.Router();
const collectionController = require("../controllers/collectionController");

router.post("/", collectionController.createCollection);
router.get(
  "/wishlists/:wishlistId",
  collectionController.getWishlistCollections
);
router.post("/:collectionId/items", collectionController.addCollectionItem);
router.delete(
  "/:collectionId/items/:productId",
  collectionController.removeCollectionItem
); 


module.exports = router;
