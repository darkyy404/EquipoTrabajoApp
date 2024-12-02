const express = require('express');
const trabajosRoutes = require('./trabajos.js');
const miembrosRoutes = require('./miembros');
const contactoRoutes = require('./contacto');
const router = express.Router();

router.use('/trabajos', trabajosRoutes);
router.use('/miembros', miembrosRoutes);
router.use('/contacto', contactoRoutes);

module.exports = router;
