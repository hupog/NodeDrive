const express = require('express');
const passport = require('passport');
const ensureAuthenticated = require('../middlewares/auth'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para mostrar el formulario de login
router.get('/login', (req, res) => {
    res.render('login'); // Renderiza una vista de login
});

// Ruta para manejar el login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/', // Redirige a la página principal al loguearse
    failureRedirect: '/login', // Redirige al login si hay un error
    failureFlash: true // Puedes habilitar mensajes de error con connect-flash
}));

// Ruta para manejar el logout
router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/login');
    });
});

// Ruta protegida para la página de inicio
router.get('/', ensureAuthenticated, (req, res) => {
    res.render('index', { title: 'Mi Drive' }); // Renderiza index.ejs con el título
});

module.exports = router;
