// const Users = require("../models/users");

// const getAllUsers = async () => {
//   try {
//     return await Users.findAll();
//   } catch (error) {
//     throw new Error(`Error al obtener usuarios: ${error.message}`);
//   }
// };

// const getUserById = async (id) => {
//   try {
//     return await Users.findOne({ where: { id } });
//   } catch (error) {
//     throw new Error(`Error al obtener usuario por ID: ${error.message}`);
//   }
// };

// const createUser = async (userData) => {
//   try {
//     return await Users.create(userData);
//   } catch (error) {
//     throw new Error(`Este usuario ya existe: ${error.message}`);
//   }
// };

// const updateUser = async (id, userData) => {
//   try {
//     await Users.update(userData, { where: { id } });
//     return await getUserById(id);
//   } catch (error) {
//     throw new Error(`Error al actualizar usuario: ${error.message}`);
//   }
// };

// const deleteUserById = async (id) => {
//   try {
//     return await Users.destroy({ where: { id } });
//   } catch (error) {
//     throw new Error(`Error al eliminar usuario: ${error.message}`);
//   }
// };

// module.exports = {
//   getAllUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUserById,
// };
