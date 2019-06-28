const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Playlist = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    website_url: {
        type: String,
        required: true,
        unique: true
    },
    videos: [{
        type: mongoose.Schema.ObjectId,
        ref: 'video'
    }]
});

module.exports = mongoose.model('Playlist', Playlist)