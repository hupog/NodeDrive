const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
require('./config/passportConfig')(passport);
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

dotenv.config();

const app=express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


const mainRoutes = require('./routes/mainRoutes');

app.use('/', mainRoutes);

app.listen(port, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});
