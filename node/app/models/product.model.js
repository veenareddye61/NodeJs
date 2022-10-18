const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    type:String,
    cost:String,
    quantity:String
});

module.exports = mongoose.model('Products',productSchema);