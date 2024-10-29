const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const infoController = {
    getInfo: (req, res) => {
        const readmePath = path.join(__dirname, '../README.md');

        fs.readFile(readmePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).send('Error al leer el README.md');
            }
            const htmlContent = marked(data);
            res.render('info', { content: htmlContent });
        });
    },
};

module.exports = infoController;
