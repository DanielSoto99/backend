const express = require('express');
const authController = require('../controllers/authController'); // Ajusta según la ruta de tu controlador

const router = express.Router();

// Ruta de login
router.post('/login', authController.login);

router.post('/register', authController.register);

module.exports = router;
