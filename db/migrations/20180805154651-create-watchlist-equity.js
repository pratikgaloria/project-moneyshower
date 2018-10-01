module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('WatchlistEquities', {
      watchlistId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Watchlists',
          key: 'id',
          as: 'watchlistId',
        },
      },
      equityId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Equities',
          key: 'id',
          as: 'equityId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('WatchlistEquities'),
};
