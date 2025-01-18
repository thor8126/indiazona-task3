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
    const collections = await Collection.findAll({
      where: { wishlist_id: req.params.wishlistId }, // Match the wishlist ID to fetch collections
      include: [
        {
          model: Product, // Include Products associated with the Collection
          include: [
            { model: Brands }, // Corrected to match the imported model
            { model: HSNCodes }, // Corrected to match the imported model
          ],
        },
      ],
    });

    // Handle the case where no collections are found
    if (!collections || collections.length === 0) {
      return res
        .status(404)
        .json({ message: "No collections found for this wishlist." });
    }

    // Respond with the fetched collections
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
    const { product_id } = req.body;
    const { collectionId } = req.params;

    // Validate input data
    if (!product_id || !collectionId) {
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
    const collection = await Collection.findByPk(collectionId);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found." });
    }

    // Create a new collection item
    const collectionItem = await CollectionItem.create({
      collection_id: collectionId,
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
    const deleted = await CollectionItem.destroy({
      where: {
        collection_id: req.params.collectionId,
        product_id: req.params.productId,
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
