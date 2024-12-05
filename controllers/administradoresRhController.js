const express = require('express');
const router = express.Router();
const administradoresRhServices = require('../services/administradoresRhServices');

// Obtener todos los administradores
router.get('/getAll', async (req, res) => {
  try {
    const administradores = await administradoresRhServices.getAllAdministradores();
    res.json(administradores);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Obtener un administrador por ID
router.get('/getById/:id', async (req, res) => {
  try {
    const administrador = await administradoresRhServices.getAllAdministradoresById(req.params.id);
    if (!administrador) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }
    res.json(administrador);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Crear un administrador
router.post('/create', async (req, res) => {
  try {
    const administrador = await administradoresRhServices.createAdministrador(req.body);
    res.status(201).json({
      message: 'Administrador creado con éxito',
      data: administrador,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Actualizar un administrador
router.put('/update/:id', async (req, res) => {
  try {
    const administrador = await administradoresRhServices.updateAdministrador(req.params.id, req.body);
    if (!administrador) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }
    res.json({
      message: 'Administrador actualizado con éxito',
      data: administrador,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Eliminar un administrador
router.delete('/delete/:id', async (req, res) => {
  try {
    const result = await administradoresRhServices.deleteAdministradorById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }
    res.json({ message: 'Administrador eliminado con éxito' });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;