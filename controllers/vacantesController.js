const express = require("express");
const router = express.Router();
const vacantesServices = require("../services/vacantesServices");

// Crear una vacante
router.post("/create", async (req, res) => {
  try {
    const vacante = await vacantesServices.createVacante(req.body);
    res.status(201).json({
      message: "Vacante creada con éxito",
      data: vacante,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Obtener todas las vacantes
router.get("/getAll", async (req, res) => {
  try {
    const vacantes = await vacantesServices.getAllVacantes();
    res.json(vacantes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Obtener una vacante por ID
router.get("/getById/:id", async (req, res) => {
  try {
    const vacante = await vacantesServices.getAllVacantesById(req.params.id);
    if (!vacante) {
      return res.status(404).json({ message: "Vacante no encontrada" });
    }
    res.json(vacante);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Actualizar una vacante
router.put("/update/:id", async (req, res) => {
  try {
    const vacante = await vacantesServices.updateVacante(
      req.params.id,
      req.body
    );
    if (!vacante) {
      return res.status(404).json({ message: "Vacante no encontrada" });
    }
    res.json({
      message: "Vacante actualizada con éxito",
      data: vacante,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Eliminar una vacante
router.delete("/delete/:id", async (req, res) => {
  try {
    const result = await vacantesServices.deleteVacanteById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Vacante no encontrada" });
    }
    res.json({ message: "Vacante eliminada con éxito" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
