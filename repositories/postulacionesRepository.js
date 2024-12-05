const Postulaciones = require("../models/Postulaciones");

const getAllPostulaciones = async () => {
  try {
    return await Postulaciones.findAll();
  } catch (error) {
    throw new Error(`Error al obtener las postulaciones: ${error.message}`);
  }
};

const getAllPostulacionesById = async (id) => {
  try {
    return await Postulaciones.findOne({ where: { id } });
  } catch (error) {
    throw new Error(`Error al obtener la postulación por ID: ${error.message}`);
  }
};

const createPostulacion = async (datosPostulacion) => {
  try {
    return await Postulaciones.create(datosPostulacion);
  } catch (error) {
    throw new Error(`Error al crear una nueva postulación: ${error.message}`);
  }
};

const updatePostulacion = async (id, datosPostulacion) => {
  try {
    await Postulaciones.update(datosPostulacion, { where: { id } });
    return await getAllPostulacionesById(id);
  } catch (error) {
    throw new Error(`Error al actualizar la postulación: ${error.message}`);
  }
};

const deletePostulacionById = async (id) => {
  try {
    return await Postulaciones.destroy({ where: { id } });
  } catch (error) {
    throw new Error(`Error al eliminar la postulación: ${error.message}`);
  }
};

module.exports = {
  getAllPostulaciones,
  getAllPostulacionesById,
  createPostulacion,
  updatePostulacion,
  deletePostulacionById,
};

