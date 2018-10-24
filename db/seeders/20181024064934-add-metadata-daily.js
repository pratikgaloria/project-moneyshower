module.exports = {
  up: (queryInterface, Sequelize) => {
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

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('MetadataDailies', null, {}),
};
