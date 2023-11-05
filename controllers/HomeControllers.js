const path = require('path');
const HomeControllers = (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
}

module.exports = HomeControllers;