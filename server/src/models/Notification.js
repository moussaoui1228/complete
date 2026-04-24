const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    pressing_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PressingRequest' },
    title: { type: String, required: true },
    message: { type: String, required: true },
    is_read: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
});

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = { Notification };
