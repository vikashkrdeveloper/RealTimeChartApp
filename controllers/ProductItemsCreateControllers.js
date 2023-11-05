const database = require('../models/ItemsListSchema');

const ProductItemsCreateControllers = async (req, res) => {
    try {
        const { invoice, paymentType, status, amount, datetime } = req.body;
        if (invoice && paymentType && status && amount && datetime) {
            // const finddata = database.findOne({ invoice });
            // if (finddata) {
            //     res.status(401).send('Invoice Number Already Exists');
            // } else {
                const insertdata = new database({ invoice, paymentType, status, amount, datetime });
                await insertdata.save();
                res.status(200).send('Items Added Sucessfully');
            // }
        } else {
            res.status(500).send('All Field Require');
        }
    }
    catch (error) {
        console.log('Some technical issue');
    }
}

module.exports = ProductItemsCreateControllers;