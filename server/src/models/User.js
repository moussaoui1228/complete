/**
 * USER MODEL
 * Definies how a User is stored in the database.
 * Users can be either Customers (who buy oil) or Owners (who manage the site).
 */

const mongoose = require('mongoose');

// The Schema determines the database structure and validation rules
const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    address: { type: String, trim: true },
    role: { type: String, enum: ['customer', 'owner'], default: 'customer' },
    is_subscribed: { type: Boolean, default: false },
    reset_password_code: { type: String },
    reset_password_expires: { type: Date },
    is_blacklisted: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
}, {
    // Automatically adds 'created_at' and 'updated_at' fields
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Export the model for use in other parts of the application
const User = mongoose.model('User', UserSchema);

module.exports = { User };
