const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexiondb');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true // Valida que no esté vacío
        }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true // Valida que no esté vacío
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'admin', // Asignar un rol por defecto
        validate: {
            isIn: [['admin', 'superadmin']], // Valida que el rol sea uno de los valores permitidos
        }
    },
}, {
    timestamps: false, // Desactiva los timestamps
    tableName: 'login', // Nombre personalizado de la tabla
    hooks: {
        // Hook para encriptar la contraseña antes de guardar
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
        beforeUpdate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
});

module.exports = User;
