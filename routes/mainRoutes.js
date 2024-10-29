const express = require('express');
const passport = require('passport');
const ensureAuthenticated = require('../config/auth'); // Asegúrate de que la ruta sea correcta

const router = express.Router();


router.get('/login', (req, res) => {
    res.render('login');
});


router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));


router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/login');
    });
});


router.get('/', ensureAuthenticated, (req, res) => {
    res.render('index',
        {
            title: 'NodeDrive',
        });
});

module.exports = router;
