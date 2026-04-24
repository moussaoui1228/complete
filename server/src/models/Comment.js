const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5, default: 5 },
    created_at: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { Comment };
