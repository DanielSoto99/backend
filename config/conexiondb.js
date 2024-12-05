//conexion para la base de datos
const { Sequelize } = require('sequelize');
 const { dbName,dbPort,dbPassword,dbUsername } = require('../config/config');

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: 'localhost',
  port: dbPort,
  dialect: 'postgres',
});

module.exports = sequelize;
