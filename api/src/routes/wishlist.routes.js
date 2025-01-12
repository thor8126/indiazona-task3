const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController");
const { addItemValidator } = require("../validators/wishlistValidators");
const validate = require("../middleware/validate");
const auth = require("../middleware/auth");

router.post(
  "/items",
  auth,
  addItemValidator,
  validate,
  wishlistController.addItem
);

router.get("/items/:collection_id", auth, wishlistController.getItems);

router.get("/items", auth, wishlistController.getAllItems);

router.delete("/items/:id", auth, wishlistController.deleteItem);

module.exports = router;
