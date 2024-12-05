// config/config.js
require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'hola',
   dbName : process.env.DB_NAME,
  dbPort : process.env.DB_PORT,
  dbPassword : process.env.DB_PASSWORD ,// Asegúrate de usar la variable de entorno
  dbUsername : process.env.DB_USERNAME
};
