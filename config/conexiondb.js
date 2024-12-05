//conexion para la base de datos
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proyecto', 'root', '123456', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
});

module.exports = sequelize;
