const express = require('express');
const PlaylistModel = require('../../models/playlist.model')

const router = express.Router();

router.post('/', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    let model = new PlaylistModel(req.body)
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
    PlaylistModel.findById(req.params.id).then(response => {
        res.json(response);
    }).catch(err => err.status(500).json(err));
});

router.delete('/:id', (req, res) => {
    PlaylistModel.findOne({
        _id: req.params.id
    }, function (error, video) {
        res.send("The playlist has been deleted");
        video.remove();
    });
});

module.exports = router;