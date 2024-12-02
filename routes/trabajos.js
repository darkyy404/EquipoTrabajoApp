const express = require('express');
const { getAllTrabajos, getTrabajoById, createTrabajo } = require('../controllers/trabajosController');
const router = express.Router();

// Rutas para Trabajos
router.get('/', getAllTrabajos);
router.get('/:id', getTrabajoById);
router.post('/', createTrabajo);

module.exports = router;
