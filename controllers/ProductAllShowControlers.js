const database = require('../models/ItemsListSchema');
const ProductAllShowControlers = async (req, res) => {
    try {
        const finddata = await database.find();
        res.status(200).send(finddata);
    } catch (error) {
        console.log('Some technical issue');
    }
}

module.exports = ProductAllShowControlers;