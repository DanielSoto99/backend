const Propuesta = require('../models/propuesta');

class PropuestaRepository {
  // Crear una nueva propuesta
  async crearPropuesta(data) {
    try {
      const propuesta = await Propuesta.create(data);
      return propuesta;
    } catch (error) {
      throw new Error('Error al crear la propuesta');
    }
  }

  // Obtener todas las propuestas
  async obtenerPropuestas() {
    try {
      const propuestas = await Propuesta.findAll();
      return propuestas;
    } catch (error) {
      throw new Error('Error al obtener las propuestas');
    }
  }

  // Obtener una propuesta por ID
  async obtenerPropuestaPorId(id) {
    try {
      const propuesta = await Propuesta.findByPk(id);
      return propuesta;
    } catch (error) {
      throw new Error('Error al obtener la propuesta');
    }
  }

  // Eliminar una propuesta
  async eliminarPropuesta(id) {
    try {
      const propuesta = await Propuesta.destroy({
        where: { id }
      });
      return propuesta;
    } catch (error) {
      throw new Error('Error al eliminar la propuesta');
    }
  }

  // Actualizar una propuesta
  async actualizarPropuesta(id, data) {
    try {
      const propuesta = await Propuesta.update(data, {
        where: { id }
      });
      return propuesta;
    } catch (error) {
      throw new Error('Error al actualizar la propuesta');
    }
  }
}

module.exports = new PropuestaRepository();
