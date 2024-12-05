// config/config.js
require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'hola', // Asegúrate de usar la variable de entorno
};