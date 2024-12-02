module.exports = (sequelize, DataTypes) => {
  const Miembro = sequelize.define('Miembro', {
    nombre: DataTypes.STRING,
    rol: DataTypes.STRING,
    experiencia: DataTypes.TEXT,
    redesSociales: DataTypes.JSON,
  });

  Miembro.associate = (models) => {
    Miembro.belongsToMany(models.Trabajo, {
      through: 'TrabajoMiembro',
      foreignKey: 'MiembroId',
      otherKey: 'TrabajoId',
    });
  };

  return Miembro;
};
