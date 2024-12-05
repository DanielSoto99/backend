const userRepository = require('../repositories/userRepository');

const getAllUsers = async () => {
    return await userRepository.getAllUsers();
};

const getUserById = async (id) => {
    return await userRepository.getUserById(id);
};

const createUser = async (userData) => {
    return await userRepository.createUser(userData);
};

const updateUser = async (id, userData) => {
    return await userRepository.updateUser(id, userData);
};

const deleteUserById = async (id) => {
    return await userRepository.deleteUserById(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById
};