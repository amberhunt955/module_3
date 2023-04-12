const mongoose = require('mongoose');

// Create the schema
const tweetSchema = new mongoose.Schema({
    title: String,
    body: {
        type: String,
        min: 1,
        max: 255
    },
    author: String,
    category: {
        type: String,
        enum: ['Programming', 'Gaming', 'Art']
    },
    likes: {
        type: Number,
        default: 0
    },
    sponsored: {
        type: Boolean,
        default: false
    }
},
{timestamps: true}
)

// Create and export the model
const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet;