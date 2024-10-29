const passport = require('passport');

const loginController = {
    getLogin: (req, res) => {
        res.render('login');
    },

    postLogin: (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('/login');
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                return res.redirect('/');
            });
        })(req, res, next);
    },

    getLogout: (req, res) => {
        req.logout(err => {
            if (err) {
                return next(err);
            }
            res.redirect('/login');
        });
    },

    postLogout: (req, res, next) => {
        req.logout(err => {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    }
};

module.exports = loginController;
