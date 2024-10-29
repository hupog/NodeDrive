const indexController = {
    getIndex: (req, res) => {
        res.render('index', { title: "NodeDrive"});
    },
};

module.exports = indexController;
