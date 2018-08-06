module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Segments', [{
      symbol: 'NSE',
      fullName: 'National Stock Exchange',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      symbol: 'BSE',
      fullName: 'Bombay Stock Exchange',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Segments', null, {}),
};
