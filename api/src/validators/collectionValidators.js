const { body } = require("express-validator");

const createCollectionValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Collection name is required")
    .isLength({ min: 1, max: 191 })
    .withMessage("Collection name must be between 1 and 191 characters"),
];

const updateCollectionValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Collection name is required")
    .isLength({ min: 1, max: 191 })
    .withMessage("Collection name must be between 1 and 191 characters"),
];

module.exports = {
  createCollectionValidator,
  updateCollectionValidator,
};
