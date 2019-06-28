const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Video = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail_url: {
        type: String,
        required: true,
        unique: true
    },
    video_url: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Video', Video)