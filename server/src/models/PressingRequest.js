const mongoose = require('mongoose');

const PressingRequestSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    olive_quantity_kg: { type: Number, required: true },
    yield: {
        liters_per_kg: { type: Number, required: true },
        produced_oil_liters: { type: Number, required: true },
    },
    payment: {
        type: { type: String, enum: ['money', 'olives'], required: true },
        pressing_price_per_kg: { type: Number },
        percentage_taken: { type: Number },
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected', 'completed'],
        default: 'pending',
    },
    bring_olives_date: { type: Date },
    collect_oil_date: { type: Date },
    owner_notes: { type: String, default: "" },
    tracking_code: { type: String, unique: true, sparse: true },
    is_archived: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const PressingRequest = mongoose.model('PressingRequest', PressingRequestSchema);

module.exports = { PressingRequest };
