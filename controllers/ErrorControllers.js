const ErrorControllers = (req, res) => {
    res.status(404).send('Ooops Page Not Found');
}

module.exports = ErrorControllers;