const { Collection, WishListItem, Product } = require("../models");

const collectionController = {
  async createCollection(req, res) {
    try {
      const { name } = req.body;
      const user_id = req.user.id;

      const collection = await Collection.create({
        name,
        user_id,
      });

      res.status(201).json({
        success: true,
        data: collection,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  async getCollections(req, res) {
    try {
      const user_id = req.user.id;

      const collections = await Collection.findAll({
        where: { user_id },
        include: [
          {
            model: WishListItem,
            include: [Product],
          },
        ],
      });

      res.json({
        success: true,
        data: collections,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  async updateCollection(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const user_id = req.user.id;

      const collection = await Collection.findOne({
        where: { id, user_id },
      });

      if (!collection) {
        return res.status(404).json({
          success: false,
          error: "Collection not found",
        });
      }

      collection.name = name;
      await collection.save();

      res.json({
        success: true,
        data: collection,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  async deleteCollection(req, res) {
    try {
      const { id } = req.params;
      const user_id = req.user.id;

      const collection = await Collection.findOne({
        where: { id, user_id },
      });

      if (!collection) {
        return res.status(404).json({
          success: false,
          error: "Collection not found",
        });
      }

      await collection.destroy();

      res.status(204).send();
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },
};

module.exports = collectionController;
