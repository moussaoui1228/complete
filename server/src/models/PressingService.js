const mongoose = require('mongoose');

const PressingServiceSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    fee: { type: Number, required: true },
    yield_per_kg: { type: Number, required: true, default: 0.2 },
    active: { type: Boolean, default: true },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const PressingService = mongoose.model('PressingService', PressingServiceSchema);

module.exports = { PressingService };
