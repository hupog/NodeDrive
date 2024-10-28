const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); // Establece EJS como motor de plantillas
app.set('views', path.join(__dirname, 'views')); // Carpeta para tus plantillas


dotenv.config();

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database.');
});

// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});
