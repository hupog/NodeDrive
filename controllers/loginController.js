const passport = require('passport');

const loginController = {
    getLogin: (req, res) => {
        res.render('login');
    },

    postLogin: (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return next(err); // Manejo de errores
            }
            if (!user) {
                return res.redirect('/login'); // Redirige si no hay usuario
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err); // Manejo de errores
                }
                return res.redirect('/'); // Redirige a la página principal si la autenticación es exitosa
            });
        })(req, res, next); // Llama a la función authenticate
    },

    getLogout: (req, res) => {
        req.logout(err => {
            if (err) {
                return next(err); // Manejo de errores
            }
            res.redirect('/login'); // Redirige a la página de login después de cerrar sesión
        });
    },

    postLogout: (req, res, next) => {
        req.logout(err => {
            if (err) {
                return next(err); // Manejo de errores
            }
            res.redirect('/'); // Redirige a la página de login después de cerrar sesión
        });
    }
};

module.exports = loginController; // Asegúrate de que estás exportando correctamente
