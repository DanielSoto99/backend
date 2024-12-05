const express = require("express");
const router = express.Router();
const postulacionesService = require("../services/postulacionesServices");

// Crear una postulación
router.post("/create", async (req, res) => {
  try {
    const postulacion = await postulacionesService.createPostulacion(req.body);
    res.status(201).json({
      message: "Postulación creada con éxito",
      data: postulacion,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Obtener todas las postulaciones
router.get("/getAll", async (req, res) => {
  try {
    const postulaciones = await postulacionesService.getAllPostulaciones();
    res.json(postulaciones);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Obtener una postulación por ID
router.get("/getById/:id", async (req, res) => {
  try {
    const postulacion = await postulacionesService.getAllPostulacionesById(
      req.params.id
    );
    if (!postulacion) {
      return res.status(404).json({ message: "Postulación no encontrada" });
    }
    res.json(postulacion);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Actualizar una postulación
router.put("/update/:id", async (req, res) => {
  try {
    const postulacion = await postulacionesService.updatePostulacion(
      req.params.id,
      req.body
    );
    if (!postulacion) {
      return res.status(404).json({ message: "Postulación no encontrada" });
    }
    res.json({
      message: "Postulación actualizada con éxito",
      data: postulacion,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Eliminar una postulación
router.delete("/delete/:id", async (req, res) => {
  try {
    const result = await postulacionesService.deletePostulacionById(
      req.params.id
    );
    if (!result) {
      return res.status(404).json({ message: "Postulación no encontrada" });
    }
    res.json({ message: "Postulación eliminada con éxito" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
