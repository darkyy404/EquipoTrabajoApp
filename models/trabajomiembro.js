module.exports = (sequelize, DataTypes) => {
  const TrabajoMiembro = sequelize.define('TrabajoMiembro', {
    TrabajoId: DataTypes.INTEGER,
    MiembroId: DataTypes.INTEGER,
  });

  return TrabajoMiembro;
};
