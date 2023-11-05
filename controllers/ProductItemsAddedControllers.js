const database = require('../models/ItemsListSchema');
const ProductItemsAddedControllers = async (req, res) => {
    try {
        const id = req.params.id;
        const { invoice, paymentType, status, amount, datetime } = req.body;
        if (invoice && paymentType && status && amount && datetime) {
            const insertdata = await database.updateOne({ _id: id }, { invoice, paymentType, status, amount, datetime });
            res.status(200).send('Items Updates Changes  Sucessfully');
        } else {
            res.status('All Field Require');
        }


    } catch (error) {
        console.log('Some technical issue');
    }
}

module.exports = ProductItemsAddedControllers;