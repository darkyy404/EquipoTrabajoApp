const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión de Sequelize
const routes = require('./routes/index'); // Importa las rutas
const app = express();

app.use(express.json());

// Rutas principales
app.use('/api', routes);

// Inicia el servidor y la conexión a la base de datos
const PORT = process.env.PORT || 3306;
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
  })
  .catch((error) => console.error('Error al conectar a la base de datos:', error));
