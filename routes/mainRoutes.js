const express = require('express');
const ensureAuthenticated = require('../config/auth');

const router = express.Router();


const loginController = require('../controllers/loginController');
router.get('/login', loginController.getLogin);
router.get('/logout', loginController.getLogout);
router.post('/login', loginController.postLogin);
router.post('/logout', loginController.postLogout);

const indexController = require('../controllers/indexController');
router.get('/', indexController.getIndex);

const infoController = require('../controllers/infoController');
router.get('/info', infoController.getInfo);

module.exports = router;
