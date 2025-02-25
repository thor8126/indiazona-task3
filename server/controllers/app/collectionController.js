const {
  Collection,
  CollectionItem,
  Product,
  Brands,
  HSNCodes,
} = require("../../models");

exports.createCollection = async (req, res) => {
  try {
    const { name, wishlist_id, description } = req.body;
    const collection = await Collection.create({
      name,
      wishlist_id,
      description,
    });
    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getWishlistCollections = async (req, res) => {
  try {
    // Get wishlist_id from body instead of URL params
    const { wishlist_id } = req.body;

    if (!wishlist_id) {
      return res.status(400).json({ message: "Wishlist ID is required." });
    }

    const collections = await Collection.findAll({
      where: { wishlist_id },
      include: [
        {
          model: Product,
          include: [{ model: Brands }, { model: HSNCodes }],
        },
      ],
    });

    if (!collections || collections.length === 0) {
      return res
        .status(404)
        .json({ message: "No collections found for this wishlist." });
    }

    res.status(200).json(collections);
  } catch (error) {
    console.error("Error fetching collections:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the collections." });
  }
};

exports.addCollectionItem = async (req, res) => {
  try {
    // Get both product_id and collection_id from body
    const { product_id, collection_id } = req.body;

    // Validate input data
    if (!product_id || !collection_id) {
      return res
        .status(400)
        .json({ message: "Product ID and Collection ID are required." });
    }

    // Check if the product exists
    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    // Check if the collection exists
    const collection = await Collection.findByPk(collection_id);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found." });
    }

    // Create a new collection item
    const collectionItem = await CollectionItem.create({
      collection_id,
      product_id,
    });

    // Respond with the created collection item
    res.status(201).json({
      message: "Product added to the collection successfully.",
      collectionItem,
    });
  } catch (error) {
    console.error("Error adding product to collection:", error);
    res.status(500).json({
      message: "An error occurred while adding the product to the collection.",
    });
  }
};

exports.removeCollectionItem = async (req, res) => {
  try {
    // Get collection_id and product_id from body
    const { collection_id, product_id } = req.body;

    if (!collection_id || !product_id) {
      return res.status(400).json({
        message: "Collection ID and Product ID are required.",
      });
    }

    const deleted = await CollectionItem.destroy({
      where: {
        collection_id,
        product_id,
      },
    });

    if (deleted) {
      res.json({ message: "Item removed from collection" });
    } else {
      res.status(404).json({ message: "Item not found in collection" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCollection = async (req, res) => {
  try {
    // Get collection_id from body
    const { collection_id } = req.body;

    if (!collection_id) {
      return res.status(400).json({ message: "Collection ID is required." });
    }

    // Check if collection exists
    const collection = await Collection.findByPk(collection_id);

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    // Delete the collection
    await collection.destroy();

    res.status(200).json({ message: "Collection deleted successfully" });
  } catch (error) {
    console.error("Error deleting collection:", error);
    res.status(500).json({ message: error.message });
  }
};
