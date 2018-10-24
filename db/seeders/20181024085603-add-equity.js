module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Equities', [{
      symbol: 'AXISBANK',
      displayText: 'AXIS BANK',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      segmentId: 1,
    }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Equities', null, {}),
};
