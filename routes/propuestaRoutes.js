const express = require('express');
const multer = require('multer');
const router = express.Router();
const propuestaController = require('../controllers/propuestaController');

// Configuración de multer para manejar archivos
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/create', upload.single('imagen'), propuestaController.create);
router.get('/getAll', propuestaController.getAll);
router.put('/editar/:id', upload.single('imagen'), propuestaController.updatePropuesta);
router.delete('/eliminar/:id', propuestaController.deletePropuesta);
router.get('/getById/:id', propuestaController.getPropuestaById);
module.exports = router;