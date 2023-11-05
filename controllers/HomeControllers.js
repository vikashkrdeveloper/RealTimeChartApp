const path = require('path');
const HomeControllers = (req, res) => {
    res.status(200).send('Home Page');
}

module.exports = HomeControllers;
