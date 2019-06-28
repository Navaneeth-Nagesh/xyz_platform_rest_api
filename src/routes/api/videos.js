const express = require('express');
const VideoModel = require('../../models/video.model');

const router = express.Router();

router.post('/', (req, res) => {

    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }
    
    if (!req.body.video_url.endsWith('.mp4') && !req.body.video_url.endsWith('.hls')) {
        return res.status(400).send('unsupported video format.');
    }

    let model = new VideoModel(req.body)
    model.save().then(response => {
        if (!response || response.length === 0) {
            return res.status(500).send(response);
        }

        res.status(201).send(response);

    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    VideoModel.findById(req.params.id).then(response => {
        res.json(response);
    }).catch(err => err.status(500).json(err));
});

router.delete('/:id', (req, res) => {

    VideoModel.findOne({
        _id: req.params.id
    }, function (error, video) {
        res.send("The video has been deleted");
        video.remove();
    });
});

module.exports = router;