const LocalStrategy = require('passport-local').Strategy;
const db = require('../db'); // Asegúrate de que esta ruta sea correcta

module.exports = function(passport) {
    passport.use(new LocalStrategy((username, password, done) => {
        // Aquí debes buscar al usuario en tu base de datos
        db.query('SELECT * FROM users WHERE user_name = ?', [username], (err, results) => {
            if (err) return done(err);
            if (!results.length) return done(null, false); // Usuario no encontrado

            const user = results[0];
            // Aquí deberías verificar la contraseña (usando bcrypt, por ejemplo)
            if (user.user_passwd !== password) return done(null, false); // Contraseña incorrecta

            return done(null, user); // Autenticación exitosa
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user.user_id); // Guardar el ID del usuario en la sesión
    });

    passport.deserializeUser((id, done) => {
        db.query('SELECT * FROM users WHERE user_id = ?', [id], (err, results) => {
            if (err) return done(err);
            done(null, results[0]); // Devolver el usuario encontrado
        });
    });
};
