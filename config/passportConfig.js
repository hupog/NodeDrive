const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('./db');


module.exports = function(passport) {
    passport.use(new LocalStrategy((username, password, done) => {
        db.query('SELECT * FROM users WHERE user_name = ?', [username], (err, results) => {
            if (err) return done(err);
            if (!results.length) return done(null, false);

            const user = results[0];

            bcrypt.compare(password, user.user_passwd, (err, isMatch) => {
                if (err) return done(err);
                if (!isMatch) return done(null, false);

                return done(null, user);
            });
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user.user_id);
    });

    passport.deserializeUser((id, done) => {
        db.query('SELECT * FROM users WHERE user_id = ?', [id], (err, results) => {
            if (err) return done(err);
            done(null, results[0]);
        });
    });
};
