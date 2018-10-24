module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Equities', [{
      symbol: 'AXISBANK',
      displayText: 'AXIS BANK',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Equities', null, {}),
};
