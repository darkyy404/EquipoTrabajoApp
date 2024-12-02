const { Miembro } = require('../models');

// Obtener todos los miembros
exports.getAllMiembros = async (req, res) => {
  try {
    const miembros = await Miembro.findAll();
    res.json(miembros);
  } catch (error) {
    res.status(500).send('Error al obtener los miembros');
  }
};

// Obtener un miembro por ID
exports.getMiembroById = async (req, res) => {
  try {
    const miembro = await Miembro.findByPk(req.params.id);
    if (!miembro) return res.status(404).send('Miembro no encontrado');
    res.json(miembro);
  } catch (error) {
    res.status(500).send('Error al obtener el miembro');
  }
};

// Crear un nuevo miembro
exports.createMiembro = async (req, res) => {
  try {
    const { nombre, rol, experiencia, redesSociales } = req.body;
    const nuevoMiembro = await Miembro.create({ nombre, rol, experiencia, redesSociales });
    res.status(201).json(nuevoMiembro);
  } catch (error) {
    res.status(500).send('Error al crear el miembro');
  }
};

// Actualizar un miembro
exports.updateMiembro = async (req, res) => {
  try {
    const miembro = await Miembro.findByPk(req.params.id);
    if (!miembro) return res.status(404).send('Miembro no encontrado');

    const { nombre, rol, experiencia, redesSociales } = req.body;
    await miembro.update({ nombre, rol, experiencia, redesSociales });
    res.json(miembro);
  } catch (error) {
    res.status(500).send('Error al actualizar el miembro');
  }
};

// Eliminar un miembro
exports.deleteMiembro = async (req, res) => {
  try {
    const miembro = await Miembro.findByPk(req.params.id);
    if (!miembro) return res.status(404).send('Miembro no encontrado');

    await miembro.destroy();
    res.send('Miembro eliminado correctamente');
  } catch (error) {
    res.status(500).send('Error al eliminar el miembro');
  }
};
