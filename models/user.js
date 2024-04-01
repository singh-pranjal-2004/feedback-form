const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    username: String,
    feedback: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', userSchema);

module.exports = Review;
