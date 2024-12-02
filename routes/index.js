const express = require('express');
const trabajosRoutes = require('./trabajos');
const miembrosRoutes = require('./miembros'); // Importa las rutas de miembros
const contactoRoutes = require('./contacto');
const router = express.Router();

router.use('/trabajos', trabajosRoutes);
router.use('/miembros', miembrosRoutes); // Usa las rutas de miembros
router.use('/contacto', contactoRoutes);

module.exports = router;
