module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Quotes', [{
      ltp: 132.56,
      open: 124.08,
      high: 140.10,
      low: 118.91,
      close: 131.44,
      createdAt: new Date(),
      updatedAt: new Date(),
      equityId: 1,
    }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Quotes', null, {}),
};
