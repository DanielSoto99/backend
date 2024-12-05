const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Ajusta la ruta si es necesario

// Controlador para manejar el login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar el usuario por el nombre de usuario
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
        }

        // Verificar la contraseña con bcrypt
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
        }

        // Generar un token JWT
        const payload = {
            id: user.id,
            username: user.username,
            role: user.role // Incluir el rol del usuario
        };

        // Crear un token con un secreto (tu_secreto debe ser único y seguro)
        const token = jwt.sign(payload, 'tu_secreto', { expiresIn: '1h' });

        // Devolver el token y el rol al cliente
        res.json({ token, role: user.role });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Controlador para manejar el registro
exports.register = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        const newUser = await User.create({ username, password, role });

        // Enviar respuesta con el nuevo usuario creado
        res.status(201).json({
            message: 'Usuario creado exitosamente',
            user: {
                id: newUser.id,
                username: newUser.username,
                role: newUser.role
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};
