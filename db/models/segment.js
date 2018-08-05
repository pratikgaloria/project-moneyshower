module.exports = (sequelize, DataTypes) => {
  const Segment = sequelize.define('Segment', {
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
    },
  });

  Segment.associate = (models) => {
    Segment.hasMany(models.Equity, {
      foreignKey: 'segmentId',
      as: 'equities',
    });
  };

  return Segment;
};
