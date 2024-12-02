const express = require('express');
const {
  getAllMiembros,
  getMiembroById,
  createMiembro,
  updateMiembro,
  deleteMiembro,
} = require('../controllers/miembrosController');
const router = express.Router();

// Rutas para Miembros
router.get('/', getAllMiembros); // Obtener todos los miembros
router.get('/:id', getMiembroById); // Obtener un miembro por ID
router.post('/', createMiembro); // Crear un nuevo miembro
router.put('/:id', updateMiembro); // Actualizar un miembro
router.delete('/:id', deleteMiembro); // Eliminar un miembro

module.exports = router;
