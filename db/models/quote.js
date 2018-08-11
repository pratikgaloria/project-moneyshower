module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    timestamp: {
      type: DataTypes.DATE,
    },
    ltp: {
      type: DataTypes.DECIMAL(10, 2),
    },
    open: {
      type: DataTypes.DECIMAL(10, 2),
    },
    high: {
      type: DataTypes.DECIMAL(10, 2),
    },
    low: {
      type: DataTypes.DECIMAL(10, 2),
    },
    close: {
      type: DataTypes.DECIMAL(10, 2),
    },
  });

  Quote.associate = (models) => {
    Quote.belongsTo(models.Equity, {
      foreignKey: 'equityId',
      as: 'equities',
      onDelete: 'CASCADE',
    });
  };

  return Quote;
};
