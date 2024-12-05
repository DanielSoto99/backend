const Postulantes = require("../models/Postulantes");



const getAllPostulantes = async () => {
  try {
    return await Postulantes.findAll();
  } catch (error) {
    throw new Error(`error al obtener postulantes ${error.message}`);
  }
};
//cambios de finById - findOne
const getAllPostulantesById = async (id) => {
  try {
    return await Postulantes.findOne({ where: { id } });
  } catch (error) {
    throw new Error(`Error al obtener postulante por ID: ${error.message}`);
  }
};

//cambios de create
const createPostulante = async (datosPostulante) => {
  try {
    return await Postulantes.create(datosPostulante);
  } catch (error) {
    throw new Error(`Error al crear postulante: ${error.message}`);
  }
};
//cambios de update
const updatePostulante = async (id, datosPostulante) => {
  try {
    await Postulantes.update(datosPostulante, { where: { id } });
    return await getAllPostulantesById(id);
  } catch (error) {
    throw new Error(`Error al actualizar postulante: ${error.message}`);
  }
};

//cambios de delete por destroy
const deletePostulanteById = async (id) => {
  try {
    return await Postulantes.destroy({ where: { id } });
  } catch (error) {
    throw new Error(`Error al eliminar postulante: ${error.message}`);
  }
};

const getPostulantesByArea = async (area) => {
  try {
    return await Postulantes.findAll({
      where: { area },
    });
  } catch (error) {
    throw new Error(`Error al obtener postulantes por área: ${error.message}`);
  }
};

module.exports = {
  getAllPostulantes,
  getAllPostulantesById,
  createPostulante,
  updatePostulante,
  deletePostulanteById,
  getPostulantesByArea,
};


