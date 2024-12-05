const propuestaServices = require('../services/propuestaService');

// Crear una propuesta
async function create(req, res) {
  try {
    console.log('Datos recibidos en req.body:', req.body);
    const propuestaData = {
      titulo: req.body.titulo,
      area: req.body.area,
      informacion: req.body.informacion,
      imagen: req.file ? req.file.filename : null,
      disponibilidad: req.body.disponibilidad || 'Inmediata',
      experiencia: parseInt(req.body.experiencia, 10) || 1,
      jornada: req.body.jornada || 'Diurna',
    };

    // Validación de campos obligatorios
    if (!propuestaData.titulo || !propuestaData.area || !propuestaData.informacion) {
      return res.status(400).json({ error: 'Todos los campos obligatorios deben ser completados' });
    }

    console.log('Datos a guardar:', propuestaData);
    const propuesta = await propuestaServices.createPropuesta(propuestaData);
    res.status(201).json({
      message: "Propuesta creada con éxito",
      data: propuesta,
    });
  } catch (error) {
    console.error('Error al crear la propuesta:', error);
    res.status(500).json({ error: error.message });
  }
}

// Obtener todas las propuestas
async function getAll(req, res) {
  try {
    const propuestas = await propuestaServices.getAllPropuestas();
    res.status(200).json(propuestas);
  } catch (error) {
    console.error('Error al obtener las propuestas:', error);
    res.status(500).json({ error: 'Error al obtener las propuestas' });
  }
}

// Editar una propuesta
async function updatePropuesta(req, res) {
  try {
    const { id } = req.params;
    const propuestaData = {
      titulo: req.body.titulo || '',
      area: req.body.area || '',
      informacion: req.body.informacion || '',
      imagen: req.file ? req.file.originalname : req.body.imagen,
      disponibilidad: req.body.disponibilidad || 'Inmediata',
      experiencia: parseInt(req.body.experiencia, 10) || 1,
      jornada: req.body.jornada || 'Diurna',
    };

    console.log('Datos para actualizar la propuesta:', propuestaData);

    const propuesta = await propuestaServices.updatePropuesta(id, propuestaData);
    if (!propuesta) {
      return res.status(404).json({ error: 'Propuesta no encontrada' });
    }

    res.status(200).json({
      message: "Propuesta actualizada con éxito",
      data: propuesta,
    });
  } catch (error) {
    console.error('Error al actualizar la propuesta:', error);
    res.status(500).json({ error: error.message });
  }
}


// Eliminar una propuesta
async function deletePropuesta(req, res) {
  try {
    const { id } = req.params;
    console.log('ID de la propuesta a eliminar:', id);
    await propuestaServices.deletePropuesta(id);
    res.status(200).json({ message: 'Propuesta eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar la propuesta:', error);
    res.status(500).json({ error: error.message });
  }
}
async function getPropuestaById(req, res) {
  try {
    const { id } = req.params; // Obtiene el ID desde los parámetros de la URL
    const propuesta = await propuestaServices.getPropuestaById(id); // Llama al servicio para buscar la propuesta
    if (!propuesta) {
      return res.status(404).json({ error: 'Propuesta no encontrada' });
    }
    res.status(200).json(propuesta);
  } catch (error) {
    console.error('Error al obtener la propuesta:', error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  create,
  getAll,
  updatePropuesta,
  deletePropuesta,
  getPropuestaById,
};
