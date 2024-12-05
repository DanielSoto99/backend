const Vacantes = require ("../models/Vacantes")



const getAllVacantes = async () => {
  try {
    return await Vacantes.findAll();
  } catch (error) {
    throw new Error(`Error al obtener las vacantes: ${error.message}`);
  }
};

const getAllVacantesById = async (id) => {
  try {
    return await Vacantes.findOne({ where: { id } });
  } catch (error) {
    throw new Error(`Error al obtener vacantes por ID: ${error.message}`);
  }
};

const createVacante = async (datosVacantes) => {
  try {
    return await Vacantes.create(datosVacantes);
  } catch (error) {
    throw new Error(`Error al crear una nueva vacante: ${error.message}`);
  }
};


const updateVacante = async (id, datosVacante) => {
  try {
    await Vacantes.update(datosVacante, { where: { id } });
    return await getAllVacantesById(id);
  } catch (error) {
    throw new Error(`Error al actualizar la vacante: ${error.message}`);
  }
};



const deleteVacanteById = async (id) => {
  try {
    return await Vacantes.destroy({ where: { id } });
  } catch (error) {
    throw new Error(`Error al eliminar la vacante: ${error.message}`);
  }
};

module.exports = {
    getAllVacantes,
    getAllVacantesById,
    createVacante,
    updateVacante,
    deleteVacanteById,
  };