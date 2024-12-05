const postulacionesRepository = require ('../repositories/postulacionesRepository');

const getAllPostulaciones = async () => {
    return await postulacionesRepository.getAllPostulaciones();
};

const getAllPostulacionesById = async (id) => {
    return await postulacionesRepository.getAllPostulacionesById(id);
};

const createPostulacion = async (datosPostulacion) => {
    return await postulacionesRepository.createPostulacion(datosPostulacion);
};

const updatePostulacion = async (id, datosPostulacion) => {
    return await postulacionesRepository.updatePostulacion(id, datosPostulacion);
};

const deletePostulacionById = async (id) => {
    return await postulacionesRepository.deletePostulacionById(id);
};

module.exports = {
    getAllPostulaciones,
    getAllPostulacionesById, 
    createPostulacion,
    updatePostulacion,
    deletePostulacionById
}