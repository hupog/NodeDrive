// controllers/homeController.js

exports.renderHomePage = (req, res) => {
    res.render('index', { title: 'Mi Drive' }); // Renderiza index.ejs con el título
};
