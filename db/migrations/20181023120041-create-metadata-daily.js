module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('MetadataDailies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      span: {
        type: Sequelize.ENUM,
        values: ['CURR', 'PREV'],
        allowNull: false,
      },
      timestamp: {
        type: Sequelize.DATE,
      },
      high: {
        type: Sequelize.DECIMAL,
      },
      low: {
        type: Sequelize.DECIMAL,
      },
      close: {
        type: Sequelize.DECIMAL,
      },
      range: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('MetadataDailies'),
};
