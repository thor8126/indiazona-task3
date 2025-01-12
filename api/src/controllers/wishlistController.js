const { WishListItem, Product, Collection } = require("../models");

const wishlistController = {
  async addItem(req, res) {
    try {
      const { product_id, collection_id } = req.body;
      const user_id = req.user.id;

      // Verify collection belongs to user
      const collection = await Collection.findOne({
        where: { id: collection_id, user_id },
      });

      if (!collection) {
        return res.status(404).json({
          success: false,
          error: "Collection not found",
        });
      }

      const item = await WishListItem.create({
        user_id,
        product_id,
        collection_id,
      });

      const itemWithProduct = await WishListItem.findOne({
        where: { id: item.id },
        include: [Product],
      });

      res.status(201).json({
        success: true,
        data: itemWithProduct,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  async getItems(req, res) {
    try {
      const { collection_id } = req.params;
      const user_id = req.user.id;

      const collection = await Collection.findOne({
        where: { id: collection_id, user_id },
      });

      if (!collection) {
        return res.status(404).json({
          success: false,
          error: "Collection not found",
        });
      }

      const items = await WishListItem.findAll({
        where: { collection_id },
        include: [Product],
      });

      res.json({
        success: true,
        data: items,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  async getAllItems(req, res) {
    try {
      const user_id = req.user.id;

      const items = await WishListItem.findAll({
        where: { user_id },
        include: [Product, Collection],
      });

      res.json({
        success: true,
        data: items,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  async deleteItem(req, res) {
    try {
      const { id } = req.params;
      const user_id = req.user.id;

      const item = await WishListItem.findOne({
        where: { id, user_id },
      });

      if (!item) {
        return res.status(404).json({
          success: false,
          error: "Item not found",
        });
      }

      await item.destroy();

      res.status(204).send();
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },
};

module.exports = wishlistController;
