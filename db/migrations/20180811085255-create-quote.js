module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Quotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timestamp: {
        type: Sequelize.DATE,
      },
      ltp: {
        type: Sequelize.DECIMAL
      },
      open: {
        type: Sequelize.DECIMAL
      },
      high: {
        type: Sequelize.DECIMAL
      },
      low: {
        type: Sequelize.DECIMAL
      },
      close: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Quotes'),
};
