// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { User } = require('../models/user');
// const { jwtSecret } = require('../config/config'); // Importa el JWT_SECRET desde la configuración

// // Función para registrar un usuario
// const registerUser = async (username, password, role) => {
//   const hashedPassword = await bcrypt.hash(password, 10); // Hashea la contraseña
//   const newUser = await User.create({ username, password: hashedPassword, role });
//   return newUser;
// };

// // Función para verificar las credenciales y generar el JWT
// const loginUser = async (username, password) => {
//   const user = await User.findOne({ where: { username } });

//   if (!user) throw new Error('Usuario no encontrado');

//   // Verifica la contraseña usando bcrypt
//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if (!isPasswordValid) throw new Error('Contraseña incorrecta');

//   // Genera el JWT para el usuario autenticado
//   const token = jwt.sign({ userId: user.id, role: user.role }, jwtSecret, {
//     expiresIn: '1h', // El token expirará en 1 hora
//   });

//   return { token, role: user.role };
// };

// module.exports = { registerUser, loginUser };
