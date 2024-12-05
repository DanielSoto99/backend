const administradoresRh = require("../models/AdministradoresRh");

const getAllAdministradores = async () => {
  try {
    return await administradoresRh.findAll();
  } catch (error) {
    throw new Error(`Error al obtener los administradores: ${error.message}`);
  }
};

const getAllAdministradoresById = async (id) => {
  try {
    return await administradoresRh.findOne({ where: { id } });
  } catch (error) {
    throw new Error(`Error al obtener el administrador por ID: ${error.message}`);
  }
};

const createAdministrador = async (datosAdministrador) => {
  try {
    return await administradoresRh.create(datosAdministrador);
  } catch (error) {
    throw new Error(`Error al crear un nuevo administrador: ${error.message}`);
  }
};

const updateAdministrador = async (id, datosAdministrador) => {
  try {
    await administradoresRh.update(datosAdministrador, { where: { id } });
    return await getAllAdministradoresById(id);
  } catch (error) {
    throw new Error(`Error al actualizar el administrador: ${error.message}`);
  }
};

const deleteAdministradorById = async (id) => {
  try {
    return await administradoresRh.destroy({ where: { id } });
  } catch (error) {
    throw new Error(`Error al eliminar el administrador: ${error.message}`);
  }
};

module.exports = {
  getAllAdministradores,
  getAllAdministradoresById,
  createAdministrador,
  updateAdministrador,
  deleteAdministradorById,
};
