module.exports = (sequelize, DataTypes) => {
  const WatchlistEquity = sequelize.define('WatchlistEquity', {
    watchlistId: DataTypes.INTEGER,
    equityId: DataTypes.INTEGER,
  });

  WatchlistEquity.associate = (models) => {
    // associations can be defined here
  };

  return WatchlistEquity;
};
