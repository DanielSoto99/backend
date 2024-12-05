const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexiondb');

const AdminRH = sequelize.define('AdminRH', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  telefono: {
    type: DataTypes.STRING(20),
  },
},{
  timestamps: false, // Configuración correcta: desactiva los timestamps
  tableName: 'adminRH', // Nombre personalizado de la tabla
});



module.exports = AdminRH;
