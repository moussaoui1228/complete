const mongoose = require('mongoose');

const ShippingRateSchema = new mongoose.Schema({
    wilaya: { type: String, required: true, unique: true },
    wilaya_code: { type: Number, required: true, unique: true },
    price: { type: Number, required: true },
});

const ShippingRate = mongoose.model('ShippingRate', ShippingRateSchema);

module.exports = { ShippingRate };
