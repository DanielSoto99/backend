const vacantesRepository = require ('../repositories/vacantesRepository');


const getAllVacantes = async () => {
    return await vacantesRepository.getAllVacantes();
};

const getAllVacantesById = async (id) => {
    return await vacantesRepository.getAllVacantesById(id);
};

const createVacante = async (datosVavante) => {
    return await vacantesRepository.createVacante(datosVavante);
};

const updateVacante = async (id, datosVavante) => {
    return await vacantesRepository.updateVacante(id, datosVavante);
};

const deleteVacanteById = async (id) => {
    return await vacantesRepository.deleteVacanteById(id);
};

module.exports = {
    getAllVacantes,
    getAllVacantesById, 
    createVacante,
    updateVacante,
    deleteVacanteById
}