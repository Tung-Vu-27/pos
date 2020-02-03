const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
    salesID: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Sale = mongoose.model('Sale', SaleSchema);
module.exports = Sale;