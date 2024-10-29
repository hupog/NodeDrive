const express = require('express');
const ensureAuthenticated = require('../config/auth'); // Asegúrate de que la ruta sea correcta

const router = express.Router();


const loginController = require('../controllers/loginController');
router.get('/login', loginController.getLogin);
router.get('/logout', loginController.getLogout);
router.post('/logout', loginController.postLogin);
router.post('/logout', loginController.postLogout);

const indexController = require('../controllers/indexController');
router.get('/', ensureAuthenticated, indexController.getIndex);

const infoController = require('../controllers/infoController');
router.get('/info', infoController.getInfo);

module.exports = router;
