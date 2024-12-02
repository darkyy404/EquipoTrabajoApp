module.exports = (sequelize, DataTypes) => {
  const Contacto = sequelize.define('Contacto', {
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    redesSociales: DataTypes.JSON,
  });

  return Contacto;
};
