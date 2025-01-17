const {
  Collection,
  CollectionItem,
  Product,
  Brand,
  HSNCode,
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
      where: { wishlist_id: req.params.wishlistId },
      include: [
        {
          model: Product,
          include: [Brand, HSNCode],
        },
      ],
    });
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addCollectionItem = async (req, res) => {
  try {
    const { product_id } = req.body;
    const collectionItem = await CollectionItem.create({
      collection_id: req.params.collectionId,
      product_id,
    });
    res.status(201).json(collectionItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
