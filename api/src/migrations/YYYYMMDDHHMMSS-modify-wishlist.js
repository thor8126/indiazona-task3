module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("wish_list", "collection_id", {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "collections",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addIndex("wish_list", ["collection_id"]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("wish_list", "collection_id");
  },
};
