const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
    date: { 
        type: Date, 
        required: true, 
        unique: true,
        index: true
    },
    is_blocked: { 
        type: Boolean, 
        default: true 
    },
    reason: { 
        type: String, 
        default: "" 
    },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: false }
});

const Availability = mongoose.model('Availability', AvailabilitySchema);

module.exports = { Availability };
