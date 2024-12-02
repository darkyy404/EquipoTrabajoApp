module.exports = (sequelize, DataTypes) => {
  const Trabajo = sequelize.define('Trabajo', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    tecnologias: DataTypes.STRING,
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
  });

  Trabajo.associate = (models) => {
    Trabajo.belongsToMany(models.Miembro, {
      through: 'TrabajoMiembro',
      foreignKey: 'TrabajoId',
      otherKey: 'MiembroId',
    });
  };

  return Trabajo;
};
