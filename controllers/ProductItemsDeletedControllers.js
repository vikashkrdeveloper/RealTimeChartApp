const database = require('../models/ItemsListSchema');

const ProductItemsDeletedControllers = async (req, res) => {
    try {
        const id = req.params.id;
        await database.deleteOne({ _id: id });
        res.status(200).send('Items Deleted Sucessfully');
    }
    catch (error) {
        res.status(400).send('Items Not deleted Some technical issue');
    }
}

module.exports = ProductItemsDeletedControllers;