const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexiondb');

const Postulantes = sequelize.define('Postulantes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  cv: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rut: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  comuna: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  area: {  // Aquí agregamos el campo 'area'
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Desactiva los timestamps
  tableName: 'postulantes', // Nombre personalizado de la tabla
});

module.exports = Postulantes;