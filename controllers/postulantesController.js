const express = require('express');
const router = express.Router();
const postulantesService = require('../services/postulantesServices');
const upload = require('../middleware/fileUpload'); // Middleware de Multer
const fs = require('fs');
const path = require('path');

// Crear un postulante
// Crear un postulante
router.post('/create', upload.single('cv'), async (req, res) => {
  try {
    // Extraer datos del formulario
    const { nombre, apellido, email, rut, edad, comuna, genero, telefono, area } = req.body;

    // Verificar si todos los campos requeridos están presentes
    if (!nombre || !apellido || !email || !rut || !edad || !comuna || !genero || !telefono || !area || !req.file) {
      return res.status(400).json({ error: 'Faltan datos en el formulario o archivo' });
    }

    // Ruta del archivo subido
    const cvFilePath = req.file.path; // Multer proporciona la ruta del archivo

    // Crear objeto de postulante con los datos
    const postulanteData = {
      nombre,
      apellido,
      email,
      rut,
      edad,
      comuna,
      genero,
      telefono,
      area,  // Aquí agregamos el campo 'area'
      cv: cvFilePath, // Ruta del archivo subido
    };

    // Llamar al servicio para crear el postulante
    const postulante = await postulantesService.createPostulante(postulanteData);

    // Respuesta exitosa
    res.status(201).json({
      message: 'Postulante creado con éxito',
      data: postulante,
    });
  } catch (error) {
    console.error('Error al crear postulante:', error);
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los postulantes
router.get('/getAll', async (req, res) => {
  try {
    const postulantes = await postulantesService.getAllPostulantes();
    res.json(postulantes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Obtener un postulante por ID
router.get('/getById/:id', async (req, res) => {
  try {
    const postulante = await postulantesService.getAllPostulantesById(req.params.id);
    if (!postulante) {
      return res.status(404).json({ message: 'Postulante no encontrado' });
    }

    // Usar la variable de entorno BASE_URL o 'http://localhost:3000' por defecto
    const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

    // Obtener solo el nombre del archivo usando path.basename
    const fileName = path.basename(postulante.cv);  // Extrae el nombre del archivo sin la ruta

    // Actualizar la URL del CV con la ruta correcta
    postulante.cv = `${BASE_URL}/uploads/${fileName}`;

    res.json(postulante);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// Actualizar un postulante
router.put('/update/:id', async (req, res) => {
  try {
    const postulante = await postulantesService.updatePostulante(req.params.id, req.body);
    if (!postulante) {
      return res.status(404).json({ message: 'Postulante no encontrado' });
    }
    res.json({
      message: 'Postulante actualizado con éxito',
      data: postulante,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Eliminar un postulante
router.delete('/delete/:id', async (req, res) => {
  try {
    const result = await postulantesService.deletePostulanteById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Postulante no encontrado' });
    }
    res.json({ message: 'Postulante eliminado con éxito' });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get('/getByArea/:area', async (req, res) => {
  try {
    const area = req.params.area;

    // Verificar que el área no esté vacía
    if (!area) {
      return res.status(400).json({ error: 'El área es obligatoria' });
    }

    // Obtener postulantes filtrados por área
    const postulantes = await postulantesService.getPostulantesByArea(area);

    if (!postulantes || postulantes.length === 0) {
      return res.status(404).json({ message: 'No se encontraron postulantes para esta área' });
    }

    res.json(postulantes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
