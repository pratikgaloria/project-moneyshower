module.exports = (sequelize, DataTypes) => {
  const MetadataDaily = sequelize.define('MetadataDaily', {
    span: {
      type: DataTypes.ENUM,
      values: ['CURR', 'PREV'],
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
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
    range: {
      type: DataTypes.DECIMAL(10, 2),
    },
  });

  MetadataDaily.associate = (models) => {
    // associations can be defined here
  };

  return MetadataDaily;
};
