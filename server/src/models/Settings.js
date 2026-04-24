const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
    pressing_percentage_taken: { type: Number, required: true, default: 30 },
    updated_at: { type: Date, default: Date.now },
});

const Settings = mongoose.model('Settings', SettingsSchema);

module.exports = { Settings };
