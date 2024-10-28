const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController'); // Importar el controlador

// Ruta principal que usa el controlador para renderizar la página de inicio
router.get('/', homeController.renderHomePage);

module.exports = router;
