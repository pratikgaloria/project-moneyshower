module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Equities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      symbol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      displayText: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      segmentId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Segments',
          key: 'id',
          as: 'segmentId',
        },
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Equities'),
};
