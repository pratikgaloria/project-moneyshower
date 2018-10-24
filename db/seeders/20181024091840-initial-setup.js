module.exports = {
  up: (queryInterface, Sequelize) => {
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
    }]);

    queryInterface.bulkInsert('Equities', [{
      symbol: 'AXISBANK',
      displayText: 'AXIS BANK',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

    queryInterface.bulkInsert('Quotes', [{
      ltp: 132.56,
      open: 124.08,
      high: 140.10,
      low: 118.91,
      close: 131.44,
      createdAt: new Date(),
      updatedAt: new Date(),
      equityId: 1,
    }]);

    const today = new Date();
    let yesterday = new Date();
    yesterday = new Date(yesterday.setDate(today.getDate() - 1));

    queryInterface.bulkInsert('MetadataDailies', [{
      span: 'PREV',
      timestamp: yesterday,
      high: 135.10,
      low: 123.88,
      close: 132.56,
      range: 12.22,
      createdAt: new Date(),
      updatedAt: new Date(),
      equityId: 1,
    }, {
      span: 'CURR',
      timestamp: today,
      high: 141.30,
      low: 138.21,
      close: 140.00,
      range: 3.09,
      createdAt: new Date(),
      updatedAt: new Date(),
      equityId: 1,
    }]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Segments', null, {});
    queryInterface.bulkDelete('Equities', null, {});
    queryInterface.bulkDelete('Quotes', null, {});
    queryInterface.bulkDelete('MetadataDailies', null, {});
  },
};
