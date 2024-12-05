const administradoresRhRepository = require ('../repositories/administradoresRhRepository')

const getAllAdministradores = async () => {
    return await administradoresRhRepository.getAllAdministradores();
};

const getAllAdministradoresById = async (id) => {
    return await administradoresRhRepository.getAllAdministradoresById(id);
};

const createAdministrador = async (datosAdministrador) => {
    return await administradoresRhRepository.createAdministrador(datosAdministrador);
};

const updateAdministrador = async (id, datosAdministrador) => {
    return await administradoresRhRepository.updateAdministrador(id, datosAdministrador);
};

const deleteAdministradorById = async (id) => {
    return await administradoresRhRepository.deleteAdministradorById(id);
};

module.exports = {
    getAllAdministradores,
    getAllAdministradoresById, 
    createAdministrador,
    updateAdministrador,
    deleteAdministradorById
}