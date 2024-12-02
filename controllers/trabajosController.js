const { Trabajo } = require('../models');

// Obtener todos los trabajos
exports.getAllTrabajos = async (req, res) => {
  try {
    const trabajos = await Trabajo.findAll();
    res.json(trabajos);
  } catch (error) {
    res.status(500).send('Error al obtener los trabajos');
  }
};

// Obtener un trabajo por ID
exports.getTrabajoById = async (req, res) => {
  try {
    const trabajo = await Trabajo.findByPk(req.params.id);
    if (!trabajo) return res.status(404).send('Trabajo no encontrado');
    res.json(trabajo);
  } catch (error) {
    res.status(500).send('Error al obtener el trabajo');
  }
};

// Crear un nuevo trabajo
exports.createTrabajo = async (req, res) => {
  try {
    const { titulo, descripcion, tecnologias, fechaInicio, fechaFin } = req.body;
    const nuevoTrabajo = await Trabajo.create({ titulo, descripcion, tecnologias, fechaInicio, fechaFin });
    res.status(201).json(nuevoTrabajo);
  } catch (error) {
    res.status(500).send('Error al crear el trabajo');
  }
};
