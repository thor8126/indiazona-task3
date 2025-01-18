const {
  Wishlist,
  Collection,
  Product,
  Brands,
  HSNCodes,
} = require("../../models");

exports.createWishlist = async (req, res) => {
  try {
    const { user_id, name } = req.body;
    const [wishlist, created] = await Wishlist.findOrCreate({
      where: { user_id },
      defaults: { name: name || "My Wishlist" },
    });
    res.status(created ? 201 : 200).json(wishlist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      where: { user_id: req.params.userId },
      include: [
        {
          model: Collection,
          include: [
            {
              model: Product,
              include: [{ model: Brands }, { model: HSNCodes }],
            },
          ],
        },
      ],
    });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }
    res.json(wishlist);
  } catch (error) {
    console.error("Detailed error:", error);
    res.status(500).json({ message: error.message });
  }
};
