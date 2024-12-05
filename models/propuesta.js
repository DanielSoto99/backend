const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexiondb');

const Propuesta = sequelize.define('Propuesta', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  informacion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING, // Almacena el nombre del archivo o URL de la imagen
    allowNull: true,
  },
  disponibilidad: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Inmediata', 'Diferida']], // Solo permite estas opciones
    },
  },
  experiencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Mínimo 1 año
      max: 4, // Máximo 4 años
    },
  },
  jornada: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Diurna', // Valor predeterminado
    validate: {
      isIn: [['Diurna', 'Nocturna', 'Mixta']],
    },
  },
}, {
  timestamps: false, // Desactivar los timestamps automáticos (createdAt, updatedAt)
  tableName: 'propuestas', // Nombre personalizado de la tabla
});

module.exports = Propuesta;