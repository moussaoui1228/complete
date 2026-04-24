const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    olive_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'items.model_type'
    },
    model_type: {
        type: String,
        required: true,
        enum: ['OliveCategory', 'Product'],
        default: 'OliveCategory'
    },
    pressing_service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PressingService' },
    quantity: { type: Number, required: true },
    olive_price_at_order: { type: Number, required: true },
    pressing_fee_at_order: { type: Number, required: true },
    subtotal: { type: Number, required: true },
}, { _id: false });

const OrderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [OrderItemSchema],
    shipping: {
        type: { type: String, enum: ['delivery', 'pickup'] },
        wilaya: { type: String },
        cost: { type: Number, default: 0 },
        pickup_date: { type: Date },
        pickup_range_start: { type: Date },
        pickup_range_end: { type: Date },
        pickup_hours: { type: String },
        pickup_status: { 
            type: String, 
            enum: ['pending', 'proposed', 'accepted', 'rejected', 'collected'],
            default: 'pending'
        },
    },
    total_price: { type: Number, required: true },
    tracking_code: { type: String, unique: true, sparse: true },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'delivered', 'cancelled'],
        default: 'pending',
    },
    owner_notes: { type: String, default: "" },
    is_archived: { type: Boolean, default: false },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = { Order };
