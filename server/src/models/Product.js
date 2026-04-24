const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price_per_liter: { type: Number, required: true },
        stock_liters: { type: Number, default: 0 },
        is_available: { type: Boolean, default: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };
