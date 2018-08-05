module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Watchlist.associate = (models) => {
    Watchlist.belongsToMany(models.Equity, {
      through: 'WatchlistEquity',
      as: 'equities',
      foreignKey: 'equityId',
    });
  };

  return Watchlist;
};
