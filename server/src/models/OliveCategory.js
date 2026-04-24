const mongoose = require('mongoose');

const OliveCategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    price_per_liter: { type: Number, required: true },
    stock_liters: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const OliveCategory = mongoose.model('OliveCategory', OliveCategorySchema);

module.exports = { OliveCategory };
