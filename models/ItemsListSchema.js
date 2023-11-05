const database = require('../db/Connection');

const ProductAllShowSchema = new database.Schema({
    invoice: {
        type: String,
        trim: true,
    },
    paymentType: {
        type: String,
        trim: true,
        lowercase: true
    },
    status: {
        type: String,
        trim: true,
        lowercase: true
    },
    amount: {
        type: Number,
        trim: true,
    },
    datetime: {
        type: String,
        trim: true,
        lowercase: true
    }

}, { timestamps: true })
const ProductAllShowmodel = new database.model('All_Items_List', ProductAllShowSchema);
module.exports = ProductAllShowmodel;