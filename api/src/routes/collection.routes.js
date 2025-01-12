const express = require("express");
const router = express.Router();
const collectionController = require("../controllers/collectionController");
const {
  createCollectionValidator,
  updateCollectionValidator,
} = require("../validators/collectionValidators");
const validate = require("../middleware/validate");
const auth = require("../middleware/auth");

router.post(
  "/",
  auth,
  createCollectionValidator,
  validate,
  collectionController.createCollection
);

router.get("/", auth, collectionController.getCollections);

router.put(
  "/:id",
  auth,
  updateCollectionValidator,
  validate,
  collectionController.updateCollection
);

router.delete("/:id", auth, collectionController.deleteCollection);

module.exports = router;
