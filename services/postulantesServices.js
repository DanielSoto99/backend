const postulantesRepository = require ('../repositories/postulantesRepository');


const getAllPostulantes = async () => {
    return await postulantesRepository.getAllPostulantes();
  };
  
  const getAllPostulantesById = async (id) => {
    return await postulantesRepository.getAllPostulantesById(id);
  };
  
  const createPostulante = async (datosPostulante) => {
    return await postulantesRepository.createPostulante(datosPostulante);
  };
  
  const updatePostulante = async (id, datosPostulante) => {
    return await postulantesRepository.updatePostulante(id, datosPostulante);
  };
  
  const deletePostulanteById = async (id) => {
    return await postulantesRepository.deletePostulanteById(id);
  };

  const getPostulantesByArea = async (area) => {
    return await postulantesRepository.getPostulantesByArea(area);
  };

module.exports = {
    getAllPostulantes,
    getAllPostulantesById, 
    createPostulante,
    updatePostulante,
    deletePostulanteById,
    getPostulantesByArea,
}