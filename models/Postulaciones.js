const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexiondb');
const Vacantes = require('./Vacantes');
const Postulantes = require('./Postulantes');

const Postulaciones = sequelize.define('Postulaciones', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  vacante_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Vacantes,
      key: 'id',
    },
  },
  postulante_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Postulantes,
      key: 'id',
    },
  },
  fecha_postulacion: {
    type: DataTypes.DATE,
  },
  estado: {
    type: DataTypes.ENUM('Pendiente', 'Aceptado', 'Rechazado'),
    defaultValue: 'Pendiente',
  },
},{
  timestamps: false, // Configuración correcta: desactiva los timestamps
  tableName: 'postulaciones', // Nombre personalizado de la tabla
});

module.exports = Postulaciones;
