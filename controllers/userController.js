const express = require("express");
const router = express.Router();
const userServices = require("../services/userServices");
const bcrypt = require("bcrypt"); // Usamos require para consistencia

// Crear un usuario
router.post("/create", async (req, res) => {
  try {
    // Encriptar la contraseña
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de rondas de salt

    // Crear usuario con la contraseña encriptada
    const user = await userServices.createUser({
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Usuario creado con éxito",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Obtener todos los usuarios
router.get("/getAll", async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Obtener un usuario por ID
router.get("/getById/:id", async (req, res) => {
  try {
    const user = await userServices.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Actualizar un usuario
router.put("/update/:id", async (req, res) => {
  try {
    const user = await userServices.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({
      message: "Usuario actualizado con éxito",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Eliminar un usuario
router.delete("/delete/:id", async (req, res) => {
  try {
    const result = await userServices.deleteUserById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
