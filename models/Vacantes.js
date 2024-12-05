const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexiondb');

const Vacantes = sequelize.define('Vacantes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  banner_va: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  requisitos: {
    type: DataTypes.TEXT,
  },
  fecha_publicacion: {
    type: DataTypes.DATE,
  },
},{
  timestamps: false, // Configuración correcta: desactiva los timestamps
  tableName: 'vacantes', // Nombre personalizado de la tabla
});

module.exports = Vacantes;


