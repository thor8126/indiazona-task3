const { Product, Brand, HSNCode } = require("../models");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Brand, HSNCode],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
