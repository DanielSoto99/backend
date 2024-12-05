const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
    const token = req.header('x-auth-token'); // Asegúrate de que el token esté en el header 'x-auth-token'

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token, 'tu_secreto');
        req.user = decoded; // Guardamos el usuario decodificado en la request
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token no válido' });
    }
};

module.exports = verifyToken;
