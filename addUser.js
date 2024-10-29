const bcrypt = require('bcrypt');
const db = require('./config/db');

const password = '1234'; // La contraseña que deseas usar

// Encriptar la contraseña
bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;

    // Ahora inserta hashedPassword en tu base de datos como un string
    const query = 'INSERT INTO users (user_name, user_passwd, user_permit, user_storage, user_max_storage) VALUES (?, ?, ?, ?, ?)';
    const values = ['superadmin', hashedPassword, 1, 0, 1000];

    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Error al insertar el superadmin:', err);
        } else {
            console.log('Superadmin añadido con éxito:', results);
        }
    });
});
