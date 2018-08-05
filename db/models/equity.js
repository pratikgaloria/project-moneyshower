module.exports = (sequelize, DataTypes) => {
  const Equity = sequelize.define('Equity', {
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });

  Equity.associate = (models) => {
    Equity.belongsTo(models.Segment, {
      foreignKey: 'segmentId',
      as: 'segments',
      onDelete: 'CASCADE',
    });
    Equity.belongsToMany(models.Watchlist, {
      through: 'WatchlistEquity',
      as: 'watchlists',
      foreignKey: 'watchlistId',
    });
  };

  return Equity;
};
