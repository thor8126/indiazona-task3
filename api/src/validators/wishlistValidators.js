const { body } = require("express-validator");

const addItemValidator = [
  body("product_id")
    .isInt({ min: 1 })
    .withMessage("Valid product ID is required"),
  body("collection_id")
    .isInt({ min: 1 })
    .withMessage("Valid collection ID is required"),
];

module.exports = {
  addItemValidator,
};
